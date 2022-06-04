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
    <Flex>
      <Image />
      <VStack>
        <Image src={image.url} alt={image.alt} />
        <Text>{publishDate}</Text>
        <Heading>{title}</Heading>
        <Text>{content}</Text>
      </VStack>
    </Flex>
  );
}
