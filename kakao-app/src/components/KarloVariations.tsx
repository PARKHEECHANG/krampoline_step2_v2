import axios from "axios";
import { useState, useEffect } from "react";

const KarloVariations = () => {
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(""); //파일

  const handleChangeFile = (event: any) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  console.log(`imgFile ${imgFile}`);
  console.log(`imgBase64 ${imgBase64}`);

  return (
    <div className="App">
      <div>
        <input
          type="file"
          name="imgFile"
          id="imgFile"
          onChange={handleChangeFile}
        />
      </div>
      <img src={imgBase64} alt="imgFile" />
      <button onClick={() => postVariations(imgBase64)}>변환</button>
    </div>
  );
};

export default KarloVariations;

export const postVariations = async (imgBase64: string) => {
  try {
    const response = await axios.post(
      `https://api.kakaobrain.com/v2/inference/karlo/variations`,
      { image: imgBase64 },
      {
        headers: {
          Authorization: `KakaoAK 8ef1e6396cc8eb4082782ebb2f2b130c`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error("An error occurred while fetching data: ", error);
  }
};
