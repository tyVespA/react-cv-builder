import React from "react";
import s from "../styles/CvBuilder.module.css";

function CvBuilder(props) {
  const [name, setName] = React.useState("");
  return (
    <section className={s.builderSection}>
      <form action=""></form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          props.setName(e.target.value);
        }}
      />
    </section>
  );
}

export default CvBuilder;
