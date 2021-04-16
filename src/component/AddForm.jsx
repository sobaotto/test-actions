import "../css/App.css";

function AddForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        placeholder="Todoを入力"
        value={props.newTodoTitle}
        onChange={props.inputText}
      />
      <input type="submit" value="追加" />
    </form>
  );
}

export default AddForm;
