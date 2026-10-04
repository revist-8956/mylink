"use client";

import React from "react";
import { LinkItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  BookOpen,
  Sparkles,
  Coffee,
  Palette,
  Video,
  FileText,
  MessageSquare,
  ChevronRight,
  Link2,
  Trash2,
  ExternalLink,
} from "lucide-react";

interface LinkItemCardProps {
  link: LinkItem;
  isManageMode?: boolean;
  onToggleActive?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function LinkItemCard({
  link,
  isManageMode = false,
  onToggleActive,
  onDelete,
}: LinkItemCardProps) {
  // 아이콘 및 컬러 테마 매핑
  const renderIcon = () => {
    switch (link.icon) {
      case "github":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>
        );
      case "book-open":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#00b0f4] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
        );
      case "sparkles":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#ec48bd] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
        );
      case "coffee":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#35ed7e] text-black flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5" />
          </div>
        );
      case "palette":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Palette className="w-5 h-5" />
          </div>
        );
      case "video":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#ec48bd] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Video className="w-5 h-5" />
          </div>
        );
      case "file-text":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#1e2353] border border-[#23272a] text-neutral-300 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
        );
      case "message-square":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <MessageSquare className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-[#1e2353] border border-[#23272a] text-[#5865f2] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Link2 className="w-5 h-5" />
          </div>
        );
    }
  };

  const getBadgeVariant = (badgeText?: string) => {
    if (!badgeText) return "discord";
    if (badgeText === "TALK" || badgeText === "OPEN") return "discord-green";
    if (badgeText === "CODE" || badgeText === "DOCS" || badgeText === "JOIN") return "discord-blurple";
    return "discord"; // HOT, NEW, LOG, etc.
  };

  const cardContent = (
    <div
      className={`group relative w-full bg-[#1e2353] border border-[#23272a] hover:border-[#5865f2] rounded-2xl p-3.5 xs:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_32px_rgba(88,101,242,0.28)] transition-all duration-200 ${
        !link.isActive ? "opacity-60 bg-[#161a3f]" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left Icon & Text details */}
        <div className="flex items-center gap-3 xs:gap-3.5 min-w-0 flex-1">
          {renderIcon()}

          <div className="text-left min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm xs:text-base text-white group-hover:text-[#5865f2] transition-colors truncate">
                {link.title}
              </span>
              {link.badge && (
                <Badge variant={getBadgeVariant(link.badge)} className="text-[10px]">
                  {link.badge}
                </Badge>
              )}
              {!link.isActive && isManageMode && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                  숨김 상태
                </span>
              )}
            </div>

            {link.description && (
              <p className="text-xs text-neutral-400 mt-0.5 break-keep line-clamp-1 xs:line-clamp-none font-normal">
                {link.description}
              </p>
            )}

            {isManageMode && (
              <p className="text-[11px] font-mono text-neutral-500 mt-1 truncate">
                {link.url}
              </p>
            )}
          </div>
        </div>

        {/* Right Action */}
        {isManageMode ? (
          <div className="flex items-center gap-2 shrink-0">
            {/* 외부 링크 미리 열어보기 */}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0a0d3a] border border-[#23272a] hover:border-[#5865f2] flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
              title="새 창에서 열기"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* 노출 스위치 토글 */}
            <div className="flex items-center gap-1.5 bg-[#0a0d3a] border border-[#23272a] px-2 py-1 rounded-xl">
              <span className="text-[10px] font-mono text-neutral-400 select-none">
                {link.isActive ? "노출" : "숨김"}
              </span>
              <Switch
                checked={link.isActive}
                onCheckedChange={() => onToggleActive?.(link.id)}
                aria-label="링크 노출 토글"
              />
            </div>

            {/* 삭제 버튼 */}
            {onDelete && (
              <button
                type="button"
                onClick={() => onDelete(link.id)}
                className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/50 hover:bg-red-900 hover:border-red-500 flex items-center justify-center text-red-300 hover:text-white transition-all cursor-pointer"
                title="링크 삭제"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#0a0d3a] border border-[#23272a] flex items-center justify-center shrink-0 text-neutral-400 group-hover:bg-[#5865f2] group-hover:text-white group-hover:border-transparent group-hover:translate-x-1 transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (isManageMode) {
    return cardContent;
  }

  return (
    <a
      href={link.url}
      target={link.url.startsWith("http") ? "_blank" : undefined}
      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer"
    >
      {cardContent}
    </a>
  );
}
