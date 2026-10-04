import rawLinks from "@/data/links.json";
import { LinkItem, Profile, User } from "@/types";

// 기본 데모 시드 사용자 계정
export const initialMockUser: User = {
  id: "user-junseong-001",
  email: "demo@mylink.io",
  password: "password123",
  username: "junseong",
  createdAt: "2026-10-04T00:00:00.000Z",
};

// 기본 데모 프로필 정보 (Discord 테마 기본 적용)
export const initialMockProfile: Profile = {
  userId: "user-junseong-001",
  displayName: "안준성",
  bio: "아이디어를 코드로 실체화하는 즐거움을 만끽하는 중입니다. 한양대학교에서 바이브 코딩으로 유의미한 가치를 만들어갑니다! ⚡",
  avatarUrl: "",
  themeId: "discord",
  socials: {
    github: "https://github.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
    email: "contact@junseong.dev",
  },
};

// 링크 목록에 사용할 더미 데이터 (src/data/links.json 기반)
export const initialMockLinks: LinkItem[] = rawLinks as LinkItem[];
