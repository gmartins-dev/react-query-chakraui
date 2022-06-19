import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { customScrollbar } from '../../styles/styles';

interface HorizontalCardProps {
  card: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export function HorizontalCard({
  card,
}: HorizontalCardProps) {
  const { id, email, first_name, last_name, avatar } = card;

  return (
    <Flex
      maxWidth="850px"
      maxHeight="400px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      <Image
        src={avatar}
        alt={first_name}
        maxW={['200px', '300px', '400px']}
        maxH={['200px', '300px', '400px']}
        objectFit="cover"
        borderLeftRadius="8px"
      />
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        minW="200px"
        h={['200px', '300px', '400px']}
      >
        <Text variant="subtitle">{id}</Text>
        <Heading size="lg">
          {first_name}
          {last_name}
        </Heading>
        <Text overflowY="auto" css={customScrollbar}>
          {email}
        </Text>
      </VStack>
    </Flex>
  );
}
