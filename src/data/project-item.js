import API from "../imgs/API.jpg";
import POC from "../imgs/PeaceOfCase.jpg";
import POS from "../imgs/POS.jpg";
const projects = [
  {
    src: "https://github.com/Jason999220/Full-Stack-Project",
    thumbnailUrl: POC,
    name: "Peace Of Case",
    skills: ["React", "Laravel", "MySQL"],
    content:
      "由我統領6個人的團隊 ，在一個月左右開發一個外包平台 ，並使用到前後端分離的架構。我在整個專案中負責Github 多人開發整合，前端介面製作與跳轉，以及前後端API串接 ，在金流方面則是使用ECPay 進行信用卡付款。",
  },
  {
    src: "https://jason999220.github.io/WeatherAPI/",
    thumbnailUrl: API,
    name: "Weather API",
    skills: ["API 串接", "資料分析"],
    content:
      "利用 OpenAPI 串接氣象資訊，使用者可以依自己地區做篩選並取得該地區的天氣狀況。",
  },
  {
    src: "https://jason999220.github.io/react-pos/",
    thumbnailUrl: POS,
    name: "POS 機",
    skills: ["React", "SPA"],
    content:
      "利用 React 製作的第一個作品，模擬POS機系統，使用者可以選擇位置與人數、透過點餐系統將記錄餐點。",
  },
];

export default projects;
