import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    overflow-y: auto;
}
  html{
  overflow: hidden;
  }
`;

export const theme = {
  colors: {
    white: "#FFFFFF",
    darkSnow: "#E5E5E5",
    smoke: "#8E8E8E",
    darkSmoke: "#555555",
    snow: "#F5F5F5",
    darkBlue: "#167ABC",
  },
  fonts: {
    main: "PT Sans",
    secondary: "PT Sans Caption",
  },
  sizes: {
    small: "12px",
    medium: "14px",
    large: "16px",
    xlarge: "32px",
  },
  weight: {
    bold: 700,
  },
};
