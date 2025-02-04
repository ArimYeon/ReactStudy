import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

// 프로젝트 전체에서 사용할 CSS 파일 로드
import 'bootstrap/dist/css/bootstrap.css';

// 라우터 설정
// Redux, RTK 설정 등이 index.js에서 설정한다.

// index 파일은 설정만 지정하고 View를 분리하자. 분리한 파일이 App.js 파일
// webpack에서는 node_modules 생략, 확장자 js, jsx, json 등은 생략 가능
// jsx 구문으로 뷰를 리턴하는 값을 import 할 때 첫글자 대문자로 받으면 사용자 정의 태그로 사용 가능 (ex> <App />)
import App from './App';
// import reportWebVitals from './reportWebVitals';

// html에 id root인 곳에 랜더링해서 끼워넣어라
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* 
      App()
      <h1>Good Morning</h1> 
    */}
  </React.StrictMode>
);

// reportWebVitals(console.log);
