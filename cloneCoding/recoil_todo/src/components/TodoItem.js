// Recoil의 상태를 읽고 수정하기 위해 useRecoilState 훅을 import
import {useRecoilState} from "recoil";
// todo 리스트 상태(atom)를 import
import {todoListState} from "../todoAtom";

// 개별 Todo 아이템을 렌더링하는 컴포넌트
export function TodoItem({item}) {
    // todoListState 전역 상태를 읽고(set) 수정(set)할 수 있는 변수 생성
    const [todoList, setTodoList] = useRecoilState(todoListState);

    // 현재 아이템의 인덱스를 찾음 (배열 내 동일한 객체 찾기)
    const index = todoList.findIndex((listItem) => listItem === item);

    // 텍스트가 수정될 때 실행되는 함수
    const editItemText = ({target: {value}}) => {
        // 기존 배열의 특정 인덱스를 새 값으로 교체한 새 배열 생성
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,          // 기존 속성 복사
            text: value,      // text만 새 값으로 변경
        });

        // 새로운 배열로 전역 상태 업데이트
        setTodoList(newList);
    };

    // 체크박스(완료 여부)가 변경될 때 실행되는 함수
    const toggleItemCompletion = () => {
        // 현재 아이템의 isComplete 값을 반전시켜 새 배열 생성
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,  // true ↔ false 전환
        });

        // 상태 업데이트
        setTodoList(newList);
    };

    // 아이템 삭제 함수
    const deleteItem = () => {
        // 해당 인덱스의 요소를 제거한 새 배열 생성
        const newList = removeItemAtIndex(todoList, index);

        // 전역 상태 업데이트
        setTodoList(newList);
    };

    // 렌더링 부분
    return (
        <div>
            {/* 텍스트 수정용 input */}
            <input type="text" value={item.text} onChange={editItemText} />

            {/* 완료 여부 체크박스 */}
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />

            {/* 삭제 버튼 */}
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

// 배열의 특정 인덱스 값을 새 값으로 교체하는 함수
function replaceItemAtIndex(arr, index, newValue) {
    // 예: [a,b,c] → 인덱스 1을 z로 바꾸면 [a,z,c]
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// 배열의 특정 인덱스 요소를 제거하는 함수
function removeItemAtIndex(arr, index) {
    // 예: [a,b,c] → 인덱스 1 삭제하면 [a,c]
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
