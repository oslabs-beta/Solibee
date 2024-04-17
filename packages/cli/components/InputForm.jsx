import { createSignal } from 'solid-js';

function InputForm() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name: name(), email: email() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for='name'>Name:</label>
        <input
          id='name'
          type='text'
          placeholder='solidbee'
          value={name()}
          onInput={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label for='email'>Email:</label>
        <input
          id='email'
          type='email'
          placeholder='solidbee@gmail.com'
          value={email()}
          onInput={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default InputForm;
