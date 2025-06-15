
import { useRef } from "react";
import { Search } from "lucide-react";

export type SearchQuery = {
  term: string;
  category: string;
};

interface SearchBarProps {
  search: SearchQuery;
  setSearch: (q: SearchQuery) => void;
  categories: string[];
}
export function SearchBar({ search, setSearch, categories }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      className="w-full flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:items-end md:justify-center px-2 py-4"
      onSubmit={e => e.preventDefault()}
    >
      {/* Category Dropdown */}
      <select
        className="border-gray-300 bg-white rounded-2xl shadow-sm px-4 py-2 min-w-[128px] text-gray-800 font-semibold focus:ring-2 focus:ring-gray-800 focus:outline-none transition-all text-base"
        value={search.category}
        onChange={e => setSearch({ ...search, category: e.target.value })}
        aria-label="Select Category"
      >
        {categories.map(cat =>
          <option value={cat} key={cat}>{cat}</option>
        )}
      </select>
      {/* Search Input */}
      <div className="relative flex-1 min-w-[180px] w-full">
        <input
          ref={inputRef}
          type="text"
          name="q"
          autoComplete="off"
          value={search.term}
          onChange={e => setSearch({ ...search, term: e.target.value })}
          placeholder="Search products…"
          className="w-full pl-5 pr-12 py-3 rounded-2xl shadow-lg border border-gray-200 bg-white font-medium text-gray-900 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-200"
          style={{ fontFamily: "'Inter', 'Roboto', 'Open Sans', sans-serif" }}
        />
        {/* Search Button */}
        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center bg-gray-900 hover:bg-black text-white rounded-full px-4 py-1.5 text-[16px] font-semibold shadow-md transition-transform duration-200 focus:ring-2 focus:ring-gray-900"
          style={{ minHeight: 36, minWidth: 36 }}
          aria-label="Search"
          onClick={() => inputRef.current?.focus()}
        >
          <Search size={20} className="mr-1" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
}
