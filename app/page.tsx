import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">CodeHQ Pro</h1>
      <p className="mb-8 text-muted-foreground">
        DSA, System Design, and Machine Learning Design Prep.
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-foreground px-4 py-2 text-background transition-colors hover:opacity-80"
      >
        Go to Docs
      </Link>
    </main>
  );
}