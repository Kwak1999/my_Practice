# Day 1 — Profile Card (React + CSS)
<details>
오늘은 간단한 **프로필 카드**를 React 컴포넌트로 만들고, 스타일을 **CSS 파일로 분리**하는 연습을 했습니다. 아래에 정리, 주석 달린 최종 코드, 개선 포인트, 다음 단계 미션을 담았습니다.

---

## ✅ 오늘 한 일 (Summary)

* `ProfileCard`를 **독립 컴포넌트**로 분리
* 스타일을 `ProfileCard.css`로 **파일 분리**
* 타이포 계층(`h1`, `h2`, `p`)으로 정보 구조화
* 기본 레이아웃/여백/테두리 반경 설정

---

## 📁 파일 구조

```
src/
  components/
    ProfileCard.jsx
  styles/
    ProfileCard.css
  App.jsx
```

---

## 🧩 최종 코드 (설명 주석 포함)

> 아래 코드는 오늘 결과물을 **가독성/정렬/여백** 위주로 소폭 개선한 버전입니다. 기존 의도를 유지하면서, 중앙 정렬과 간격을 명확하게 했습니다.

### `components/ProfileCard.jsx`

```jsx
import React from 'react';
import '../styles/ProfileCard.css';

// 단순 정적 카드 컴포넌트
// - 오늘은 props 없이 정적인 텍스트로 구성
// - 다음 단계에서 이미지/버튼/반응형 등을 추가할 예정
const ProfileCard = () => {
  return (
    // 카드의 루트 요소: 시멘틱하게는 section/article도 고려 가능하지만
    // 오늘은 단순한 데모이므로 div 사용
    <div className="ProfileCard">
      {/* 이름: 가장 중요한 정보이므로 h1 사용 */}
      <h1 className="name">Kwak Hui Beom</h1>

      {/* 직무/역할: 이름 다음 중요도이므로 h2 사용 */}
      <h2 className="job">시스템 관제</h2>

      {/* 상세 설명: 문장 단위 정보이므로 p로 구분 */}
      <p className="phrase"><strong>이름:</strong> 곽희범</p>
      <p className="phrase"><strong>나이:</strong> 28세</p>
      <p className="phrase"><strong>자기소개:</strong> ...</p>
    </div>
  );
};

export default ProfileCard;
```

### `styles/ProfileCard.css`

```css
/* 카드 컨테이너 */
.ProfileCard {
  /* 가운데 정렬 + 세로 배치 */
  display: flex;              /* inline-block → flex 로 변경 */
  flex-direction: column;     /* 위→아래 배치 */
  align-items: center;        /* 가로 중앙 */
  justify-content: center;    /* 세로 중앙 (고정 높이가 있을 때 유효) */

  /* 크기/여백 */
  width: 260px;               /* 카드 가로폭을 정해 안정감 부여 */
  margin: 20px auto;          /* 화면 가운데 배치 */
  padding: 16px;              /* 내부 여백으로 숨 쉬게 하기 */

  /* 테두리/모서리 */
  border: 5px solid #61dafb;  /* React 블루 톤 유지 */
  border-radius: 16px;         /* 둥근 모서리 */

  /* 시각적 깊이(선택) */
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  background: #fff;           /* 대비 개선 */
}

/* 타이포 계층 */
.ProfileCard h1 {
  margin: 0 0 8px;            /* 아래쪽으로만 간격 */
  color: #fff;                /* 배경 위에서 대비 확보 */
  background-color: #4fbde6;  /* 지나치게 밝은 #61dafb보다 약간 톤다운 */
  font-family: Arial, sans-serif;
  font-size: 1.25rem;         /* 모바일에서도 과하지 않게 */
  line-height: 1.2;
  padding: 8px 12px;          /* 배경 라벨처럼 보이도록 패딩 */
  border-radius: 8px;
}

.ProfileCard h2 {
  margin: 0 0 8px;
  font-size: 1rem;            /* h1보다 한 단계 작게 */
  color: #222;
}

/* 본문 문장 */
.ProfileCard p {
  margin: 0 0 6px;            /* 요소 간격 균형 */
  font-size: 0.95rem;         /* 모바일 가독성을 고려한 기본 크기 */
  color: #444;
}
```

### `App.jsx`

```jsx
import { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard.jsx';

// 앱 루트: 데모용 문구 + ProfileCard 출력
function App() {
  const [count, setCount] = useState(0); // 오늘은 미사용 상태값 (나중에 인터랙션에 활용 가능)

  return (
    <>
      <div className="container">
        <h1>Hello React!</h1>
        <p>This is my first styled component.</p>
      </div>

      {/* 프로필 카드 컴포넌트 */}
      <ProfileCard />
    </>
  );
}

export default App;
```

---

## 🔎 핵심 이해 포인트

1. **컴포넌트 분리**: UI를 역할 단위로 쪼개면 재사용/유지보수가 쉬워짐
2. **타이포 계층**: h1/h2/p처럼 중요도에 따라 태그 선택 → 정보 구조가 명확해짐
3. **레이아웃 기본기**: `inline-block`보다 `flex`가 정렬/정돈에 유리
4. **여백 관리**: `margin-bottom`으로 요소 간 간격을 균일하게 맞추면 가독성이 크게 개선
5. **색 대비**: 배경색이 강할수록 텍스트 색은 확실한 대비(대부분 흰색/짙은 검정)로 설정

---

## 🧯 자주 하는 실수 & 예방 팁

* **가운데 정렬이 안 돼요** → 부모/자식 중 어디에 `display:flex`와 `margin:auto`를 줄지 명확히 결정
* **요소들이 답답해 보여요** → `padding`과 `margin-bottom` 규칙을 정해 일관성 있게 적용
* **폰트가 너무 커/작아요** → 상대 단위(rem)로 단계별 스케일(예: 0.95rem / 1rem / 1.25rem) 유지

---

## 🧪 다음 단계 미션(예고)

> 다음 학습 때 도전해 보세요. 난이도는 오늘보다 **반 단계 상승**입니다.

**문제:** 카드에 다음 요구사항을 추가하세요.

1. 상단에 **프로필 이미지(img)** 추가 (정사각형, 원형 마스크)
2. 하단에 **버튼 1개(예: "자세히 보기")** 추가
3. 마우스 **hover 시 카드 그림자 강화** (트랜지션 포함)
4. **모바일(≤ 480px)** 에서 카드 폭을 `90%`, 본문 폰트를 `1rem`로 키우기

**힌트 코드 조각:**

```css
/* 반응형 - 모바일 우선 */
@media (max-width: 480px) {
  .ProfileCard { width: 90%; }
  .ProfileCard p { font-size: 1rem; }
}

/* 호버 효과 */
.ProfileCard { transition: box-shadow .2s ease; }
.ProfileCard:hover { box-shadow: 0 8px 24px rgba(0,0,0,.15); }

/* 프로필 이미지 */
.ProfileCard img { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; }
```

---

## 🧭 진도 기록 (Progress Log)

* [x] 컴포넌트/스타일 파일 분리
* [x] 타이포 계층 정리(h1/h2/p)
* [x] 기본 레이아웃/여백/테두리 적용
* [ ] 이미지/버튼/호버 효과
* [ ] 반응형(모바일/태블릿)
* [ ] Tailwind 심화 (모든 과제 완료 후)

---

## 📌 메모

* 오늘은 **레이아웃과 타이포 기본기**에 집중했습니다. 다음 단계부터는 **반응형**과 **사용자 인터랙션**(버튼/호버)을 추가해 실제 카드다운 완성도를 높일 예정입니다.
</details>