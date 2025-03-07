import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata = {
  title: "Chat bot",
  description: "At normal chatbot for chatting wiht an llm",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
            <SidebarInset>
              {children}
            </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
