const inputOTPString = `
import { For } from 'solid-js';
import { createStore } from 'solid-js/store';

function InputOTP() {
  //array of string representations of the otp digits
  const [otpDigits, setOtpDigits] = createStore(Array(6).fill(''));

  /**
   * A function that handles form submit
   * on submit it will alert the user to the input they inputted
   * if input contains some non number inputs, the user will be alerted
   * @function
   *
   */
  //if the number is less than 6 deal with that
  function handleSubmit(e) {
    e.preventDefault();
    const submittedOTP = otpDigits.join('');

    if (submittedOTP.length < 6) {
      e.preventDefault();
      alert('Enter 6 digits');
    } else if (otpDigits.some((el) => isNaN(Number(el)))) {
      e.preventDefault();
      alert('Enter numbers only');
    } else {
      alert(\`Submitted OPT \${ submittedOTP }\`);
    }

    otpDigits.map((el, index) => {
      setOtpDigits(index, '');
    });
  }

  /**
   * A function that handles keyup events on pin inputs. If a button has a pin number added,
   * the store is updated and the next pin input will be focused.
   * @function
   * @param {el} element - current active element
   * @param {prevId} prevId - the id of the previous element, which is the same as the id of el when index = 0
   * @param {nextId} index - the id of the next element, which is the same as the id of el when index = 5
   */

  function focusNextInput(el, prevId, nextId) {
    //if the user deleted a value
    if (el.value.length === 0) {
      if (prevId) {
        document.getElementById(prevId).focus();
      }
    }
    //if the user entered a value
    else {
      if (nextId) {
        document.getElementById(nextId).focus();
      }
    }
  }

  /**
   * A function that handles paste events on pin inputs.
   * When a string of inputs is pasted, the store is updated
   * @function
   * @param {e} event - paste event to be handled
   */

  function handlePaste(e) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    const updatedDigits = pasteData.split('').map((digit) => digit);
    updatedDigits.map((el, index) => {
      setOtpDigits(index, el);
    });
  }

  /**
   * A function that handles keyup events on pin inputs. If a button has a pin number added,
   * the store is updated and the next pin input will be focused.
   * @function
   * @param {e} event - The keyup event
   * @param {index} index - Signal index attached to the target input
   */

  function handleKeyUp(e, index) {
    const prevId =
      index() > 0 ? \`otpInput\${ index() - 1 } \` : \`otpInput\${ index() } \`;
    const nextId =
      index() < 5 ? \`otpInput\${ index() + 1 } \` : \`otpInput\${ index() } \`;

    if (e.key >= 0 && e.key <= 9) {
      setOtpDigits(index(), parseInt(e.key));
      focusNextInput(e.target, prevId, nextId);
    } else if (e.key === 'Backspace') {
      setOtpDigits(index(), '');
      focusNextInput(e.target, prevId, nextId);
    } else if (e.key.length > 1) {
      //to ignore arrowkeys & other complicated key codes
      return;
    } else {
      setOtpDigits(index(), e.key);
      focusNextInput(e.target, prevId, nextId);
    }
  }

  return (
    <form>
      <div class='flex flex-col'>
        {/* this div contains the buttons */}
        <div class='mb-2 flex gap-2'>
          <For each={otpDigits} fallback={<div>Loading...</div>}>
            {(digit, index) => {
              return (
                <>
                  <label for={\`otpInput\${ index() } \`} class='sr-only'>
                    OTP Input {index()}
                  </label>
                  <input
                    type='text'
                    id={\`otpInput\${ index() }\`}
                    placeholder='-'
                    value={digit}
                    maxLength='1'
                    onPaste={handlePaste}
                    class='h-12 w-12 rounded-lg border border-orange-100 text-center shadow-sm focus:border-0 focus:ring focus:ring-orange-100'
                    onKeyUp={(e) => handleKeyUp(e, index)}
                  />
                </>
              );
            }}
          </For>
        </div>
        <button
          class='mx-auto rounded-md	bg-orange-100 p-1 px-2'
          onClick={handleSubmit}
        >
          Submit OTP
        </button>
      </div>
    </form>
  );
}

export default InputOTP`;

export default inputOTPString;
