export default function SearchForm({ query }: { query: string }) {
  return (
    <form class="flex w-full gap-2">
      <input
        type="text"
        name="q"
        value={query}
        placeholder="search by product name"
        class="flex-grow w-full shadow-sm focus:ring-indigo-800 focus:border-indigo-800 block sm:text-lg border-1 rounded-md p-3"
      />
      <button
        type="submit"
        class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-10"
      >
        Search
      </button>
    </form>
  );
}
