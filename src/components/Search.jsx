import search from "../../assets/search-5-svgrepo-com.svg";

export default function Search() {
  return (
    // <form class="max-w-md mx-auto h-8">
    //   <label
    //     for="default-search"
    //     class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    //   >
    //     Search
    //   </label>
    //   <div class="relative">
    //     <input
    //       type="search"
    //       id="default-search"
    //       class="block w-full p-4 ps-10 text-sm text-white-900 border border-white-300 rounded-lg bg-orange-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-white-700 dark:border-orange-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
    //       placeholder="Search"
    //       required
    //     />
    //     <button
    //       type="submit"
    //       class="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-yellow-800"
    //     >
    //       Search
    //     </button>
    //   </div>
    // </form>
    <div>
      <button class="flex items-center hover:bg-gray-300 border border-orange-200 py-2 px-4 w-full rounded-md text-sm ">
        <img class="h-6 mr-2" src={search} alt="search icon" />
        Search ...
      </button>
    </div>
  );
}
