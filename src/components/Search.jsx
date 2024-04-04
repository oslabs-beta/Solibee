import search from "../../assets/search-5-svgrepo-com.svg";

export default function Search() {
  return (
    <div class="w-40">
      <button class="flex items-center text-slate-700 hover:bg-orange-50 border border-orange-100 leading-6 h-8 w-full rounded-md text-sm">
        <img class="h-6 mx-2 opacity-65" src={search} alt="search icon" />
        Search ...
      </button>
    </div>
  );
}
