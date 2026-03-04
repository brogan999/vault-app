import type { DISCStyleId } from "./shared";

/* ------------------------------------------------------------------ */
/*  Blend content — how each secondary style modifies the primary      */
/* ------------------------------------------------------------------ */

export interface BlendContent {
  primary: DISCStyleId;
  secondary: DISCStyleId;
  label: string;
  insight: string;
  communicationModifier: string;
  relationshipModifier: string;
  careerModifier: string;
}

export const BLEND_CONTENT: Record<string, BlendContent> = {
  "dominance+influence": {
    primary: "dominance", secondary: "influence", label: "The Campaigner",
    insight: "The Influence wing adds charisma, enthusiasm, and people-awareness to your results-driven approach. You don't just push for outcomes — you rally people to pursue them willingly. This makes you one of the most naturally persuasive blends in the DISC model. You lead with vision and energy, not just authority. The risk is overcommitting your team to ambitious goals that your I-wing enthusiastically promised before your D-core thought through the execution.",
    communicationModifier: "You're more expressive and engaging than pure D-styles. You still lead with the bottom line, but you wrap it in enthusiasm and vision that makes it easier for people to follow. Watch for over-promising in the heat of the moment.",
    relationshipModifier: "You bring a rare combination of directness and warmth. Partners get someone who is both decisive and engaging — but may struggle when the situation calls for quiet patience rather than energetic problem-solving.",
    careerModifier: "Sales leadership, executive communication, entrepreneurship, business development. Roles where persuasion and drive intersect.",
  },
  "dominance+steadiness": {
    primary: "dominance", secondary: "steadiness", label: "The Anchor",
    insight: "The Steadiness wing gives your directness an unusual quality: patience. You still drive for results, but you do it with a steadier hand than most D-styles. You can hold a long-term course without losing momentum, which makes you effective in roles that require both assertiveness and endurance. The tension: your D-core wants speed while your S-wing wants stability, creating an internal push-pull during rapid change.",
    communicationModifier: "You're more measured than pure D-styles. Your directness comes with an undertone of reliability that builds trust faster. You may struggle to communicate urgency when your S-wing counsels patience.",
    relationshipModifier: "You offer both strength and stability — a combination that creates deep security in partnerships. The challenge: your S-wing may cause you to absorb frustrations silently until they erupt with D-style intensity.",
    careerModifier: "Operations leadership, program management, military and government leadership, infrastructure. Roles requiring both decisive authority and sustained execution.",
  },
  "dominance+conscientiousness": {
    primary: "dominance", secondary: "conscientiousness", label: "The Strategist",
    insight: "The Conscientiousness wing adds analytical depth to your action orientation. You don't just decide fast — you decide well. Your C-wing insists on data and logic before your D-core commits, which means your decisions are better-informed than most D-styles. This blend produces some of the most effective leaders in technical and strategic environments. The tension: your D-core wants to move now while your C-wing wants to analyze more, creating occasional internal gridlock.",
    communicationModifier: "You're more precise than pure D-styles, backing up your directives with data and reasoning. This makes you more persuasive with analytical audiences but potentially slower in delivery than your D-core would prefer.",
    relationshipModifier: "You're both direct and thorough, which means partners get clear communication backed by careful thought. The challenge: emotional conversations may feel doubly difficult since neither your D-core nor your C-wing naturally prioritizes feelings.",
    careerModifier: "Strategic consulting, technical leadership, legal practice, financial management. Roles where sharp analysis and decisive execution must coexist.",
  },
  "influence+dominance": {
    primary: "influence", secondary: "dominance", label: "The Motivator",
    insight: "The Dominance wing gives your natural enthusiasm a cutting edge. You're not just charming — you're effective. While pure I-styles can get lost in socializing, your D-wing keeps you pointed at outcomes. You motivate people and hold them accountable, which makes you a natural team leader who gets both loyalty and results. The risk: your energy can feel overwhelming when both your enthusiasm and your competitiveness are firing simultaneously.",
    communicationModifier: "You're more goal-oriented than pure I-styles, steering conversations toward action while keeping the energy high. You may come across as pushy when your D-wing's impatience breaks through your I-core's warmth.",
    relationshipModifier: "You're exciting and driven — a partner who brings energy, ambition, and warmth. The challenge: your combined need for social stimulation and competitive achievement can leave little room for quiet intimacy.",
    careerModifier: "Team leadership, motivational speaking, talent acquisition, brand management. Roles where inspiring people and driving results are equally important.",
  },
  "influence+steadiness": {
    primary: "influence", secondary: "steadiness", label: "The Counselor",
    insight: "The Steadiness wing adds depth and patience to your natural warmth. You're the most people-oriented blend in the DISC model — genuinely interested in others' wellbeing, not just their energy. You build deep, lasting relationships rather than wide, shallow networks. The risk: your combined desire to be liked (I-core) and to avoid conflict (S-wing) can make you a chronic people-pleaser who absorbs others' stress without addressing your own.",
    communicationModifier: "You're warm, patient, and an exceptional listener — a combination that makes people open up to you naturally. Your challenge is being direct when the situation demands honesty that might not be well-received.",
    relationshipModifier: "You're deeply attentive and consistently supportive. Partners feel genuinely cared for. The shadow: you may prioritize harmony over honesty, building a relationship on unspoken compromises that accumulate over time.",
    careerModifier: "HR and people operations, counseling, customer success, non-profit leadership. Roles where relational depth and sustained care are the primary deliverables.",
  },
  "influence+conscientiousness": {
    primary: "influence", secondary: "conscientiousness", label: "The Presenter",
    insight: "The Conscientiousness wing adds substance to your natural style. You're charismatic and thorough — you can captivate a room and back it up with data. This blend is less common and particularly effective because it combines the I-style's ability to connect with the C-style's insistence on accuracy. The tension: your I-core wants to improvise and riff while your C-wing wants to prepare and verify, creating an internal tug-of-war between spontaneity and precision.",
    communicationModifier: "You're engaging and well-prepared — the most credible of the I-styles. Your presentations combine energy with substance. The challenge: you may over-prepare (C-wing) and then abandon the preparation mid-delivery (I-core) when the room's energy pulls you off-script.",
    relationshipModifier: "You offer both warmth and reliability — you're fun and you follow through. The tension: your I-core craves spontaneity while your C-wing craves structure, which can create inconsistent signals about what you want from a partner.",
    careerModifier: "Teaching and training, product management, public relations, research communication. Roles that require both human connection and analytical credibility.",
  },
  "steadiness+dominance": {
    primary: "steadiness", secondary: "dominance", label: "The Implementer",
    insight: "The Dominance wing gives your natural steadiness a backbone of assertiveness. You're reliable and you deliver — not just because it's expected, but because your D-wing genuinely wants to produce results. You're the most action-oriented of the S-styles, capable of stepping into leadership when the situation demands it while maintaining the calm that makes people trust you. The tension: your S-core avoids conflict while your D-wing wants to confront it, creating a slow-burn pattern where you tolerate issues longer than a pure D would, then address them with more force than expected.",
    communicationModifier: "You're steady with occasional directness that surprises people who've only seen your calm surface. When you do speak up, people listen because they know you don't do it casually.",
    relationshipModifier: "You offer stability with substance — partners get someone who is both consistent and capable of taking charge when needed. The challenge: your alternation between accommodation and assertion can feel inconsistent.",
    careerModifier: "Project management, operational execution, supply chain leadership, technical implementation. Roles requiring both reliable follow-through and occasional decisive authority.",
  },
  "steadiness+influence": {
    primary: "steadiness", secondary: "influence", label: "The Facilitator",
    insight: "The Influence wing adds social warmth and expressiveness to your natural calm. You're the team's emotional anchor and social connector — the person who remembers birthdays, notices when someone is struggling, and creates the informal culture that holds teams together. This is the most relationally gifted DISC blend. The risk: your combined need for harmony (S-core) and approval (I-wing) can make it nearly impossible for you to deliver difficult feedback.",
    communicationModifier: "You're warm, inclusive, and patient — everyone's favorite team member to work with. Your challenge is speaking up when your perspective differs from the group's direction.",
    relationshipModifier: "You're nurturing, attentive, and socially engaged. Partners feel deeply supported. The shadow: you may sacrifice your own needs so consistently that you lose touch with what they are.",
    careerModifier: "Facilitation, employee experience, team coordination, community management. Roles where building and sustaining team culture is the primary value.",
  },
  "steadiness+conscientiousness": {
    primary: "steadiness", secondary: "conscientiousness", label: "The Specialist",
    insight: "The Conscientiousness wing adds precision and quality focus to your reliability. You're the person who does the job right, on time, every time — without fanfare and without cutting corners. This blend produces quiet excellence: the technical specialist, the meticulous operator, the person whose work you never have to check because it's always correct. The tension: your combined risk-aversion (S-core + C-wing) can make you resistant to any change, even beneficial ones.",
    communicationModifier: "You're precise, measured, and factual. You won't speak up without being confident in your facts. The challenge: you may withhold valuable input because you're waiting for certainty that will never arrive.",
    relationshipModifier: "You're dependable and thoughtful — partners can count on you completely. The challenge: emotional expression doesn't come naturally to either your S-core or your C-wing, which can make you seem reserved or distant.",
    careerModifier: "Quality assurance, technical specialization, accounting, compliance, research support. Roles where consistent accuracy and reliability are the primary measures of success.",
  },
  "conscientiousness+dominance": {
    primary: "conscientiousness", secondary: "dominance", label: "The Architect",
    insight: "The Dominance wing adds decisiveness and ambition to your analytical nature. You don't just analyze — you act on your analysis. This makes you the most assertive of the C-styles, capable of driving projects forward with both rigor and force. You build systems, enforce standards, and don't back down when your data supports a position. The tension: your C-core wants more data while your D-wing wants to decide now, creating an internal calibration challenge.",
    communicationModifier: "You lead with facts and follow with action — a combination that commands respect in technical and strategic environments. The challenge: your data-backed directness can feel coldly authoritarian to warmer styles.",
    relationshipModifier: "You're competent and decisive — a partner who can be relied upon for both smart analysis and strong action. The challenge: your emotional register runs narrow, making it hard for partners who need expressive warmth.",
    careerModifier: "Systems architecture, technical leadership, policy design, engineering management. Roles where building rigorous frameworks requires both analytical depth and the authority to enforce them.",
  },
  "conscientiousness+influence": {
    primary: "conscientiousness", secondary: "influence", label: "The Communicator",
    insight: "The Influence wing gives your analytical nature an unusual social dimension. You can explain complex things clearly, build consensus around technical decisions, and translate between expert and non-expert audiences. This is the rarest DISC blend and one of the most valuable in knowledge-economy roles. The tension: your C-core values precision while your I-wing values engagement, which means you sometimes simplify too much for technical audiences or go too deep for general ones.",
    communicationModifier: "You're the most accessible of the C-styles — able to present complex analysis in engaging, human terms. The challenge: knowing when to lead with the data (for C and D audiences) versus the story (for I and S audiences).",
    relationshipModifier: "You bring both intellectual depth and social warmth — a combination that creates rich, multilayered connections. Partners get someone who is both interesting and interested. The challenge: you may over-analyze relationship dynamics that just need emotional presence.",
    careerModifier: "Data science communication, technical writing, product management, consulting, science communication. Roles that bridge analytical depth and human connection.",
  },
  "conscientiousness+steadiness": {
    primary: "conscientiousness", secondary: "steadiness", label: "The Validator",
    insight: "The Steadiness wing amplifies your natural patience and thoroughness. You're the most careful, methodical blend in the DISC model — the person who triple-checks the numbers, follows the procedure exactly, and produces work of consistently high quality. You're the organization's quality guarantee. The tension: your combined preference for caution (C-core + S-wing) and aversion to conflict means you may spot problems but not raise them, leading to preventable failures.",
    communicationModifier: "You're precise, measured, and non-confrontational. Your work speaks for itself, but your insights may not reach decision-makers because you wait to be asked rather than volunteering your perspective.",
    relationshipModifier: "You're loyal, thoughtful, and quietly supportive — partners can depend on your consistency and care. The challenge: you may need explicit invitations to share what you're thinking and feeling, since neither your C-core nor your S-wing naturally initiates emotional disclosure.",
    careerModifier: "Auditing, regulatory compliance, quality management, technical documentation, research methodology. Roles where meticulous accuracy and patient thoroughness are the highest-value skills.",
  },
};
