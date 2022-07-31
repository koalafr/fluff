import "../styles/globals.css";
import { FaAngleUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop
        smooth
        className='rounded-full bg-me-inverted p-0.5 text-4xl text-me-secondary hover:bg-me-inverted hover:text-me-primary'
        component={<FaAngleUp />}
      />
    </>
  );
}

export default MyApp;
