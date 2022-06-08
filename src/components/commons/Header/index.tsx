import {
  Flex,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';

export function Header() {
  return (
    <Flex p="5" align="center" gap="3">
      <Image src="logo192.png" />
      <Flex direction="column">
        <Heading>testeheading</Heading>
        <Text>testetexto</Text>
      </Flex>
    </Flex>
  );
}
