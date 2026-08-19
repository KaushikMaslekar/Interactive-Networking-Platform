import { SectionPage } from "../../components/section-page";

export default function SearchPage() {
  return (
    <SectionPage
      eyebrow="Search"
      title="Platform-wide search"
      description="This area will eventually index lessons, labs, quizzes, tools, and interview content for fast discovery."
      primaryActionLabel="Explore roadmap"
      primaryActionHref="/roadmap"
      secondaryActionLabel="Open dashboard"
      secondaryActionHref="/dashboard"
    />
  );
}
