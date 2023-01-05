import React, { useEffect, useState, useRef } from "react";

export default function Message() {
  const [message, setMessage] = useState("");
  const month = { 1: "January", 12: "December" };
  const [displayArray, setDisplay] = useState([]);
  const messageArray = [];
  const scrollToRef = useRef();
  console.log(scrollToRef);

  console.log(localStorage);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes("message")) {
        messageArray.push(localStorage.getItem(localStorage.key(i)));
      }
    }
    setDisplay((prev) => [
      ...prev,
      messageArray.map((item, index) => <p key={index}>{item}</p>),
    ]);
  }, []);

  function handleChange(e) {
    setMessage(e.target.value);
  }
  function handleClick() {
    const date = new Date();
    const time = `${date.getDate()},${
      month[date.getMonth() + 1]
    } ${date.getFullYear()} ${
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    }:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:${
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    }`;
    const item = `${message} ${time}`;
    localStorage.setItem(`message${time}`, `${message} ${time}`);

    setDisplay((prev) => [
      ...prev,
      <p ref={scrollToRef} key={item}>
        {item}
      </p>,
    ]);
    scrollToRef.current.scrollIntoView();
  }
  function clear() {
    setDisplay("");
    localStorage.clear();
  }

  return (
    <div className="greetings">
      <div className="messages">{displayArray}</div>
      <input
        onChange={handleChange}
        placeholder="Enter your message"
        type="search"
      ></input>
      <section>
        <button onClick={handleClick}>Submit</button>
        <button onClick={clear}>Clear</button>
      </section>
    </div>
  );
}
