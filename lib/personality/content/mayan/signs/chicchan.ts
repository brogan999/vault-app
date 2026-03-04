import type { MayanSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "chicchan";

export const CHICCHAN: MayanSignContent = {
  sign: "Chicchan",
  name: "The Vital Alchemist",
  shortName: "The Alchemist",
  englishName: "Serpent",
  tagline: "Coiled force of transformation — you carry the fire that renews itself by shedding what it was",
  color: "#A03B0F",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  direction: "East",
  element: "Fire",

  overview: `Chicchan is the fifth day sign of the Tzolkin, embodying the serpent — the most revered and feared creature in Mesoamerican cosmology. In Maya understanding, the serpent is not merely an animal but a cosmic principle: the vital force that animates all living things, the kundalini power that rises through the body's energy centers, and the feathered Kukulkan who bridges earth and sky. Those born under Chicchan carry this serpentine energy — intense, transformative, and profoundly physical.

Aligned with the East — the direction of red, of sunrise and new beginnings — Chicchan returns the Tzolkin cycle to its fiery origin after the Southern pause of Kan. Your element is Fire, but this is not the fire of the hearth or the candle. This is the fire within the body: the primal vitality, the sexual force, the metabolic heat that powers every cell. The Maya associated Chicchan with the blood, the spine, and the nervous system — the serpent pathways through which life force travels within the human form.

The Vision Serpent was one of the most important ritual figures in Classic Maya ceremony — a great plumed snake that appeared from incense smoke during bloodletting rituals, opening a portal between the human world and the realm of ancestors and gods. Chicchan people carry this portal quality. You are a threshold being, capable of accessing and transmitting energies that most people experience only at the extreme edges of their lives — in moments of passion, crisis, transformation, or transcendence. Your challenge is that living at this intensity requires a body and psyche strong enough to conduct the current without burning out. Learning to regulate, channel, and consciously direct your serpent power is your lifetime work.`,

  toneInteractions: {
    1: "Tone 1 (Hun — Unity) concentrates Chicchan's serpent power into a single, magnetic point. You become pure vital force — intensely present, magnetically attractive, and capable of initiating transformations simply through the focused power of your being. This is the most primal and potent expression of the serpent.",
    2: "Tone 2 (Ka — Duality) reveals the serpent's double nature — healer and destroyer, passion and control, rising and descending. You hold both poles of vital energy simultaneously, giving you extraordinary range. Your challenge is integration: letting both forces serve your evolution rather than warring within you.",
    3: "Tone 3 (Ox — Rhythm) activates Chicchan's coiled energy into dynamic, rhythmic movement. The serpent dances. You express vital force through rhythm — in movement, in speech, in creative output. Your energy is contagious and kinetic; others feel physically energized in your presence.",
    4: "Tone 4 (Kan — Stability) creates a remarkably grounded vessel for Chicchan's intense energy. You channel serpent power through stable, reliable structures — consistent practices, disciplined bodies, organizations with strong foundations. This tone transforms raw intensity into sustainable power.",
    5: "Tone 5 (Ho — Empowerment) gives Chicchan command presence over vital and transformative energies. You become the person others trust to guide them through their most intense experiences — births, deaths, crises, awakenings. Your authority comes from your embodied relationship with the serpent force, not from theoretical knowledge.",
    6: "Tone 6 (Uac — Flow) brings serpentine grace to Chicchan's power. Rather than explosive bursts, your energy moves in fluid, sinuous patterns — adapting, flowing around obstacles, finding the path of least resistance that still reaches the deepest destination. This is the healer's rhythm, the dancer's Chicchan.",
    7: "Tone 7 (Uuc — Resonance) positions Chicchan at the mystical center of the thirteen tones. The Vision Serpent opens its portal. You channel information from ancestral and cosmic dimensions through your body's nervous system with extraordinary clarity. Trust the somatic messages — your spine is an antenna.",
    8: "Tone 8 (Uaxac — Harmony) asks Chicchan to integrate its intense energy into harmonious wholeness. The serpent's fire, which can scorch, now warms and illuminates evenly. You model how passion and composure can coexist, showing others that intensity need not be chaotic to be powerful.",
    9: "Tone 9 (Bolon — Completion) brings Chicchan's transformative cycle to fruition. The skin has been fully shed. You emerge from your latest transformation with hard-won clarity and a body that has been reorganized by the process. The nine lords of Xibalba recognize the serpent that passed through their domain.",
    10: "Tone 10 (Lahun — Manifestation) grounds Chicchan's vital energy into visible, tangible results. Your physical vitality, emotional intensity, and transformative power now produce concrete outcomes — healed bodies, transformed relationships, actualized visions. The serpent's fire becomes the forge that shapes real things.",
    11: "Tone 11 (Buluc — Liberation) releases Chicchan's attachment to its own power. The serpent sheds not just its skin but its identity as the powerful one. This is the most humbling and liberating tone for your sign — discovering that vulnerability, not strength, is the serpent's highest teaching.",
    12: "Tone 12 (La Ka — Understanding) crystallizes Chicchan's embodied wisdom into transmissible knowledge. You can now teach what you've learned through the body's curriculum — guiding others through their own serpent awakenings with clarity, compassion, and the credibility of direct experience.",
    13: "Tone 13 (Ox Lahun — Transcendence) elevates Chicchan to Kukulkan — the feathered serpent who unites earth and sky, matter and spirit, body and cosmos. Your vital force now serves universal rather than personal transformation. The serpent transcends its skin entirely and becomes the rainbow bridge between worlds.",
  },

  coreEnergies: [
    { name: "Vital Force", score: 95, description: "An exceptionally strong life-force current that manifests as physical magnetism, sexual energy, healing power, and an almost tangible intensity of presence" },
    { name: "Transformative Power", score: 93, description: "The serpent's gift of cyclical renewal — you shed what no longer serves you with a completeness that both frightens and inspires those around you" },
    { name: "Somatic Intelligence", score: 90, description: "Your body is your primary instrument of perception — you read situations through physical sensation, gut response, and the subtle language of the nervous system" },
    { name: "Alchemical Instinct", score: 88, description: "A natural capacity to transmute base experience into refined wisdom — your suffering becomes medicine, your crises become breakthroughs" },
    { name: "Primal Presence", score: 85, description: "When you walk into a room, the energy shifts. Your presence is registered at the animal level before the social level — people sense your vitality before they process your words" },
  ],

  strengths: [
    {
      title: "Regenerative Power",
      description: "Like the serpent that sheds its skin, you possess an extraordinary capacity for self-renewal. Where others accumulate damage over time, you periodically dissolve your old form and emerge remade.",
      deepDive: "The Maya observed the serpent's molting and recognized it as a cosmic metaphor for the death-rebirth cycle that governs all reality. Chicchan people enact this cycle in their own lives — through career changes, relationship transformations, physical metamorphoses, and identity shifts that can be startling to observers. Your regenerative capacity means that your biography often reads like several lifetimes compressed into one. The discipline is learning to manage these transitions consciously rather than being driven through them by crisis.",
    },
    {
      title: "Body Wisdom",
      description: "Your body is an instrument of extraordinary sensitivity. You perceive truth through sensation — a tight gut, a surge of energy, a wave of heat — before your mind has processed the situation. This somatic intelligence is your most reliable guide.",
      deepDive: "In Maya ceremony, the body was understood as a microcosm of the cosmos, with the spine mirroring the Wakah-Chan and the energy centers corresponding to different levels of creation. Chicchan people have an activated relationship with this internal cosmology. Your body doesn't just carry you through space; it reads, processes, and responds to reality with a precision that your conscious mind often can't match. Learning to trust and interpret your body's signals — rather than overriding them with mental analysis — is essential to your development.",
    },
    {
      title: "Transformative Catalyst",
      description: "Your presence catalyzes transformation in others — not through advice or instruction, but through the energetic impact of your authenticity. People in sustained contact with you tend to face their own need for change.",
      deepDive: "The Vision Serpent appeared in Maya ritual to open portals between worlds. Chicchan people serve a similar function in social reality: your intensity, honesty, and willingness to transform creates a field that dissolves pretense in others. This is a powerful gift and a social challenge. Not everyone wants their comfortable illusions disrupted. The mature Chicchan learns discernment — recognizing who is ready for the serpent's medicine and who needs to be met with gentleness instead of truth.",
    },
    {
      title: "Crisis Competence",
      description: "When others freeze or fragment under extreme pressure, you come alive. Emergencies, high-stakes moments, and situations requiring immediate, decisive physical action reveal your most capable self.",
      deepDive: "The serpent's survival strategy is instantaneous response — strike or retreat, with no hesitation in between. Chicchan people carry this capacity for extreme presence under pressure. You don't need to plan for crisis; your body and nervous system are already wired for it. This makes you invaluable in medical emergencies, conflict zones, high-stakes negotiations, and any situation where composure under fire determines outcomes.",
    },
  ],

  growthEdges: [
    {
      title: "Intensity Addiction",
      teaser: "Your serpent energy can become dependent on extreme states — crisis, passion, transformation — at the expense of ordinary life.",
      fullExplanation: "Living with Chicchan's level of vital force means that normalcy can feel like numbness. You may unconsciously generate drama, seek out extreme experiences, or sabotage stability because the low hum of everyday existence feels like a slow death to your serpent nature. Relationships suffer when your partner provides warmth but not enough fire. Careers stall when you abandon functional situations because they don't provide enough intensity. Your growth requires building a relationship with quietude — discovering that the deepest serpent power isn't the strike but the coiled stillness between strikes.",
      premiumHook: "Your personalized Kin reading reveals how your specific tone modulates your intensity threshold and provides practices for finding power in stillness.",
    },
    {
      title: "Emotional Volatility",
      teaser: "The same vital force that powers your magnetism can overload your emotional circuitry when unchecked.",
      fullExplanation: "Chicchan's fire element combined with the body's nervous system creates a tendency toward emotional peaks and valleys that can exhaust both you and those close to you. Anger can be volcanic, passion can become consuming, and even joy can carry an intensity that destabilizes relationships. The Maya understood that the serpent's fire needed ritual containment — ceremonies that channeled rather than suppressed the energy. Your growth asks you to develop modern equivalents: physical practices, breathwork, and relational skills that allow your full intensity to express without scorching.",
      premiumHook: "Discover how your directional and elemental influences shape your emotional volatility and receive tailored regulation practices for the serpent's fire.",
    },
    {
      title: "Control Through Power",
      teaser: "Your natural dominance and magnetic presence can become a tool for controlling others rather than empowering them.",
      fullExplanation: "Chicchan's primal presence gives you unusual influence over others — people feel your energy viscerally and may defer, desire, or fear you in ways that create unhealthy power dynamics. The shadow of the serpent is the constrictor — using personal power to trap, manipulate, or dominate rather than to heal and transform. This may manifest subtly: through emotional intensity that silences dissent, sexual magnetism used as leverage, or the implicit threat of withdrawal that keeps others compliant. The evolved Chicchan uses their power as Kukulkan does — to connect worlds and elevate, not to subjugate.",
      premiumHook: "Your premium Tzolkin profile maps your specific power dynamics and provides the Kukulkan pathway — practices for transmuting dominance into genuine leadership.",
    },
  ],

  relationships: `In relationships, Chicchan brings an intensity that is both magnetic and demanding. You love with your whole body — physically present, emotionally unguarded, and profoundly invested in the transformative potential of the bond. Surface relationships are intolerable; you need a partner who can meet your depth, match your honesty, and withstand the occasional earthquake of your emotional process without retreating.

Your Eastern, fiery alignment makes your love passionate and direct. You show up fully and expect the same in return. Betrayal, dishonesty, or emotional withdrawal triggers the serpent's defensive response — a cold, complete retreat that can be devastating to partners who don't understand its origin. Your capacity for intimacy is extraordinary, but it requires trust built through consistency and courage from both sides.

The Chicchan partner at their finest creates a relationship that transforms both people — a crucible where genuine alchemy occurs, where both partners become more fully themselves through the heat of honest love. Your growth edge is learning that sustainable intimacy requires more than intensity — it requires the quiet, unglamorous maintenance of trust, the daily choosing that happens between the peaks, and the patience to let your partner transform at their own pace.`,

  compatibilityNotes: {
    Imix: "Primordial water meets serpent fire — a deeply creative and potentially volatile combination. Imix's nurturing depth provides the container Chicchan's intensity needs. Requires mutual respect for radically different processing speeds.",
    Oc: "Dog's unwavering loyalty provides the emotional safety Chicchan needs to fully shed its skin. Oc's steadiness anchors your intensity, while your transformative fire prevents Oc from stagnating in comfort. A deeply stabilizing partnership.",
    Cimi: "Death and Serpent — two masters of transformation create a relationship of extraordinary depth and occasional darkness. Both signs understand shedding, both honor the necessity of endings. Profoundly intimate; requires shared commitment to light alongside shadow.",
    Lamat: "Star's harmonious beauty balances Chicchan's raw intensity. Lamat teaches the serpent grace and proportion; the serpent teaches the star depth and authentic power. A pairing that refines both signs.",
    Ix: "Jaguar and Serpent — two shamanic power animals in one relationship. Ix's mysterious depth matches Chicchan's transformative force. A pairing of exceptional spiritual potential and considerable intensity that requires grounding practices.",
    Caban: "Earth and Serpent — Caban's grounded navigational wisdom provides the terrain through which Chicchan's energy can travel productively. A practical, stabilizing match that helps the serpent find its direction.",
  },

  careerPath: `Chicchan thrives in vocations that engage the vital force directly — healing arts, bodywork, martial arts instruction, emergency medicine, psychotherapy, midwifery, and any role where working with the body's energy is central. You're also drawn to transformative work: crisis intervention, addiction counseling, trauma recovery, and organizational turnaround — situations where the serpent's capacity to transmute poison into medicine is the primary skill required.

Your alchemical instinct makes you exceptional in research, particularly in fields that involve biological, chemical, or energetic transformation. Pharmacology, biochemistry, fermentation, and metallurgy all resonate with Chicchan's transmutative nature. You also excel in fields requiring physical courage and somatic mastery — performance art, dance, surgery, and competitive athletics.

The careers that deplete Chicchan are those demanding emotional suppression, physical immobility, or the denial of your primal nature. Desk work without physical engagement, environments that pathologize intensity, and roles requiring you to diminish your presence will corrode your vitality from the inside.`,

  workStyle: `You work in coiled cycles — periods of patient observation followed by explosive, highly focused execution. Your energy does not distribute evenly across time; it concentrates and releases. Colleagues may find your rhythm confusing until they learn to trust its productivity. You accomplish more in a single focused burst than most achieve in a week of steady effort. Your ideal work environment allows this rhythm, provides physical space for movement, and respects your need for autonomy. Micromanagement is not just annoying to you — it's physically intolerable, experienced in the body as constriction.`,

  spiritualWisdom: `Chicchan's spiritual path is the way of embodied awakening — the understanding that enlightenment does not transcend the body but moves through it. The Maya revered the serpent as the visible form of cosmic energy traveling through matter. Kukulkan — the feathered serpent — is the supreme symbol of this integration: earth-crawling snake united with sky-flying bird, material density fused with spiritual liberation. Your spiritual work is to become Kukulkan: honoring your primal, physical nature while allowing it to rise toward its highest expression.

The Eastern direction aligns you with the sunrise of consciousness — the daily renewal of awareness. Your meditation practice benefits from body-centered disciplines: breathwork that moves energy along the spine, movement practices that honor the serpent's sinuous intelligence, and heat-generating practices like vigorous yoga or sweat rituals. The ancient Maya used bloodletting and fasting to activate the Vision Serpent; you need modern equivalents that access the same somatic intensity without self-harm.

Your deepest spiritual realization is that the body is not an obstacle to spirit but its most intimate vehicle. Every cell carries the same intelligence that organized the cosmos. Your spine is the Wakah-Chan — the World Tree — connecting the underworld of unconscious instinct with the upperworld of cosmic awareness. When you learn to conduct energy along this axis consciously, you become a living bridge between worlds, which is the serpent's ultimate sacred function.`,

  lifeLessons: [
    "Intensity is a gift, not an identity — you are more than your most powerful moments",
    "The serpent's greatest power is not the strike but the shed — transformation through release, not force",
    "Your body speaks truth before your mind speaks story — learn to listen to the older voice",
    "Control over others is the shadow of control over yourself — master the inner serpent first",
    "Stillness between transformations is not stagnation; it is the coiling that makes the next movement possible",
    "Vulnerability is not weakness for the serpent — it is the soft, new skin that proves you are still growing",
  ],

  toolkit: [
    {
      title: "Serpent Breathwork",
      context: "When emotional intensity is building and you need to channel it consciously rather than react explosively",
      action: "Sit with your spine straight. Breathe in through the nose for 4 counts, imagining the breath traveling from the base of your spine upward. Hold for 2 counts at the crown of your head. Exhale for 8 counts, feeling the energy descend and ground. Repeat 7 times. This practice moves Chicchan's fire through its natural channel — the spinal pathway the Maya associated with the Wakah-Chan — rather than letting it explode outward.",
    },
    {
      title: "The Conscious Shed",
      context: "When you sense a transformation coming — in identity, relationship, career, or belief — and need to participate in the process rather than be overwhelmed by it",
      action: "Write a letter to the version of yourself you are leaving behind. Thank this self for what it provided. Name specifically what you are releasing and why. Then write a letter from the self you are becoming, describing what becomes possible when the old skin falls. Burn the first letter. Keep the second where you can see it daily.",
    },
    {
      title: "Intensity Calibration",
      context: "When you receive feedback — or notice patterns — suggesting your intensity is overwhelming the people or situations around you",
      action: "Before entering any significant interaction, scan your internal intensity on a 1-10 scale. Ask: 'What level does this situation actually require?' If your internal state is a 9 and the situation requires a 5, spend three minutes in slow breathing before engaging. This is not dimming your fire; it is the serpent choosing precision over force.",
    },
    {
      title: "The Kukulkan Integration",
      context: "When you feel split between your primal, physical nature and your higher aspirations — when body and spirit seem at war",
      action: "Stand barefoot outside. Feel the earth through your feet (the serpent's ground). Look up at the sky (the bird's domain). Breathe into the space between — your torso, your heart. Speak aloud: 'I am both. I deny neither.' Then do one thing today that honors your body's needs and one thing that honors your spirit's calling. The feathered serpent lives in the integration, not the choosing.",
    },
  ],

  descriptionInsight: `Chicchan is the Tzolkin's vital fire — the serpent force that the Maya recognized as the animating current within all living things. As the fifth day sign, returning the cycle to the red East, you carry the power of primal transformation: shedding what no longer serves, conducting life-force energy through the body's sacred pathways, and bridging the material and spiritual realms as the feathered serpent Kukulkan. Your gift is alchemical — transmuting raw experience into embodied wisdom through the fire of your own becoming.`,
};
