import React from 'react';
import {useRecoilValue} from "recoil";
import {todoListState} from "../todoAtom";
import {TodoItemCreator} from "./TodoItemCreator";
import {TodoItem} from "./TodoItem";
import {TodoListFilters} from "./TodoListFilters";
import {TodoListStats} from "./TodoListStats";

function TodoList(){
    const todoList = useRecoilValue(todoListState);

    return(
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key = {todoItem.id} item={todoItem} />
            ))}
        </>
    )
}
export default TodoList;