import {atom, selector, useRecoilValue} from "recoil"

export const todoListState = atom({
    key: 'todoListState',
    default: []
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});