export default function Contact() {
  return (
    <div className="min-h-full flex items-center justify-center px-16 py-12 lg:px-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-light uppercase tracking-tight leading-snug text-black sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
          Reach out for class enquiries, bookings, or to learn more about our
          yoga offerings. We’ll get back to you shortly.
        </p>
        <p>@hannahmegyoga</p>
        <p>123 Yoga Street, Wellness City</p>
        <p>contact@hannahmegyoga.com</p>

        <form className="mt-12 mx-auto w-full max-w-[90%] rounded-[32px] border border-gray-200 bg-white/95 p-6 shadow-sm shadow-gray-200/40">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">First name</span>
              <input
                type="text"
                name="firstName"
                placeholder="Your name*"
                className="h-14 w-full rounded-3xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </label>
            <label className="block">
              <span className="sr-only">Your email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email*"
                className="h-14 w-full rounded-3xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5">
            <label className="block">
              <span className="sr-only">Subject of enquiry</span>
              <input
                type="text"
                name="subject"
                placeholder="Subject of enquiry"
                className="h-14 w-full rounded-3xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="sr-only">Your message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Your message*"
              className="h-full min-h-[150px] w-full rounded-3xl border border-gray-300 bg-white px-4 py-4 text-sm text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#d8d2ad] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#c8bea0] focus:outline-none focus:ring-2 focus:ring-black/10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
