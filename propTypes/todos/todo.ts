export type Todo = {
    id: number;
    title: string;
    is_complete: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type TodosProps = {
    todos: Todo[];
};

export type TodoProps = {
    todo: Todo
}