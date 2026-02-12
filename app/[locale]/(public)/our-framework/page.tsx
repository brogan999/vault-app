import { Link } from "@/i18n/navigation";
import { HERO_TEST_ID } from "@/lib/products";
import { Globe } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, articleSchema } from "@/components/seo/json-ld";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Framework — Anima",
    description:
      "Why we're called Anima: psychometric science and symbolic traditions in one portrait. Big Five, Enneagram, astrology, Human Design, and more.",
  };
}

const SECTIONS = [
  { id: "why-anima", label: "Why We're Called Anima" },
  { id: "problem", label: "The Problem With One Lens" },
  { id: "what-anima-offers", label: "What Anima Offers" },
  { id: "psychometric", label: "The Psychometric Assessments" },
  { id: "esoteric", label: "The Esoteric Frameworks" },
  { id: "mirror", label: "The Mirror: AI-Powered Self-Conversation" },
  { id: "philosophy", label: "Our Philosophy on Evidence" },
  { id: "why-multiple", label: "Why Multiple Lenses Matter" },
  { id: "what-it-is", label: "What This Is — and What It Isn't" },
];

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

export default async function OurFrameworkPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8 lg:py-14">
        <JsonLd
          data={articleSchema({
            headline: "Our Framework — Anima",
            description:
              "Why we're called Anima: psychometric science and symbolic traditions in one portrait. Big Five, Enneagram, astrology, Human Design, and more.",
            url: `${BASE_URL}/our-framework`,
            datePublished: "2026-02-07",
            dateModified: "2026-02-11",
          })}
        />
        {/* Page title & intro */}
        <div className="mb-12 border-b border-border/60 pb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Core theory
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground font-serif sm:text-4xl">
            Our Framework
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            In the winter of 1913, Carl Jung did something that would have ended
            most careers. He stopped treating patients — and walked into his own
            unconscious. What he found there is why we&apos;re called Anima.
          </p>
        </div>

        {/* In-page navigation */}
        <nav
          className="mb-14 rounded-xl border border-border/60 bg-card/50 p-4 lg:p-5"
          aria-label="On this page"
        >
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Globe className="h-3.5 w-3.5" />
            On this page
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <article className="space-y-16 text-foreground">
          <section id="why-anima" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              Why We&apos;re Called Anima
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              In the winter of 1913, Carl Jung — already one of the most
              celebrated psychologists in the world — did something that would
              have ended most careers. He stopped treating patients. He withdrew
              from academic life. And he deliberately walked into his own
              unconscious.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For the next six years, Jung sat alone in his study in Küsnacht, on
              the shores of Lake Zurich, and engaged in what he later called
              &quot;the most important experiment of my life.&quot; He would quiet his
              mind, let images arise, and then enter into dialogue with the
              figures he encountered. He painted them. He carved them in stone. He
              recorded every word.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              What emerged from those years would reshape our understanding of the
              human mind — the archetypes, the collective unconscious, the shadow,
              the process of individuation. But before any of that, there was one
              discovery that changed everything.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jung found that deep beneath the surface of his conscious
              personality — beneath the professional reputation, the intellectual
              framework, the social mask — there existed an inner figure with its
              own voice, its own knowledge, and its own way of seeing. He called
              this figure the <em>anima</em>: the soul, the inner personality, the
              animating force that connects the conscious mind to the vast unknown
              within.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The anima, Jung realized, was not merely a concept. It was the
              bridge. The part of yourself that knows what your conscious mind
              hasn&apos;t figured out yet. The voice that speaks in dreams, in sudden
              intuitions, in the feeling that there&apos;s something about you that no
              single test, no single framework, no single label has ever fully
              captured.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That&apos;s why we named this platform Anima.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Not because we think Jung had the final word on personality — he
              didn&apos;t. But because he understood something that most personality
              platforms still get wrong: <strong>you cannot know yourself through a
              single lens.</strong> The conscious mind sees one thing. The
              unconscious holds another. Empirical measurement captures a
              pattern. Symbolic tradition captures a meaning. You need both. You
              need many.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jung spent those years in dialogue with his inner world because he
              understood that self-knowledge isn&apos;t a result you receive.
              It&apos;s a conversation you enter.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anima is designed to be that conversation.
            </p>
          </section>

          <section id="problem" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              The Problem With One Lens
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Imagine trying to understand a city by only looking at its road map.
              You&apos;d know how to get around, but you&apos;d miss the architecture,
              the culture, the history, the feeling of walking through it at
              dusk. Now imagine you also had a topographic map, a transit map, an
              aerial photograph, and a hand-drawn guide from someone who&apos;d
              lived there for forty years. The city wouldn&apos;t change — but your
              understanding of it would transform.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That&apos;s what happens when you look at personality through multiple
              frameworks. A single test gives you a label. Multiple lenses give
              you a living, breathing portrait.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Take someone whose Big Five profile shows high Openness and low
              Conscientiousness, whose Enneagram reveals a core motivation of
              seeking freedom and experience (Type 7), and whose birth chart shows
              a Sagittarius Moon. Each of those data points comes from a
              completely different tradition — one empirical, one motivational,
              one symbolic — and yet they&apos;re telling a remarkably coherent story.
              A story no single test would have told on its own.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That&apos;s the experience we set out to create.
            </p>
          </section>

          <section id="what-anima-offers" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              What Anima Offers
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anima brings together ten distinct frameworks — four grounded
              in modern psychometric science, and six drawn from the world&apos;s
              oldest traditions of self-understanding. Plus an AI companion that
              weaves them all together into a conversation about you.
            </p>
          </section>

          <section id="psychometric" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              The Psychometric Assessments
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These are the frameworks backed by academic research, statistical
              validation, and decades of refinement. They measure real
              psychological constructs using carefully designed question sets,
              and their accuracy can be tested and verified.
            </p>

            <div className="mt-10 space-y-12">
              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  The Big Five (OCEAN)
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  If the psychometric world has a gold standard, this is it. The
                  Big Five model — measuring Openness, Conscientiousness,
                  Extraversion, Agreeableness, and Neuroticism — is the most
                  scientifically validated personality framework in existence. It
                  emerged not from a single theorist&apos;s idea of how personality
                  should work, but from decades of factor analysis revealing how
                  personality actually clusters in large populations.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Our assessment measures where you fall on each of the five
                  dimensions — not as a type or a category, but as a precise
                  position on a spectrum. You&apos;re not &quot;an extrovert&quot; or
                  &quot;an introvert.&quot; You&apos;re somewhere specific on that continuum,
                  and that specificity matters.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We built our Big Five assessment using items derived from the
                  International Personality Item Pool (IPIP), an open-source,
                  academically validated item bank. We monitor our internal
                  consistency (Cronbach&apos;s alpha), run factor analyses as our
                  respondent base grows, and track test-retest reliability over
                  time. We believe in showing our work — and we&apos;ll share our
                  validation data as it accumulates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Personality Type Assessment
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  The four-letter personality types — INTJ, ENFP, ISFJ, and the
                  rest — trace their lineage back to Carl Jung&apos;s theory of
                  psychological types, later developed by Katharine Briggs and
                  Isabel Myers into the framework that has become one of the most
                  widely recognized personality models in the world.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Our assessment measures four dimensions: where you direct your
                  energy (Extraversion vs. Introversion), how you take in
                  information (Sensing vs. Intuition), how you make decisions
                  (Thinking vs. Feeling), and how you approach the outside world
                  (Judging vs. Perceiving). The combination gives you one of 16
                  types, each with its own character and story.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  But here&apos;s what we think matters most: we show you the spectrum,
                  not just the label. If you score 51% toward Thinking and 49%
                  toward Feeling, you should know that — because that&apos;s a very
                  different experience than scoring 95% Thinking. We assign you a
                  type because types are useful and memorable, but we always show
                  you the full picture underneath.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Each of our 16 types is brought to life with a character name
                  and a miniature world that captures its essence. These aren&apos;t
                  scientific labels — they&apos;re invitations to recognize yourself.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  The Enneagram
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Where the Big Five measures what your personality looks like
                  from the outside, the Enneagram goes after why. It describes
                  nine fundamental motivational patterns — the core desires and
                  fears that shape how you move through the world.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  The Enneagram has a complicated relationship with academic
                  psychology. It lacks the massive empirical base of the Big Five,
                  and its origins are more spiritual than scientific. But it
                  captures something that trait-based models often miss: the
                  inner experience of being you. Why two people who behave
                  identically can be driven by completely different needs. Why
                  your greatest strength and your deepest vulnerability are often
                  the same thing.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We include it because our users consistently tell us it&apos;s the
                  framework that makes them feel most deeply seen — and because we
                  believe that matters, even when a framework&apos;s validation journey
                  is still ongoing. We&apos;re transparent about where the Enneagram
                  sits on the evidence spectrum, and we present it as a tool for
                  reflection rather than a clinical instrument.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Work Style Profile
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Based on the well-established two-axis behavioral model
                  measuring Dominance, Influence, Steadiness, and
                  Conscientiousness, our Work Style Profile zooms in on how you
                  collaborate, communicate, and lead in professional settings.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  This isn&apos;t a measure of who you are in your soul — it&apos;s a
                  practical tool for understanding your workplace instincts. Do
                  you drive toward results or build consensus? Do you thrive on
                  variety or value consistency? The answers help you work better
                  with others and understand why certain team dynamics energize
                  you while others drain you.
                </p>
              </div>
            </div>
          </section>

          <section id="esoteric" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              The Esoteric Frameworks
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Now we enter different territory. These frameworks don&apos;t come from
              psychology labs — they come from civilizations that have been
              studying the human experience for millennia. They aren&apos;t validated
              by peer-reviewed journals. They&apos;re validated by the billions of
              people across cultures and centuries who have found meaning in
              them.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We include them not because we claim they&apos;re scientifically
              equivalent to the Big Five — they aren&apos;t, and we won&apos;t pretend
              otherwise. We include them because they offer something science
              often can&apos;t: a symbolic language for parts of the human experience
              that resist measurement. A felt sense of meaning. A mirror made of
              metaphor rather than statistics.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We calculate every esoteric profile with the highest possible
              accuracy — using the Swiss Ephemeris for astronomical calculations,
              proper lunar calendar conversions, and the established methods of
              each tradition. If you&apos;re going to explore these frameworks, they
              should at least be done right.
            </p>

            <div className="mt-10 space-y-10">
              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Western Astrology
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Your birth chart is a snapshot of the sky at the exact moment
                  you were born. Your Sun sign reflects your core identity, your
                  Moon sign reveals your emotional inner world, and your Rising
                  sign shapes how others first perceive you. Beyond these three,
                  the positions of all the planets across twelve houses create a
                  complex, layered portrait.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We calculate your full natal chart — not just your Sun sign —
                  because astrology as practiced by serious astrologers has never
                  been about magazine horoscopes. Whether you approach it as a
                  symbolic framework, a source of self-reflection, or something
                  more, we make sure the chart itself is astronomically precise.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Vedic Astrology (Jyotish)
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  India&apos;s ancient astrological tradition uses the sidereal zodiac
                  — adjusted for the slow wobble of the Earth&apos;s axis — which
                  means your Vedic placements are often different from your
                  Western ones. This isn&apos;t a contradiction; it&apos;s two different
                  coordinate systems looking at the same sky.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Vedic astrology emphasizes the Moon sign and Nakshatra (lunar
                  mansion) more than the Sun sign, and introduces concepts like
                  Dasha periods — planetary cycles that unfold throughout your
                  life, suggesting which themes may be prominent at different
                  stages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Numerology (Life Path)
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Numerology reduces your birth date to a single number (or
                  Master Number) that represents your life&apos;s core theme and
                  purpose. It&apos;s one of the oldest and most widespread symbolic
                  systems in human history, appearing independently in Greek,
                  Hebrew, Chinese, and Indian traditions.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  The calculation is straightforward, but the framework it opens
                  is rich — touching on purpose, challenge, and the recurring
                  patterns that seem to echo through a life.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Human Design
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A modern synthesis that draws from astrology, the I Ching, the
                  Kabbalah, the Chakra system, and quantum physics, Human Design
                  produces a remarkably specific blueprint for how you&apos;re designed
                  to make decisions and interact with the world. Your Type (one of
                  five) and Strategy tell you how to move through life with less
                  resistance, while your Authority reveals your most reliable
                  inner compass.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Human Design is the newest framework on Anima and the one
                  that provokes the strongest reactions — both from people who
                  find it uncannily accurate and from skeptics who question its
                  foundations. We present it because our users asked for it, and
                  because its specificity makes it a powerful mirror for
                  self-reflection regardless of where you stand on its
                  metaphysical claims.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Chinese Zodiac
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A 12-year cycle of animal signs, modulated by five elements and
                  the yin-yang polarity, the Chinese Zodiac is one of the
                  world&apos;s most enduring systems of personality classification.
                  Your animal sign is determined by the lunar year of your birth —
                  and if you were born in January or February, you might be
                  surprised to learn you belong to the previous year&apos;s animal.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We go beyond just the animal to include your element, your
                  yin/yang orientation, and (when birth time is available) your
                  inner and secret animals — creating a multi-layered portrait
                  from what many people think is a single-sign system.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">
                  Mayan Astrology (Tzolkin)
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  The Tzolkin, the sacred 260-day calendar of the Maya, assigns
                  each day a unique combination of one of 20 day signs and one of
                  13 tones. Your Galactic Signature — the sign and tone of your
                  birth day — is said to reveal your purpose and the energy you
                  carry.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  This is perhaps the most unfamiliar framework for many of our
                  users, and that unfamiliarity is itself valuable. Encountering a
                  system of self-understanding from a radically different
                  cultural tradition can illuminate assumptions you didn&apos;t know
                  you were making.
                </p>
              </div>
            </div>
          </section>

          <section id="mirror" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              The Mirror: AI-Powered Self-Conversation
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Here&apos;s where everything comes together.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Once you&apos;ve completed your assessments and generated your
              profiles, you can step into a conversation with an AI that knows
              your full portrait — every score, every sign, every type. Not to
              tell you who you are. To help you explore who you are.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ask it anything. &quot;Why do I always lose interest in projects
              halfway through?&quot; &quot;Why am I drawn to people who are so
              different from me?&quot; &quot;What should I consider before
              changing careers?&quot; The AI draws on every framework in your
              profile to offer perspectives you might not have considered —
              weaving together your Big Five scores, your Enneagram type, your
              natal chart, your Human Design strategy, and more.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              It&apos;s not a therapist. It&apos;s not an oracle. It&apos;s a mirror that
              talks back — one that reflects not just your face, but the dozen
              different maps of who you are, all at once.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jung spent six years in conversation with his anima — his inner
              personality — and it transformed his understanding of himself and
              the human mind. You probably don&apos;t have six years. But you do have
              something Jung never had: every framework, every assessment, every
              insight, unified in one place, with an AI that remembers it all.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That&apos;s Anima. Your inner conversation, finally given a home.
            </p>
          </section>

          <section id="philosophy" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              Our Philosophy on Evidence
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We want to be clear about something, because we think you deserve
              clarity.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The psychometric assessments on Anima are built with
              genuine scientific rigor. We write validated question items,
              monitor internal consistency, run factor analyses, and track
              reliability. When we say a score is meaningful, we&apos;ve done the
              work to make sure it is.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The esoteric frameworks are not scientifically validated in the
              same way, and we don&apos;t claim they are. What they are is
              culturally validated — tested not in labs, but in the lived
              experience of billions of people across thousands of years. We
              calculate them with astronomical and mathematical precision, and
              we present them as what they are: powerful symbolic frameworks for
              self-reflection.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe both kinds of knowing have value. A thermometer and a
              poem can both tell you something true about a winter morning.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              What we will never do is blur the line between them. Every result
              on Anima is clearly labeled: you always know whether
              you&apos;re looking at a psychometric finding or a symbolic
              framework. We respect you enough to let you decide what resonates.
            </p>
          </section>

          <section id="why-multiple" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              Why Multiple Lenses Matter
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              People often ask us: &quot;If the Big Five is the most scientifically
              valid, why bother with anything else?&quot;
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Because validity isn&apos;t the only thing that matters. Recognition
              matters. Meaning matters. The feeling of being seen matters.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The Big Five might accurately tell you that you score in the 84th
              percentile on Neuroticism. Your Enneagram result might help you
              understand that this manifests as a deep loyalty and vigilance — a
              desire to protect the people you love from worst-case scenarios.
              Your natal Moon in Cancer might give you a symbolic language for
              the tenderness underneath the worry. And your Human Design might
              suggest a practical strategy for making decisions that honor your
              emotional depth rather than fighting it.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Same person. Same trait. Four completely different angles of
              understanding. Each one making the others richer.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That&apos;s what we mean by multiple lenses. Not &quot;more is better&quot;
              — but different perspectives reveal different truths.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jung understood this better than anyone. He didn&apos;t just study
              personality from the outside — he dove into his own psyche,
              engaging with symbolic traditions, mythological patterns, and
              empirical observation simultaneously. He knew that the rational
              mind and the symbolic mind aren&apos;t enemies. They&apos;re partners. And
              the richest self-knowledge comes from letting them work together.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That&apos;s the principle Anima is built on.
            </p>
          </section>

          <section id="what-it-is" className="scroll-mt-24">
            <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
              What This Is — and What It Isn&apos;t
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anima is a tool for self-discovery and personal growth.
              It&apos;s meant to inspire curiosity about who you are, compassion for
              how you&apos;re built, and practical insight into how you can live and
              work and love in ways that feel more like you.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              It is not a diagnostic tool. It is not a substitute for therapy or
              professional psychological assessment. It does not predict the
              future, and it does not define you. You are always more than any
              profile — or even ten of them — can capture.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              But we think those ten profiles, held together and explored with
              honesty and curiosity, can get you closer to understanding yourself
              than any single test ever could.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jung called the anima the bridge between the known and the unknown
              within you. We built Anima to be that bridge — between science and
              symbolism, between data and meaning, between who you think you are
              and who you might discover yourself to be.
            </p>
            <p className="mt-6 text-lg font-medium leading-relaxed text-foreground">
              That&apos;s a pretty good place to start.
            </p>
          </section>
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl border border-border/60 bg-card/50 p-8 text-center lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Ready to see your portrait?
          </p>
          <p className="mt-2 text-muted-foreground">
            Take the free test and start building your multi-lens profile.
          </p>
          <Link
            href={`/test/${HERO_TEST_ID}`}
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Take the Free Test
          </Link>
        </div>
      </div>
  );
}
