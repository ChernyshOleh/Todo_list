import React from "react";
import Context from "../context";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function AddTodo() {
  const [value, setValue] = React.useState("");
  const { addTodo } = React.useContext(Context);

  function submitHandler(e) {
    e.preventDefault();

    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={submitHandler}>
        <TextField
          fullWidth
          label="add todo"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Box>
  );
}
