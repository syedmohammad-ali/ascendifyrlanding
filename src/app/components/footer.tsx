export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ascendifyr
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/company/ascendifyr/" className="hover:underline me-4 md:me-6">
              Follow us on LinkedIn
            </a>
          </li>
          <li>
            <a href="/privacy.html" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
