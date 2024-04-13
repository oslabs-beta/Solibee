import { createSignal } from 'solid-js';
import clipboardCopy from 'clipboard-copy';

function GenerateOTP() {
  const [otp, setOTP] = createSignal(generateOTP());

  function generateOTP() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  function regenerateOTP() {
    setOTP(generateOTP());
  }

  function copyOTP() {
    clipboardCopy(otp());
  }

  return (
    <div>
      <div aria-live='polite'>
        Your one-time password is: <span>{otp()}</span>
        <div>
          <button
            class='mr-2 rounded-md bg-slate-200	p-1 px-2 hover:bg-orange-100'
            onClick={regenerateOTP}
          >
            Regenerate
          </button>
          <button
            class='rounded-md bg-slate-200 p-1	px-2 hover:bg-orange-100'
            onClick={copyOTP}
          >
            Copy
          </button>
        </div>
      </div>
      <span id='copied-msg'></span>
    </div>
  );
}

export default GenerateOTP;
