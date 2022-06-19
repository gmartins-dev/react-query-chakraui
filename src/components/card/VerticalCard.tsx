import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { customScrollbar } from '../../styles/styles';

interface VerticalCardProps {
  card: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export function VerticalCard({ card }: VerticalCardProps) {
  const { id, email, first_name, last_name, avatar } = card;
  return (
    <Flex
      direction="column"
      maxW="450px"
      maxH="500px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      {avatar && (
        <Image
          src={avatar}
          alt={first_name}
          w="100%"
          h="100%"
          maxW="450px"
          maxH="220px"
          objectFit="cover"
          borderTopRadius="8px"
        />
      )}
      <VStack
        p="16px"
        gap="16px"
        marginY="64px"
        align="flex-start"
        maxW="450px"
        minW="200px"
        h="100%"
        w="100%"
        overflow="auto"
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
