import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  let initTodos;
  if (localStorage.getItem('todos') == null) {

    initTodos = [];
    localStorage.setItem('todos', JSON.stringify(initTodos));
  } else {

    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  let deleteItem = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  let addtodo = (title, desc) => {

    let ind;

    if (todos.length === 0) {

      ind = 1;
    } else {

      ind = todos[todos.length - 1].Sno + 1;
    }

    let todo = {

      Sno: ind,
      Title: title,
      Desc: desc
    };

    setTodos([...todos, todo]);
  }


  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
        <Header title='My Todo List' />
        <Routes>
          <Route path="/" element={<><AddTodo addtodo={addtodo} /> <Todos todos={todos} deleteItem={deleteItem} /></>}></Route>
          <Route path="/Home" element={<><AddTodo addtodo={addtodo} /> <Todos todos={todos} deleteItem={deleteItem} /></>}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
