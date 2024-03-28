import search from "../../assets/search-5-svgrepo-com.svg";

export default function Search() {
  return (
    <div class="w-40">
      <button class="flex items-center text-slate-700 hover:bg-orange-50 border border-orange-200 leading-6 py-1.5 px-1 w-full rounded-md text-sm">
        <img class="h-7 px-1" src={search} alt="search icon" />
        Search ...
      </button>
    </div>
  );
}
