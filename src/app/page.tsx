import { LinkListView } from "@/components/link-list-view";
import { initialMockProfile, initialMockLinks } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <LinkListView
      profile={initialMockProfile}
      links={initialMockLinks}
      username="junseong"
    />
  );
}
