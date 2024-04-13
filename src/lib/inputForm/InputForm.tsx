import { createSignal } from 'solid-js';

function InputForm() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Submitted:', { name: name(), email: email() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="name" class="my-2.5">
        <div><label for='name'>Name:</label></div>
        
        
        <input
          id='name'
          type='text'
          placeholder='solidbee'
          value={name()}
          onInput={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div class="my-2.5">
        <div><label for='email'>Email:</label></div>
        <input
          id='email'
          type='email'
          placeholder='solidbee@gmail.com'
          value={email()}
          onInput={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button class="bg-orange-100 rounded-md	p-1 px-2" type='submit'>Submit</button>
    </form>
  );
}

export default InputForm;
