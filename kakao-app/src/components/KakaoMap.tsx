import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";

interface Position {
  lat: number;
  lng: number;
  alt: number | null;
}

const KakaoMap = () => {
  const [level, setLevel] = useState(3); // 확대 레벨

  const [currentPosition, setCurrentPosition] = useState<Position>({
    lat: 0,
    lng: 0,
    alt: 0,
  });

  useEffect(() => {
    let watchId: any;

    if (navigator.geolocation) {
      // 사용자의 위치를 지속적으로 추적합니다
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            alt: position.coords.altitude,
          });
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 3000,
          maximumAge: 0,
        }
      );
    }
  }, []);

  console.log(currentPosition);

  return (
    <div>
      <Map
        center={{ lat: currentPosition.lat, lng: currentPosition.lng }}
        style={{ width: "500px", height: "500px" }}
        level={level} // 지도 확대 레벨
      >
        <MapMarker
          position={{ lat: currentPosition.lat, lng: currentPosition.lng }}
        ></MapMarker>
      </Map>
      <div>현재 고도 : {currentPosition.alt}</div>
    </div>
  );
};

export default KakaoMap;
