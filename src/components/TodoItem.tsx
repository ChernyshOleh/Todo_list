import { todosProps } from "../types";
import React from "react";
import Context from "../context";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface TodoItemProps {
  todo: todosProps;
  index: number;
  onToggle: (id: number) => unknown;
}

export default function TodoItem({ todo, index, onToggle }: TodoItemProps) {
  const { removeTodo } = React.useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <ListItem
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100%",
        borderBottom: "1px solid grey",
      }}
    >
      <ListItemIcon>
        <Checkbox
          onChange={() => {
            onToggle(todo.id);
          }}
        />
      </ListItemIcon>
      <ListItemText
        className={classes.join(" ")}
        style={{ wordWrap: "break-word" }}
      >
        {index}
        &nbsp;
        {todo.title}
      </ListItemText>
      <IconButton>
        <HighlightOffIcon
          onClick={() => removeTodo(todo.id)}
        ></HighlightOffIcon>
      </IconButton>
    </ListItem>
  );
}
