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
  Accordion: `import { For } from 'solid-js';
import { createStore } from 'solid-js/store';

export default function Accordion() {

 const data = [
    {
      question: 'What is Solibee?',
      answer:
        'Solibee is an open-source collection of simply styled, tested and accessible SolidJS components.',
    },
    {
      question: "Accessible? Tell me more...",
      answer: 'Yes our components are accessible. They adhere to WAI_ARIA design patterns',
    },
    {
      question: 'Who is on the team?',
      answer:
        'Our team is made up of 5 engineers: Bongi Sibanda, Congke Zhao, Lillian Tenn, Marselena Romero, and Neul Seol',
    },
    {
      question: "I'm excited, how do I install the components?",
      answer: 'You can install each component either manually or via CLI',
    },
  ];

  const [activeID, setActiveID] = createStore(Array(data.length).fill(false));

  function toggleAccordion(index) {
    setActiveID(activeID.map((_, i) => (i === index ? !activeID[i] : false)));
  }

  return (
    <div
      class='flex w-[500px] flex-col rounded-md  p-4'
      id='accordion-collapse'
    >
      <div class='border border-orange-100 rounded-md'>
        <For each={data}>
          {(obj, i) => {
            const isLastIndex = i() === data.length - 1; 
            return (
              <div
                id='wrapper'
                class={\`\${isLastIndex ? '' : 'border-b'}  border-orange-100\`}
                classList={{}}
              >
                <h2 id={\`accordion-collapse-heading-\${i()}\`}>
                  <button
                    type='button'
                    class='flex w-full items-center justify-between gap-10 px-2 py-3 text-sm font-bold hover:bg-orange-200/[0.1]'
                    data-accordion-target={\`#accordion-collapse-body-\${i()}\`}
                    aria-expanded={activeID[i()] ? true : false}
                    aria-controls={\`accordion-collapse-body-\${i()}\`}
                    onClick={() => toggleAccordion(i())}
                  >
                    <span>{obj.question}</span>
                    <svg
                      class={\`size-2 shrink-0 \${activeID[i()] ? 'rotate-180' : ''} transition-transform\`}
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 5 5 1 1 5'
                      />
                    </svg>
                  </button>
                </h2>

                <div
                  class={\` overflow-hidden \${
                    activeID[i()]
                      ? 'transition-transform transition-max-height max-h-full duration-200 ease-in-out'
                      : 'transition-transform transition-max-height max-h-0 duration-200 ease-in-out'
                  }\`}
                  id={\`accordion-collapse-body-\${i()}\`}
                  aria-labelledby={\`accordion-collapse-heading-\${i()}\`}
                >
                  <p class='p-2 text-sm'>{obj.answer}</p>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
`,
  SearchButton: `export default function Search() {
  return (
    <form class='mx-auto flex max-w-sm items-center' role='search'>
      <label for='search-input' class='sr-only'>
        Search
      </label>
      <div class='relative mx-2 flex items-center justify-center'>
        <div class='absolute left-2  text-orange-200'>
          <svg
            class=' h-4 w-4 '
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>

        <input
          aria-label='Search input'
          id='search-input'
          placeholder='Search ...'
          class='h-10 w-full items-center rounded-md px-2 py-4 pl-8 text-sm text-gray-600 hover:bg-orange-50 focus:border-orange-100  focus:ring-1 focus:ring-orange-100 border border-orange-100'
        ></input>
      </div>
    </form>
  );
}`,
};
