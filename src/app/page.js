import Hero from "./components/Hero";

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  return (
    <div>
      <Hero />

    </div>
  );
}
