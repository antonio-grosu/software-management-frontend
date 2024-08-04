import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-500/10 poppins flex  items-center justify-center md:items-top md:justify-between">
        <div className="md:hidden p-8 h-screen flex items-center">
          <h1 className=" text-center gap-4 p-2 rounded-md bg-red-100 font-bold text-red-500 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                clip-rule="evenodd"
              />
            </svg>
            Software Indisponibil pe Mobil
          </h1>
        </div>
        <div className="md:block hidden">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
