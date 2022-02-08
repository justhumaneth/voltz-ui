export enum Agents {
  FIXED_TRADER = 'Fixed Trader',
  VARIABLE_TRADER = 'Variable Trader',
  LIQUIDITY_PROVIDER = 'Liquidity Provider',
}

export type AgentProps = {
  agent?: Agents;
};

export type ColorSet = {
  base: string;
  darken010: string;
  darken015: string;
  darken020: string;
  darken025: string;
  darken030: string;
  darken035: string;
  darken040: string;
  darken045: string;
  darken050: string;
};

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
  interface PaletteColor extends ColorSet {}
  interface SimplePaletteColorOptions extends ColorSet {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dark: true;
    darker: true;
  }
}
