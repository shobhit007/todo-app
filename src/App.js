import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import AllItems from "./component/AllItems";
import CompletedItems from "./component/CompletedItems";
import ActiveItems from "./component/ActiveItems";

function App() {
  const [list, setList] = useState([]);

  const addTask = (item) => {
    setList((pre) => [
      ...pre,
      { data: item, isCompleted: false, id: Math.round(Math.random() * 10000) },
    ]);
  };

  const updateTask = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  };

  const removeTask = (id) => {
    const filteredList = list.filter((item) => id !== item.id && item);
    setList(filteredList);
  };

  const deleteAll = () => {
    setList([]);
  };

  return (
    <div className="container">
      <h1 className="logo">#todo</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route
          path="/"
          element={
            <AllItems onChange={addTask} list={list} updateTask={updateTask} />
          }
        />
        <Route
          path="/active"
          element={
            <ActiveItems
              onChange={addTask}
              list={list}
              updateTask={updateTask}
            />
          }
        />
        <Route
          path="/complete"
          element={
            <CompletedItems
              list={list}
              removeTask={removeTask}
              deleteAll={deleteAll}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
