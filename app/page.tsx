import { apiRequest } from "@/utils/apiClient";
import TodoLists from "../components/todos/TodoLists";

export default async function Home() {
  const todos = await apiRequest("/api/todos");

  return (
    <main className="h-screen flex items-center justify-center w-full">
      <TodoLists todos={todos} />
    </main>
  );
}
