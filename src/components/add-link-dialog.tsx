"use client";

import React, { useState } from "react";
import { LinkItem } from "@/types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Link2,
  BookOpen,
  Sparkles,
  Coffee,
  Palette,
  Video,
  FileText,
  MessageSquare,
  AlertCircle,
  Eye,
  ChevronRight,
} from "lucide-react";

interface AddLinkDialogProps {
  onAddLink: (link: Omit<LinkItem, "id" | "userId" | "createdAt" | "order">) => void;
  trigger?: React.ReactNode;
}

const ICON_OPTIONS = [
  { id: "github", label: "GitHub", Icon: null },
  { id: "book-open", label: "블로그", Icon: BookOpen },
  { id: "sparkles", label: "프로젝트", Icon: Sparkles },
  { id: "coffee", label: "커피챗", Icon: Coffee },
  { id: "palette", label: "디자인", Icon: Palette },
  { id: "video", label: "영상", Icon: Video },
  { id: "file-text", label: "문서/이력서", Icon: FileText },
  { id: "message-square", label: "소통/채팅", Icon: MessageSquare },
  { id: "link2", label: "기본 링크", Icon: Link2 },
];

const BADGE_PRESETS = ["HOT", "NEW", "CODE", "LOG", "WORK", "TALK", "DOCS"];

export function AddLinkDialog({ onAddLink, trigger }: AddLinkDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [badge, setBadge] = useState("");
  const [icon, setIcon] = useState<string>("link2");

  // 유효성 검사 에러 상태
  const [errors, setErrors] = useState<{ title?: string; url?: string }>({});

  const resetForm = () => {
    setTitle("");
    setUrl("");
    setDescription("");
    setBadge("");
    setIcon("link2");
    setErrors({});
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      resetForm();
    }
  };

  const validate = () => {
    const newErrors: { title?: string; url?: string } = {};

    if (!title.trim()) {
      newErrors.title = "링크 제목을 입력해주세요 (최대 50자).";
    } else if (title.trim().length > 50) {
      newErrors.title = "링크 제목은 50자 이내여야 합니다.";
    }

    if (!url.trim()) {
      newErrors.url = "목적지 URL을 입력해주세요.";
    } else {
      // URL 기본 형식 보정 및 체크
      const formattedUrl = url.trim().match(/^https?:\/\//i)
        ? url.trim()
        : `https://${url.trim()}`;

      try {
        new URL(formattedUrl);
      } catch {
        newErrors.url = "올바른 웹 주소 형식을 입력해주세요 (예: https://example.com).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // URL 프로토콜 보정
    let formattedUrl = url.trim();
    if (!formattedUrl.match(/^https?:\/\//i)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    onAddLink({
      title: title.trim(),
      url: formattedUrl,
      description: description.trim() || undefined,
      badge: badge.trim().toUpperCase() || undefined,
      icon: icon || "link2",
      isActive: true,
    });

    setOpen(false);
    resetForm();
  };

  // 다이얼로그 내부 미리보기용 렌더링 아이콘
  const renderPreviewIcon = () => {
    switch (icon) {
      case "github":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] text-white flex items-center justify-center shrink-0 shadow-sm">
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
          <div className="w-10 h-10 rounded-xl bg-[#00b0f4] text-white flex items-center justify-center shrink-0 shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
        );
      case "sparkles":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#ec48bd] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
        );
      case "coffee":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#35ed7e] text-black flex items-center justify-center shrink-0 shadow-sm">
            <Coffee className="w-5 h-5" />
          </div>
        );
      case "palette":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Palette className="w-5 h-5" />
          </div>
        );
      case "video":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#ec48bd] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Video className="w-5 h-5" />
          </div>
        );
      case "file-text":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#1e2353] border border-[#23272a] text-neutral-300 flex items-center justify-center shrink-0 shadow-sm">
            <FileText className="w-5 h-5" />
          </div>
        );
      case "message-square":
        return (
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] text-white flex items-center justify-center shrink-0 shadow-sm">
            <MessageSquare className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-[#1e2353] border border-[#23272a] text-[#5865f2] flex items-center justify-center shrink-0 shadow-sm">
            <Link2 className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          trigger ? (
            React.isValidElement(trigger) ? (
              trigger
            ) : (
              <button>{trigger}</button>
            )
          ) : (
            <Button
              variant="discord-primary"
              className="py-2.5 px-4 flex items-center gap-2 text-sm font-bold shadow-[0_4px_16px_rgba(88,101,242,0.35)]"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>새 링크 추가</span>
            </Button>
          )
        }
      />

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>
            <span className="w-2.5 h-2.5 rounded-full bg-[#5865f2]" />
            <span>새 링크 추가하기</span>
          </DialogTitle>
          <DialogDescription>
            내 프로필 공간에 표시할 새로운 링크와 부가 정보를 입력하세요. (로컬 상태에 즉시 반영)
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2 text-left">
          {/* 1. 링크 제목 (필수) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="link-title" className="font-bold text-neutral-200">
                링크 제목 <span className="text-[#ec48bd]">*</span>
              </label>
              <span className="text-[11px] font-mono text-neutral-500">
                {title.length}/50
              </span>
            </div>
            <Input
              id="link-title"
              value={title}
              maxLength={50}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
              }}
              placeholder="예: 깃허브 포트폴리오, 최신 블로그 글, 기술 일지"
              className={errors.title ? "border-red-500 focus-visible:ring-red-500/40" : ""}
            />
            {errors.title && (
              <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.title}</span>
              </p>
            )}
          </div>

          {/* 2. 목적지 URL (필수) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="link-url" className="font-bold text-neutral-200">
                목적지 URL <span className="text-[#ec48bd]">*</span>
              </label>
              <span className="text-[11px] text-neutral-500">
                https:// 자동 보정 지원
              </span>
            </div>
            <Input
              id="link-url"
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (errors.url) setErrors((prev) => ({ ...prev, url: undefined }));
              }}
              placeholder="https://github.com/your-repo 또는 example.com"
              className={errors.url ? "border-red-500 focus-visible:ring-red-500/40 font-mono text-xs sm:text-sm" : "font-mono text-xs sm:text-sm"}
            />
            {errors.url && (
              <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.url}</span>
              </p>
            )}
          </div>

          {/* 3. 부연 설명 (선택) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="link-desc" className="font-bold text-neutral-200">
                부연 설명 (선택)
              </label>
              <span className="text-[11px] font-mono text-neutral-500">
                {description.length}/100
              </span>
            </div>
            <Textarea
              id="link-desc"
              value={description}
              maxLength={100}
              rows={2}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="링크 아래에 작게 보여줄 짧은 안내 문구 (예: 최근 개발한 프로젝트 코드 및 데모)"
            />
          </div>

          {/* 4. 뱃지 태그 (선택) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="link-badge" className="font-bold text-neutral-200">
                강조 뱃지 (선택)
              </label>
              <span className="text-[11px] text-neutral-400">클릭하여 프리셋 적용</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {BADGE_PRESETS.map((preset) => (
                <button
                  type="button"
                  key={preset}
                  onClick={() => setBadge(badge === preset ? "" : preset)}
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full transition-all cursor-pointer border ${
                    badge === preset
                      ? "bg-[#ec48bd] text-white border-[#ec48bd] shadow-sm scale-105"
                      : "bg-[#0a0d3a] text-neutral-400 border-[#23272a] hover:border-neutral-500 hover:text-white"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
            <Input
              id="link-badge"
              value={badge}
              maxLength={12}
              onChange={(e) => setBadge(e.target.value.toUpperCase())}
              placeholder="직접 뱃지 텍스트 입력 (예: HOT, NEW, SALE)"
              className="font-mono text-xs uppercase"
            />
          </div>

          {/* 5. 아이콘 선택 (선택) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-neutral-200">
              아이콘 선택 (선택)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {ICON_OPTIONS.map((item) => {
                const isSelected = icon === item.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setIcon(item.id)}
                    className={`flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#5865f2]/20 border-[#5865f2] text-white shadow-sm ring-1 ring-[#5865f2]"
                        : "bg-[#0a0d3a] border-[#23272a] text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
                    }`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {item.id === "github" ? (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                      ) : item.Icon ? (
                        <item.Icon className="w-4 h-4" />
                      ) : (
                        <Link2 className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-[10px] font-medium truncate w-full text-center">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6. 실시간 미니 카드 프리뷰 */}
          <div className="pt-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 mb-2">
              <Eye className="w-3.5 h-3.5 text-[#5865f2]" />
              <span>실시간 카드 미리보기 (Live Preview)</span>
            </div>
            <div className="border border-[#23272a] bg-[#0a0d3a]/60 rounded-2xl p-2.5">
              <div className="w-full bg-[#1e2353] border border-[#23272a] rounded-xl p-3 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {renderPreviewIcon()}
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-white truncate">
                        {title.trim() || "링크 제목이 표시됩니다"}
                      </span>
                      {badge.trim() && (
                        <Badge variant="discord" className="text-[10px]">
                          {badge.trim().toUpperCase()}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5 truncate">
                      {description.trim() || (url.trim() ? url.trim() : "목적지 주소 또는 설명이 표시됩니다")}
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#0a0d3a] border border-[#23272a] flex items-center justify-center shrink-0 text-neutral-400">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* 7. 모달 액션 푸터 */}
          <DialogFooter className="pt-4">
            <DialogClose
              render={
                <Button
                  type="button"
                  variant="discord-ghost"
                  className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm"
                >
                  취소
                </Button>
              }
            />
            <Button
              type="submit"
              variant="discord-primary"
              className="w-full sm:w-auto px-5 py-2 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>링크 등록하기</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
