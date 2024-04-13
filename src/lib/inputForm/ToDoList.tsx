import { For, createSignal } from 'solid-js';
type Todo = { id: number; text: string; completed: boolean };

export default function ToDoList () {
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
    <div class="flex flex-col">
      <div>
        <input placeholder='new todo here' ref={input} />
        <button class="bg-slate-200 hover:bg-orange-100 rounded-md	p-1 px-2 ml-2"
          onClick={() => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = '';
          }}
        >
          Add Todo
        </button>
      </div>
      <div>
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
      </div>
    </div>
  );
};
