import classes from "./App.module.css";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  return (
    <div className={`${classes.bg_light} ${classes.light}`}>
      <div className={classes.todo_container}>
        <Input />
        <div className={`${classes.todo} ${classes.todo_light}`}>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
