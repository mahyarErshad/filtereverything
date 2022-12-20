import { memo } from "react";
import MainBody from "./components/Body/MainBody";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}

export default memo(App);
