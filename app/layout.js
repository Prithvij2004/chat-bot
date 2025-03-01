import "./globals.css";

export const metadata = {
  title: "Chat bot",
  description: "At normal chatbot for chatting wiht an llm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
