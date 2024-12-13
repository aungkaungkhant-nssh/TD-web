"use server"
import { revalidatePath } from "next/cache";
import { PrismaClient } from '@prisma/client';
import { TodoSchemaType } from "@/types/todoSchema";
const prisma = new PrismaClient()


export const getTodos = async () => {
    const todos = await prisma.todos.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return todos;
}
export const createTodo = async (data: TodoSchemaType) => {
    try {
        await prisma.todos.create({
            data
        });

        revalidatePath("/")
    } catch (error) {
        console.error("Error creating todo:", error);
    }
};


export const updateTodo = async (data: TodoSchemaType) => {
    try {
        await prisma.todos.update({
            where: {
                id: data.id
            },
            data: {
                ...data,
                updatedAt: new Date()
            }
        });

        revalidatePath("/")
    } catch (error) {
        console.error("Error updating todo:", error);
    }
};

export const deleteTodo = async ({ id }: { id: number }) => {
    try {
        await prisma.todos.delete({
            where: {
                id
            }
        });

        revalidatePath("/")
    } catch (error) {
        console.error("Error updating todo:", error);
    }
}

