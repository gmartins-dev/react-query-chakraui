import { useState } from 'react';
import { useQuery } from 'react-query';

import theme from './styles/theme';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/commons/Header/index';
import { HorizontalCard } from './components/card/HorizontalCard';
import { horizontal_cards } from './components-mock.json';

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function getUser(id: number) {
  const request = await fetch(
    `https://reqres.in/api/users/${id}?delay=1`,
  );

  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.error);
  }
  return response.data as Data;
}

function App() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const { data, isError, isLoading, isFetching } = useQuery(
    ['users', currentUserId],
    () => getUser(currentUserId),
    {
      staleTime: 50000,
    },
  );

  if (isError) {
    return (
      <section>
        <p>Something went wrong</p>
      </section>
    );
  }

  if (!data || isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header />
        <Center>
          {horizontal_cards.map((horizontal_card) => (
            <HorizontalCard
              key={horizontal_card.title}
              card={horizontal_card}
            />
          ))}
        </Center>
      </div>
      <section>
        <img src={data.avatar} />
        <p>
          {data.first_name} {data.last_name} ({data.id})
        </p>
        <p>Email: {data.email}</p>
        <div>
          <button
            onClick={() =>
              setCurrentUserId((prev) => prev - 1)
            }
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentUserId((prev) => prev + 1)
            }
          >
            Next
          </button>
        </div>
        {isFetching && (
          <small>We are updating your data</small>
        )}
      </section>
    </ChakraProvider>
  );
}
export default App;
