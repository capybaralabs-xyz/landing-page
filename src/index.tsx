import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, arbitrum } from "wagmi/chains";

import Root from "./routes/Root";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import PageLoader from "./routes/PageLoader";
import reportWebVitals from "./reportWebVitals";

import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";

// lazy load components
const Temp = lazy(() => import("./routes/Temp"));

// Create a client
const queryClient = new QueryClient();

// set up wagmi config
const config = getDefaultConfig({
  appName: "My  App",
  projectId: "YOUR_WALLET_CONNEC_PROJECT_ID",
  chains: [mainnet, arbitrum],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/temp",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Temp />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = extendTheme({
  breakpoints: {
    base: "20em", // 默认
    sm: "30em", // 小屏幕
    md: "48em", // 中等屏幕
    lg: "62em", // 大屏幕
    xl: "80em"
  },
});
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <RouterProvider router={router} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
