import TodoItem from "./TodoItem";
import { todosProps } from "../types";
import List from "@mui/material/List";

interface TodoListProps {
  todos: todosProps[];
  onToggle: (id: number) => unknown;
}

export default function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <List sx={{ width: "100%" }}>
      {todos.map((item, index) => (
        <TodoItem
          todo={item}
          key={item.id}
          index={index + 1}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
}
