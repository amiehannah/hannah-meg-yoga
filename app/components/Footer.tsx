import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-14">
        <div className="mx-auto w-fit border-t border-black/10 pt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div />

            <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
              <nav className="grid gap-3 text-sm uppercase tracking-[0.18em] text-black md:justify-self-end md:pl-10">
                <Link href="/about" className="hover:text-[#5178A3]">
                  About
                </Link>
                <Link href="/classes" className="hover:text-[#5178A3]">
                  Classes
                </Link>
                <Link href="/events" className="hover:text-[#5178A3]">
                  Events
                </Link>
                <Link href="/contact" className="hover:text-[#5178A3]">
                  Contact
                </Link>
              </nav>

              <div className="flex flex-col justify-between">
                <div className="space-y-4 text-sm leading-7 text-black">
                  <p className="max-w-md text-sm text-black/80">
                    Personal blurb about your offering. Brand ethos, what is
                    your USP. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="inline-flex text-black transition hover:text-[#5178A3]"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 1.5c1.93 0 3.5 1.57 3.5 3.5v10c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5V7c0-1.93 1.57-3.5 3.5-3.5h10zM12 7a4.75 4.75 0 1 0 0 9.5A4.75 4.75 0 0 0 12 7zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5zm4.75-1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 text-xs text-black/70 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-4xl font-light uppercase tracking-tight leading-snug text-black sm:text-5xl">
            Hannah Meg Yoga.
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-end">
            <span className="text-right">Copyright Hannah Meg Yoga 2026.</span>
            <span className="sm:ml-8">
              Website by{" "}
              <Link href="#" className="underline">
                Studio AMIE
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
