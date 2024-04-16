// pass in the props.textToCopy to select the text to copy
import { createSignal } from 'solid-js';

export default function CopyButton(props) {
 
  const [copied, setCopied] = createSignal(false);
  // fn for copying to clipboard
  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(props.textToCopy);

  // };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(props.textToCopy)
      .then(() => {
        setCopied(true);
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => console.error('Error copying text: ', error));
  };

  return (
    <button
      aria-label='Copy'
      class={`absolute bottom-2 right-2 flex h-0.5 w-0.5 items-center justify-center rounded px-4 py-4 `}
      onClick={copyToClipboard}
    >
      {!copied() && <svg
        class='absolute'
        id='Copy_24'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:xlink='http://www.w3.org/1999/xlink'
      >
        <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />

        <g transform='matrix(0.53 0 0 0.53 12 12)'>
          <path
            style={{
              stroke: 'none',
              'stroke-width': '1',
              'stroke-dasharray': 'none',
              'stroke-linecap': 'butt',
              'stroke-dashoffset': '0',
              'stroke-linejoin': 'miter',
              'stroke-miterlimit': '4',
              fill: 'white',
              'fill-rule': 'nonzero',
              opacity: '1',
            }}
            transform=' translate(-24, -24)'
            d='M 18.5 5 C 15.480226 5 13 7.4802259 13 10.5 L 13 32.5 C 13 35.519774 15.480226 38 18.5 38 L 34.5 38 C 37.519774 38 40 35.519774 40 32.5 L 40 10.5 C 40 7.4802259 37.519774 5 34.5 5 L 18.5 5 z M 18.5 8 L 34.5 8 C 35.898226 8 37 9.1017741 37 10.5 L 37 32.5 C 37 33.898226 35.898226 35 34.5 35 L 18.5 35 C 17.101774 35 16 33.898226 16 32.5 L 16 10.5 C 16 9.1017741 17.101774 8 18.5 8 z M 11 10 L 9.78125 10.8125 C 8.66825 11.5545 8 12.803625 8 14.140625 L 8 33.5 C 8 38.747 12.253 43 17.5 43 L 30.859375 43 C 32.197375 43 33.4465 42.33175 34.1875 41.21875 L 35 40 L 17.5 40 C 13.91 40 11 37.09 11 33.5 L 11 10 z'
            stroke-linecap='round'
          />
        </g>
      </svg>}
      {copied() && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='absolute m-2 h-5 w-5 fill-current text-white'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M7.293 10.293a1 1 0 011.414 0L11 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414 1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </button>
  );
}
