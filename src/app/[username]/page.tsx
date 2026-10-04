import { Metadata } from "next";
import { LinkListView } from "@/components/link-list-view";
import { initialMockProfile, initialMockLinks } from "@/lib/mock-data";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username}의 링크 모음 | mylink`,
    description: `${username}의 모든 프로젝트 및 소셜 프로필 링크를 확인하세요.`,
  };
}

export default async function UserProfilePage({ params }: Props) {
  const { username } = await params;

  return (
    <LinkListView
      profile={initialMockProfile}
      links={initialMockLinks}
      username={username}
    />
  );
}
