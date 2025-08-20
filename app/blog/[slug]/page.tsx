// page.tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageContent slug={slug} />;
}

// Component đồng bộ để test dễ dàng
export function PageContent({ slug }: { slug: string }) {
  return (
    <h1>
      Slug: {slug}
      <span>Hello world</span>
      <span>Tra On</span>
    </h1>
  );
}