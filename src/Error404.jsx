import { createSignal, createEffect } from 'solid-js';
import beeGif from '../assets/bee-gif(2).gif';

function Error404() {
  const [moveImage, setMoveImage] = createSignal(false);

  createEffect(() => {
    const timeout = setTimeout(() => {
      setMoveImage(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id='error-container'
      class='mt-5 flex flex-col font-pacifico'
      style={{ position: 'relative' }}
    >
      <div>
        <h1 class='text-center text-9xl'>404</h1>
        {/* img credit to: https://www.pinterest.com/pin/cute-animated-honey-bee-gifs-at-best-animations--572731277609446312/ */}
        <img
          id='bee-img'
          // class='h-auto w-44'
          class={`h-auto w-44 ${moveImage() ? 'translate-x-full transition-transform' : ''}`}
          src={beeGif}
          alt='Bee GIF'
          style={{ transition: 'transform 7s linear' }}
        />
      </div>
      <h2 class='text-center text-8xl'>Page Not Found</h2>
    </div>
  );
}

export default Error404;
