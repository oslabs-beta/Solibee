const generateOTPString = `
import { createSignal, createEffect, onCleanup } from 'solid-js';
import clipboardCopy from 'clipboard-copy';

function GenerateOTP() {
  const [otp, setOTP] = createSignal(generateOTP());
  const [copied , setCopied] = createSignal(false);

  function generateOTP() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  function regenerateOTP() {
    setOTP(generateOTP());
  }

  const copyOTP = async () => {
    try {
      await navigator.clipboard.writeText(otp());
      setCopied(true);
    } catch (error) {
      console.error('Error copying text: ', error);
    }
  };

  //if there is a change in copied, set a timeout & cleanup on refresh
  createEffect(() => {
    // Reset copied state after 2 seconds
    let resetCopyTimer: ReturnType<typeof setTimeout> | undefined;

    if (copied()) {
      resetCopyTimer = setTimeout(() => setCopied(false), 2000);
    }

    onCleanup(() => {
      clearTimeout(resetCopyTimer);
    });
  });

  return (
    <div>
      <div aria-live='polite'>
        Your one-time password is: <span>{otp()}</span>
        <div>
          <button
            class='mr-2 mt-2 rounded-md bg-orange-100/[0.8]	p-1 px-2 hover:bg-orange-100'
            onClick={regenerateOTP}
          >
            Regenerate
          </button>
          <button
            class='rounded-md bg-orange-100/[0.8] p-1	px-2 hover:bg-orange-100'
            onClick={copyOTP}
          >
            {copied() ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenerateOTP;`

export default generateOTPString;