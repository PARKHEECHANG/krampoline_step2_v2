import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";

const KakaoMap = () => {
  const [level, setLevel] = useState(3); // 확대 레벨

  const [currentPostion, setCurrentPostion] = useState({
    center: {
      lat: 33.55635,
      lng: 127.0648,
    },
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPostion((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          },
        }));
      });
    }
  }, []);

  return (
    <Map
      center={currentPostion.center}
      style={{ width: "500px", height: "500px" }}
      level={level} // 지도 확대 레벨
    >
      <MapMarker position={currentPostion.center}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
