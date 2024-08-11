export default function ProductDetailLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {

  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }

  
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <section>
      {children}
      <h2>Sample</h2>
    </section>
  );
}
