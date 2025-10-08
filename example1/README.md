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



## 📌 메모

* 오늘은 **레이아웃과 타이포 기본기**에 집중했습니다. 다음 단계부터는 **반응형**과 **사용자 인터랙션**(버튼/호버)을 추가해 실제 카드다운 완성도를 높일 예정입니다.

---


</details>

# Day2

<details>
# React 레이아웃 기초 복습 (Day 2)

오늘 진행한 내용을 **readme.md**로 정리했습니다. 복습하거나 다음 단계로 넘어갈 때 참고하세요.

---

## 1) 오늘 만든 것

* **ProfileCard**: 이름, 좋아하는 색상, 자기소개를 가진 카드 UI
* **두 개 카드 가로 정렬 + 모바일 세로 전환**: `flexbox`와 `@media`로 반응형 레이아웃 기초 구현
* **NoticeCard 예제(유사 난이도)**: 컨테이너/카드 역할 분리 연습

**작업 파일**

```
src/
 ┣ components/
 ┃ ┣ LayoutExample.jsx
 ┃ ┣ NoticeCard.jsx
 ┃ ┗ ProfileCard.jsx
 ┣ styles/
 ┃ ┣ NoticeCard.css
 ┃ ┗ ProfileCard.css
 ┣ App.jsx
 ┣ App.css
 ┣ index.css
 ┗ main.jsx

```

---

## 2) 핵심 개념 요약

### A. margin vs padding (가장 많이 헷갈리는 부분)

| 속성        | 의미        | 어디에 적용되나               | 언제 쓰나            |
| --------- | --------- | ---------------------- | ---------------- |
| `padding` | **안쪽 여백** | 테두리 **안**에서 콘텐츠와의 거리   | 카드 내부에 여유 공간 만들기 |
| `margin`  | **바깥 여백** | 요소 **바깥**에서 다른 요소와의 거리 | 요소 사이 간격/바깥쪽 띄우기 |

> 요즘 레이아웃에서는 **형제 간 간격**은 부모 컨테이너의 `gap`으로 관리하는 게 깔끔합니다. 개별 요소에는 꼭 필요할 때만 `margin`을 씁니다.

### B. Flexbox로 가로 정렬

```css
.card-container {
  display: flex;              /* 가로 배치 (기본 방향: row) */
  justify-content: center;    /* 메인축(가로) 정렬: 가운데 */
  align-items: center;        /* 교차축(세로) 정렬 */
  gap: 20px;                  /* 카드 사이 간격 */
  padding: 20px;              /* 컨테이너 내부 여백 */
}
```

* `justify-content`: 가로 방향 정렬(기본 row일 때)
* `align-items`: 세로 방향 정렬(기본 row일 때)
* `gap`: 형제 요소 간 간격 (이제는 `margin`보다 선호)

### C. 반응형 기초 (@media)

```css
@media (max-width: 600px) {
  .card-container {
    flex-direction: column;  /* 세로로 전환 */
    align-items: center;     /* 세로 배치에서 가로 중앙 */
  }

  .card-container .profile-card {
    width: 80%;
    max-width: 360px;        /* 너무 넓어지는 것 방지 */
    margin: 12px 0;          /* 위아래 간격 */
  }
}
```

* 넓은 화면: 가로 나란히
* 좁은 화면(600px 이하): 세로로 쌓기 + 카드 폭 가변화

### D. 왜 카드가 양끝으로 벌어졌나?

* 원인: `.profile-card { margin: 20px auto; }`
* `display:flex` 컨테이너에서 **자식의 `margin-left/right: auto`**는 남는 공간을 **스스로 차지하면서 서로 밀어냄** → 양끝으로 벌어짐
* 해결: `margin: 20px`(auto 제거) + 컨테이너에서 `gap`/`justify-content`로 정렬/간격 관리

### E. 전역 CSS vs CSS Modules

* 일반 `*.css`는 **전역 적용**: 동일한 클래스명이면 **어느 컴포넌트든** 스타일이 먹음
* 충돌 방지법

    1. **클래스명 접두사**로 구분 (예: `.pc-`, `.le-`)
    2. **CSS Modules** 사용 (`*.module.css`)

       ```jsx
       import styles from './ProfileCard.module.css';
       <div className={styles.profileCard}>...</div>
       ```

### F. 오늘 사용한 핵심 CSS 속성 상세

#### 1) `display`

* **무엇?** 요소의 박스가 레이아웃에 참여하는 **방식**을 결정합니다. 이번 과제에서 핵심은 부모 컨테이너에 `display: flex`를 주어 **플렉스 컨텍스트**를 만드는 것이었어요.
* **주요 값들(이번 학습에 유용한 것들만):**

    * `block`: 줄을 바꾸고 가로 폭을 가능한 한 **꽉** 채웁니다(`div`의 기본).
    * `inline`: 줄을 **바꾸지 않음**. `width/height`를 직접 지정하기 어렵고, 상하 `margin`이 잘 적용되지 않음(`span`의 기본).
    * `inline-block`: 줄을 바꾸지 않지만 **크기 지정 가능**.
    * `flex`: 자식들을 **flex item**으로 만들어 가로/세로 **정렬과 간격 제어**가 쉬워짐.
    * `none`: 레이아웃에서 완전히 제거(보이지 않음, 공간도 차지 안 함).
* **자주 하는 실수:** 자식에 `display:flex`를 주고 **부모에는 안 주는 경우** → 정렬이 안 먹습니다. **정렬은 부모가 담당**한다는 원칙 기억!

#### 2) `flex-direction`

* **무엇?** 플렉스의 **메인축 방향**을 정합니다. 메인축이 바뀌면 `justify-content`/`align-items`가 작동하는 **축**도 바뀝니다.
* **값:**

    * `row`(기본): 가로(좌→우). 메인축=가로, 교차축=세로.
    * `row-reverse`: 가로(우→좌).
    * `column`: 세로(위→아래). 메인축=세로, 교차축=가로.
    * `column-reverse`: 세로(아래→위).
* **팁:** 반응형에서 **가로(row) → 세로(column)** 로 전환하여 카드들이 **위아래로 쌓이게** 합니다.

#### 3) `justify-content` (메인축 정렬)

* **무엇?** **메인축 방향**(→ `flex-direction`에 의해 결정)에 따라 아이템들을 어떻게 배치할지 결정합니다.
* **주요 값:**

    * `flex-start`(기본): 시작점에 붙임
    * `center`: 가운데 모음
    * `flex-end`: 끝점에 붙임
    * `space-between`: **양끝 고정 +** 나머지 아이템 사이 간격을 **균등 분배**
    * `space-around`: 아이템 **양쪽에 동일 간격**, 바깥 여백은 절반 정도로 보임
    * `space-evenly`: 바깥 포함 **모든 간격이 동일**
* **팁:** `gap`과 함께 쓰면 **카드 사이 간격은 `gap`**, 전체 묶음의 위치는 `justify-content`로 결정.
* **주의:** `flex-direction: column`일 때는 **세로 방향 정렬**이 됩니다(가로가 아님).

#### 4) `align-items` (교차축 정렬)

* **무엇?** **교차축(메인축과 직각)** 방향 정렬.
* **주요 값:**

    * `stretch`(기본): 가능한 높이/너비로 늘림(크기 미지정 시)
    * `flex-start`: 교차축 시작점 정렬
    * `center`: 교차축 가운데 정렬
    * `flex-end`: 교차축 끝점 정렬
    * `baseline`: 텍스트 기준선 맞춤(제목 높이가 다를 때 유용)
* **팁:** 한 줄 배치에서 세로 가운데 정렬을 하고 싶다면(메인축이 가로, 즉 `row`), `align-items: center`.
* **주의:** 여러 줄(`flex-wrap`)로 감쌀 때 **줄 사이 정렬**은 `align-content`가 담당합니다(혼동 주의).

#### 5) 축 개념 한 번에 정리

```css
/* 가로 배치(기본) */
.parent { display:flex; flex-direction: row; /* 메인축=가로 */
  justify-content: center; /* 가로(메인) 가운데 */
  align-items: center;      /* 세로(교차) 가운데 */ }

/* 세로 배치(모바일 전환) */
.parent { display:flex; flex-direction: column; /* 메인축=세로 */
  justify-content: flex-start; /* 세로(메인) 위쪽부터 쌓기 */
  align-items: center;         /* 가로(교차) 가운데 */ }
```

* **기억 공식**: `flex-direction`이 **무엇**이냐에 따라, `justify-content`는 **그 방향**, `align-items`는 **직각 방향**을 정렬합니다.
* **높이 관련 팁:** 교차축 가운데 정렬(`align-items:center`)이 **세로 중앙**처럼 보이게 하려면 컨테이너가 그만큼의 **높이**를 가지고 있어야 합니다(예: `min-height: 60vh`).

---

## 3) 오늘의 베스트 프랙티스

* **정렬은 부모가 담당**: `justify-content`, `align-items`
* **간격은 `gap`으로**: 형제 간 간격을 일관되게 관리
* **고정폭은 최소화**: 반응형에서 `width: 80% + max-width` 패턴 활용
* **모바일 덮어쓰기 시 선택자 구체화**: `.card-container .profile-card { ... }`
* **역할 분리**: 컨테이너 스타일은 `App.css`, 카드 내부 스타일은 각 컴포넌트 CSS

---

## 4) 미니 치트시트

```css
/* 1) 가로 두 칸 + 중앙 정렬 */
.parent { display:flex; justify-content:center; gap:20px; }

/* 2) 모바일 전환 */
@media (max-width:600px){
  .parent{ flex-direction:column; align-items:center; }
  .parent .child{ width:80%; max-width:360px; }
}

/* 3) 카드 내부 여백과 시각적 개선 */
.child{ padding:16px; border-radius:12px; box-shadow:0 4px 8px rgba(0,0,0,.08); }
```

---

## 5) 오늘 해결한 이슈 & 교훈

* **문제**: 카드가 화면 양끝으로 벌어짐
* **원인**: `.profile-card { margin: 20px auto; }` (auto가 flex에서 밀어냄)
* **해결**: auto 제거, 컨테이너에서 `gap`/`justify-content`로 제어
* **교훈**: 레이아웃은 **부모 컨테이너 주도**, 자식은 내용과 내부 여백 중심으로 설계

---

## 6) 다음 단계(예고)

* **3단계**: 카드 3개 이상 그리드 느낌으로 배치하기(가로 스크롤/랩핑) + 태블릿(768px), 모바일(480~600px) 별 브레이크포인트 확장
* 최종 심화: **Tailwind CSS**로 동일 레이아웃 빠르게 재구현

---

## 7) 체크리스트

* [ ] 컨테이너에 `display:flex`와 `gap`을 적용했다
* [ ] 정렬은 `justify-content/align-items`로 했다
* [ ] 자식에 `margin: auto`로 정렬을 시도하지 않는다
* [ ] 모바일 전환 시 `flex-direction: column`을 적용했다
* [ ] 카드 폭을 `% + max-width`로 유연하게 했다
* [ ] 전역 CSS 충돌을 피하기 위해 네이밍 또는 CSS Modules를 검토했다

---

필요하면 이 README에 스크린샷/코드 스니펫을 계속 추가해가며 성장 로그로 쓰세요! 🚀

</details>