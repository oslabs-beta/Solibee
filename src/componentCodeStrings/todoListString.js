const todoListString = `
import { For, createSignal } from 'solid-js';
type Todo = { id: number; text: string; completed: boolean };

export default function ToDoList() {
  let input!: HTMLInputElement;
  let todoId = 0;
  const [todos, setTodos] = createSignal<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos([...todos(), { id: ++todoId, text, completed: false }]);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos().map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div class='flex flex-col bg-gray-100 p-4'>
      <div class='mb-4'>
        <input
          class='mt-2 rounded-md border-2 border-orange-100 shadow focus:border-orange-100 focus:outline-none focus:ring-1 focus:ring-orange-100'
          placeholder='new todo here'
          ref={input}
        />
        <button
          class='ml-2 rounded-md bg-orange-200 p-1 px-2 text-white'
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
              <div class='w-full rounded-t-lg border-b border-orange-100'>
                <div class='flex items-center ps-3'>
                  <input
                    class='y-700 h-4 w-4 rounded-full border bg-orange-100 shadow checked:bg-orange-100 hover:bg-orange-200 checked:hover:bg-orange-200 focus:ring-2 focus:ring-orange-200'
                    type='checkbox'
                    checked={todo.completed}
                    onchange={[toggleTodo, id]}
                  />
                  <span
                    class='ms-2 w-full py-3 text-base '
                    style={{
                      'text-decoration': todo.completed
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {text}
                  </span>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}`;

export default todoListString;