export default function Footer() {
  return (
    <footer class=' bg-white-200/30 left-0 mx-auto w-full flex-col items-center justify-center border-t border-orange-100 dark:border-orange-300 px-5 py-5 text-sm font-medium  backdrop-blur-sm'>
      <h3 class='text-footerfont flex justify-center'>
        Built by Solibee. Source code available on{' '}
        <a
          class='solibee-link ml-1'
          href='https://github.com/oslabs-beta/Solibee'
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub.
        </a>
      </h3>
    </footer>
  );
}
