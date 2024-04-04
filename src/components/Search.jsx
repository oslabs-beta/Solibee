import search from "../../assets/search-5-svgrepo-com.svg";

export default function Search() {
  return (
    <div class="w-40">
      <button class="flex h-8 w-full items-center rounded-md border border-orange-100 text-sm leading-6 text-slate-700 hover:bg-orange-50">
        <img class="mx-2 h-6 opacity-65" src={search} alt="search icon" />
        Search ...
      </button>
    </div>
  );
}
