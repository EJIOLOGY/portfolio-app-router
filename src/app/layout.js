import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-container">{children}</div>
      </body>
    </html>
  );
}
