"use client"
import { Todo, TodosProps } from "@/propTypes/todos/todo";
import TodoItem from "./TodoItem";
import Card from "../cards/Card";
import CreateTodoForm from "./CreateTodoForm";

export default function TodoLists({ todos }: TodosProps) {
    return (
        <div className="w-[29%]">
            <h1 className="font-bold text-2xl text-center text-slate-700 mb-3">Next Js  Todo Lists</h1>
            <Card>
                <CreateTodoForm />
                {
                    todos.map((todo: Todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                }
            </Card>
        </div>
    )
}