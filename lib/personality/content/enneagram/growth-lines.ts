/* ------------------------------------------------------------------ */
/*  Growth and stress line content                                     */
/* ------------------------------------------------------------------ */

export interface GrowthLineContent {
  fromType: number;
  toType: number;
  direction: "growth" | "stress";
  title: string;
  description: string;
  signs: string[];
  practicalAdvice: string;
}

export const GROWTH_LINES: Record<number, GrowthLineContent> = {
  1: {
    fromType: 1, toType: 7, direction: "growth",
    title: "From Control to Joy",
    description: "In growth, you move toward the healthy qualities of Type 7 — spontaneity, playfulness, and the ability to enjoy life without needing it to be perfect first. The rigid inner critic loosens its grip and you discover that imperfection can be delightful rather than intolerable. You learn to say yes before you've evaluated every risk.",
    signs: ["Laughing at your own mistakes instead of flagellating over them", "Choosing fun without guilt or justification", "Embracing spontaneity rather than needing a plan for everything"],
    practicalAdvice: "Schedule unstructured play with no productive purpose. Your One instinct will resist this as wasteful — that resistance is exactly why you need it.",
  },
  2: {
    fromType: 2, toType: 4, direction: "growth",
    title: "From Giving to Self-Discovery",
    description: "In growth, you take on the healthy qualities of Type 4 — honest self-reflection, emotional authenticity, and the courage to ask 'what do I actually want?' You stop defining yourself through others' needs and begin exploring your own inner landscape with the same attention you've always given to others.",
    signs: ["Expressing genuine feelings, including anger and disappointment, without sugar-coating", "Pursuing creative or personal interests that serve no one but yourself", "Saying 'I need' without immediately following it with 'but you need it more'"],
    practicalAdvice: "Spend time alone doing something that's purely for your own pleasure. Notice the urge to justify it as self-care that will make you a better helper — and let that urge pass.",
  },
  3: {
    fromType: 3, toType: 6, direction: "growth",
    title: "From Performance to Commitment",
    description: "In growth, you absorb the healthy qualities of Type 6 — loyalty, team orientation, and the courage to be ordinary. You stop performing for applause and start committing to people and causes because they matter, not because they enhance your image. You discover that being trusted is more sustaining than being admired.",
    signs: ["Staying in a role because it matters, not because it looks impressive", "Admitting when you're scared or unsure instead of projecting confidence", "Valuing collaborative success over individual recognition"],
    practicalAdvice: "Practice asking for help publicly. Let people see you struggle with something. Notice that the vulnerability doesn't destroy your value — it often increases it.",
  },
  4: {
    fromType: 4, toType: 1, direction: "growth",
    title: "From Feeling to Principled Action",
    description: "In growth, you take on the healthy qualities of Type 1 — discipline, groundedness, and the ability to act on principle regardless of your emotional state. You stop waiting for the right feeling before you do the right thing. Your depth doesn't diminish; it gains a structure to express itself through.",
    signs: ["Following through on commitments even when your mood says 'not today'", "Finding satisfaction in disciplined routine rather than resisting it as boring", "Channeling emotional intensity into sustained creative or service work"],
    practicalAdvice: "Pick one meaningful commitment and honor it every day for 30 days regardless of how you feel. The discipline will feel foreign at first — that's the growth happening.",
  },
  5: {
    fromType: 5, toType: 8, direction: "growth",
    title: "From Observation to Engagement",
    description: "In growth, you absorb the healthy qualities of Type 8 — decisive action, physical presence, and willingness to take up space. You stop hoarding knowledge as a substitute for living and start using what you know to make things happen. Your competence becomes visible, embodied, and impactful.",
    signs: ["Speaking up in groups without waiting to have the definitive analysis", "Making decisions with 80% confidence instead of waiting for 100%", "Engaging physically — exercise, touch, embodied presence — instead of living exclusively in your head"],
    practicalAdvice: "Take one piece of knowledge you've been accumulating and do something with it this week. Not a plan to do something. An action. Let the doing teach you what further study cannot.",
  },
  6: {
    fromType: 6, toType: 9, direction: "growth",
    title: "From Vigilance to Trust",
    description: "In growth, you absorb the healthy qualities of Type 9 — inner peace, trust in the process, and the ability to be present without scanning for threats. The anxiety doesn't disappear, but it loses its grip on your decisions. You discover that the world is less dangerous than your vigilance assumes, and that peace isn't naivety — it's a choice.",
    signs: ["Letting a decision stand without second-guessing it for days", "Enjoying a moment without the background hum of 'but what if'", "Trusting people based on evidence rather than assumed worst cases"],
    practicalAdvice: "Practice making small decisions quickly and not revisiting them. The anxiety will suggest you're being reckless. You're not. You're building the muscle of trust.",
  },
  7: {
    fromType: 7, toType: 5, direction: "growth",
    title: "From Breadth to Depth",
    description: "In growth, you absorb the healthy qualities of Type 5 — focus, depth, and the ability to stay with one thing long enough to master it. You stop skimming the surface of everything and discover that going deep into a single subject produces a satisfaction that variety never can. Quality replaces quantity as your metric for a life well lived.",
    signs: ["Finishing projects instead of abandoning them when the novelty fades", "Choosing to go deeper into a subject rather than moving to the next shiny interest", "Sitting with discomfort or boredom without immediately seeking stimulation"],
    practicalAdvice: "Choose one interest and commit to it for 90 days. When the urge to switch arises — and it will, around week three — treat it as the signal that depth is about to begin, not that the interest has expired.",
  },
  8: {
    fromType: 8, toType: 2, direction: "growth",
    title: "From Power to Tenderness",
    description: "In growth, you absorb the healthy qualities of Type 2 — warmth, vulnerability, and the willingness to serve without needing to control. Your strength doesn't diminish; it acquires a gentleness that makes it safe for others to approach. You discover that the greatest power isn't the ability to dominate — it's the ability to protect without being asked.",
    signs: ["Expressing care directly and tenderly without deflecting through toughness", "Allowing others to help you without feeling diminished", "Using your power to elevate rather than control"],
    practicalAdvice: "Tell someone you care about something specific you appreciate about them. Not a performance of strength. A genuine moment of tenderness. Notice what happens in your body when you do it.",
  },
  9: {
    fromType: 9, toType: 3, direction: "growth",
    title: "From Merging to Self-Assertion",
    description: "In growth, you absorb the healthy qualities of Type 3 — ambition, focus, and the willingness to stand out. You stop merging with others' agendas and start pursuing your own goals with energy and intention. You discover that your voice matters and that asserting yourself doesn't destroy the peace — it creates a more honest version of it.",
    signs: ["Setting and pursuing personal goals rather than drifting with others' plans", "Saying 'I want' and meaning it", "Taking visible action toward something that matters to you, even if it creates temporary friction"],
    practicalAdvice: "Identify one thing you want — genuinely want, not what you think you should want — and take one concrete step toward it today. The Nine instinct to defer will activate. Move through it.",
  },
};

export const STRESS_LINES: Record<number, GrowthLineContent> = {
  1: {
    fromType: 1, toType: 4, direction: "stress",
    title: "From Rigidity to Melancholy",
    description: "Under stress, you take on the unhealthy patterns of Type 4 — becoming moody, self-pitying, and convinced that nobody understands your suffering. The inner critic, normally directed outward at imperfection, turns inward. You feel misunderstood, underappreciated, and dramatically alone in your standards.",
    signs: ["Withdrawing from others and nursing resentment", "Feeling uniquely burdened by your moral sensitivity", "Dramatic expressions of frustration or despair that seem out of character"],
    practicalAdvice: "When you notice the melancholy deepening, re-engage with physical activity and structured tasks. Your body and your routines are the fastest path back to equilibrium.",
  },
  2: {
    fromType: 2, toType: 8, direction: "stress",
    title: "From Giving to Controlling",
    description: "Under stress, you take on the unhealthy patterns of Type 8 — becoming aggressive, controlling, and demanding acknowledgment of everything you've done for others. The gentle helper becomes the angry martyr, furious that their sacrifices aren't reciprocated.",
    signs: ["Keeping score of what you've given and what you're owed", "Becoming confrontational and domineering, especially with those closest to you", "Using your knowledge of others' vulnerabilities as weapons"],
    practicalAdvice: "When the anger surges, pause before you speak. The rage is real, but it's pointing at unmet needs you haven't articulated. Name the need before you express the anger.",
  },
  3: {
    fromType: 3, toType: 9, direction: "stress",
    title: "From Achievement to Numbing",
    description: "Under stress, you take on the unhealthy patterns of Type 9 — checking out, numbing with comfort behaviors, and losing your drive. The go-getter becomes the couch dweller. This happens when the achievement machine finally runs out of fuel and the emptiness underneath surfaces.",
    signs: ["Binge-watching, comfort eating, or mindless scrolling for hours", "Losing track of goals and deadlines you'd normally manage effortlessly", "A pervasive sense of 'what's the point?' replacing your usual ambition"],
    practicalAdvice: "Don't fight the slowdown — but give it a container. Set a time limit on rest, then re-engage with one small task. Momentum rebuilds faster than you think.",
  },
  4: {
    fromType: 4, toType: 2, direction: "stress",
    title: "From Depth to Desperation",
    description: "Under stress, you take on the unhealthy patterns of Type 2 — becoming clingy, people-pleasing, and desperate for external validation. The independent individualist becomes the person who can't be alone, who needs constant reassurance that they're loved and needed.",
    signs: ["Seeking attention and reassurance from people you'd normally keep at a distance", "Over-giving and then feeling resentful when it's not reciprocated", "Abandoning your authentic preferences to please someone you fear losing"],
    practicalAdvice: "When you notice the desperation for external validation, return to solitary creative work. The urge to seek comfort from others is a signal that you've lost connection with your own center.",
  },
  5: {
    fromType: 5, toType: 7, direction: "stress",
    title: "From Depth to Scatter",
    description: "Under stress, you take on the unhealthy patterns of Type 7 — scattering your attention across multiple interests, seeking stimulation to avoid facing the depletion underneath. The focused investigator becomes the frantic consumer of information, clicking through tabs without absorbing anything.",
    signs: ["Starting multiple new projects or research tangents simultaneously", "Seeking novel experiences or inputs to escape emotional discomfort", "Unusual restlessness and inability to sit with your thoughts"],
    practicalAdvice: "Close the tabs. Pick one thing. The scatter is your mind trying to outrun an emotion. Let the emotion catch you — it's less dangerous than the exhaustion of running from it.",
  },
  6: {
    fromType: 6, toType: 3, direction: "stress",
    title: "From Caution to Performance",
    description: "Under stress, you take on the unhealthy patterns of Type 3 — becoming competitive, image-conscious, and driven to prove your worth through visible achievement. The cautious loyalist becomes the frantic performer, trying to earn security through accomplishment.",
    signs: ["Working compulsively to prove your value", "Becoming unusually concerned with how others perceive you", "Cutting corners to deliver results, abandoning your usual thoroughness"],
    practicalAdvice: "When you catch yourself performing for approval, pause and ask: 'Whose approval am I seeking and why do I need it right now?' The answer usually reveals an anxiety that performance can't resolve.",
  },
  7: {
    fromType: 7, toType: 1, direction: "stress",
    title: "From Freedom to Rigidity",
    description: "Under stress, you take on the unhealthy patterns of Type 1 — becoming critical, perfectionistic, and rigidly judgmental. The free spirit becomes the harsh critic, annoyed by everything and everyone, including yourself. It's the opposite of your natural mode, which is why it feels so foreign.",
    signs: ["Becoming unusually critical and nitpicky about others' behavior", "Rigid insistence that things be done 'correctly' — your way", "Losing your sense of humor and becoming moralistic"],
    practicalAdvice: "When the criticism starts flowing, it's a sign you've been avoiding something painful. Name the thing you don't want to feel. The criticism will ease once the avoidance does.",
  },
  8: {
    fromType: 8, toType: 5, direction: "stress",
    title: "From Engagement to Withdrawal",
    description: "Under stress, you take on the unhealthy patterns of Type 5 — withdrawing, becoming secretive, and retreating into analysis paralysis. The decisive leader becomes the isolated thinker, hoarding resources and information while pulling away from the people who need them.",
    signs: ["Withdrawing from social engagement and responsibilities", "Becoming unusually secretive about plans and feelings", "Over-analyzing situations you'd normally handle with gut-level decisiveness"],
    practicalAdvice: "When you feel the urge to withdraw, call one trusted person and speak openly about what's happening. The Eight in you will resist this as weakness. It isn't — it's the strongest move available.",
  },
  9: {
    fromType: 9, toType: 6, direction: "stress",
    title: "From Peace to Anxiety",
    description: "Under stress, you take on the unhealthy patterns of Type 6 — becoming anxious, suspicious, and reactive. The calm peacemaker becomes the worried contingency planner, seeing threats everywhere and seeking reassurance from authority figures or systems.",
    signs: ["Uncharacteristic anxiety and worst-case scenario thinking", "Seeking reassurance repeatedly about decisions you'd normally let flow", "Becoming suspicious of others' motives after a long period of trust"],
    practicalAdvice: "Ground yourself in your body — walk, cook, garden. The anxiety lives in your head; your natural peace lives in your body. Reconnect with it physically rather than trying to think your way back to calm.",
  },
};
