import React, { useState, useEffect } from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { IoIosCheckmark } from 'react-icons/io';
import axios from 'axios';
import './App.css';

function App() {
  const [scanning, setStatusScan] = useState(false);
  const [text, setText] = useState('');
  const [url, setURL] = useState('');
  const [output, setOutput] = useState('');

  let ref = React.useRef();

  useEffect(() => {
    return () => clearInterval(ref.current);
  }, []);

  const StartScan = () => {
    window.QRScanner.prepare();
    setStatusScan(true);
    window.QRScanner.show();
    ref.current = setInterval(() => {
      window.QRScanner.scan((err, qr) => {
        setText(qr);
      });
    }, 3000);
  };

  const finishScan = () => {
    window.QRScanner.hide();
    clearInterval(ref.current);
    setStatusScan(false);
  };

  const changeUrl = e => {
    setURL(e.target.value);
  };

  const check = () => {
    axios
      .post(url, { text })
      .then(function(response) {
        setOutput(JSON.stringify(response.data));
      })
      .catch(function(error) {
        alert(error);
        alert(error.message);
      });
  };

  return (
    <div className="App">
      {scanning ? (
        <div className="Show">
          {text}
          <button onClick={finishScan} className="CheckMark">
            <IoIosCheckmark />
          </button>
        </div>
      ) : (
        <div className="NotShow">
          <button className="Scan" onClick={StartScan}>
            <AiOutlineScan />
          </button>
          {text}
          <input
            type="text"
            placeholder="URL"
            className="URL"
            onChange={changeUrl}
          ></input>
          <button className="Check" onClick={check}>
            Check
          </button>
          <div className="Output">{output}</div>
        </div>
      )}
    </div>
  );
}

export default App;
