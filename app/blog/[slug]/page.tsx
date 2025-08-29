// page.tsx
import PageContent from "./components/PageContent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageContent slug={slug} />;
}