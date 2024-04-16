import { createSignal, For, createEffect } from 'solid-js';

//a component that renders github avatars when given github handles.
export default function Contributors(props) {
  const [contributors, setContributors] = createSignal();

  // Update contributors when props.githubHandles changes
  createEffect(() => {
    console.log(props);
    setContributors(props.githubHandles);
    console.log(contributors());
  });

  //TO DO: add a fallback for when an image doesn't load.
  //Add popup on hover with detailed info about git page

  //using solid For method
  return (
    <ul class='m-5 flex flex-wrap justify-center -space-x-2 overflow-hidden'>
      <For each={contributors()}>
        {(gitHandle) => (
          <li class='ml-3'>
            <a
              class='avatar'
              href={`https://github.com/${gitHandle}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                class=' avatar inline-block h-40 w-40 rounded-full ring-2 ring-white'
                src={`https://github.com/${gitHandle}.png`}
                style={{ display: 'block' }}
                alt={`${gitHandle} github avatar`}
              />
            </a>
          </li>
        )}
      </For>
    </ul>
  );
}
