const Item = ({ id, note, date, time, delData, submittingData }) => {
  function delItem() {
    submittingData.current = true;
    delData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={delItem}>
        删除
      </button>
    </div>
  );
};

export default Item;
