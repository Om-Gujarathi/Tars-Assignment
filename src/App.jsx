import { RecoilRoot } from "recoil";
import Appbar from "./components/Appbar";
import SearchBarWithBackground from "./components/SearchBarWithBackground";
import ListPhotos from "./components/ListPhotos";

function App() {
  return (
    <>
      <RecoilRoot>
        <Appbar></Appbar>
        <SearchBarWithBackground></SearchBarWithBackground>
        <ListPhotos></ListPhotos>
      </RecoilRoot>
    </>
  );
}

export default App;
