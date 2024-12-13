"use client"
import { TodoProps } from "@/propTypes/todos/todo";
import { Circle, CircleCheckBig, Edit, Import, Trash } from "lucide-react";
import Card from "../cards/Card";
import Input from "../ui/Input";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema, TodoSchemaType } from "@/types/todoSchema";
import Button from "../ui/Button";
import { deleteTodo, updateTodo } from "@/server/action/todos/todo";

export default function TodoItem({ todo }: TodoProps) {

    const [isEditMode, setIsEditMode] = useState(false);
    const handleComplete = () => {
        updateTodo({ ...todo, is_complete: !todo.is_complete });
    }
    const handleDelete = () => {
        deleteTodo({ id: todo.id })
    }

    const {
        setValue,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TodoSchemaType>({
        resolver: zodResolver(
            TodoSchema
        ),
        defaultValues: {
            id: todo.id,
            title: todo.title,
            is_complete: todo.is_complete
        },
    });

    useEffect(() => {
        setValue("is_complete", todo.is_complete);
        setValue("title", todo.title);
    }, [todo])

    const onSubmit = async (data: TodoSchemaType) => {
        todo.title = data.title;
        setIsEditMode(false);
        await updateTodo(data);
    };

    return (
        <div className="my-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className={`p-1 flex justify-between border-l-4 ${todo.is_complete ? " border-l-green-600" : "border-l-red-600"}`}>
                    <div>
                        {
                            isEditMode ? (
                                <Controller
                                    control={control}
                                    name="title"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            error={errors.title?.message}
                                            className={`border  ${!isEditMode && "border-none"} `}
                                        />
                                    )}
                                />
                            ) : (
                                <div className="max-w-xs">
                                    <h1 className="p-2 break-words">{todo.title}</h1>
                                </div>
                            )
                        }


                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div>
                            {
                                todo.is_complete
                                    ? <CircleCheckBig size={18} className="text-green-500" onClick={handleComplete} />
                                    : <Circle size={18} className="text-green-500" onClick={handleComplete} />
                            }
                        </div>
                        {
                            isEditMode ?
                                (
                                    <Button type="submit" >
                                        <Import size={18} className="text-blue-500" />
                                    </Button>

                                )
                                :
                                (
                                    <Edit size={18} className="text-blue-500" onClick={() => setIsEditMode(!isEditMode)} />
                                )
                        }


                        <Trash size={18} className="text-red-500" onClick={handleDelete} />
                    </div>
                </Card>
            </form>
        </div >
    )
}