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
      hoverBg: "hover:bg-[#FFDE59]", // Electric Yellow
      iconBg: "bg-black text-[#FFDE59]",
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
      hoverBg: "hover:bg-[#2DE2A6]", // Neon Mint
      iconBg: "bg-black text-[#2DE2A6]",
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
      hoverBg: "hover:bg-[#FF6B97]", // Hot Pink
      iconBg: "bg-black text-[#FF6B97]",
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
      hoverBg: "hover:bg-[#A78BFA]", // Bright Violet
      iconBg: "bg-black text-[#A78BFA]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  const techStickers = [
    { name: "Next.js 16", bg: "bg-black text-white", rotate: "-rotate-2" },
    { name: "React 19", bg: "bg-[#61DAFB] text-black", rotate: "rotate-3" },
    { name: "Tailwind CSS", bg: "bg-[#38BDF8] text-black", rotate: "-rotate-1" },
    { name: "TypeScript", bg: "bg-[#3178C6] text-white", rotate: "rotate-2" },
    { name: "바이브 코딩 ⚡", bg: "bg-[#FFE600] text-black", rotate: "-rotate-3" },
    { name: "AI Pair Programming", bg: "bg-[#FF6B97] text-white", rotate: "rotate-1" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans pb-16 selection:bg-[#FFE600] selection:text-black">
      {/* 1. Neobrutalism Top Marquee Ticker */}
      <div className="w-full bg-[#FFE600] border-b-[3px] border-black overflow-hidden py-2 shadow-sm select-none z-30">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-mono font-black text-xs sm:text-sm tracking-wider uppercase text-black">
          <span>★ WELCOME TO JUNSEONG'S VIBE SPACE</span>
          <span>✦</span>
          <span>HANYANG UNIVERSITY • CLASS OF 2026</span>
          <span>✦</span>
          <span>⚡ TURNING IDEAS INTO REALITY WITH VIBE CODING</span>
          <span>✦</span>
          <span>NEXT.JS 16 & REACT 19 POWERED</span>
          <span>✦</span>
          <span>★ WELCOME TO JUNSEONG'S VIBE SPACE</span>
          <span>✦</span>
          <span>HANYANG UNIVERSITY • CLASS OF 2026</span>
          <span>✦</span>
          <span>⚡ TURNING IDEAS INTO REALITY WITH VIBE CODING</span>
          <span>✦</span>
          <span>NEXT.JS 16 & REACT 19 POWERED</span>
          <span>✦</span>
        </div>
      </div>

      {/* Floating Retro Decorative Badges (Hidden on tiny mobile) */}
      <div className="hidden lg:block fixed left-8 top-28 pointer-events-none z-10">
        <div className="border-[3px] border-black bg-[#2DE2A6] px-3.5 py-2 font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-[-6deg]">
          ✦ VIBE ONLY ✦
        </div>
      </div>
      <div className="hidden lg:block fixed right-8 top-36 pointer-events-none z-10">
        <div className="border-[3px] border-black bg-[#FF6B97] text-white px-3.5 py-2 font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-[8deg]">
          🚀 4th YEAR 2nd SEMESTER
        </div>
      </div>

      {/* Main Content Hub */}
      <main className="w-full max-w-xl mx-auto px-3 xs:px-4 pt-6 xs:pt-8 sm:pt-12 flex flex-col gap-5 sm:gap-6 z-20">
        
        {/* 2. Retro OS Window Profile Card */}
        <section className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_#000] xs:shadow-[6px_6px_0px_0px_#000] overflow-hidden transition-all">
          {/* Window Title Bar */}
          <div className="bg-[#FFDE59] border-b-[3px] border-black px-3.5 xs:px-4 py-2 xs:py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full border-2 border-black bg-[#FF5C5C] inline-block shadow-[1px_1px_0px_0px_#000]" />
              <span className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full border-2 border-black bg-[#FFBD2E] inline-block shadow-[1px_1px_0px_0px_#000]" />
              <span className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full border-2 border-black bg-[#27C93F] inline-block shadow-[1px_1px_0px_0px_#000]" />
            </div>
            <div className="font-mono text-[11px] xs:text-xs font-black tracking-widest text-black flex items-center gap-1.5 uppercase">
              <span>ahn_junseong.exe</span>
            </div>
            <div className="border-2 border-black bg-white px-1.5 xs:px-2 py-0.5 rounded text-[9px] xs:text-[10px] font-black tracking-tight shadow-[1px_1px_0px_0px_#000]">
              v2.6
            </div>
          </div>

          {/* Window Body */}
          <div className="p-4 xs:p-6 sm:p-8 flex flex-col items-center text-center">
            {/* Avatar with Neobrutal offset shadow and badge */}
            <div className="relative mb-4 xs:mb-5">
              <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-2xl border-[3px] border-black bg-[#FFE600] flex items-center justify-center shadow-[4px_4px_0px_0px_#000] -rotate-2 hover:rotate-0 transition-transform duration-200">
                <span className="text-3xl xs:text-4xl sm:text-5xl font-black text-black select-none tracking-tighter">
                  안
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 xs:-right-3 border-2 border-black bg-[#2DE2A6] text-black font-black text-[9px] xs:text-[10px] tracking-wide px-2 xs:px-2.5 py-0.5 rounded-full shadow-[2px_2px_0px_0px_#000] flex items-center gap-1.5 rotate-3">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-black animate-pulse" />
                ONLINE
              </div>
            </div>

            {/* Name & Tag */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 mb-1">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-black tracking-tight text-black">
                안준성
              </h1>
              <span className="border-2 border-black bg-[#FF6B97] text-white text-[11px] xs:text-xs font-black px-2 xs:px-2.5 py-0.5 rounded-lg shadow-[2px_2px_0px_0px_#000] rotate-2">
                JUN
              </span>
            </div>
            <p className="font-mono text-[11px] xs:text-xs font-bold text-neutral-600 uppercase tracking-widest mb-3.5 xs:mb-4">
              Junseong Ahn • Vibe Coder & Student
            </p>

            {/* Speech / Bio Card */}
            <div className="w-full bg-[#FAF5E4] border-[2px] border-black rounded-xl p-3.5 xs:p-4 shadow-[3px_3px_0px_0px_#000] text-xs xs:text-sm sm:text-base font-semibold text-neutral-900 leading-relaxed mb-5 xs:mb-6 text-left break-keep">
              <div className="flex items-center gap-1.5 text-[11px] xs:text-xs font-black text-black/70 mb-1 uppercase font-mono">
                <span>💬 BIO</span>
              </div>
              &ldquo;아이디어를 코드로 실체화하는 즐거움을 만끽하는 중입니다. 한양대학교에서 바이브 코딩으로 유의미한 가치를 만들어갑니다!&rdquo;
            </div>

            {/* 3. Bento Stats Grid */}
            <div className="w-full grid grid-cols-3 gap-2 xs:gap-2.5 sm:gap-3 text-left">
              <div className="border-[2px] border-black bg-[#FFF066] rounded-xl p-2 xs:p-2.5 sm:p-3 shadow-[2.5px_2.5px_0px_0px_#000] xs:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                <span className="block font-mono text-[9px] xs:text-[10px] font-black text-black/70 uppercase">
                  UNIV
                </span>
                <span className="block font-black text-[11px] xs:text-xs sm:text-sm text-black mt-0.5 break-keep">
                  한양대 4-2
                </span>
              </div>
              <div className="border-[2px] border-black bg-[#99F6E4] rounded-xl p-2 xs:p-2.5 sm:p-3 shadow-[2.5px_2.5px_0px_0px_#000] xs:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                <span className="block font-mono text-[9px] xs:text-[10px] font-black text-black/70 uppercase">
                  ROLE
                </span>
                <span className="block font-black text-[11px] xs:text-xs sm:text-sm text-black mt-0.5 break-keep">
                  바이브 코더
                </span>
              </div>
              <div className="border-[2px] border-black bg-[#E9D5FF] rounded-xl p-2 xs:p-2.5 sm:p-3 shadow-[2.5px_2.5px_0px_0px_#000] xs:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                <span className="block font-mono text-[9px] xs:text-[10px] font-black text-black/70 uppercase">
                  POWER
                </span>
                <span className="block font-black text-[11px] xs:text-xs sm:text-sm text-black mt-0.5 break-keep">
                  AI Hacking ⚡
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Featured Links Header */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 xs:gap-2">
            <span className="inline-block w-2.5 h-2.5 xs:w-3 xs:h-3 bg-black" />
            <h2 className="font-mono text-xs xs:text-sm sm:text-base font-black tracking-wider uppercase text-black">
              Featured Links & Spaces
            </h2>
          </div>
          <span className="border-2 border-black bg-white px-2 py-0.5 text-[10px] xs:text-[11px] font-black shadow-[2px_2px_0px_0px_#000]">
            {links.length} ITEMS
          </span>
        </div>

        {/* Links List */}
        <section className="flex flex-col gap-3 xs:gap-3.5">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group block w-full bg-white ${item.hoverBg} border-[3px] border-black rounded-xl p-3.5 xs:p-4 sm:p-5 shadow-[3.5px_3.5px_0px_0px_#000] xs:shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all duration-150 cursor-pointer`}
            >
              <div className="flex items-center justify-between gap-2.5 xs:gap-3">
                <div className="flex items-center gap-3 xs:gap-3.5 sm:gap-4 min-w-0">
                  {/* Icon Box */}
                  <div
                    className={`w-9 h-9 xs:w-11 xs:h-11 shrink-0 rounded-lg border-2 border-black ${item.iconBg} flex items-center justify-center shadow-[2px_2px_0px_0px_#000] group-hover:scale-105 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  {/* Text details */}
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <span className="font-black text-sm xs:text-base sm:text-lg text-black group-hover:underline decoration-2 truncate xs:text-clip">
                        {item.title}
                      </span>
                      <span className="border border-black bg-black text-white text-[8px] xs:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm font-medium text-neutral-600 mt-0.5 break-keep line-clamp-1 xs:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Action */}
                <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full border-2 border-black bg-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000] group-hover:translate-x-1 transition-transform">
                  <svg
                    className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
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
        <section className="bg-white border-[3px] border-black rounded-2xl p-4 xs:p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] xs:shadow-[5px_5px_0px_0px_#000]">
          <div className="flex items-center gap-2 mb-3.5 xs:mb-4">
            <span className="font-mono text-[10px] xs:text-xs font-black tracking-widest uppercase bg-[#FF8400] text-white px-2 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000]">
              STACK
            </span>
            <h3 className="font-black text-sm xs:text-base sm:text-lg text-black">
              Tech Stack & Toolbelt 🛠️
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 xs:gap-2.5 pt-1">
            {techStickers.map((tech, idx) => (
              <span
                key={idx}
                className={`inline-block border-2 border-black ${tech.bg} ${tech.rotate} px-2.5 xs:px-3.5 py-1 xs:py-1.5 rounded-lg text-[11px] xs:text-xs sm:text-sm font-black shadow-[2.5px_2.5px_0px_0px_#000] xs:shadow-[3px_3px_0px_0px_#000] hover:rotate-0 hover:scale-105 transition-all select-none`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Action Button: Share Profile Link with Neobrutal Toast */}
        <section className="w-full">
          <button
            onClick={handleCopyLink}
            className="w-full group bg-[#FFE600] hover:bg-[#FFD700] border-[3px] border-black rounded-xl p-3.5 xs:p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000] xs:shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2.5 xs:gap-3 font-black text-sm xs:text-base sm:text-lg text-black"
          >
            {copied ? (
              <>
                <span className="w-5 h-5 xs:w-6 xs:h-6 rounded-full border-2 border-black bg-white flex items-center justify-center text-[10px] xs:text-xs">
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
        <footer className="mt-2 xs:mt-4 pt-5 xs:pt-6 border-t-[3px] border-black flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 border-2 border-black bg-white px-2.5 xs:px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#000]">
            <span className="w-2 h-2 rounded-full bg-[#FF5C5C]" />
            <span className="font-mono text-[10px] xs:text-xs font-black uppercase text-black">
              Vibe Coding • MyLink 2026
            </span>
          </div>
          <p className="font-mono text-[10px] xs:text-xs font-bold text-neutral-600 mt-0.5 xs:mt-1 break-keep">
            CRAFTED BY 안준성 (JUNSEONG AHN) WITH NEXT.JS 16 & TAILWIND
          </p>
        </footer>
      </main>

      {/* Floating Neobrutal Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce max-w-[92vw]">
          <div className="border-[3px] border-black bg-[#2DE2A6] text-black px-4 xs:px-5 py-2.5 xs:py-3 rounded-xl font-black text-xs xs:text-sm shadow-[5px_5px_0px_0px_#000] xs:shadow-[6px_6px_0px_0px_#000] flex items-center gap-2.5 xs:gap-3 break-keep">
            <span className="text-lg xs:text-xl shrink-0">✨</span>
            <span>클립보드에 주소가 복사되었습니다!</span>
          </div>
        </div>
      )}
    </div>
  );
}

