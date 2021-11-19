import React, { useState } from 'react'
import ReactDOM from "react-dom";
import '../../style/ModalSchedule.css'

const seats = Array.from({ length: 10 * 10 }, (_, i) => i);

function ModalSchedule({ message, open, onClose }) {
  const [selectedSeats, setSelectedSeats] = useState([])
  const [seats, setSeats] = useState([])

  const getSelectedSeats = (index) => {
    if (selectedSeats.includes(index)){
      setSelectedSeats([ ...selectedSeats.filter((item) => item !== index)])
    }
    else {
      setSelectedSeats([ ...selectedSeats, index])
    }
}


  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="modal">
        <div>
          <ul className="ShowCase">
            <li>
              <span className="seat" /> <small>N/A</small>
            </li>
            <li>
              <span className="seat selected" /> <small>Selected</small>
            </li>
            <li>
              <span className="seat occupied" /> <small>Occupied</small>
            </li>
          </ul>
        </div>
        <div class="container">
          <div class="screen"></div>
          <div className="seats-types">
                <div><div className="seat-example"></div>- Free</div>
                <div><div className="seat-example occupied"></div>- Occupied</div>
                <div><div className="seat-example selected"></div>- Selected</div>
            </div>
        </div>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.body
  );
}

export default ModalSchedule
