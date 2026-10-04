"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
      setTimeout(() => {
        setShowToast(false);
      }, 3200);
    } catch {
      setCopied(false);
    }
  };

  const links = [
    {
      title: "GitHub Repository",
      desc: "오픈소스 프로젝트 & 일일 커밋 기록",
      url: "https://github.com",
      badge: "CODE",
      iconBg: "bg-[#5865f2] text-white",
      hoverBorder: "hover:border-[#5865f2] hover:shadow-[0_8px_24px_rgba(88,101,242,0.18)]",
      accentText: "group-hover:text-[#5865f2]",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      title: "기술 블로그 & 개발 일지",
      desc: "바이브 코딩 학습 기록과 트러블슈팅 TIL",
      url: "https://velog.io",
      badge: "LOG",
      iconBg: "bg-[#00b0f4] text-white",
      hoverBorder: "hover:border-[#00b0f4] hover:shadow-[0_8px_24px_rgba(0,176,244,0.18)]",
      accentText: "group-hover:text-[#00b0f4]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "바이브 코딩 프로젝트 쇼케이스",
      desc: "아이디어를 현실로 구현한 웹 프로덕트 모음",
      url: "#projects",
      badge: "WORK",
      iconBg: "bg-[#ec48bd] text-white",
      hoverBorder: "hover:border-[#ec48bd] hover:shadow-[0_8px_24px_rgba(236,72,189,0.18)]",
      accentText: "group-hover:text-[#ec48bd]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
    },
    {
      title: "협업 & 커피챗 문의",
      desc: "새로운 프로젝트 아이디어 및 커피챗 언제든 환영합니다!",
      url: "mailto:contact@junseong.dev",
      badge: "TALK",
      iconBg: "bg-[#35ed7e] text-black",
      hoverBorder: "hover:border-[#35ed7e] hover:shadow-[0_8px_24px_rgba(53,237,126,0.18)]",
      accentText: "group-hover:text-[#15803d]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  const techStickers = [
    { name: "Next.js 16", bg: "bg-neutral-900 text-white border-neutral-800" },
    { name: "React 19", bg: "bg-[#5865f2]/10 text-[#5865f2] border-[#5865f2]/30" },
    { name: "Tailwind CSS", bg: "bg-[#00b0f4]/10 text-[#00b0f4] border-[#00b0f4]/30" },
    { name: "TypeScript", bg: "bg-[#3178c6]/10 text-[#3178c6] border-[#3178c6]/30" },
    { name: "바이브 코딩 ⚡", bg: "bg-[#35ed7e]/15 text-[#15803d] border-[#35ed7e]/40" },
    { name: "AI Pair Programming", bg: "bg-[#ec48bd]/10 text-[#ec48bd] border-[#ec48bd]/30" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans pb-16 selection:bg-[#5865f2] selection:text-white">
      {/* 1. Discord Top Marquee Ticker */}
      <div className="w-full bg-[#5865f2] border-b border-[#5865f2]/20 overflow-hidden py-2.5 shadow-md select-none z-30">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
          <span>★ WELCOME TO JUNSEONG'S VIBE SPACE</span>
          <span className="text-[#35ed7e]">✦</span>
          <span>HANYANG UNIVERSITY • CLASS OF 2026</span>
          <span className="text-[#ec48bd]">✦</span>
          <span>⚡ TURNING IDEAS INTO REALITY WITH VIBE CODING</span>
          <span className="text-[#35ed7e]">✦</span>
          <span>NEXT.JS 16 & REACT 19 POWERED</span>
          <span className="text-[#ec48bd]">✦</span>
          <span>★ WELCOME TO JUNSEONG'S VIBE SPACE</span>
          <span className="text-[#35ed7e]">✦</span>
          <span>HANYANG UNIVERSITY • CLASS OF 2026</span>
          <span className="text-[#ec48bd]">✦</span>
          <span>⚡ TURNING IDEAS INTO REALITY WITH VIBE CODING</span>
          <span className="text-[#35ed7e]">✦</span>
          <span>NEXT.JS 16 & REACT 19 POWERED</span>
          <span className="text-[#ec48bd]">✦</span>
        </div>
      </div>

      {/* Floating Decorative Badges (Light Mode) */}
      <div className="hidden lg:block fixed left-8 top-28 pointer-events-none z-10">
        <div className="border border-[#35ed7e]/40 bg-white/95 text-[#15803d] px-4 py-2 font-bold text-xs uppercase shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-full backdrop-blur-md">
          ✦ VIBE ONLY ✦
        </div>
      </div>
      <div className="hidden lg:block fixed right-8 top-36 pointer-events-none z-10">
        <div className="border border-[#ec48bd]/30 bg-white/95 text-[#ec48bd] px-4 py-2 font-bold text-xs uppercase shadow-[0_4px_16px_rgba(0,0,0,0.06)] rounded-full backdrop-blur-md">
          🚀 4th YEAR 2nd SEMESTER
        </div>
      </div>

      {/* Main Content Hub */}
      <main className="w-full max-w-xl mx-auto px-3 xs:px-4 pt-6 xs:pt-8 sm:pt-12 flex flex-col gap-5 sm:gap-6 z-20">
        
        {/* 2. Retro OS Window Profile Card (Discord Light Surface) */}
        <section className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-[28px] shadow-[0_16px_40px_rgba(88,101,242,0.08)] overflow-hidden transition-all">
          {/* Window Title Bar */}
          <div className="bg-[#f4f5fc] border-b border-black/5 px-3.5 xs:px-4 py-2.5 xs:py-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
              <span className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
              <span className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-[#27c93f] inline-block shadow-sm" />
            </div>
            <div className="font-mono text-[11px] xs:text-xs font-bold tracking-widest text-neutral-500 flex items-center gap-1.5 uppercase">
              <span>ahn_junseong.exe</span>
            </div>
            <div className="border border-black/5 bg-white text-neutral-600 px-2 py-0.5 rounded-full text-[9px] xs:text-[10px] font-bold tracking-tight shadow-sm">
              v2.6
            </div>
          </div>

          {/* Window Body */}
          <div className="p-5 xs:p-7 sm:p-8 flex flex-col items-center text-center">
            {/* Avatar with Discord Gradient Ring */}
            <div className="relative mb-4 xs:mb-5">
              <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#5865f2] via-[#7983f5] to-[#ec48bd] p-1 shadow-[0_8px_24px_rgba(88,101,242,0.25)] hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-3xl xs:text-4xl sm:text-5xl font-black text-black select-none tracking-tighter">
                    안
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 xs:-right-2 border-2 border-white bg-[#35ed7e] text-black font-extrabold text-[9px] xs:text-[10px] tracking-wide px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-black animate-pulse" />
                ONLINE
              </div>
            </div>

            {/* Name & Tag */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 mb-1">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                안준성
              </h1>
              <span className="bg-[#ec48bd] text-white text-[11px] xs:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                JUN
              </span>
            </div>
            <p className="font-mono text-[11px] xs:text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3.5 xs:mb-4">
              Junseong Ahn • Vibe Coder & Student
            </p>

            {/* Speech / Bio Card */}
            <div className="w-full bg-[#f6f8fe] border border-[#5865f2]/10 rounded-2xl p-4 text-xs xs:text-sm sm:text-base font-normal text-[#333333] leading-relaxed mb-5 xs:mb-6 text-left break-keep">
              <div className="flex items-center gap-1.5 text-[11px] xs:text-xs font-bold text-[#5865f2] mb-1.5 uppercase font-mono">
                <span>💬 BIO</span>
              </div>
              &ldquo;아이디어를 코드로 실체화하는 즐거움을 만끽하는 중입니다. 한양대학교에서 바이브 코딩으로 유의미한 가치를 만들어갑니다!&rdquo;
            </div>

            {/* 3. Bento Stats Grid */}
            <div className="w-full grid grid-cols-3 gap-2 xs:gap-2.5 sm:gap-3 text-left">
              <div className="border border-[#5865f2]/20 bg-[#5865f2]/5 rounded-2xl p-2.5 xs:p-3 hover:bg-[#5865f2]/10 transition-colors">
                <span className="block font-mono text-[9px] xs:text-[10px] font-bold text-[#5865f2] uppercase">
                  UNIV
                </span>
                <span className="block font-bold text-[11px] xs:text-xs sm:text-sm text-neutral-900 mt-0.5 break-keep">
                  한양대 4-2
                </span>
              </div>
              <div className="border border-[#ec48bd]/20 bg-[#ec48bd]/5 rounded-2xl p-2.5 xs:p-3 hover:bg-[#ec48bd]/10 transition-colors">
                <span className="block font-mono text-[9px] xs:text-[10px] font-bold text-[#ec48bd] uppercase">
                  ROLE
                </span>
                <span className="block font-bold text-[11px] xs:text-xs sm:text-sm text-neutral-900 mt-0.5 break-keep">
                  바이브 코더
                </span>
              </div>
              <div className="border border-[#35ed7e]/30 bg-[#35ed7e]/10 rounded-2xl p-2.5 xs:p-3 hover:bg-[#35ed7e]/15 transition-colors">
                <span className="block font-mono text-[9px] xs:text-[10px] font-bold text-[#15803d] uppercase">
                  POWER
                </span>
                <span className="block font-bold text-[11px] xs:text-xs sm:text-sm text-neutral-900 mt-0.5 break-keep">
                  AI Hacking ⚡
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Featured Links Header */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 xs:gap-2">
            <span className="inline-block w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-[#5865f2]" />
            <h2 className="font-mono text-xs xs:text-sm sm:text-base font-bold tracking-wider uppercase text-neutral-800">
              Featured Links & Spaces
            </h2>
          </div>
          <span className="border border-black/5 bg-[#f4f5fc] text-neutral-600 px-2.5 py-0.5 rounded-full text-[10px] xs:text-[11px] font-bold">
            {links.length} ITEMS
          </span>
        </div>

        {/* Links List (Light Cards) */}
        <section className="flex flex-col gap-3 xs:gap-3.5">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group block w-full bg-white hover:bg-[#f8f9fe] border border-black/10 ${item.hoverBorder} rounded-2xl p-3.5 xs:p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer`}
            >
              <div className="flex items-center justify-between gap-2.5 xs:gap-3">
                <div className="flex items-center gap-3 xs:gap-3.5 sm:gap-4 min-w-0">
                  {/* Icon Box */}
                  <div
                    className={`w-9 h-9 xs:w-11 xs:h-11 shrink-0 rounded-xl ${item.iconBg} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  {/* Text details */}
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <span className={`font-bold text-sm xs:text-base sm:text-lg text-neutral-900 ${item.accentText} transition-colors truncate xs:text-clip`}>
                        {item.title}
                      </span>
                      <span className="bg-neutral-100 text-neutral-600 text-[8px] xs:text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm font-normal text-neutral-500 mt-0.5 break-keep line-clamp-1 xs:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Action */}
                <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center shrink-0 text-neutral-500 group-hover:bg-[#5865f2] group-hover:text-white group-hover:border-transparent group-hover:translate-x-1 transition-all">
                  <svg
                    className="w-3.5 h-3.5 xs:w-4 xs:h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* 5. Tech Weapons / Stickers Board */}
        <section className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl p-4 xs:p-5 sm:p-6 shadow-[0_12px_32px_rgba(88,101,242,0.06)]">
          <div className="flex items-center gap-2 mb-3.5 xs:mb-4">
            <span className="font-mono text-[10px] xs:text-xs font-bold tracking-widest uppercase bg-[#5865f2] text-white px-2.5 py-0.5 rounded-full">
              STACK
            </span>
            <h3 className="font-bold text-sm xs:text-base sm:text-lg text-neutral-900">
              Tech Stack & Toolbelt 🛠️
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 xs:gap-2.5 pt-1">
            {techStickers.map((tech, idx) => (
              <span
                key={idx}
                className={`inline-block border ${tech.bg} px-3 xs:px-3.5 py-1 xs:py-1.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-medium hover:scale-105 transition-all select-none shadow-sm`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Action Button: Share Profile Link (Electric Green High-Intent CTA) */}
        <section className="w-full">
          <button
            onClick={handleCopyLink}
            className="w-full group bg-[#35ed7e] hover:bg-[#2fd971] text-black font-extrabold rounded-2xl p-3.5 xs:p-4 sm:p-5 shadow-[0_4px_20px_rgba(53,237,126,0.35)] hover:shadow-[0_6px_28px_rgba(53,237,126,0.45)] active:scale-[0.99] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2.5 xs:gap-3 text-sm xs:text-base sm:text-lg"
          >
            {copied ? (
              <>
                <span className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-black text-[#35ed7e] flex items-center justify-center text-[10px] xs:text-xs font-black">
                  ✓
                </span>
                <span>링크가 복사되었습니다! 🎉</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 xs:w-5 xs:h-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span>프로필 링크 복사 및 공유하기 ✦</span>
              </>
            )}
          </button>
        </section>

        {/* 7. Footer Stamp */}
        <footer className="mt-2 xs:mt-4 pt-5 xs:pt-6 border-t border-black/5 flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 border border-black/5 bg-[#f4f5fc] px-3 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#35ed7e]" />
            <span className="font-mono text-[10px] xs:text-xs font-bold uppercase text-neutral-700">
              Vibe Coding • MyLink 2026
            </span>
          </div>
          <p className="font-mono text-[10px] xs:text-xs font-medium text-neutral-400 mt-0.5 xs:mt-1 break-keep">
            CRAFTED BY 안준성 (JUNSEONG AHN) WITH NEXT.JS 16 & TAILWIND
          </p>
        </footer>
      </main>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce max-w-[92vw]">
          <div className="border border-[#5865f2]/40 bg-white text-neutral-900 px-5 py-3 rounded-2xl font-bold text-xs xs:text-sm shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex items-center gap-2.5 xs:gap-3 break-keep">
            <span className="text-lg xs:text-xl shrink-0 text-[#15803d]">✨</span>
            <span>클립보드에 주소가 복사되었습니다!</span>
          </div>
        </div>
      )}
    </div>
  );
}


