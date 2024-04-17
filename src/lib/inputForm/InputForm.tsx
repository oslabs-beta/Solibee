//the docs should include the following update your tailwind config to include the ff
// tailwind.config.js
// module.exports = {
//   // ...
//   plugins: [
//     // ...
//     require('@tailwindcss/forms'),
//   ],
// }
import { createSignal } from 'solid-js';

function InputForm() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Submitted:', { name: name(), email: email() });
  };

  return (
    <div class='mx-auto p-2'>
      <form class='flex flex-col gap-2' onSubmit={handleSubmit}>
        <div id='name' class='mt-2.5'>
          <div>
            <label id='nameLabel' class='font-medium text-gray-900' for='name'>
              Name
            </label>
          </div>
          <input
            id='name'
            type='text'
            placeholder='solibee'
            value={name()}
            onInput={(e) => setName(e.target.value)}
            required
            class='mt-2 rounded-md border-0 shadow outline outline-1 outline-orange-100/[0.5] focus:border-orange-100 focus:shadow focus:ring-2 focus:ring-orange-100'
          />
        </div>
        <div class='my-2.5'>
          <div>
            <label
              id='emailLabel'
              class='font-medium text-gray-900'
              for='email'
            >
              Email
            </label>
          </div>
          <input
            id='email'
            type='email'
            placeholder='solibee@gmail.com'
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            required
            class='mt-2 rounded-md border-0 shadow outline outline-1 outline-orange-100/[0.5]  focus:border-orange-100 focus:shadow focus:outline-none focus:ring-2 focus:ring-orange-100'
          />
        </div>
        <button class='mx-auto rounded-md	bg-orange-100 p-1 px-2' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;
