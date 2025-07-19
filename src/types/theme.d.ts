/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
  PaletteColor,
  PaletteColorOptions,
  TypeText as MuiTypeText,
} from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette extends MuiPalette {
    tertiary?: PaletteColor;
    white?: PaletteColor;
    black?: PaletteColor;
    link?: PaletteColor;
    icon: {
      primary: string;
      secondary: string;
      contrast: string;
      information: string;
      disabled: string;
      alert: string;
    };
    border: {
      default: string;
      primary: string;
      hover: string;
      seperator: string;
      inactive: string;
      error: string;
    };
    surface: {
      button: {
        primary: string;
        hover: string;
        secondary: string;
        hoverLight: string;
        disabled: string;
        focused: string;
      };
      interface: {
        base: string;
        background: string;
        backElevation: string;
        active: string;
        dark: string;
        navigation: string;
        overlay: string;
        disabled: string;
        boxShadow: string;
      };
      alert: {
        success: string;
        warning: string;
        error: string;
        info: string;
      };
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    tertiary?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    link?: PaletteColorOptions;
    icon: {
      primary: string;
      secondary: string;
      contrast: string;
      information: string;
      disabled: string;
      alert: string;
    };
    border: {
      default: string;
      primary: string;
      hover: string;
      seperator: string;
      inactive: string;
      error: string;
    };
    surface: {
      button: {
        primary: string;
        hover: string;
        secondary: string;
        hoverLight: string;
        disabled: string;
        focused: string;
      };
      interface: {
        base: string;
        background: string;
        backElevation: string;
        active: string;
        dark: string;
        navigation: string;
        overlay: string;
        disabled: string;
        boxShadow: string;
      };
      alert: {
        success: string;
        warning: string;
        error: string;
        info: string;
      };
    };
  }

  interface PaletteColor {
    tertiary?: string;
    white?: string;
    black?: string;
    link?: string;
  }

  interface PaletteColorOptions {
    tertiary?: string;
    white?: string;
    black?: string;
    link?: string;
  }

  interface TypeText extends MuiTypeText {
    default: string;
    link: string;
    information: string;
    informationLight: string;
    contrast: string;
    hover: string;
    warning: string;
    system: string;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    subtle1: React.CSSProperties;
    subtle2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    subtle1?: React.CSSProperties;
    subtle2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    subtle1: true;
    subtle2: true;
  }
}