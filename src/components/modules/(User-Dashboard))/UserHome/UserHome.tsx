// app/page.tsx
// Next.js 13+ (App Router) — TailwindCSS — TypeScript — Functional Component
// Put your images in /public/images/... and update the src paths below.

import Image from "next/image";

// --- Types ---
type Product = {
  id: string;
  name: string;
  price: string;
  compareAtPrice?: string;
  image: string;
};

type Post = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  cta?: string;
};

// --- Mock Data ---
const featured: Product[] = [
  {
    id: "1",
    name: "Blunn Casuals",
    price: "$49.00",
    compareAtPrice: "$59.00",
    image: "/images/feat-1.jpg",
  },
  {
    id: "2",
    name: "Classic Walkers",
    price: "$79.00",
    compareAtPrice: "$89.00",
    image: "/images/feat-2.jpg",
  },
  { id: "3", name: "Mets", price: "$69.00", image: "/images/feat-3.jpg" },
  {
    id: "4",
    name: "Ranger Slides",
    price: "$39.00",
    image: "/images/feat-4.jpg",
  },
  {
    id: "5",
    name: "Storm Runner",
    price: "$119.00",
    image: "/images/feat-5.jpg",
  },
];

const favourites: Post[] = [
  {
    id: "a",
    title: "Work Chic",
    excerpt:
      "A blazer-friendly capsule with soft leather loafers and knit staples.",
    image: "/images/fav-1.jpg",
    cta: "SHOP NOW",
  },
  {
    id: "b",
    title: "Formals",
    excerpt:
      "Polished derbies and monk straps designed for long days and late nights.",
    image: "/images/fav-2.jpg",
    cta: "SHOP NOW",
  },
  {
    id: "c",
    title: "Brunch",
    excerpt:
      "Easy dresses meet featherweight sneakers. Breeze through the weekend.",
    image: "/images/fav-3.jpg",
    cta: "SHOP NOW",
  },
];

const recentPosts: Post[] = [
  {
    id: "p1",
    title: "Sneakers Live",
    excerpt:
      "Behind the scenes with our pro testers. Cushion stacks, flex tests, and more…",
    image: "/images/post-1.jpg",
    cta: "READ MORE",
  },
  {
    id: "p2",
    title: "Back to School",
    excerpt:
      "Colorful backpacks, slip-ons, and lunchbox-ready kicks for every grade.",
    image: "/images/post-2.jpg",
    cta: "READ MORE",
  },
];

const insta: string[] = [
  "/images/ig-1.jpg",
  "/images/ig-2.jpg",
  "/images/ig-3.jpg",
  "/images/ig-4.jpg",
  "/images/ig-5.jpg",
  "/images/ig-6.jpg",
];

// --- UI Primitives ---
const SectionTitle: React.FC<{ label: string; sub?: string }> = ({
  label,
  sub,
}) => (
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="uppercase tracking-wider text-xs text-gray-500">{sub}</p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-1">{label}</h2>
      </div>
      <div className="h-px flex-1 bg-gray-200 hidden md:block" />
    </div>
  </div>
);

const PriceTag: React.FC<{ price: string; compareAtPrice?: string }> = ({
  price,
  compareAtPrice,
}) => (
  <div className="mt-2 text-sm">
    {compareAtPrice && (
      <span className="text-gray-400 line-through mr-2">{compareAtPrice}</span>
    )}
    <span className="font-semibold">{price}</span>
  </div>
);

// --- Main Page ---
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top Banners */}
      <section className="max-w-6xl mx-auto px-4 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1 */}
        <article className="relative overflow-hidden rounded-2xl shadow-sm group">
          <Image
            src="/images/banner-1.jpg"
            alt="New Striker collection"
            width={1200}
            height={900}
            priority
            className="h-72 md:h-[28rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="uppercase tracking-widest text-xs">
              Our hand-picked collection for you
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-1">
              New Striker
            </h1>
            <button className="mt-3 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-white">
              SHOP NOW
            </button>
          </div>
        </article>

        {/* Banner 2 */}
        <article className="relative overflow-hidden rounded-2xl shadow-sm group">
          <Image
            src="/images/banner-2.jpg"
            alt="Cool casuals"
            width={1200}
            height={900}
            className="h-72 md:h-[28rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="uppercase tracking-widest text-xs">Cool Casuals</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Mix & Match</h2>
            <button className="mt-3 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-white">
              SHOP NOW
            </button>
          </div>
        </article>
      </section>

      {/* Featured Products */}
      <section className="mt-12 md:mt-16">
        <SectionTitle sub="Featured Products" label="Just Dropped" />
        <div className="mt-6 max-w-6xl mx-auto px-4">
          {/* Scroll-snap row (simple, no JS) */}
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((p) => (
              <div
                key={p.id}
                className="min-w-[220px] max-w-[240px] snap-start shrink-0"
              >
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={320}
                    height={240}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium line-clamp-1">
                  {p.name}
                </h3>
                <PriceTag price={p.price} compareAtPrice={p.compareAtPrice} />
                <button className="mt-2 text-xs underline underline-offset-4">
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pick Your Favourites */}
      <section className="mt-12 md:mt-16">
        <SectionTitle sub="Pick Your Favourites" label="Curated Edits" />
        <div className="mt-6 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {favourites.map((f) => (
            <article
              key={f.id}
              className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <div className="relative">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={640}
                  height={480}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.excerpt}</p>
                <button className="mt-3 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-medium hover:bg-black">
                  {f.cta ?? "EXPLORE"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mt-12 md:mt-16">
        <SectionTitle sub="Recent Posts" label="From the Journal" />
        <div className="mt-6 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={960}
                height={640}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{post.excerpt}</p>
                <button className="mt-3 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-medium hover:bg-black">
                  {post.cta ?? "READ MORE"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="mt-12 md:mt-16 pb-16">
        <SectionTitle sub="Best On Instagram" label="@floatzfootwear" />
        <div className="mt-6 max-w-6xl mx-auto px-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {insta.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl border border-gray-200"
            >
              <Image
                src={src}
                alt={`Instagram ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Floatz Footwear. Crafted with Next.js &
          Tailwind.
        </p>
      </footer>
    </main>
  );
}
