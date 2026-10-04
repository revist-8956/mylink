"use client";

import React, { useState } from "react";
import { LinkItem, Profile } from "@/types";
import { initialMockProfile, initialMockLinks } from "@/lib/mock-data";
import { LinkItemCard } from "@/components/link-item-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Share2 } from "lucide-react";

interface LinkListViewProps {
  profile?: Profile;
  links?: LinkItem[];
  username?: string;
}

export function LinkListView({
  profile = initialMockProfile,
  links = initialMockLinks,
  username = "junseong",
}: LinkListViewProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // 활성화된 링크만 순서대로 정렬하여 노출 (PRD F-PUB-01 명세)
  const activeLinks = [...links]
    .filter((l) => l.isActive)
    .sort((a, b) => a.order - b.order);

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowToast(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans pb-16 selection:bg-[#5865f2] selection:text-white bg-[#0a0d3a] text-white">
      {/* 1. Discord Top Marquee Ticker (DESIGN.md marquee-band 규격) */}
      <div className="w-full bg-[#5865f2] border-b border-[#23272a] overflow-hidden py-2 shadow-md select-none z-30">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
          <span>★ WELCOME TO {profile.displayName.toUpperCase()}&apos;S MYLINK</span>
          <span className="text-[#35ed7e]">✦</span>
          <span>ALL LINKS IN ONE VIBE SPACE</span>
          <span className="text-[#ec48bd]">✦</span>
          <span>NEXT.JS 16 & REACT 19 • SHADCN/UI</span>
          <span className="text-[#35ed7e]">✦</span>
          <span>★ WELCOME TO {profile.displayName.toUpperCase()}&apos;S MYLINK</span>
          <span className="text-[#ec48bd]">✦</span>
          <span>ALL LINKS IN ONE VIBE SPACE</span>
          <span className="text-[#35ed7e]">✦</span>
        </div>
      </div>

      {/* Atmospheric Background Glow (DESIGN.md Canvas Mesh) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#5865f2]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-[#ec48bd]/10 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Hub */}
      <main className="w-full max-w-xl mx-auto px-4 pt-6 sm:pt-10 flex flex-col gap-5 sm:gap-6 z-20 relative">
        
        {/* 2. Profile Card Component (feature-card-dark specs: #1e2353, rounded.xl 40px) */}
        <section className="bg-[#1e2353] border border-[#23272a] rounded-[36px] shadow-[0_8px_32px_rgba(69,42,124,0.25)] p-6 sm:p-8 flex flex-col items-center text-center backdrop-blur-md">
          
          {/* Avatar with Rainbow Ring */}
          <div className="relative mb-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#5865f2] via-[#7983f5] to-[#ec48bd] p-1 shadow-[0_8px_24px_rgba(88,101,242,0.35)] hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-full bg-[#0a0d3a] flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black text-white select-none">
                  {profile.displayName.charAt(0)}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 border-2 border-[#1e2353] bg-[#35ed7e] text-black font-extrabold text-[10px] tracking-wide px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              ONLINE
            </div>
          </div>

          {/* Name & Badge */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {profile.displayName}
            </h1>
            <Badge variant="discord" className="text-xs px-2.5 py-0.5">
              JUN
            </Badge>
          </div>

          <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
            @{username} • Vibe Coder & Student
          </p>

          {/* Bio Quote Box */}
          <div className="w-full bg-[#0a0d3a]/75 border border-[#23272a] rounded-2xl p-4 text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 text-left break-keep">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#5865f2] mb-1.5 uppercase font-mono">
              <span>💬 BIO</span>
            </div>
            &ldquo;{profile.bio}&rdquo;
          </div>

          {/* Social Channels Bar */}
          <div className="flex items-center justify-center gap-2.5 pt-1">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0d3a] border border-[#23272a] hover:border-[#5865f2] text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {profile.socials.instagram && (
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0d3a] border border-[#23272a] hover:border-[#ec48bd] text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            )}
            {profile.socials.twitter && (
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0d3a] border border-[#23272a] hover:border-[#00b0f4] text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {profile.socials.youtube && (
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0d3a] border border-[#23272a] hover:border-red-500 text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            )}
            {profile.socials.email && (
              <a
                href={`mailto:${profile.socials.email}`}
                className="w-9 h-9 rounded-full bg-[#0a0d3a] border border-[#23272a] hover:border-[#35ed7e] text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="Email"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            )}
          </div>
        </section>

        {/* 3. Featured Links Stream Header */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#5865f2]" />
            <h2 className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-200">
              Featured Links & Spaces
            </h2>
          </div>
          <span className="border border-[#23272a] bg-[#1e2353] text-neutral-400 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold">
            {activeLinks.length} ITEMS
          </span>
        </div>

        {/* 4. Link Item List Component */}
        <section className="flex flex-col gap-3">
          {activeLinks.map((link) => (
            <LinkItemCard key={link.id} link={link} />
          ))}
        </section>

        {/* 5. Highest-Intent Share CTA Button (DESIGN.md button-green 규격) */}
        <section className="w-full pt-1">
          <Button
            onClick={handleCopyLink}
            variant="discord-green"
            className="w-full h-auto py-4 sm:py-5 px-5 text-base sm:text-lg flex items-center justify-center gap-3 transition-transform"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 stroke-[3]" />
                <span>링크가 복사되었습니다! 🎉</span>
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5 stroke-[2.5]" />
                <span>프로필 링크 복사 및 공유하기 ✦</span>
              </>
            )}
          </Button>
        </section>

        {/* 6. Brand Footer */}
        <footer className="mt-4 pt-6 border-t border-[#23272a]/80 flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2 border border-[#23272a] bg-[#1e2353] px-3 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#35ed7e]" />
            <span className="font-mono text-xs font-bold uppercase text-neutral-300">
              VIBE CODING • MYLINK 2026
            </span>
          </div>
          <p className="font-mono text-[11px] text-neutral-500 mt-1">
            CRAFTED WITH NEXT.JS 16 & SHADCN/UI (DISCORD THEME)
          </p>
        </footer>

      </main>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce max-w-[92vw]">
          <div className="border border-[#35ed7e]/50 bg-[#1e2353] text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex items-center gap-2.5 break-keep">
            <span className="text-[#35ed7e]">✨</span>
            <span>클립보드에 프로필 주소가 복사되었습니다!</span>
          </div>
        </div>
      )}
    </div>
  );
}
