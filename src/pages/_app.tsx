import "../styles/global.scss";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { Forum } from "next/font/google";

const forum = Forum({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${forum.className} wrapper`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
