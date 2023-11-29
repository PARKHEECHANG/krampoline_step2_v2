import KakaoMap from "./components/KakaoMap";
import KarloVariations from "./components/KarloVariations";

function App() {
  return (
    <div className="App">
      <div>KAKAO KEY : {process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}</div>
      <KakaoMap />
      <hr />

      <hr />
      <KarloVariations />
    </div>
  );
}

export default App;
