# README-4단계.md

## 🎯 목표

* **Grid(외부) + Flex(내부)** 혼합 레이아웃
* 카드 내부에서 이미지/텍스트/버튼 정렬
* 반응형에서 **내부 정렬 방향 전환**(`flex-direction`)
* `box-shadow`, `border-radius`, `transition`으로 완성도 높이기

## 📁 폴더 구조 (예시)

```
src/
├── App.js
└── App.css
```

## ✅ 구현 개요

* 6개 카드, 그리드 3열(기본) → 2열(≤768px) → 1열(≤500px)
* **카드 내부**는 Flex로 이미지(왼쪽/상단), 텍스트(오른쪽/하단), 버튼 배치
* 모바일에서는 세로 정렬로 전환하여 읽기 쉬운 정보 흐름 제공

## 🧩 샘플 코드

> 4단계는 주석을 통해 **왜 이렇게 배치하는지**까지 설명합니다.

### `src/App.js`

```jsx
import React from "react";
import "./App.css";

function Card({ title, desc, imgAlt }) {
  return (
    <div className="card">{/* 카드 전체: Flex 컨테이너 */}
      {/* 실제 프로젝트에서는 CDN 이미지나 로컬 에셋을 사용하세요 */}
      <img src="https://via.placeholder.com/100" alt={imgAlt} />

      {/* 텍스트/버튼 영역 */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button>자세히 보기</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="grid-container">{/* 외부 Grid: 카드를 타일처럼 배치 */}
      {[
        { title: "Card 1", desc: "이것은 카드 1의 설명입니다.", imgAlt: "card1" },
        { title: "Card 2", desc: "이것은 카드 2의 설명입니다.", imgAlt: "card2" },
        { title: "Card 3", desc: "이것은 카드 3의 설명입니다.", imgAlt: "card3" },
        { title: "Card 4", desc: "이것은 카드 4의 설명입니다.", imgAlt: "card4" },
        { title: "Card 5", desc: "이것은 카드 5의 설명입니다.", imgAlt: "card5" },
        { title: "Card 6", desc: "이것은 카드 6의 설명입니다.", imgAlt: "card6" },
      ].map((c, idx) => (
        <Card key={idx} title={c.title} desc={c.desc} imgAlt={c.imgAlt} />
      ))}
    </div>
  );
}

export default App;
```

### `src/App.css`

```css
/*
  외부 Grid: 카드 목록을 반응형 타일로 배치
*/
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
}

/*
  카드 본체: 내부는 Flex로 구성
  - 데스크탑 기본: column(세로 정렬) → 카드 안에서 이미지 위, 텍스트 아래
  - hover 시 살짝 떠오르게 + 그림자 강화
*/
.card {
  background-color: #fff;
  display: flex;
  flex-direction: column; /* 기본 세로 */
  align-items: center; /* 내부 요소 수평 중앙 */
  padding: 24px;
  gap: 12px; /* 이미지와 텍스트 간격 */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

/* 이미지 스타일 */
.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover; /* 실제 이미지 사용 시 찌그러짐 방지 */
}

/* 텍스트/버튼 영역 */
.card-content {
  text-align: center; /* 기본 중앙 정렬 */
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/*
  반응형 1: 태블릿(≤768px)
  - 그리드는 2열로 축소
  - 카드 내부는 가로(row)로 전환: 이미지 왼쪽, 텍스트 오른쪽
*/
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .card {
    flex-direction: row; /* 내부를 가로 배치 */
    align-items: center;
    text-align: left;
  }

  .card img {
    margin-right: 16px; /* 이미지와 텍스트 간 간격 */
  }
}

/*
  반응형 2: 모바일(≤500px)
  - 그리드는 1열
  - 다시 세로(column)로 전환하여 좁은 화면에서 가독성 확보
*/
@media (max-width: 500px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .card img {
    margin: 0 0 10px 0; /* 이미지 아래로 여백 */
  }
}
```

## 🧪 체크리스트

* [o] 데스크탑: 카드 내부가 **세로(column)** 로 보이나요?
* [o] 태블릿: 카드 내부가 **가로(row)** 로 전환되나요?
* [o] 모바일: 다시 **세로(column)** 로 바뀌고, 가독성이 좋아졌나요?
* [o] hover 시 카드가 살짝 떠오르며 그림자가 진해지나요?
* [o] 버튼의 접근성(명확한 색 대비, 커서 변화)이 적절한가요?

---

## 🔁 자주 겪는 이슈 & 해결

* **gap과 margin의 중복**: Grid의 `gap`이 이미 카드 간 간격을 만들기 때문에, `.item`/`.card`에 `margin`을 추가하면 간격이 과해질 수 있습니다. → 가급적 `gap`만 사용하고, 필요한 경우에만 `margin`을 최소화.
* **텍스트 정렬 혼선**: 모바일에서 `text-align: right` 등은 가독성을 떨어뜨릴 수 있습니다. → 모바일에서는 `center` 또는 문맥에 맞게 `left` 권장.
* **이미지 비율 깨짐**: 실제 이미지를 사용할 때는 `object-fit: cover`를 지정해 비율 왜곡을 방지하세요.

---

## 📝 다음 단계 예고 (5단계)

* 전체 페이지 레이아웃(헤더/메인/푸터) + 반응형 내비게이션
* 카드 목록을 메인 그리드에 배치하고, 헤더는 Flex로 정렬
* 브레이크포인트에 따라 메뉴가 접히는 패턴 실습
