"use client"
import { Todo, TodosProps } from "@/propTypes/todos/todo";
import TodoItem from "./TodoItem";
import Card from "../cards/Card";
import CreateTodoForm from "./CreateTodoForm";

export default function TodoLists({ todos }: TodosProps) {
    return (
        <div className="w-full max-w-md">
            <h1 className="font-bold text-2xl text-center text-slate-700 mb-6">
                Next.js Todo Lists
            </h1>
            <Card className="p-6 flex flex-col gap-4">
                <CreateTodoForm />
                <div className="flex flex-col gap-3">
                    {todos.map((todo: Todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </div>
            </Card>
        </div>
    )
}