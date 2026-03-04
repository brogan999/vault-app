import type { StrengthId, StrengthContent, VirtueContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "wisdom";

/* ------------------------------------------------------------------ */
/*  Wisdom & Knowledge — 5 strengths                                   */
/*  Creativity, Curiosity, Judgment, Love of Learning, Perspective     */
/* ------------------------------------------------------------------ */

const CREATIVITY: StrengthContent = {
  id: "creativity",
  label: "Creativity",
  virtue: "wisdom",
  description: "Thinking of novel ways to approach situations and produce things that are both original and useful.",

  inAction: `People with signature creativity don't just have ideas — they have unusual ideas that work. You naturally reframe problems, seeing angles that others overlook entirely. Where most people default to proven solutions, your mind generates alternatives before settling on one. This isn't limited to "artistic" creativity; it shows up in how you solve logistical problems, navigate social situations, and structure your daily life.

You likely experience a distinctive restlessness when forced to follow rigid procedures. Your mind is wired to tinker, combine, and reimagine — and that drive doesn't turn off just because someone hands you a standard operating procedure.`,

  atWork: `In professional settings, your creativity makes you the person people turn to when conventional approaches have failed. You excel in brainstorming, product development, and any role that rewards novel thinking. Startups, innovation teams, and design roles are natural habitats.

The risk at work is that creative solutions can feel threatening to people who value predictability. Your best strategy is to lead with the problem you're solving, then present your novel approach as one option among several — letting others see the logic behind your leap.`,

  inRelationships: `Your creativity shapes your relationships in subtle but significant ways. You bring novelty to partnerships — suggesting unexpected date ideas, finding unconventional solutions to household logistics, and keeping conversations fresh. Partners often describe you as someone who makes life more interesting.

The shadow side is that you may grow bored with relationship routines that others find comforting. You might push for change when stability is what's actually needed. Learning to distinguish between stagnation and healthy stability is a key relational growth edge.`,

  overuseRisk: `When creativity is overextended, it becomes novelty addiction. You may reject perfectly good solutions simply because they're conventional. You might start projects enthusiastically but lose interest once the creative challenge is solved, leaving a trail of unfinished work. In relationships, an overactive creativity drive can manifest as chronic dissatisfaction — always imagining how things could be different rather than appreciating what is.`,

  underuse: `When creativity goes undeveloped, you default to conventional thinking even when the situation calls for a fresh approach. Problems that don't have obvious solutions feel paralyzing rather than stimulating. You may find yourself stuck in routines that no longer serve you, unable to imagine alternatives.`,

  growthStrategies: [
    "Set constraints before brainstorming — creativity thrives within boundaries. Give yourself a specific problem and a time limit before generating solutions.",
    "Practice 'combinational creativity' by deliberately connecting ideas from different domains. Read outside your field and ask how concepts translate.",
    "Build a capture system for ideas (notebook, voice memos, digital notes) so creative impulses aren't lost. Review weekly and select one to develop.",
    "Share unfinished ideas with trusted people. Creative thinking benefits from external input, and isolation can turn originality into eccentricity.",
  ],

  toolkit: [
    "Morning Pages: Write three pages of unfiltered stream-of-consciousness each morning to prime your creative thinking for the day ahead.",
    "Constraint Box: Pick a current problem and solve it three different ways, each under a specific limitation (budget, time, materials).",
    "Cross-Pollination Walk: Spend 20 minutes in a context completely outside your work (art gallery, hardware store, nature trail) and note three ideas that could transfer to your current projects.",
    "Idea Audit: Review your past month's creative output. Identify which ideas you executed versus abandoned, and notice the pattern.",
  ],
};

const CURIOSITY: StrengthContent = {
  id: "curiosity",
  label: "Curiosity",
  virtue: "wisdom",
  description: "Exploring, discovering, and finding all subjects and topics fascinating.",

  inAction: `Curiosity as a signature strength goes beyond casual interest — it's a deep, persistent drive to understand. You don't just want to know what happened; you want to know why, how, and what it connects to. Conversations with you tend to go deeper than expected because you ask follow-up questions that others wouldn't think of.

You likely consume information voraciously across multiple domains. A single Wikipedia article leads to an hour-long exploration. A casual mention of an unfamiliar concept sends you researching. This isn't distraction — it's your mind doing what it's designed to do.`,

  atWork: `Your curiosity is a professional superpower in roles that reward investigation, analysis, and continuous learning. Research, journalism, consulting, and any field where understanding complex systems matters will energise you. You're the colleague who reads the footnotes, asks the question everyone was thinking, and finds the insight buried in the data.

The professional risk is scattered attention. Your curiosity can pull you in too many directions, making it hard to achieve depth in any one area. The remedy is strategic curiosity — directing your investigative energy toward questions that matter most for your current goals.`,

  inRelationships: `Curious people make their partners feel genuinely seen. You ask questions that show real interest in someone's inner world, not just surface-level check-ins. This creates depth and intimacy that many relationships lack.

However, curiosity can sometimes feel like interrogation. Partners who are more private may feel overwhelmed by your desire to understand everything. Learning to read when someone wants to be explored versus left alone is an important relational skill for you.`,

  overuseRisk: `Overextended curiosity becomes information addiction. You may spend so much time learning about things that you never commit to doing them. Analysis paralysis sets in because there's always more to discover before you feel ready to decide. You might also intrude on others' boundaries by probing into topics they'd prefer to keep private.`,

  underuse: `Without cultivated curiosity, you accept surface explanations and stop questioning. Life becomes a series of routines rather than discoveries. You miss opportunities for growth because you never look beyond the obvious. Conversations stay shallow, and you may feel a vague sense that something meaningful is missing.`,

  growthStrategies: [
    "Practice 'deep curiosity' on one topic per week rather than skimming many. Spend a concentrated hour going deeper than you normally would on a single subject.",
    "Ask 'why' three times in conversations. The first answer is usually surface-level; the third reveals something genuine.",
    "Explore a domain that's completely outside your comfort zone. Take a class, attend a lecture, or read a book in a field you know nothing about.",
    "Channel curiosity into creation — for every three things you learn, produce one thing that synthesises or applies what you've absorbed.",
  ],

  toolkit: [
    "Question Journal: Each evening, write down the most interesting question you encountered that day and spend 10 minutes exploring it.",
    "Expert Coffee: Once a month, invite someone from a completely different field for coffee and ask them to explain what fascinates them about their work.",
    "One-Topic Deep Dive: Pick a subject you're casually interested in and spend one full weekend going from beginner to intermediate understanding.",
    "Curiosity Map: Draw a mind map of your current interests, then look for unexpected connections between domains.",
  ],
};

const JUDGMENT: StrengthContent = {
  id: "judgment",
  label: "Judgment",
  virtue: "wisdom",
  description: "Thinking things through and examining them from all sides; weighing evidence fairly.",

  inAction: `Judgment as a signature strength means you have a natural capacity for careful, balanced thinking. You don't rush to conclusions. When others are swept up in enthusiasm or alarm, you're the one stepping back to consider what might be missing from the picture. You evaluate evidence rather than just accepting it, and you can hold two opposing ideas in mind simultaneously while assessing their merits.

This doesn't mean you're indecisive — it means your decisions are earned. People around you trust your conclusions precisely because they know you've considered the alternatives.`,

  atWork: `Your judgment makes you invaluable in any role requiring critical analysis. Law, strategy, research, risk assessment, and editorial work are natural fits. You're the team member who catches the flaw in a plan before it becomes a costly mistake, and who asks the uncomfortable question that improves the final outcome.

The professional risk is that thoroughness can slow down teams that need to move fast. In fast-paced environments, you may need to set time boundaries for analysis and become comfortable with "good enough" decisions when the stakes are low.`,

  inRelationships: `Your balanced thinking creates a sense of fairness and safety in relationships. Partners know you won't react impulsively or take sides without hearing everyone out. You're often the mediator in group conflicts because people trust your evenhandedness.

The relational challenge is that judgment can feel cold when what someone needs is emotional validation. Not every conversation requires balanced analysis — sometimes your partner just wants you to say "that's terrible, I'm sorry." Learning to lead with empathy before analysis is a key growth area.`,

  overuseRisk: `When judgment is overextended, it becomes chronic scepticism. You may dismiss new ideas too quickly because they don't meet your evidentiary standards. You might struggle to commit to anything — a career, a relationship, a creative project — because you can always see the downsides. Others may experience you as overly critical or annoyingly devil's-advocate.`,

  underuse: `Without developed judgment, you're susceptible to groupthink, persuasive rhetoric, and snap decisions you later regret. You accept claims at face value, struggle to evaluate competing arguments, and may find yourself repeatedly surprised by outcomes you could have predicted with more careful analysis.`,

  growthStrategies: [
    "Practice 'steel-manning' — before disagreeing with any position, articulate the strongest possible version of the opposing argument.",
    "Set a time limit for analysis on low-stakes decisions. Reserve your deep thinking for choices that genuinely warrant it.",
    "Seek out perspectives that challenge your own. If you notice you only read or listen to sources you agree with, deliberately engage with well-argued opposing views.",
    "Balance critical thinking with action. After thorough analysis, commit to a decision and resist the urge to revisit it unless genuinely new information appears.",
  ],

  toolkit: [
    "Decision Matrix: For your next significant decision, list all options as rows and criteria as columns. Score each objectively before letting your gut weigh in.",
    "Pre-Mortem Analysis: Before starting a project, imagine it has failed. Work backwards to identify what went wrong, then plan to prevent those failures.",
    "Source Audit: Review the information sources you consumed this week. Rate each for reliability, bias, and relevance. Adjust your intake accordingly.",
    "Empathy-First Response: In your next three conversations where someone shares a problem, respond with emotional validation before offering analytical perspective.",
  ],
};

const LOVE_OF_LEARNING: StrengthContent = {
  id: "love-of-learning",
  label: "Love of Learning",
  virtue: "wisdom",
  description: "Mastering new skills, topics, and bodies of knowledge — whether on your own or in formal settings.",

  inAction: `Love of learning as a signature strength goes beyond academic achievement — it's a deep, intrinsic pleasure in the process of mastering something new. You don't learn because you have to; you learn because not learning feels like stagnation. The pleasure isn't just in knowing things — it's in the journey from confusion to understanding.

You likely have an eclectic set of skills and knowledge. You might be the person who learned woodworking from YouTube, speaks conversational Japanese, and can explain blockchain technology — not because any of these are useful for your career, but because the learning itself was rewarding.`,

  atWork: `Your love of learning makes you adaptable in a rapidly changing professional landscape. You upskill faster than colleagues, stay current with industry developments, and bring cross-domain knowledge that sparks unexpected insights. Roles in education, research, technology, and consulting naturally energise you.

The professional risk is becoming a perpetual student. You may pursue additional certifications, courses, and degrees when what you actually need is to apply what you already know. Learning can become a form of productive procrastination — feeling like progress while avoiding the risk of real-world execution.`,

  inRelationships: `Lifelong learners bring intellectual vitality to their relationships. You're the partner who discovers a documentary you'll both love, who suggests learning to cook Thai food together, or who makes long car rides interesting by sharing something fascinating you learned. This keeps relationships stimulating over time.

The challenge is that your learning drive can create feelings of inadequacy in partners who don't share it. Be mindful of how you share knowledge — teaching is generous; lecturing is exhausting. The best use of this strength in relationships is inviting others into the learning rather than broadcasting what you've absorbed.`,

  overuseRisk: `When love of learning is overextended, it becomes credential addiction or knowledge hoarding. You accumulate expertise without ever deploying it. You may use the pursuit of learning as a shield against vulnerability — it's safer to keep studying than to put yourself out there with what you already know. Your identity becomes so tied to being "a learner" that finishing feels threatening.`,

  underuse: `Without developed love of learning, you stagnate. Skills that were once cutting-edge become outdated. You lose the ability to adapt to changing circumstances because you've stopped acquiring new tools. Conversations become repetitive because you're drawing from a shrinking pool of knowledge and experience.`,

  growthStrategies: [
    "Apply a 70/30 rule: spend 70% of your learning time on skills directly applicable to your current goals, and 30% on exploratory learning that feeds your curiosity.",
    "For every course or book you complete, create one tangible output — a project, an article, a presentation — that forces you to synthesise and apply what you learned.",
    "Learn with others. Teaching is the fastest way to consolidate knowledge, and collaborative learning provides accountability for completion.",
    "Track your learning investments. Map which learning efforts have produced real-world returns and which were purely recreational. Both have value, but knowing the difference prevents self-deception.",
  ],

  toolkit: [
    "Teach-Back Method: After learning something new, explain it to someone unfamiliar with the topic within 48 hours. Notice where your understanding breaks down.",
    "Skill Sprint: Choose one micro-skill and dedicate 30 minutes daily for two weeks to deliberate practice. Track your improvement.",
    "Learning Portfolio: Create a simple document that catalogues what you've learned each quarter and how you've applied it. Review annually.",
    "Completion Ritual: Before starting a new learning project, finish or formally close one you've been neglecting. Build the muscle of completion alongside acquisition.",
  ],
};

const PERSPECTIVE: StrengthContent = {
  id: "perspective",
  label: "Perspective",
  virtue: "wisdom",
  description: "Being able to provide wise counsel to others; having ways of looking at the world that make sense to yourself and others.",

  inAction: `Perspective is arguably the most mature of the wisdom strengths — it's not just about knowing things, but about seeing the larger picture and helping others navigate complexity. People with signature perspective have a quality that others experience as wisdom: the ability to step back from immediate circumstances and see patterns, consequences, and possibilities that aren't obvious in the moment.

You're likely the person friends call when they're facing a difficult decision. Not because you have all the answers, but because your way of framing the situation helps them find their own answer. You naturally see beyond the immediate drama to the underlying dynamics.`,

  atWork: `Perspective makes you a natural advisor, strategist, and leader — not in the charismatic sense, but in the "this person sees further than the rest of us" sense. You excel in mentoring roles, strategic planning, conflict resolution, and any position where long-term thinking and nuanced judgment create value.

The professional risk is that wisdom can be misread as passivity. Because you see complexity that others miss, you may hesitate to act decisively. Others might mistake your thoughtful deliberation for indecision. Learning to translate your broader perspective into clear, actionable recommendations is the key to professional impact.`,

  inRelationships: `Your perspective creates emotional safety in relationships. Partners and friends feel that you genuinely understand their situations — not just the facts, but the feelings and long-term implications. You're the person who helps someone see that their current crisis is actually a turning point, or that what feels like failure is actually redirection.

The challenge is that perspective can become patronising if not handled with humility. Nobody wants to feel like they're being counselled by their partner. Be careful not to slip into therapist mode when what's needed is just a fellow human being who's present and affected, not wise and above it all.`,

  overuseRisk: `When perspective is overextended, it becomes detachment. You may observe life rather than participate in it. You might intellectualise emotions rather than feeling them, always analysing the pattern rather than being in the experience. Others may experience you as emotionally distant or condescendingly calm in situations that warrant genuine alarm or grief.`,

  underuse: `Without developed perspective, you're trapped in the immediacy of every situation. Minor setbacks feel catastrophic. You struggle to give good advice because you can't see beyond the current circumstances. Decision-making becomes reactive rather than strategic, and you repeat the same patterns because you never step back far enough to see them.`,

  growthStrategies: [
    "Practice what you preach. Perspective is most credible when it comes from someone who applies their own wisdom to their own life, not just other people's.",
    "Develop emotional presence alongside intellectual perspective. Practice sitting with someone's distress without trying to reframe it or find the silver lining.",
    "Seek out perspectives that challenge your own. Wisdom that's never tested becomes mere opinion. Engage with people who see the world very differently from you.",
    "Write about your observations. Perspective deepens when you articulate it — journaling, essays, or even thoughtful social media posts force you to refine your thinking.",
  ],

  toolkit: [
    "10/10/10 Framework: When facing a decision, ask how you'll feel about it in 10 minutes, 10 months, and 10 years. Use the longest timeframe to guide your choice.",
    "Perspective Letter: Write a letter to yourself from 10 years in the future, offering advice about your current situation from a place of hindsight.",
    "Wisdom Circle: Identify three people you consider wise. Meet with each quarterly and discuss a challenge you're facing. Notice what they see that you don't.",
    "Present-Moment Practice: Spend 10 minutes daily in an activity where perspective is irrelevant — physical exercise, cooking, playing with a pet — to balance your analytical tendency with embodied experience.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Export registry (partial — wisdom strengths only)                   */
/* ------------------------------------------------------------------ */

export const WISDOM_STRENGTHS: Partial<Record<StrengthId, StrengthContent>> = {
  creativity: CREATIVITY,
  curiosity: CURIOSITY,
  judgment: JUDGMENT,
  "love-of-learning": LOVE_OF_LEARNING,
  perspective: PERSPECTIVE,
};

export const WISDOM_VIRTUE_CONTENT: VirtueContent = {
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
};
