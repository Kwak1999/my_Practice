# 📘 React 디자인 학습 README (3단계)

아래는 **각 단계를 별도 파일**처럼 사용할 수 있도록 정리한 README입니다.
원하시면 이 문서를 두 개의 파일로 분할해 `README-3단계.md`, `README-4단계.md`로 저장하세요.

---

# README-3단계.md

## 🎯 목표

* `display: grid`의 기본 사용법 이해
* `grid-template-columns`, `gap`, `padding`의 역할 체득
* **반응형 기초**(`@media`)를 통해 3열 → 2열 → 1열 변환
* 카드 간 **바깥 여백(margin)** 과 **내부 여백(padding)** 차이 몸으로 익히기

## 📁 폴더 구조 (예시)

```
src/
├── App.js
└── App.css
```

## ✅ 구현 개요

* 6개의 카드를 그리드로 배치 (기본 3열)
* 태블릿(≤768px) 2열, 모바일(≤480~500px) 1열
* 카드마다 배경색을 달리하고, `hover` 시 색/그림자 변화로 인터랙션 추가

## 🧩 샘플 코드

> 아래 코드는 **설명 주석을 풍부하게** 포함했습니다. 필요에 따라 색상/텍스트를 바꾸세요.

### `src/App.js`

```jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="grid-container">{/* Grid 컨테이너: 카드들을 행/열로 배치 */}
      {/* 각 .item이 하나의 카드 역할을 합니다. */}
      <div className="item item1">
        <h3>Card 1</h3>
        <p>설명: 카드 1의 내용입니다.</p>
      </div>
      <div className="item item2">
        <h3>Card 2</h3>
        <p>설명: 카드 2의 내용입니다.</p>
      </div>
      <div className="item item3">
        <h3>Card 3</h3>
        <p>설명: 카드 3의 내용입니다.</p>
      </div>
      <div className="item item4">
        <h3>Card 4</h3>
        <p>설명: 카드 4의 내용입니다.</p>
      </div>
      <div className="item item5">
        <h3>Card 5</h3>
        <p>설명: 카드 5의 내용입니다.</p>
      </div>
      <div className="item item6">
        <h3>Card 6</h3>
        <p>설명: 카드 6의 내용입니다.</p>
      </div>
    </div>
  );
}

export default App;
```

### `src/App.css`

```css
/*
  grid-container: Grid 레이아웃의 핵심 컨테이너
  - grid-template-columns: 열 개수/크기 정의
  - gap: 카드 간격(행+열 간격)
  - padding: 컨테이너 내부 여백 (컨테이너 테두리와 카드들 사이)
*/
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 기본 3열(동일한 비율) */
  gap: 20px; /* 카드 사이 간격 */
  padding: 20px; /* 컨테이너 안쪽 여백 */
  background-color: #f3f3f3; /* 배경색으로 영역 구분 */
}

/*
  item: 개별 카드 스타일
  - padding: 카드 내부 텍스트와 카드 테두리 간 간격(내부 여백)
  - margin: (선택) 카드 바깥 여백. 단, Grid의 gap과 중복될 수 있으므로 보통은 gap만 사용
*/
.item {
  background-color: #d1e8ff; /* 기본 카드 색상 */
  padding: 20px; /* 내부 여백 */
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}

/* hover 인터랙션: 시각적 피드백 제공 */
.item:hover {
  background-color: #eaf5ff; /* 살짝 밝아짐 */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* 카드별 배경색 지정 (요구사항: 각 카드 색상 다르게) */
.item1 { background-color: #61dafb; }
.item2 { background-color: gold; }
.item3 { background-color: #6fcf97; }
.item4 { background-color: #bdbdbd; }
.item5 { background-color: #eb5757; }
.item6 { background-color: #f8b4d9; }

/* 반응형: 화면이 768px 이하 → 2열 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 반응형: 화면이 480~500px 이하 → 1열 */
@media (max-width: 500px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
```

## 🧪 체크리스트

* [ ] 데스크탑에서 3열로 보이나요?
* [ ] 브라우저 폭을 줄이면 2열 → 1열로 변하나요?
* [ ] `gap`과 `padding`의 차이를 눈으로 구분할 수 있나요?
* [ ] 카드마다 색상이 다른가요?
* [ ] hover 시 시각적 변화가 있나요?

---
