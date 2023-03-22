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
/*
      NextPageWithLayout으로 Page의 타입을 지정하면,
      getLayout 속성함수를 사용할 수 있게된다. (사용해도 되고 안해도 되고 )
    */
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
}; // 기존 AppProps타입에 Layout을 추가한 것.

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
