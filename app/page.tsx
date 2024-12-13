
import TodoLists from "../components/todos/TodoLists";
import { getTodos } from "@/server/action/todos/todo";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="h-screen flex items-center justify-center w-full">
      <TodoLists todos={todos} />
    </main>
  );
}
