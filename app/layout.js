import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-600/10 poppins flex items-top justify-between">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
