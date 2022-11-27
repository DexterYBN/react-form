import React, { useState } from "react";
import "../src/App.css"

function App() {

  const [text, setText] = useState("")
  const [blur, setBlur] = useState(false)
  const [send, setSend] = useState(false)

  const handleText = (e) => { // добавление текста в input
    setText(e.target.value);
    setSend(false);
  }

  const handleChangeButton = (e) => { // добавление текста в console
    e.preventDefault()
    console.log(text)
    setText("")
    setSend(true)
    setBlur(false)
  }

  const hundleBlur = () => {
    setBlur(true)
    setSend(false)
  }

  return (
    <>
      <div className="main">
        <div className="forms">
          <form onSubmit={handleChangeButton}>
            <input
              className={(!text && blur) && "error"}
              type="text"
              value={text}
              onChange={handleText}
              placeholder="яз е"
              onBlur={hundleBlur}
            />
            {/* кнопка добавления дела */}
            <button
              className="button"
              type="submit"
              disabled={!text || text[0] === ""} // условие, при которой кнопка бывает неактивной
            >
              добавить
            </button>
          </form>
        </div>
        {/* показывает состояние дел */}
        <div className="stateTodo">
          {send && <div className="success">Дело добавлено</div>}
          {(!text && blur) && <div className="fail">Поле ввода не должно быть пустым</div>}
        </div>
      </div>
    </>
  );
}

export default App;