import React from "react";
import s from "../styles/CvDisplayer.module.css";

function CvDisplayer(props) {
  return (
    <section className={s.displayerSection}>
      <div className={s.basicInfo}>
        <p>Name:</p>
        <p>{props.name}</p>
      </div>
    </section>
  );
}

export default CvDisplayer;
