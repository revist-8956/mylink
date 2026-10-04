import { useSyncExternalStore } from "react";
import { LinkItem } from "@/types";
import { initialMockLinks } from "@/lib/mock-data";

const STORAGE_KEY_PREFIX = "mylink_links";
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

/**
 * 로컬 스토리지에서 특정 사용자의 링크 목록을 가져옵니다.
 * 데이터가 없으면 initialMockLinks를 초기값으로 저장하고 반환합니다.
 */
export function getStoredLinks(userId: string = "user-junseong-001"): LinkItem[] {
  if (typeof window === "undefined") {
    return initialMockLinks;
  }

  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${userId}`);
    if (!raw) {
      localStorage.setItem(
        `${STORAGE_KEY_PREFIX}_${userId}`,
        JSON.stringify(initialMockLinks)
      );
      return initialMockLinks;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialMockLinks;
  } catch (err) {
    console.error("Failed to read links from localStorage:", err);
    return initialMockLinks;
  }
}

/**
 * 로컬 스토리지에 특정 사용자의 링크 목록을 저장하고 구독자들에게 알립니다.
 */
export function saveStoredLinks(
  userId: string = "user-junseong-001",
  links: LinkItem[]
): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}_${userId}`,
      JSON.stringify(links)
    );
    notify();
  } catch (err) {
    console.error("Failed to save links to localStorage:", err);
  }
}

// 브라우저 탭 간 storage 동기화 이벤트 등록
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key?.startsWith(STORAGE_KEY_PREFIX)) {
      notify();
    }
  });
}

/**
 * React 19 권장 useSyncExternalStore 기반의 LocalStorage 링크 상태 훅
 */
const cachedLinks: Record<string, { raw: string; parsed: LinkItem[] }> = {};

export function useStoredLinks(
  userId: string = "user-junseong-001",
  initialFallback: LinkItem[] = initialMockLinks
): [LinkItem[], (newLinks: LinkItem[]) => void] {
  const subscribe = (callback: () => void) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  };

  const getSnapshot = (): LinkItem[] => {
    if (typeof window === "undefined") return initialFallback;

    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${userId}`) || "";
    if (cachedLinks[userId] && cachedLinks[userId].raw === raw) {
      return cachedLinks[userId].parsed;
    }

    const parsed = getStoredLinks(userId);
    cachedLinks[userId] = { raw, parsed };
    return parsed;
  };

  const getServerSnapshot = (): LinkItem[] => {
    return initialFallback;
  };

  const links = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLinks = (newLinks: LinkItem[]) => {
    saveStoredLinks(userId, newLinks);
  };

  return [links, setLinks];
}
