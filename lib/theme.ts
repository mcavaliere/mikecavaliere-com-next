import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
      },
      variants: {
        primary: (props) => ({
          backgroundColor: "green.600",
        }),
        outline: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      "*": {
        transition: "0.3s all ease-in-out",
      },
      body: {
        bg: mode("white", "gray.900")(props),
      },
      // Full-height container.
      "html, body, body > div:first-child, div#__next, div#__next > div": {
        height: "100%",
      },
    }),
  },
  colors: {
    gray: {
      50: "#f5f5f5",
      75: "#E5E5E5",
      100: "#EBEBEB",
      150: "#E0E0E0",
      200: "#D6D6D6",
      250: "#CCCCCC",
      300: "#C2C2C2",
      350: "#B8B8B8",
      400: "#ADADAD",
      450: "#A3A3A3",
      500: "#999999",
      550: "#8F8F8F",
      600: "#858585",
      650: "#7A7A7A",
      700: "#707070",
      750: "#666666",
      775: "#5C5C5C",
      800: "#525252",
      825: "#474747",
      850: "#3D3D3D",
      875: "#333333",
    },
    black: {
      600: "#1C1C28",
      900: "#292929",
      925: "#1F1F1F",
      950: "#0A0A0A",
    },
    aqua: {
      500: "#3FC8F1",
    },
    green: {
      600: "#33F3A2",
    },
    purple: {
      200: "#AAA9FE",
      300: "#805BEB",
      400: "#8A64F4",
      500: "#5544E3",
      550: "#3635D4",
      600: "#3232D2",
    },
    red: {
      500: "#F8333C",
    },
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Poppins", sans-serif`,
  },
});
