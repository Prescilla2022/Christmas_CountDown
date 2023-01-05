import React, { useEffect, useState, useCallback } from "react";
import swal from "sweetalert";

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [newyear, setNewYear] = useState(new Date("12/25/2023"));
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let timer = 0;

  const [seconds, setSeconds] = useState(0);
  const date = new Date();
  //let newyear = new Date("01/05/2023 10:48");

  async function setTimer() {
    const diff = newyear.getTime() - date.getTime();
    // const sec = Math.floor((diff % (1000 * 60)) / 1000);
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));

    setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));

    setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
  }
  function startCountDown() {
    if (seconds < 0 && minutes < 0) {
      swal({
        text: "Merry Christmas!!!!",

        button: "X",
      });

      return;
    } else {
      timer = setTimeout(() => {
        setTimer();
      }, 1000);
    }
  }

  useEffect(() => {
    startCountDown();
  }, [setTimer]);

  function reset(timer) {
    clearTimeout(timer);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className="timer">
      <h1>Only....</h1>
      <div className="countdown">
        <p>
          {days >= 0 ? (days < 10 ? `0${days}` : days) : `00`}
          <br></br>
          Days
        </p>
        <span>:</span>
        <p>
          {hours >= 0 ? (hours < 10 ? `0${hours}` : hours) : `00`} <br></br>
          Hours
        </p>
        <span>:</span>
        <p>
          {minutes >= 0 ? (minutes < 10 ? `0${minutes}` : minutes) : `00`}{" "}
          <br></br>Minutes
        </p>
        <span>:</span>
        <p>
          {seconds >= 0 ? (seconds < 10 ? `0${seconds}` : seconds) : `00`}{" "}
          <br></br>
          Seconds
        </p>
      </div>
      <h1>Until Christmas</h1>
      {/*<button
        onClick={() => {
          clearTimeout(timer);
        }}
      >
        Stop
      </button>*/}
      {/*<input placeholder="mm/dd/yyyy" id="newYear"></input>*/}

      <button
        onClick={() => {
          {
            /*setNewYear(new Date(document.getElementById("newYear").value));
        console.log(newyear);*/
          }
          startCountDown();
        }}
      >
        Start Countdown
      </button>
      <button onClick={() => reset(timer)}>Click twice to Reset</button>
    </div>
  );
}
