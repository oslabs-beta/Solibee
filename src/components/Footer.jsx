export default function Footer() {
  return (
    <footer class='bg-white-200/30 left-0 mx-auto w-full flex-col items-center justify-center px-5 py-5 text-sm font-medium text-slate-700 backdrop-blur-sm'>
      <hr class='border-1 mb-5 border-orange-100' />
      <h3 class='flex justify-center'>
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
