import { createSignal } from "solid-js";
import clipboardCopy from "clipboard-copy";

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
      <div aria-live="polite">
        Your one-time password is: <span>{otp()}</span>
        <button onClick={regenerateOTP}>Regenerate</button>
      </div>
      <button onClick={copyOTP}>Copy OTP</button>
      <span id="copied-msg"></span>
    </div>
  );
}

export default GenerateOTP;
