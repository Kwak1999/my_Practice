# 복습


  ## Atom
  - 앱에서 기준이 되는 데이터가 저장된 곳

            ```
            [
            { id: 1, text: "공부하기", isComplete: false },
            { id: 2, text: "운동하기", isComplete: true },
            ]
            ```
  - atom 리스트를 todoListState라고 할 때, 이것을 atom() 함수를 이용해 생성

  ## useRecoilValue
  - atom의 항목을 읽기 위해 사용

        ```
          const todoList = useRecoilValue(todoListState);
          // selector 사용 후 수정      
          const todoList = useRecoilValue(filteredTodoListState);
        ```  

  ## useSetRecoilState()
  - 새로운 todo 아이템을 생성하기 위해 todoListState 내용을 업데이트하는 setter 함수 필요
  - setter 함수를 얻기 위해 useSetRecoilState() 훅을 사용할 수 있음

          ```
          const [inputValue, setInputValue] = useState('');
          const setTodoList = useSetRecoilState(todoListState);
          ```
---

# Selector

- Atom에 있는 데이터를 읽음

    ```
    const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
    });
    ```

- 필터링하거나 계산해서 새로운 값을 만들어 냄

    ```
    // selector: 기존 atom 상태를 기반으로 "파생된 상태(derived state)"를 만들어주는 도구
    const filteredTodoListState = selector({
    // 이 selector의 고유 이름 (Recoil 내부에서 식별용)
    key: 'filteredTodoListState',
    
    // get 함수: selector가 반환할 값을 계산하는 부분
    get: ({ get }) => {
    // 1️현재 설정된 필터 상태(atom)를 읽어옴
    //    예: 'Show All', 'Show Completed', 'Show Uncompleted'
    const filter = get(todoListFilterState);
    
        // 2️실제 todo 리스트(atom)를 읽어옴
        const list = get(todoListState);
    
        // 3️필터 기준에 따라 다른 결과를 반환
        switch (filter) {
          // "완료된 항목만 보기"가 선택된 경우
          case 'Show Completed':
            // isComplete가 true인 항목만 남김
            return list.filter((item) => item.isComplete);
    
          // "미완료 항목만 보기"가 선택된 경우
          case 'Show Uncompleted':
            // isComplete가 false인 항목만 남김
            return list.filter((item) => !item.isComplete);
    
          // 그 외 (기본값: "Show All") → 전체 리스트 반환
          default:
            return list;
        }
    },
    });

    ```

- 그 결과를 컴포넌트에 바로 쓸 수 있음

    ```
  // TodoListFilters 컴포넌트: 사용자가 필터 옵션을 선택할 수 있는 UI
  function TodoListFilters() {
      // Recoil 상태를 읽고(set) 수정할 수 있게 하는 훅
      // filter → 현재 선택된 필터 값
      // setFilter → 필터 값을 변경하는 함수
      const [filter, setFilter] = useRecoilState(todoListFilterState);
        
      // 드롭다운에서 선택이 바뀔 때 실행되는 함수
      // event.target.value를 구조분해 할당으로 받아서 filter 상태 업데이트
      const updateFilter = ({ target: { value } }) => {
      setFilter(value); // 선택한 값("Show All" 등)을 Recoil 상태에 반영
      };
        
      // 렌더링되는 부분
      return (
          <>
          {/* 간단한 라벨 */}
            Filter:
                {/* 드롭다운(select) 요소 */}
                <select value={filter} onChange={updateFilter}>
                  {/* 전체 보기 */}
                  <option value="Show All">All</option>
            
                  {/* 완료된 항목만 보기 */}
                  <option value="Show Completed">Completed</option>
            
                  {/* 미완료 항목만 보기 */}
                  <option value="Show Uncompleted">Uncompleted</option>
                </select>
          </>
      );
  }

  ```
---
# 참고
https://recoiljs.org/docs/introduction/installation