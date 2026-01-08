import "./globals.css";

export const metadata = {
  title: "Ryze — AI That Drives Action",
  description: "Visually dominant AI product platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
