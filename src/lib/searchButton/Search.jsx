export default function Search() {
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
}



