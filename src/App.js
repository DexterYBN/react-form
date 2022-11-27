import React, { useState } from "react";
import "../src/App.css"

function App() {

  const [text, setText] = useState("")
  const [send, setSend] = useState(false)
  const [error, setError] = useState(false)
  const [tags, setTags] = useState([])

  const handleText = (e) => { // добавление текста в input
    setText(e.target.value);
    setSend(false);
    setError(false);
  }

  const handleChangeButton = (e) => { // добавление текста в console
    e.preventDefault()
    console.log(text)
    setText("")
    setSend(true)
    setTags([...tags, text])
  }

  const hundleBlur = () => {
    if (!text) {
      setError(true);
      setSend(false);
    }
  }

  return (
    <>
      <div className="main">
        <div className="forms">
          <select className="select"> {/* селект для показа списка добавленных дел, показывает при нажатии на стрелку */}
            {tags.map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <form onSubmit={handleChangeButton}>
            <input
              className="text"
              type="text"
              value={text}
              onChange={handleText}
              placeholder="пишите"
              onBlur={hundleBlur}
            />

            {/* кнопка добавления дела */}
            <button
              className="button"
              type="submit"
              disabled={!text || text[0] === ""}
            >
              добавить
            </button>
          </form>
        </div>

        {/* показывает состояние дел */}
        <div className="stateTodo">
          {send && <div className="yesTodo">Дело добавлено</div>}
          {error && <div className="noTodo"> Дел нет </div>}
        </div>

        <ul>
          {tags // Выводит добавленные дела на экран
            .map((item, index) => {
              return <li key={index}>{item}</li>
            })
            .reverse()}
        </ul>
      </div>
    </>
  );
}

export default App;