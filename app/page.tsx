
import TodoLists from "../components/todos/TodoLists";
import { getTodos } from "@/server/action/todos/todo";

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <TodoLists todos={todos} />
    </main>
  );
}
