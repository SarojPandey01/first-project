import React from "react";
import "./App.css";
import TodoFirebase from "./components/Todofirebase.jsx";
import Todo from "./components/Todo";


function App() {

  return (
    <div className="App">
      <Todo />
      <br/><br/><br/><br/><br/>
      <TodoFirebase />
    </div>
  );
}

export default App;
