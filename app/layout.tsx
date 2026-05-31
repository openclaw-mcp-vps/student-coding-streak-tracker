import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreakCode — Gamify Your Coding Practice",
  description: "Track daily coding activity across GitHub, LeetCode and more. Compete on streak leaderboards with fellow CS students."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6a289d49-425d-4fcd-a22f-6e8c5a6afc86"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
