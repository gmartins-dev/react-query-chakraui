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
    title: string;
    content: string;
    image?: {
      url: string;
      alt: string;
    };
    publishDate: string;
  };
}

export function VerticalCard({ card }: VerticalCardProps) {
  const { title, content, image, publishDate } = card;
  return (
    <Flex
      direction="column"
      maxW="450px"
      maxH="500px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
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
        <Text variant="subtitle">{publishDate}</Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
}
