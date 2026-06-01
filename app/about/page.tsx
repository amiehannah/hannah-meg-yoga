export default function About() {
  return (
    <div className="min-h-full flex items-center justify-center px-16 py-12 lg:px-16">
      <section className="mt-16 w-full grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="flex items-start">
          <div>
            <h1 className=" text-[36px]">
              Meet <em>Hannah,</em>
            </h1>
            <h2 className="mb-10 text-[20px]">founder of Hannah Meg Yoga</h2>
            <div className="space-y-6">
              <p>
                My journey into yoga began after years working as a
                photographer. Photography taught me to notice what is often
                overlooked — the quiet moments, subtle details, and natural
                shifts of light that appear when life isn’t rushed. That way of
                seeing eventually led me towards yoga, a practice that offered
                not only movement, but a deeper connection to myself and the
                world around me.
              </p>
              <p>
                I completed my 200-hour yoga teacher training in Kerala, India,
                surrounded by lush landscapes, vibrant wildlife and the rich
                wisdom of traditional Ayurvedic teachings. It was an experience
                that inspired a more intentional way of living and deepened my
                understanding of the connection between movement, breath, nature
                and wellbeing.
              </p>
              <p>
                Today, Hannah Meg Yoga is rooted in the belief that yoga can be
                a gentle tonic to modern life. Through Vinyasa, Yin, Hatha,
                Ashtanga, Maternity Yoga and Breathwork, I create spaces that
                invite calm, presence and self-discovery. My approach encourages
                students to step away from the demands of everyday life and
                reconnect with themselves and the natural rhythms that support
                balance and wellbeing.
              </p>
              <p>
                Whether practising indoors or beneath open skies, my intention
                is to offer a welcoming space where you can move mindfully, find
                moments of stillness and cultivate a deeper sense of peace, both
                on and off the mat.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto w-full">
          <div className="aspect-square w-full rounded-xl bg-slate-200" />
        </div>
      </section>
    </div>
  );
}
