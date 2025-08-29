// page.tsx
import PageContent from "./components/PageContent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageContent slug={slug} />;
}

// Cung cấp các tham số tĩnh cho route động khi dùng output: export
export async function generateStaticParams() {
  // Liệt kê trước các slug sẽ được build tĩnh
  return [
    { slug: "Test" },
  ];
}