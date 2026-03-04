import type { MayanSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "etznab";

export const ETZNAB: MayanSignContent = {
  sign: "Etznab",
  name: "The Obsidian Mirror",
  shortName: "The Mirror",
  englishName: "Flint",
  tagline: "Forged in truth's fire — you cut through illusion to reveal what is real",
  color: "#93A2B6",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  direction: "North",
  element: "Air",

  overview: `Etznab is the eighteenth Kin of the Tzolkin, the sacred 260-day count that the Maya used to align human consciousness with cosmic rhythm. Represented by the Flint Knife — the obsidian blade used in both surgical healing and ceremonial sacrifice — Etznab carries the energy of truth, clarity, and the unflinching courage required to face reality without distortion. Positioned in the North and aligned with the White directional current, Etznab embodies the sharpness of air, the cutting precision of intellect, and the mirror-like quality of polished obsidian that reflects back exactly what stands before it. In Mayan cosmology, obsidian was not merely a tool but a sacred substance, born from volcanic fire and cooled into a surface so perfectly smooth it could serve as a portal between worlds.

Those born under Etznab possess a mind like that obsidian blade — incisive, penetrating, and uncomfortable with anything that is not precisely true. You have an innate capacity to see through pretense, self-deception, and the comfortable fictions that most people use to navigate life. Where others see social niceties, you see the power dynamics underneath. Where others accept surface explanations, you sense the deeper motivations. This is not cynicism but clarity — the kind of unsparing honesty that Mayan priests associated with the North Wind, which strips away everything that is not essential. Your Nawal energy is that of the spiritual surgeon: you cut not to harm but to heal, removing the diseased tissue of illusion so that genuine wholeness can emerge.

Etznab's relationship to the World Tree — Wakah-Chan — flows through the crystalline branches that reach into the realm of pure thought and spiritual light. Where the roots draw ancestral memory upward, Etznab channels the descending clarity of cosmic truth downward into human awareness. Hunab Ku, the supreme creative force, expresses through Etznab as the principle that truth is not an abstract ideal but a living blade — it can liberate or wound, depending on the skill and compassion of the one who wields it. Your sacred task is to develop the wisdom to know when a truth needs to be spoken, and the grace to deliver it in a way that opens rather than destroys.`,

  toneInteractions: {
    1: "Tone 1 (Hun — Unity) creates 1 Etznab, a day of magnetic truth-seeking. The singular focus of Unity hones your already-sharp perception into a laser point. This is a day for initiating honesty — beginning a conversation you've been avoiding, confronting a self-deception, or setting the intention to live with greater transparency. You become a beacon that draws others ready to face their own reflections.",
    2: "Tone 2 (Ka — Duality) creates 2 Etznab, revealing the double edge of truth. The Lunar tone illuminates the paradox at Etznab's core: truth can heal and truth can harm, and the same words can serve either function depending on context and intent. This energy invites you to examine your relationship with honesty — are you wielding it as medicine or as a weapon?",
    3: "Tone 3 (Ox — Rhythm) creates 3 Etznab, activating truth into creative expression. The Electric tone moves your clarity from private perception into public communication — writing, speaking, creating art that holds up a mirror to collective reality. This combination sparks the impulse to make the invisible visible, to give voice to what others sense but cannot articulate.",
    4: "Tone 4 (Kan — Stability) creates 4 Etznab, building reliable structures of discernment. The Self-Existing tone provides the framework for your clarity to become a consistent practice rather than sporadic flashes of insight. This energy supports the development of analytical methods, truth-telling protocols, and decision-making systems rooted in clear-eyed assessment.",
    5: "Tone 5 (Ho — Empowerment) creates 5 Etznab, radiating authoritative clarity. The Overtone amplifies your mirror quality, making your perceptions impossible to ignore. Others may seek your judgment or instinctively defer to your assessment of a situation. The challenge is using this amplified influence with discernment — not every truth needs to be spoken at full volume.",
    6: "Tone 6 (Uac — Flow) creates 6 Etznab, harmonizing sharp perception with relational grace. The Rhythmic tone balances Etznab's cutting edge with emotional intelligence, helping you find the organic rhythm between seeing clearly and communicating compassionately. This is a day for truth that flows like water rather than striking like flint.",
    7: "Tone 7 (Uuc — Resonance) creates 7 Etznab, the mystical midpoint where the mirror reflects not surfaces but souls. The Resonant tone deepens your perception beyond the intellectual into the intuitive — you sense not just what is true but why it matters, not just what is hidden but what the hiding protects. This combination produces insights of unusual psychological depth.",
    8: "Tone 8 (Uaxac — Harmony) creates 8 Etznab, integrating truth with ethical responsibility. The Galactic tone asks you to align your clarity with universal principles — to ensure that your truth-telling serves justice, healing, and the greater good rather than personal vindication or intellectual superiority. This energy supports the highest expression of the obsidian mirror.",
    9: "Tone 9 (Bolon — Completion) creates 9 Etznab, bringing a cycle of self-examination to its conclusion. The Solar tone illuminates the final piece of a puzzle you have been assembling — the truth you have been circling but not yet fully facing. This is a day of breakthrough honesty, particularly with yourself, where long-standing self-deceptions finally dissolve under the clarity of your own gaze.",
    10: "Tone 10 (Lahun — Manifestation) creates 10 Etznab, grounding clarity into decisive action. The Planetary tone demands that your perception produce results — not just seeing the truth but acting on it. This is a day for making the hard call, delivering the difficult diagnosis, or implementing the change that your clarity has been pointing toward.",
    11: "Tone 11 (Buluc — Liberation) creates 11 Etznab, shattering crystallized beliefs. The Spectral tone brings creative destruction to any rigidity in your thinking, reminding you that truth is not a fixed position but a living process. Under this influence, you may discover that a truth you have been defending has outlived its usefulness — and the liberating act is releasing it.",
    12: "Tone 12 (La Ka — Understanding) creates 12 Etznab, crystallizing clarity into shared wisdom. The Crystal tone brings cooperative dimension to your mirror quality, helping you facilitate group truth-telling with skill and sensitivity. This energy is ideal for mediation, conflict resolution, or any context where collective honesty needs a trustworthy container.",
    13: "Tone 13 (Ox Lahun — Transcendence) creates 13 Etznab, the cosmic mirror that reflects the universe back to itself. The Cosmic tone elevates your perception beyond personal and interpersonal truth into transpersonal awareness — you glimpse the fundamental nature of reality, unmediated by any lens. This is Etznab at its most mystical, where the flint blade becomes the diamond of pure consciousness.",
  },

  coreEnergies: [
    { name: "Radical Clarity", score: 95, description: "An unwavering capacity to perceive reality as it is, cutting through wishful thinking, social performance, and comfortable distortion" },
    { name: "Psychological Precision", score: 92, description: "The ability to identify the exact point where a pattern, belief, or behavior needs to be examined — you see the fracture line in any facade" },
    { name: "Intellectual Courage", score: 90, description: "A willingness to follow truth wherever it leads, even when the destination is uncomfortable or socially costly" },
    { name: "Discernment", score: 88, description: "The capacity to distinguish between what is genuinely true and what merely appears true — a refined filter that resists manipulation and propaganda" },
    { name: "Transformative Honesty", score: 85, description: "Truth in your hands becomes a healing instrument — your honesty, at its best, creates the conditions for genuine change" },
  ],

  strengths: [
    {
      title: "Mirror of Clarity",
      description: "You reflect reality back to people with a fidelity that can be both disorienting and deeply healing. In your presence, pretense becomes difficult to maintain — not because you judge, but because your energy naturally clarifies whatever it touches.",
      deepDive: "The obsidian mirrors used by Mayan priests were not vanity instruments but scrying devices — tools for perceiving hidden truths and accessing other dimensions of reality. Etznab individuals function similarly: your very presence creates a field of honesty that forces whatever is hidden to surface. In therapeutic, advisory, or leadership contexts, this is an extraordinary gift. People leave conversations with you seeing themselves more clearly — sometimes uncomfortably so, but ultimately with a precision that allows real change to begin.",
    },
    {
      title: "Incisive Problem Solver",
      description: "Where others get tangled in complexity, you cut to the essential question. Your mind naturally identifies the core issue in any situation, stripping away distracting symptoms to reveal the root cause.",
      deepDive: "The flint blade was the primary surgical tool of Mayan healers — and its metaphorical resonance with Etznab is precise. You do not treat symptoms; you diagnose causes. In professional contexts, you are the analyst who identifies the one metric that actually matters, the strategist who sees through competitive noise to the real threat, the counselor who names the wound beneath the presenting complaint. Your challenge is learning that not everyone is ready for surgery — and that timing your incisions is as important as their accuracy.",
    },
    {
      title: "Fearless Self-Examiner",
      description: "You hold yourself to the same standard of honesty you apply to others. Your capacity for rigorous self-reflection makes you one of the few signs capable of genuine, sustained personal growth because you refuse to hide from your own shadow.",
      deepDive: "Many truth-tellers direct their clarity exclusively outward — it is easier to see others' deceptions than to face your own. Etznab's deepest strength is that the mirror faces both ways. You are willing to sit with the unflattering reflection, to name your own patterns of avoidance, projection, and self-deception. This ongoing self-examination is not self-punishment but self-respect — the recognition that a mirror caked with its own distortions cannot reflect anything clearly.",
    },
    {
      title: "Guardian of Integrity",
      description: "You naturally uphold standards of honesty and ethical conduct in any group you belong to. Not through moralizing but through embodiment — your commitment to truth creates a baseline of integrity that elevates everyone around you.",
      deepDive: "In Mayan society, obsidian had a protective function — its blades guarded against spiritual contamination, its mirrors warded off deception. Etznab carries this protective energy into modern life. You are the colleague who will not let a comfortable lie go unchallenged, the friend who tells you what you need to hear rather than what you want to hear, the leader whose consistency creates a culture where dishonesty cannot take root.",
    },
  ],

  growthEdges: [
    {
      title: "Weaponized Truth",
      teaser: "Your clarity can become cruelty when deployed without compassion or timing.",
      fullExplanation: "The obsidian blade cuts with exquisite precision — but in unskilled hands, it can inflict devastating wounds. Etznab's shadow is the use of truth as a weapon: delivering painful honesty not to heal but to dominate, humiliate, or maintain a position of intellectual superiority. You may rationalize this by telling yourself you are 'just being honest,' but honesty without compassion is aggression in a virtuous disguise. The growth work is learning that truth is only medicine when administered at the right dose, at the right time, with genuine care for the recipient's capacity to receive it.",
      premiumHook: "Discover your truth-delivery style and receive personalized strategies for wielding clarity with compassion — calibrated to your specific Tone.",
    },
    {
      title: "Relentless Self-Criticism",
      teaser: "The mirror that never stops reflecting can become a prison of self-scrutiny.",
      fullExplanation: "Because you hold yourself to the same uncompromising standard of honesty you apply to others, you may develop a relentless inner critic that never allows you to rest in self-acceptance. Every flaw is magnified, every mistake catalogued, every imperfection exposed under the obsidian's unforgiving surface. The growth edge is recognizing that self-compassion is not self-deception — that accepting yourself as you are is not the same as refusing to grow. The mirror must sometimes be set down so that the person in front of it can simply breathe.",
      premiumHook: "Unlock your inner compassion protocol — practices that soften Etznab's self-reflective intensity without sacrificing its clarity.",
    },
    {
      title: "Emotional Flattening",
      teaser: "Your commitment to clarity can lead you to distrust emotions as unreliable data.",
      fullExplanation: "Etznab's North-facing, Air-element nature inclines toward the cerebral. Emotions, with their subjectivity and their resistance to precise articulation, can feel like noise to a sign that prizes signal. You may dismiss your own feelings as irrational, suppress emotional responses in favor of analysis, or struggle to understand why others make decisions based on how they feel rather than what they know. The growth here is understanding that emotions are not the opposite of truth — they are another form of truth, one that your intellectual blade alone cannot access.",
      premiumHook: "Your premium report maps the emotional landscape beneath your clarity — revealing the feelings your mirror most often deflects.",
    },
  ],

  relationships: `In relationships, Etznab brings a rare and sometimes challenging gift: absolute emotional transparency. You do not play games, withhold strategically, or maintain comfortable fictions about the state of a partnership. This makes you an exceptionally trustworthy partner — your significant other always knows where they stand — but it also means you can be experienced as intense, confrontational, or relentlessly analytical by those who prefer their intimacy with a softer focus.

Your ideal partner is someone who values honesty as deeply as you do and has the emotional resilience to receive your unfiltered perceptions without crumbling. You need a person who can hold their own truth alongside yours — who will push back when you are wrong, call you out when your clarity has tipped into criticism, and match your willingness to examine the relationship's foundations with unflinching regularity.

The Etznab partner at their best is profoundly honest, deeply loyal, and capable of a love that is built on the bedrock of truth rather than the shifting sands of performance and projection. At your growing edge, you are learning that intimacy requires not just clarity but tenderness — that some of the most important things in a relationship cannot be analyzed, only felt, and that the heart has its own logic that the mirror cannot fully capture.`,

  compatibilityNotes: {
    Oc: "The loyal Dog's warmth and emotional generosity softens Etznab's sharp edges — Oc teaches you that truth without love is incomplete, while you teach Oc that love without truth is fragile.",
    Cimi: "Two signs intimate with transformation — Cimi's acceptance of death and Etznab's commitment to truth create a pairing capable of navigating life's deepest transitions with unflinching grace.",
    Akbal: "Night and Mirror are powerful counterparts — Akbal holds the darkness, Etznab illuminates it. Together you access dimensions of awareness that neither can reach alone.",
    Chuen: "The playful Monkey lightens Etznab's intensity — Chuen reminds you that truth can be delivered with humor, creativity, and joy rather than always with the gravity of the surgical blade.",
    Ix: "The Jaguar Shaman and the Obsidian Mirror share an affinity for piercing veils — together you explore hidden dimensions with mutual courage and mutual respect for what you find.",
    Cauac: "Storm and Flint share a transformative purpose — Cauac brings the emotional intensity that Etznab's air nature sometimes lacks, creating a partnership of catharsis and clarity.",
  },

  careerPath: `Etznab thrives in vocations that reward precision, discernment, and the willingness to see and speak what others cannot or will not. You are naturally drawn to investigative journalism, forensic analysis, surgery, auditing, quality assurance, judicial work, psychotherapy, philosophy, and any field where the ability to perceive truth beneath appearances determines the outcome.

Your professional superpower is diagnosis — not just in the medical sense but in the broadest meaning of the word: identifying what is actually happening beneath the surface narrative. You are the auditor who finds the discrepancy everyone else overlooked, the therapist who names the pattern the client has been circling for years, the editor whose feedback transforms muddled thinking into crystalline prose.

Careers that drain Etznab energy are those requiring sustained diplomatic fiction, excessive social performance, or environments where honesty is treated as insubordination. You need work that values accuracy over agreeableness, where your perceptual acuity is recognized as an asset rather than a threat to institutional comfort.`,

  workStyle: `You work with surgical precision — methodical, focused, and intolerant of unnecessary complexity. Your workspace is likely organized, your processes streamlined, and your communication direct. You produce work that is clean, rigorous, and defensible because you apply the same standard of scrutiny to your own output that you apply to everything else.

In teams, you serve as the quality control mechanism — the person who catches the flaw in the logic, the inconsistency in the data, or the blind spot in the strategy. You are most effective when given the authority to speak candidly and the trust that your critiques are in service of the work rather than against the people doing it. Your leadership style is one of intellectual authority: you lead by being consistently, demonstrably right — and by holding everyone, including yourself, to the standard of excellence that truth demands.`,

  spiritualWisdom: `Etznab's spiritual path is the Way of the Sacred Mirror — the practice of turning consciousness toward itself with absolute honesty, seeking not comfort but truth. In Mayan cosmology, the obsidian mirror was one of the most powerful ritual objects, used by priests and shamans to scry across dimensions, communicate with ancestor spirits, and perceive the hidden workings of fate. Etznab individuals carry this scrying capacity as an innate spiritual orientation — you are naturally drawn to practices that strip away illusion and bring you face to face with the unadorned nature of reality.

Your spiritual journey is one of progressive disillusionment — not in the colloquial sense of disappointment but in the literal sense of dissolving illusions. Layer by layer, you shed the comfortable narratives that obscure your direct perception of what is. This process can be painful, as each dissolved illusion initially feels like a loss. But the Maya understood that Xibalba, the underworld of trials, was not a place of punishment but of initiation — and Etznab's path through progressive truth-facing is precisely this kind of descent that ultimately leads to liberation.

The deepest spiritual teaching of Etznab is that the final illusion the mirror must dissolve is the mirror itself — the identification with being the one who sees clearly. When you release even that identity, what remains is not a person looking at truth but truth looking at itself. Hunab Ku expresses through Etznab as the principle that ultimate reality is not something perceived by consciousness but consciousness perceiving itself, undistorted, without any lens at all.`,

  lifeLessons: [
    "Truth is a blade — learn to wield it with the precision of a healer rather than the force of a warrior",
    "The most courageous act of clarity is turning the mirror toward yourself and accepting what you see",
    "Honesty without compassion is cruelty wearing a mask of virtue",
    "Not every truth needs to be spoken — discernment includes knowing when silence serves better than words",
    "The emotions you dismiss as irrational carry information your intellect alone cannot access",
    "The final illusion is the belief that you are beyond illusion — stay humble before the mirror",
  ],

  toolkit: [
    {
      title: "The Compassion Filter",
      context: "When you feel compelled to deliver a difficult truth — to a partner, colleague, or friend",
      action: "Before speaking, ask three questions: Is this true? Is this necessary right now? Can I say this in a way that the other person can actually receive? If the answer to any question is no, pause. Truth that cannot be received is not medicine — it is noise. Revise your timing or delivery until all three answers are yes.",
    },
    {
      title: "Mirror Fasting",
      context: "When self-scrutiny has become compulsive and your inner critic is relentless",
      action: "Declare a deliberate twenty-four-hour fast from self-analysis. Every time you catch yourself examining, judging, or diagnosing your own behavior, redirect attention to something purely sensory — a taste, a texture, a sound. Give the mirror a rest. You will return to your clarity refreshed rather than depleted.",
    },
    {
      title: "Emotional Scrying",
      context: "When you notice you are intellectualizing a situation and avoiding the feeling underneath it",
      action: "Set a timer for ten minutes. Close your eyes and locate the emotion in your body — not its name, not its cause, but its physical sensation. Describe the sensation in concrete terms: heavy, tight, buzzing, hollow. Stay with the sensation without analyzing it. This practice trains your obsidian mirror to reflect the full spectrum of reality, including the wavelengths your intellect tends to filter out.",
    },
    {
      title: "Truth Inventory",
      context: "At the end of each week or during a period of significant decision-making",
      action: "Write down three truths you spoke this week that served healing, and one truth you withheld that might have helped. Also note one truth you delivered poorly — too harshly, too bluntly, or at the wrong time. This inventory develops the discernment that transforms raw honesty into skilled truth-telling.",
    },
  ],

  descriptionInsight: `Etznab is the Tzolkin's Obsidian Mirror — the flint-sharp clarity that cuts through illusion to reveal reality as it is. As the eighteenth Kin, you carry the White current of the North and the intellectual precision of Air, making you a natural diagnostician, truth-teller, and guardian of integrity. Your gift is uncompromising honesty wedded to psychological acuity — the sacred blade that heals by cutting away what is false so that what is true can finally breathe.`,
};
