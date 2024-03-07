import { forwardRef, useImperativeHandle, useRef, Port } from "react";

import {createPortal} from 'react-dom'
const ResultModal = forwardRef(function ResultModal(
  {targetTime, remainimgTime, onReset},
  ref
) {
  const dialog = useRef();
  const  userLost = remainimgTime <= 0 ;
  const formatedRemainingTime = (remainimgTime / 1000).toFixed(2);
  const score = Math.round((1 - remainimgTime /(targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost &&  <h2>Your score :{score}</h2>}
      <p>
        The target time <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        {" "}
        You stopped the timer with <strong>{formatedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
