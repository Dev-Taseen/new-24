// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-4 sm:flex-row sm:px-5 sm:py-5">

        {/* Copyright */}
        <p className="m-1 cursor-pointer text-center text-xs text-gray-600 hover:text-red-800 sm:m-2 sm:text-left sm:text-sm lg:ml-20">
          © 2026 BanglaBulletin
        </p>

        {/* Source */}
        <p className="m-1 cursor-pointer text-center text-xs text-gray-600 hover:text-red-800 sm:m-2 sm:text-right sm:text-sm lg:mr-20">
          Source: BBC Bangla
        </p>

      </div>
    </footer>
  );
}