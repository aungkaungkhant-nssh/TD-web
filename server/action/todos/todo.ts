"use server"
import { revalidatePath } from "next/cache";
import { PrismaClient } from '@prisma/client';
import { TodoSchemaType } from "@/types/todoSchema";
const prisma = new PrismaClient()


export const getTodos = async () => {
    try {
        const todos = await prisma.todos.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return todos;
    } catch (error) {
        console.error("Failed to fetch todos:", error);
        throw new Error("Failed to load todos");
    }
}

export const createTodo = async (data: TodoSchemaType) => {
    try {
        await prisma.todos.create({
            data
        });
        revalidatePath("/");
    } catch (error) {
        console.error("Error creating todo:", error);
        throw new Error("Failed to create todo");
    }
};


export const updateTodo = async (data: TodoSchemaType) => {
    try {
        await prisma.todos.update({
            where: { id: data.id },
            data: {
                ...data,
                updatedAt: new Date()
            }
        });
        revalidatePath("/");
    } catch (error) {
        console.error("Error updating todo:", error);
        throw new Error("Failed to update todo");
    }
};

export const deleteTodo = async ({ id }: { id: number }) => {
    try {
        await prisma.todos.delete({
            where: { id }
        });
        revalidatePath("/");
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw new Error("Failed to delete todo");
    }
};
