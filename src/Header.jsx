import { useState } from "react";
import "./Header.css";

function Header() {
  const [todos, setTodo] = useState([]);

  const handleAddTodo = (evt) => {
    if (evt.key == "Enter") {
      evt.preventDefault();

      const newTodo = {
        id: todos.at(-1) ? todos.at(-1).id + 1 : 1,
        value: evt.target.value.trim(),
      };

      if (evt.target.value.trim()) {
        setTodo([...todos, newTodo]);
        evt.target.value = null;
      } else {
        alert("Ma'lumot kiriting");
      }
    }
  };

  return (
    <>
      <form action="">
        <input type="text" onKeyDown={handleAddTodo} />
        <ul>
          {todos.map((item) => (
            <div className="items">
              <li key={item.id}>{item.value}</li>
              <button>X</button>
            </div>
          ))}
        </ul>
      </form>
    </>
  );
}

export default Header;
