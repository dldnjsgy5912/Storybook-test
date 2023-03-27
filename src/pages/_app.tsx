import theme from "@/styles/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import "@/styles/font.css";
import { GlobalStyle } from "@/styles/globals-style";
import AppLayout from "@/components/layout/AppLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ||
        function (page) {
            return <AppLayout>{page}</AppLayout>;
        };
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {getLayout(<Component {...pageProps} />)}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}
