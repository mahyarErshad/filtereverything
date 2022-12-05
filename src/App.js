import { memo } from "react";
import MainBody from "./components/Body/MainBody";
import Header from "./components/Header/Header";

function App() {
  return <>
  <Header />
  <MainBody />
  </>;
}

export default memo(App);
