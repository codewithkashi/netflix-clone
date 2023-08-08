import { Toaster } from "react-hot-toast";
import "@styles/index.css";
import MessageToaster from "@components/MessageToaster";
export const metadata = {
  title: "Netflix Clone",
  description: "Watch and enjoy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <MessageToaster>{children}</MessageToaster>
        </div>
      </body>
    </html>
  );
}
