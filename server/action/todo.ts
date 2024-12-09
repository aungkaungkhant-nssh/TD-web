"use server"

import { TodoSchemaType } from "@/types/todoSchema"
import { apiRequest } from "@/utils/apiClient";
import { revalidatePath } from "next/cache";

export const createTodo = async (data: Omit<TodoSchemaType, "is_complete">) => {
    await apiRequest("/api/todos", "POST", data);
    revalidatePath("/")
}

export const updateTodo = async (data: TodoSchemaType) => {
    await apiRequest(`/api/todos/${data.id}`, "PATCH", data);
    revalidatePath("/")
}

export const deleteTodo = async (id: number) => {
    await apiRequest(`/api/todos/${id}`, "DELETE");
    revalidatePath("/")
}

