import { extendTheme } from "@chakra-ui/react";

import { textStyles as Text } from "./TextStyles";
import { ButtonStyles as Button } from "./ButtonStyles";

import { Colors } from "./Colors";
import { Fonts } from "./Fonts";
import { GlobalStyles } from "./GlobalStyles";
import { Breakpoints } from "./Breakpoints";

export const theme = extendTheme({
  styles: GlobalStyles,

  breakpoints: Breakpoints,

  fonts: Fonts,

  colors: Colors,

  textStyles: Text,
  components: {
    Button
  }
});
