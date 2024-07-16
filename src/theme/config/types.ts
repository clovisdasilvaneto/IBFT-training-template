export type TPaletteValue = {
  light: string;
  main: string;
  dark: string;
};

export type TPalette = {
  primary: TPaletteValue;
  secondary: TPaletteValue;
  light: TPaletteValue;
  dark: TPaletteValue;
  stone: {
    main: string;
  };
};

export type TMeasures = {
  baseline: number;
  radius: string;
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

export type TTypography = {
  Poppins: string;
  SansSerif: string;
  main?: string;
};

export interface IBFTTheme {
  palette: TPalette;
  measures: TMeasures;
  typography: TTypography;
}
