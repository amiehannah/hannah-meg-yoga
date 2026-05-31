export default function Contact() {
  return (
    <div className="min-h-full flex items-center justify-center px-16 py-12 lg:px-16">
      {/* <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-light uppercase tracking-tight leading-snug text-black sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
          Reach out for class enquiries, bookings, or to learn more about our
          yoga offerings. We’ll get back to you shortly.
        </p>
      </div> */}

      <section className="mt-16 w-full grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div className="flex items-end">
          <div className="w-1/2">
            <h1>
              Meet <span className="italic">Hannah</span>
            </h1>
            <p>some text goes here</p>
          </div>
        </div>

        <div className="ml-auto w-full max-w-[50vw]">
          <div className="aspect-square w-full rounded-xl bg-slate-200" />
        </div>
      </section>
    </div>
  );
}
