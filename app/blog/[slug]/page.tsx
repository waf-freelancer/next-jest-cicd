// page.tsx
import PageContent from "./components/PageContent";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <PageContent slug={slug} />;
}