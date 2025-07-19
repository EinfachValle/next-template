"use client";

import { useEffect } from "react";

import { THEME } from "@/constants/generalConstants";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import { Provider, useSelector } from "react-redux";

import * as AppInitializerService from "@/lib/config/AppInitializer";

import getTheme from "../theme";

import i18n from "../lib/config/i18n";
import { store } from "../store/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  const currentTheme = useSelector((state) => state.ui.theme);

  const localStorageTheme = localStorage.getItem("theme");

  useEffect(() => {
    AppInitializerService.trapApplicationTouched();
  }, []);

  const mode = currentTheme || localStorageTheme || THEME.DARK;
  const theme = getTheme(mode);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
      </I18nextProvider>
    </Provider>
  );
}
