"use client"
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema, TodoSchemaType } from "@/types/todoSchema";
import { createTodo } from "@/server/action/todo";

export default function CreateTodoForm() {
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Omit<TodoSchemaType, "is_complete">>({
        resolver: zodResolver(
            TodoSchema.omit({ is_complete: true })
        ),
        defaultValues: {
            title: "",
        },
    });

    const onSubmit = async (data: Omit<TodoSchemaType, "is_complete">) => {
        createTodo(data);
        reset({
            title: ""
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="New Task"
                            error={errors.title?.message}
                        />
                    )}
                />
                <Button type="submit" variant="primary" className="w-full my-3 px-4 py-2 font-medium text-sm rounded focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500">
                    Add Task
                </Button>
            </form>
        </>
    )
}