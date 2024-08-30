export const ButtonStyles = {
  variants: {
    primary: {
      bg: "blue.100",
      borderRadius: "20px",
      textTransform: "uppercase",
      color: "white",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "600",
      padding: "10px 53px",
      height: "48px",
      _hover: { bg: "blue.200" }
    },
    outlined: {
      bg: "transparent",
      borderRadius: "20px",
      border: "1px solid",
      borderColor: "blue.100",
      textTransform: "uppercase",
      color: "blue.100",
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "600",
      padding: "5px 15px",
      height: "48px",
      _hover: { bg: "blue.100", color: "white" }
    }
  }
};
