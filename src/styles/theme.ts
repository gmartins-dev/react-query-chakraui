// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: 'gray.500',
          fontWeight: 'semibold',
          fontSize: '14px',
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
