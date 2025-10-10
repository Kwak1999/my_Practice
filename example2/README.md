# 🎨 React 디자인 학습 기록

## 🧭 학습 개요
이 프로젝트는 **React와 CSS**를 사용해 단계적으로 레이아웃과 반응형 디자인을 익히는 과정입니다.  
총 6단계 중 **2단계(Flexbox 기초)** 까지 완료했습니다 ✅

---

## 🚀 진행 단계

### ✅ 1단계 — 기본 레이아웃 & 스타일링
**학습 내용**
- `margin`, `padding`, `font-size`, `font-family`, `background-color`, `color`
- 간단한 카드형 컴포넌트 제작

**결과물**
- 색상과 글꼴을 활용한 카드 UI 구성

---

### ✅ 2단계 — Flexbox 기초 레이아웃
**학습 목표**
- `display: flex`로 가로/세로 정렬 이해하기
- `justify-content`와 `align-items`로 정렬 제어
- `flex-direction: column`으로 세로 방향 레이아웃 구성
- `flex: 1`을 활용한 공간 분배

**결과물**
- 상단 `header`, 중앙 `content`, 하단 `footer`로 구성된 페이지
- `content` 내부에 가로로 정렬된 카드 3개 배치

---

## 📁 폴더 구조

```
src/
├── App.js
└── App.css

```
---

## 💡 핵심 개념 정리

| 속성 | 설명 |
|------|------|
| `display: flex` | 자식 요소를 가로로 배치하는 Flexbox 컨테이너 |
| `justify-content` | 가로축(주축) 정렬 제어 |
| `align-items` | 세로축(교차축) 정렬 제어 |
| `flex-direction: column` | 요소를 세로로 배치 |
| `flex: 1` | 남은 공간을 자동으로 채움 |

---

## 🖼️ 결과 예시
```
+--------------------------------+
|            HEADER              |
+--------------------------------+
|        BOX1  BOX2  BOX3        |
+--------------------------------+
|            FOOTER              |
+--------------------------------+
```

---

## 🔮 다음 단계 예고 (3단계)
### 🎯 Grid 레이아웃 & 반응형 디자인 기초
**다음에 배울 내용**
- `display: grid`, `grid-template-columns`, `gap`
- `@media` 쿼리를 이용한 모바일 대응

---

> 📘 *Tip:*  
> 저장 후 GitHub나 VSCode에서 Markdown 미리보기(`Ctrl+Shift+V`)로 확인하면 깔끔하게 보입니다!
