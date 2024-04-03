import { createSignal, For } from 'solid-js';

function OTPComponent() {
  const [otpDigits, setOtpDigits] = createSignal(['', '', '', '', '', '']);

  function handleSubmit() {
    const submittedOTP = otpDigits().join('');
    alert('Submitted OTP: ' + submittedOTP);
    setOtpDigits(['', '', '', '', '', '']);
  }

  // function handleInput(index, e) {
  //   const inputValue = e.target.value.replace(/\D/g, '');
  //   const updatedDigits = [...otpDigits()];
  //   updatedDigits[index] = inputValue.slice(-1);
  //   setOtpDigits(updatedDigits);
  //   if (index < 5) {
  //     document.getElementById(`otpInput${index + 1}`).focus();
  //   }
  // }

  function handlePaste(e) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    const updatedDigits = pasteData.split('').map((digit) => digit);
    setOtpDigits(updatedDigits);
    document.getElementById('otpInput5').focus();
  }

  function handleKeyDown(e, index) {
    if (e.key >= 0 && e.key <= 9) {
      const updatedDigits = [...otpDigits()];
      updatedDigits[index] = e.key;
      setOtpDigits(updatedDigits);
      console.log(otpDigits());
      console.log(index);
      if (index < 5) {
        document.getElementById(`otpInput${index + 1}`).focus();
      }
    } else if (e.key === 'Backspace' && index > 0) {
      const updatedDigits = [...otpDigits()];
      updatedDigits[index] = '';
      setOtpDigits(updatedDigits);
      console.log(index);
      document.getElementById(`otpInput${index - 1}`).focus();
    }
  }

  return (
    <div>
      <div>
        <For each={otpDigits()} fallback={<div>Loading...</div>}>
          {(digit, index) => (
            <input
              type='text'
              id={`otpInput${index}`}
              value={digit}
              placeholder=''
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength='1'
              onPaste={handlePaste}
            />
          )}
        </For>
        <button onClick={handleSubmit}>Submit OTP</button>
      </div>
    </div>
  );
}

export default OTPComponent;
