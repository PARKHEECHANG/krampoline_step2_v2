import KakaoMap from "./components/KakaoMap";

function App() {
	console.log(process.env.REACT_APP_KAKAO_KEY)
  return (
    <div className="App">
      <KakaoMap />
    </div>
  );
}

export default App;
