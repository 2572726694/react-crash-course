import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingData }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }

  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingData.current = true;
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>时间：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
