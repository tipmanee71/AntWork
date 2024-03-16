import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { v4 as uuid } from "uuid";
import Button from "./components/Button";
import Input from "./components/Input";
import Switch from "./components/Switch";
import "./styles.css";

export default function AddBox() {
  const [list, setList] = React.useState([]);
  const [editRow, setEditRow] = React.useState({
    id: "",
    value: "",
  });
  const [newRowValue, setNewRowValue] = React.useState("");
  const [newRowIsEditable, setNewRowEditable] = React.useState(true);
  const [newRowIsRemovable, setNewRowRemovable] = React.useState(true);

  const removeItem = (removeId) => {
    setList((prevState) => prevState.filter(({ id }) => id !== removeId));
  };

  const editItem = (editId) => {
    const { name } = list.find((item) => item.id === editId);
    setEditRow({ id: editId, value: name });
  };

  const updateRowItem = ({ target: { value } }) => {
    setEditRow((prevState) => ({ ...prevState, value }));
  };

  const handleRowUpdate = (e) => {
    e.preventDefault();

    const { id, value } = editRow;

    if (!value) {
      alert("Please fill out the row input before updating the row!");
      return;
    }

    setList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, name: value } : item
      )
    );
    setEditRow({ id: "", value: "" });
  };

  const addNewRowItem = (e) => {
    e.preventDefault();

    if (!newRowValue) {
      alert(
        "Please fill out the new question item before submitting the form!"
      );
      return;
    }

    setList((prevState) => [
      ...prevState,
      {
        id: uuid(),
        name: newRowValue,
        isEditable: newRowIsEditable,
        isRemovable: newRowIsRemovable,
      },
    ]);
    setNewRowValue("");
    setNewRowEditable(true);
    setNewRowRemovable(true);
  };

  return (
    <div className="add-box">
      {list.length > 0 ? (
        list.map(({ id, name, isEditable, isRemovable }) => (
          <div className="uk-card uk-card-default uk-card-body" key={id}>
            {editRow.id === id ? (
              <form onSubmit={handleRowUpdate}>
                <Input
                  // placeholder="Add a question"
                  value={editRow.value}
                  handleChange={updateRowItem}
                />
                <Button
                  className="uk-margin-small-bottom"
                  color="secondary"
                  type="submit"
                >
                  <Typography variant="body1">Update</Typography>
                </Button>
              </form>
            ) : (
              <Stack spacing={1}>
                <span className="uk-card-title">{name}</span>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{ justifyContent: "center" }}
                >
                  {isEditable && (
                    <Button
                      className="uk-margin-small-bottom"
                      color="primary"
                      type="button"
                      handleClick={() => editItem(id)}
                    >
                      <Typography variant="body1">Edit</Typography>
                    </Button>
                  )}
                  {isRemovable && (
                    <Button
                      className="uk-margin-small-bottom"
                      color="danger"
                      type="button"
                      handleClick={() => removeItem(id)}
                    >
                      <Typography variant="body1">Remove</Typography>
                    </Button>
                  )}
                </Stack>
              </Stack>
            )}
          </div>
        ))
      ) : (
        // <Typography>Add New Question</Typography>
        <Typography></Typography>
      )}
      <form
        className="uk-card uk-card-default uk-card-body"
        onSubmit={addNewRowItem}
        // style={{justifyContent: "center"}}
      >
        <Stack>
          <Input
            placeholder="Request necessary details such as dimensions, brand guidelines, and more."
            value={newRowValue}
            handleChange={(e) => setNewRowValue(e.target.value)}
          />
          {/* <Switch
          label="Editable"
          handleChange={(e) => setNewRowEditable(Boolean(e.target.checked))}
          name="Editable"
          value={newRowIsEditable}
        />
        <Switch
          label="Removable"
          handleChange={(e) => setNewRowRemovable(Boolean(e.target.checked))}
          name="Removable"
          value={newRowIsRemovable}
        /> */}
          <Stack
            direction="row"
            spacing={2}
            style={{ justifyContent: "space-between" }}
          >
            <Button
              className="uk-margin-small-bottom"
              color="secondary"
              type="submit"
            >
              <Typography variant="body1">Add A Question</Typography>
            </Button>
            <Button
              className="uk-margin-small-bottom"
              color="danger"
              type="button"
              handleClick={() => setList([])}
            >
              <Typography variant="body1">Reset Questions</Typography>
            </Button>
          </Stack>
        </Stack>
      </form>
    </div>
  );
}
