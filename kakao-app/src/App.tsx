import KakaoMap from "./components/KakaoMap";

function App() {
  return (
    <div className="App">
      <div>KAKAO KEY : {process.env.REACT_APP_KAKAO_KEY}</div>
      <KakaoMap />
    </div>
  );
}

export default App;
