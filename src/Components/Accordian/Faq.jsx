import { useState } from "react";
import data from "./data";
import "./style.css";

function Faq() {
  const [selected, setselected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setselected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                  <div>
                    {selected == dataItem.id ? (
                      <div className="content">{dataItem.answer}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Faq;
