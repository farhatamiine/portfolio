import "../styles/globals.css";
import "../styles/app.scss";
import Layout from "../Components/Layout";
import { CSSPlugin } from "gsap/CSSPlugin";
import { gsap } from "gsap";

function MyApp({ Component, pageProps }) {
  gsap.registerPlugin(CSSPlugin);

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
