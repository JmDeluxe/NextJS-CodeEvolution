export default function ProductDetailLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <h2>Sample</h2>
    </section>
  );
}
