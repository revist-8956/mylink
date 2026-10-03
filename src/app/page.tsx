"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Background subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Profile Card */}
      <main className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl p-8 sm:p-10 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all hover:shadow-2xl">
        {/* Avatar */}
        <div className="relative mb-6 group">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 p-1 shadow-lg shadow-indigo-500/25">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 select-none">
              안
            </div>
          </div>
          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-zinc-900"></span>
          </span>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          Vibe Coder • Student
        </div>

        {/* Name & Title */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
          안준성
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-400 dark:text-zinc-500 tracking-wider uppercase mb-5">
          Junseong Ahn
        </p>

        {/* Bio */}
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300 mb-8 max-w-xs font-normal">
          안녕하세요! 바이브 코딩을 배우고 있는 학생입니다.
        </p>

        {/* Skill / Interest Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Next.js", "React", "Tailwind CSS", "바이브 코딩"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 text-sm font-semibold transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>링크가 복사되었습니다!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>프로필 링크 공유하기</span>
              </>
            )}
          </button>
        </div>

        {/* Footer info */}
        <footer className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 w-full text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            © 2026 안준성. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
