import './globals.css';
import Navbar from './Navbar';

export const metadata = {
  title: 'Trimaax Tech',
  description: 'Industrial Manufacturing & Engineering',
};

// We added ": { children: React.ReactNode }" to fix the error
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        
        {/* Simple Footer directly in the layout for now */}
        <footer className="bg-slate-950 text-gray-400 py-6 text-center">
            <p>© 2024 Trimaax Tech. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}