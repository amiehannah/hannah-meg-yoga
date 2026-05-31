export default function Classes() {
  return (
    <main className="min-h-full flex items-center px-16 py-12 lg:px-16">
      <section className="mx-auto max-w-7xl w-full">
        <div className="grid gap-y-12 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-x-12">
          <div>
            <h1 className="text-4xl font-light uppercase tracking-tight leading-snug text-black sm:text-5xl">
              Welcome to
              <br />
              Hannah Meg Yoga.
            </h1>
          </div>
          <div className="text-sm leading-7 text-gray-700 sm:text-base">
            Our classes are designed to help you move with ease, increase
            strength, and find calm. Explore a carefully curated program of yoga
            practices that support your whole-body wellness, whether you are
            just starting out or deepening your practice.
          </div>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-3 lg:gap-8">
          <article className="space-y-4">
            <div className="aspect-square w-full rounded-xl bg-slate-200" />
            <div className="text-sm uppercase tracking-[0.24em] text-black">
              01 / Yoga Practice
            </div>
          </article>

          <article className="space-y-4">
            <div className="aspect-square w-full rounded-xl bg-slate-200" />
            <div className="text-sm uppercase tracking-[0.24em] text-black">
              02 / Yoga Practice
            </div>
          </article>

          <article className="space-y-4">
            <div className="aspect-square w-full rounded-xl bg-slate-200" />
            <div className="text-sm uppercase tracking-[0.24em] text-black">
              03 / Another Yoga Practice
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
