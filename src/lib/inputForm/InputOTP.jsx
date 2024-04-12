import { For } from 'solid-js';
import { createStore } from 'solid-js/store';

function InputOTP() {
  const [otpDigits, setOtpDigits] = createStore(['', '', '', '', '', '']);

  function handleSubmit() {
    const submittedOTP = otpDigits.join('');
    alert('Submitted OTP: ' + submittedOTP);
    setOtpDigits(['', '', '', '', '', '']);
  }

  function handlePaste(e) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    const updatedDigits = pasteData.split('').map((digit) => digit);
    // console.log(updatedDigits);
    setOtpDigits(updatedDigits);
    // console.log('OTP digits state:', otpDigits);
    // document.getElementById('otpInput5').focus();
    const lastInput = document.getElementById('otpInput5');
    if (lastInput) {
      lastInput.focus();
    }
  }

  function handleKeyDown(e, index) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
      setOtpDigits(index(), e.key);
      if (index() < 5) {
        const nextInput = document.getElementById(`otpInput${index() + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else if (e.key === 'Backspace' && index() >= 0) {
      setOtpDigits(index(), '');
      const prevInput = document.getElementById(`otpInput${index() - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  return (
    <div>
      <div>
        <For each={otpDigits} fallback={<div>Loading...</div>}>
          {(digit, index) => (
            <input
              type='text'
              id={`otpInput${index()}`}
              value={digit}
              placeholder=''
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength='1'
              onPaste={(e) => handlePaste(e)}
              ref={index() === 5 ? (el) => { if (el) el.focus(); } : null}
            />
          )}
        </For>
        <button onClick={handleSubmit}>Submit OTP</button>
      </div>
    </div>
  );
}

export default InputOTP;
