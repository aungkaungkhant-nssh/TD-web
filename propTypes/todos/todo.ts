export type Todo = {
    id: number;
    title: string;
    is_complete: boolean;
    created_at: Date;
    updated_at: Date;
};

export type TodosProps = {
    todos: Todo[];
};

export type TodoProps = {
    todo: Todo
}