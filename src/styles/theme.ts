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
  // other theme customizations
});

export default theme;
