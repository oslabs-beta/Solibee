export const JsxToString = {
  InputFile: `
  import { createSignal } from 'solid-js';

  function FileUpload() {
    const [file, setFile] = createSignal(null);
  
    const handleFileChange = (event) => {
      const target = event.target;
      const selectedFile = target.files && target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  
    const handleSubmit = () => {
      if (file()) {
        console.log('Uploading file:', file().name);
      } else {
        console.error('No file selected.');
      }
    };
  
    return (
      <div>
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleSubmit}>Upload</button>
      </div>
    );
  }`,
  InputForm: `
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
}`,
  InputOTP: `
  import { createSignal, For } from 'solid-js';

  function InputOTP() {
  const [otpDigits, setOtpDigits] = createSignal(['', '', '', '', '', '']);

    function handleSubmit() {
      const submittedOTP = otpDigits().join('');
      alert('Submitted OTP: ' + submittedOTP);
      setOtpDigits(['', '', '', '', '', '']);
    }

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
          document.getElementById(\`otpInput\${index + 1}\`).focus();
        }
      } else if (e.key === 'Backspace' && index > 0) {
        const updatedDigits = [...otpDigits()];
        updatedDigits[index] = '';
        setOtpDigits(updatedDigits);
        console.log(index);
        document.getElementById(\`otpInput\${index - 1}\`).focus();
      }
    }

    return (
      <div>
        <div>
          <For each={otpDigits()} fallback={<div>Loading...</div>}>
            {(digit, index) => (
              <input
                type='text'
                id={\`otpInput\${index}\`}
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
  }`,
  ToDoList: `
  import { For, createSignal } from 'solid-js';
  type Todo = { id: number; text: string; completed: boolean };

  const ToDoList = () => {
    let input!: HTMLInputElement;
    let todoId = 0;
    const [todos, setTodos] = createSignal<Todo[]>([]);
    const addTodo = (text: string) => {
      setTodos([...todos(), { id: ++todoId, text, completed: false }]);
    };
    const toggleTodo = (id: number) => {
      setTodos(
        todos().map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    return (
      <>
        <div>
          <input placeholder='new todo here' ref={input} />
          <button
            onClick={() => {
              if (!input.value.trim()) return;
              addTodo(input.value);
              input.value = '';
            }}
          >
            Add Todo
          </button>
        </div>
        <For each={todos()}>
          {(todo) => {
            const { id, text } = todo;
            return (
              <div>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onchange={[toggleTodo, id]}
                />
                <span
                  style={{
                    'text-decoration': todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {text}
                </span>
              </div>
            );
          }}
        </For>
      </>
    );
  };`,
  GenerateOTP: `
  import { createSignal } from 'solid-js';
  import clipboardCopy from 'clipboard-copy';

  function GenerateOTP () {
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
          <button onClick={regenerateOTP}>Regenerate</button>
        </div>
        <button onClick={copyOTP}>Copy OTP</button>
        <span id='copied-msg'></span>
      </div>
    );
  }`,
  DragAndDrop: `
  import { createEffect, createSignal } from "solid-js";
  import { createStore } from "solid-js/store";
  import Column from "./Column.jsx";

  export default (props) => {
    let itemIndex = 0;
    let colIndex = 0;
    const [items, setItems] = createStore({});
    const [columns, setColumns] = createStore({});
    const [selectedItem, setSelectedItem] = createSignal(null);

    const updateItems = (method, payload) => {
      const { itemID } = payload;
      switch (method) {
        case "create":
          setItems({
            ...items,
            [itemIndex]: { ...payload, itemID: itemIndex, order: itemIndex },
          });
          itemIndex++;
          break;
        case "update":
          setItems(itemID, { ...items[itemID], ...payload });
          if (payload.order != undefined) {
            Object.keys(items).forEach((id) => {
              if (items[id].order >= payload.order && id != itemID) {
                setItems(id, "order", (o) => o + 1);
              }
            });
          }
          break;
        case "delete":
          setItems(itemID, undefined);
          break;
      }
    };

    const updateColumns = (method, payload) => {
      const { colID } = payload;
      switch (method) {
        case "create":
          setColumns({
            ...columns,
            [colIndex]: { ...payload, colID: colIndex },
          });
          colIndex++;
          break;
        // case "delete":
        //   setColumns((c) => c.filter((col) => col.colID != colID));
        //   break;
      }
    };

    return (
      <>
        <button
          class="m-1 rounded-md bg-slate-200 p-4 pb-2 pt-2"
          onClick={() => updateColumns("create", {})}
        >
          New Col
        </button>
        <div class="m-1 flex rounded-xl bg-slate-200 p-1">
          <For each={Object.keys(columns)}>
            {(colID) => (
              <Column
                colID={colID}
                items={items}
                updateItems={updateItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )}
          </For>
        </div>
      </>
    );
  };`,
  Accordion: `
  I am Accordion code.`
};
