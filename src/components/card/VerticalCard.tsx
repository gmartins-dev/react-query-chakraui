import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

interface VerticalCardProps {
  card: {
    image: {
      url: string;
      alt: string;
    };
    title: string;
    content: string;
    publishDate: string;
  };
}

export function VerticalCard({ card }: VerticalCardProps) {
  const { image, title, content, publishDate } = card;

  return (
    <Flex
      maxWidth="850px"
      maxHeight="400px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      <Image
        src={image.url}
        alt={image.alt}
        maxW="400px"
        maxH="400px"
        objectFit="cover"
        borderLeftRadius="8px"
      />
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        minW="200px"
        h="400px"
      >
        <Text variant="subtitle">{publishDate}</Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto">{content}</Text>
      </VStack>
    </Flex>
  );
}
