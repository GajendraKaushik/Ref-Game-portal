import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [remainimgTime, setRemainingTime] = useState(targetTime * 1000)
  const timerIsActive = remainimgTime > 0 && remainimgTime < targetTime * 1000; 
  
  if (remainimgTime <= 0 )
{
  clearInterval(timer.current);
 
  dialog.current.open();
}  
  function handleReset(){
    setRemainingTime(targetTime * 1000);
  }
  function handStart() {
    timer.current = setInterval(() => {
       setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
    }, 8);

  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} remainimgTime={remainimgTime} targetTime={targetTime} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "time is running..." : "timer inactive"}
        </p>
      </section>
    </>
  );
}
