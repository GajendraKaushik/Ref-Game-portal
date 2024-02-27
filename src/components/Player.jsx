import { useState, useRef } from "react";
export default function Player() {
  const inputPlayerName = useRef();
  
  const [playerName, setPlayerName] =  useState(null)
  // const [submit, setSubmit] = useState(false);
  // function handleChange(event){
  //   setSubmit(false)
  //   setPlayerName(event.target.value)

  // }

  function handelSubmit() {
     setPlayerName(inputPlayerName.current.value)
     inputPlayerName.current.value =''
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? " unknown entity"}</h2>
      <p>
        <input type="text" ref={inputPlayerName} />
        <button onClick={handelSubmit}>Set Name</button>
      </p>
    </section>
  );
}
