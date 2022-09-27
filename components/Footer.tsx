export default function Footer() {
  return (
    <footer class="border-t-2 border-gray-200 bg-gray-100 h-32 mt-5 flex flex-col gap-4 justify-center">
      <div class="mx-auto max-w-screen-lg flex items-center justify-center gap-8">
        <a
          href="https://github.com/rdbhagat999/freshapp"
          class="text-gray-600 hover:underline"
          target="_blank"
        >
          Source
        </a>
      </div>
      <div class="text-gray-600 text-center">
        <span>© 2022 Ramandeep Bhagat</span>
      </div>
    </footer>
  );
}
