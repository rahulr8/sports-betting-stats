import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "white",
      },
    },
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          bgGradient: "linear(to-b, gray.700, gray.900)",
          borderColor: "gray.700",
        },
        item: {
          _hover: { bg: "gray.600" },
          _focus: { bg: "gray.600" },
        },
      },
    },
  },
});

export default theme;
