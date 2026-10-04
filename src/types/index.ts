// 사용자 계정 타입
export interface User {
  id: string;
  email: string;
  password?: string; // 클라이언트 Mock 데모용
  username: string;  // 고유 URL 핸들 (예: junseong -> /junseong)
  createdAt: string;
}

// 소셜 채널 링크 타입
export interface SocialLinks {
  github?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  email?: string;
}

// 프로필 정보 타입
export interface Profile {
  userId: string;
  displayName: string;
  bio: string;
  avatarUrl?: string;
  themeId: "discord" | "minimal" | "cyberpunk" | "pastel";
  socials: SocialLinks;
}

// 개별 링크 아이템 타입 (PRD 6항 준수)
export interface LinkItem {
  id: string;
  userId: string;
  title: string;
  url: string;
  description?: string;
  badge?: string;       // 예: "HOT", "NEW", "CODE", "BLOG", "TALK"
  icon?: string;        // 아이콘 키 (예: "github", "blog", "sparkles", "coffee", "palette", "instagram", "youtube")
  isActive: boolean;    // 표시 / 숨김 여부
  order: number;        // 정렬 순서 (0, 1, 2, ...)
  createdAt: string;
}
