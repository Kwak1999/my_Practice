# 📘 React 반응형 디자인 학습 기록 — 2025.10.12

## 🧭 진행 단계
**현재 단계:** 5단계  
**진행 범위:** Grid + Flex 혼합 반응형 페이지 완성  
**다음 목표:** TailwindCSS로 리팩토링 (6단계)

---

## 🎯 오늘의 학습 목표

- Header / Main / Footer 구조의 **전체 페이지 레이아웃 구성**
- **Grid + Flex 혼합 레이아웃**으로 카드 정렬
- 반응형 전환(`flex-direction`, `grid-template-columns`)
- hover 효과, 그림자, border-radius, transition 적용
- 햄버거 메뉴를 이용한 **모바일 내비게이션 토글**

---

## 🧩 구현한 주요 내용

### 🧱 1. 전체 레이아웃 구조
- App 컴포넌트에서 `Header`, `CardGrid`, `Footer` 구성
- `App.css`에서 `flex-direction: column` + `min-height: 100vh`로 하단 고정 구조 완성

### 🧭 2. Header (반응형 내비게이션)
- 데스크탑: 메뉴 가로 배치
- 모바일(≤768px): 햄버거 버튼 표시
- `useState`로 메뉴 열고 닫기 제어
- `position: sticky`와 `z-index`로 상단 고정

### 🧩 3. CardGrid (메인 콘텐츠)
- 외부는 `display: grid`
    - 3열 → 2열(≤768px) → 1열(≤500px)
- 내부는 `display: flex`
    - 세로(column) → 가로(row) → 세로(column)
- hover 시 `transform`과 `box-shadow`로 시각적 강조

### ⚙️ 4. Footer
- 중앙 정렬(`text-align: center`)
- 회색 배경(`background-color: #f4f4f4`)
- `margin-top: auto`로 페이지 하단 고정

---

## ✅ 오늘의 체크리스트

| 항목 | 상태 | 설명 |
|------|------|------|
| Header 반응형 메뉴 | ✅ | 햄버거 토글 동작 확인 |
| Grid 반응형 레이아웃 | ✅ | 3 → 2 → 1열 전환 정상 작동 |
| Flex 내부 전환 | ✅ | column ↔ row 방향 전환 확인 |
| 카드 hover 효과 | ✅ | 자연스러운 그림자 변화 |
| Footer 위치 | ✅ | 하단 고정, 레이아웃 균형 유지 |

---

## 🧠 배운 핵심 개념 정리

| 개념 | 설명 |
|------|------|
| `display: grid` | 외부 전체를 일정한 간격으로 배치할 때 사용 |
| `display: flex` | 내부 정렬(가로/세로, 중앙 정렬)에 유용 |
| `@media (max-width: …)` | 화면 크기에 따른 레이아웃 전환 |
| `position: sticky` | 스크롤 시에도 고정되는 상단 영역 |
| `transition`, `transform` | hover 애니메이션 효과 구현 |

---

## 🚀 다음 단계 (6단계 예고)

> TailwindCSS로 리팩토링
> - CSS 파일 제거, 클래스 기반 디자인
> - 동일한 반응형 레이아웃을 Tailwind로 재구성
> - 커스텀 테마 및 색상 시스템 도입

---

🗓 **다음 학습 예정일:** 2025-10-13  
🎯 **학습 목표:** TailwindCSS 환경 세팅 및 Header 리팩토링 시작
