import KakaoMap from "./components/KakaoMap";

function App() {
  console.log(process.env.REACT_APP_KAKAO_KEY);
  return (
    <div className="App">
      <div>KAKAO KEY : {process.env.REACT_APP_KAKAO_KEY}</div>
      <div>PUBLIC URL : {process.env.PUBLIC_URL}</div>
      <KakaoMap />
    </div>
  );
}

export default App;
