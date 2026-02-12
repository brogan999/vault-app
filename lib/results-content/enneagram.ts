import type { TestScores } from "@/lib/tests/types";
import type { ResultsPageContent, TypeResultContent, ResultSection } from "./types";

const TYPE_DATA: Record<string, { name: string; color: string; desc: string[]; famousPeople: { name: string }[] }> = {
  "1": { name: "The Reformer", color: "#2563eb", desc: ["As a Type 1, you are principled, purposeful, and self-controlled. Your desire to be good and to improve the world around you drives everything you do. You have a strong moral compass and an innate ability to see how things could be better.", "Your dedication to integrity and excellence sets you apart. While your inner critic can be demanding, it also pushes you to achieve remarkable things and to hold yourself to standards that others admire."], famousPeople: [{ name: "Mahatma Gandhi" }, { name: "Martha Stewart" }, { name: "Michelle Obama" }, { name: "Jerry Seinfeld" }] },
  "2": { name: "The Helper", color: "#ec4899", desc: ["As a Type 2, you are caring, generous, and people-pleasing. Your warmth and genuine desire to be needed make you an indispensable presence in others' lives. You intuitively sense what people need and find deep satisfaction in providing it.", "Your ability to connect emotionally and make others feel valued is a rare gift. The challenge is learning to give without losing yourself in the process, and to receive as generously as you give."], famousPeople: [{ name: "Mother Teresa" }, { name: "Dolly Parton" }, { name: "Desmond Tutu" }, { name: "Mr. Rogers" }] },
  "3": { name: "The Achiever", color: "#d97706", desc: ["As a Type 3, you are adaptable, driven, and image-conscious. Your desire to succeed and be admired fuels incredible accomplishment. You have a natural talent for reading situations and presenting yourself in the most effective way.", "Your energy and determination are inspiring to those around you. The path to true fulfillment involves learning that your worth isn't tied to your achievements, but to who you are at your core."], famousPeople: [{ name: "Oprah Winfrey" }, { name: "Tony Robbins" }, { name: "Taylor Swift" }, { name: "Tom Cruise" }] },
  "4": { name: "The Individualist", color: "#7c3aed", desc: ["As a Type 4, you are expressive, dramatic, and deeply self-aware. Your longing for authentic identity and meaningful experience creates a rich, creative inner world that few others can match.", "Your emotional depth and artistic sensibility allow you to see beauty in places others overlook. While your intensity can sometimes feel isolating, it is also the source of your greatest creative and relational gifts."], famousPeople: [{ name: "Frida Kahlo" }, { name: "Prince" }, { name: "Edgar Allan Poe" }, { name: "Billie Eilish" }] },
  "5": { name: "The Investigator", color: "#0d9488", desc: ["As a Type 5, you are perceptive, innovative, and intensely cerebral. Your desire to understand the world drives you to accumulate knowledge and develop expertise in areas that fascinate you.", "Your independence and intellectual depth make you a valuable resource and original thinker. Learning to engage with the world as actively as you observe it will unlock your tremendous potential."], famousPeople: [{ name: "Albert Einstein" }, { name: "Bill Gates" }, { name: "Stephen Hawking" }, { name: "Jane Goodall" }] },
  "6": { name: "The Loyalist", color: "#4298b4", desc: ["As a Type 6, you are committed, security-oriented, and deeply responsible. Your ability to foresee potential problems and prepare for them makes you an invaluable team member and trusted friend.", "Your loyalty and dedication to those you care about create strong, lasting bonds. Learning to trust your own inner guidance and to distinguish between real and imagined threats will bring you peace and confidence."], famousPeople: [{ name: "Princess Diana" }, { name: "Tom Hanks" }, { name: "Jennifer Aniston" }, { name: "Bruce Springsteen" }] },
  "7": { name: "The Enthusiast", color: "#f59e0b", desc: ["As a Type 7, you are spontaneous, versatile, and acquisitive. Your zest for life and your ability to find the positive in any situation make you a magnetic, energizing presence.", "Your quick mind and adventurous spirit open doors that others don't even notice. The challenge is learning to sit with discomfort and find depth in commitment rather than always chasing the next exciting experience."], famousPeople: [{ name: "Robin Williams" }, { name: "Jim Carrey" }, { name: "Richard Branson" }, { name: "Elton John" }] },
  "8": { name: "The Challenger", color: "#dc2626", desc: ["As a Type 8, you are self-confident, decisive, and willful. Your natural authority and protective instincts make you a powerful leader and a fierce advocate for those you care about.", "Your strength and directness are admirable, and people look to you when courage is needed. Learning to show your vulnerability alongside your strength will deepen your connections and your impact."], famousPeople: [{ name: "Martin Luther King Jr." }, { name: "Winston Churchill" }, { name: "Serena Williams" }, { name: "Pink" }] },
  "9": { name: "The Peacemaker", color: "#33a474", desc: ["As a Type 9, you are receptive, reassuring, and agreeable. Your ability to see all perspectives and create harmony makes you a natural mediator and a calming presence in any group.", "Your easygoing nature and genuine acceptance of others create a safe space for authentic connection. Learning to assert your own needs and desires with the same energy you invest in maintaining peace will transform your life."], famousPeople: [{ name: "Abraham Lincoln" }, { name: "Bob Marley" }, { name: "Keanu Reeves" }, { name: "Queen Elizabeth II" }] },
};

function buildSections(typeNum: string): ResultSection[] {
  return [
    {
      id: "career-path", number: 2, title: "Career and Work",
      description: ["Your Enneagram type shapes how you approach work, leadership, and professional relationships. Understanding these patterns helps you find roles where you naturally excel.", "The key is finding environments that align with your core motivations while gently challenging your growth edges."],
      strengths: [
        { title: "Purpose Alignment", description: "You work best when your role connects to your core values." },
        { title: "Natural Strengths", description: "Your type brings unique capabilities that teams value." },
        { title: "Interpersonal Awareness", description: "You understand workplace dynamics intuitively." },
        { title: "Authentic Work Style", description: "You bring genuine engagement to meaningful tasks." },
        { title: "Motivational Clarity", description: "You know what drives you and can communicate it." },
        { title: "Growth Potential", description: "Your awareness of growth areas gives you an edge." },
      ],
      weaknesses: [
        { title: "Blind Spot Patterns", description: "Your type has predictable pitfalls in professional settings." },
        { title: "Stress Reactions", description: "Under pressure, you may revert to unhelpful patterns." },
        { title: "Communication Gaps", description: "Your default style may clash with others' expectations." },
        { title: "Energy Drain Points", description: "Certain work environments deplete you faster than others." },
        { title: "Avoidance Patterns", description: "You may unconsciously avoid tasks that trigger your core fears." },
        { title: "Growth Edge Resistance", description: "Your greatest development area may feel the most uncomfortable." },
      ],
      influentialTraits: [{ name: "Passion", color: "blue" }, { name: "Discipline", color: "gold" }, { name: "Empathy", color: "green" }, { name: "Vision", color: "purple" }],
      lockedSubsections: [
        { title: "Career Ideas for Your Type", unlockTeaser: `Get the full report to unlock career paths ideal for Type ${typeNum}.`, items: [{ title: "Purpose-Driven Role", description: "A career aligned with your core motivations." }, { title: "Growth-Oriented Position", description: "A role that challenges your development areas." }, { title: "Leadership Opportunity", description: "Leading in a way that leverages your natural strengths." }, { title: "Creative Expression", description: "Roles that allow your unique perspective to shine." }, { title: "Service-Oriented Work", description: "Contributing to something larger than yourself." }, { title: "Entrepreneurship", description: "Building something that reflects your values." }] },
        { title: "Work Styles that Suit You", unlockTeaser: "Get the full report to discover 6 work styles that bring out your best.", items: [{ title: "Collaborative Environment", description: "Working with like-minded, growth-oriented people." }, { title: "Autonomous Work", description: "Freedom to approach tasks in your own way." }, { title: "Structured Creativity", description: "Clear goals with creative freedom in execution." }, { title: "Meaningful Impact", description: "Seeing the tangible results of your contributions." }] },
      ],
    },
    {
      id: "personal-growth", number: 3, title: "Growth and Development",
      description: ["The Enneagram is fundamentally a growth system. Each type has a clear path of development that leads toward greater integration and wholeness.", "Your growth journey involves moving from your type's habitual patterns toward the healthy qualities of your integration point."],
      strengths: [
        { title: "Self-Knowledge", description: "Understanding your type gives you a roadmap for growth." },
        { title: "Pattern Recognition", description: "You can identify your habitual reactions before they take over." },
        { title: "Integration Path", description: "You know which qualities to develop for greater wholeness." },
        { title: "Stress Awareness", description: "You understand how pressure affects your behavior." },
        { title: "Wing Influence", description: "Your wing adds nuance and flexibility to your personality." },
        { title: "Instinctual Awareness", description: "Understanding your instinctual stacking deepens your growth." },
      ],
      weaknesses: [
        { title: "Core Fear Grip", description: "Your fundamental fear can drive unconscious decisions." },
        { title: "Defense Mechanisms", description: "Your type's defense patterns may operate outside your awareness." },
        { title: "Disintegration Risk", description: "Under stress, you may move toward unhealthy patterns." },
        { title: "Fixation", description: "Your type's mental fixation can create blind spots." },
        { title: "Passion Trap", description: "Your emotional habit may distort your perceptions." },
        { title: "Comfort Zone Attachment", description: "Your familiar patterns feel safe, even when they're limiting." },
      ],
      influentialTraits: [{ name: "Awareness", color: "blue" }, { name: "Integration", color: "gold" }, { name: "Balance", color: "green" }, { name: "Presence", color: "purple" }],
      lockedSubsections: [
        { title: "What Energizes You", unlockTeaser: "Get the full report to reveal 6 ways to tap into your natural energy.", items: [{ title: "Aligned Action", description: "Activities that resonate with your core motivation." }, { title: "Growth Challenges", description: "Stretching into your integration point." }, { title: "Meaningful Connection", description: "Relationships that see your true self." }, { title: "Creative Expression", description: "Outlets for your unique inner world." }, { title: "Physical Grounding", description: "Body-based practices that center you." }, { title: "Spiritual Practice", description: "Contemplative practices suited to your type." }] },
        { title: "What Drains You", unlockTeaser: "Get the full report to uncover 6 energy-drainers you should avoid.", items: [{ title: "Fear Triggers", description: "Situations that activate your core fear." }, { title: "Forced Inauthenticity", description: "Being required to act against your nature." }, { title: "Toxic Relationships", description: "People who exploit your type's vulnerabilities." }, { title: "Pointless Routine", description: "Activities with no connection to your values." }, { title: "Isolation", description: "Being cut off from meaningful connection." }, { title: "Overextension", description: "Giving more than you have to give." }] },
      ],
    },
    {
      id: "relationships", number: 4, title: "Relationships and Connection",
      description: ["Your Enneagram type profoundly influences how you connect, communicate, and attach in relationships. Each type has characteristic patterns in love that create both deep strengths and specific challenges.", "Understanding these patterns empowers you to build healthier, more conscious relationships."],
      strengths: [
        { title: "Type Awareness in Love", description: "You understand your relationship patterns and triggers." },
        { title: "Growth-Oriented Partnership", description: "You can use your type knowledge to grow together." },
        { title: "Communication Insight", description: "You understand why you communicate the way you do." },
        { title: "Conflict Navigation", description: "You can predict and prevent type-based conflicts." },
        { title: "Compassion", description: "Understanding types breeds empathy for differences." },
        { title: "Intentional Connection", description: "You can choose consciously how to show up in love." },
      ],
      weaknesses: [
        { title: "Reactive Patterns", description: "Your type's automatic responses can create conflict." },
        { title: "Projection", description: "You may project your type's fears onto your partner." },
        { title: "Complementary Traps", description: "Attractions based on type can mask unhealthy dynamics." },
        { title: "Communication Style Clash", description: "Different types communicate needs very differently." },
        { title: "Core Wound Activation", description: "Intimate relationships inevitably trigger your deepest fears." },
        { title: "Growth Avoidance", description: "Relationships can reinforce your type's comfort zone." },
      ],
      influentialTraits: [{ name: "Attachment", color: "blue" }, { name: "Trust", color: "gold" }, { name: "Vulnerability", color: "green" }, { name: "Commitment", color: "purple" }],
      lockedSubsections: [
        { title: "Your Relationship Superpowers", unlockTeaser: "Get the full report to discover 6 hidden relationship strengths.", items: [{ title: "Authentic Presence", description: "You bring your real self to intimate connections." }, { title: "Type-Specific Gifts", description: "Your type offers unique relationship strengths." }, { title: "Emotional Depth", description: "You connect on a level that few can match." }, { title: "Loyalty", description: "Your commitment is rooted in deep understanding." }, { title: "Growth Catalysis", description: "You inspire growth in your partner." }, { title: "Intuitive Understanding", description: "You sense your partner's needs at a deep level." }] },
        { title: "Relationship Pitfalls", unlockTeaser: "Get the full report to identify 6 habits that may strain your relationships.", items: [{ title: "Automatic Reactions", description: "Your type's defenses can push partners away." }, { title: "Unspoken Needs", description: "You may expect partners to know what you need." }, { title: "Control Patterns", description: "Your type's way of managing anxiety in relationships." }, { title: "Avoidance Patterns", description: "What you consistently avoid addressing." }, { title: "Projection", description: "Attributing your fears to your partner's intentions." }, { title: "Attachment Anxiety", description: "Your type's characteristic insecurity in love." }] },
      ],
    },
  ];
}

export const enneagramResultsContent: ResultsPageContent = {
  testId: "enneagram",
  getContent(scores: TestScores): TypeResultContent {
    const typeNum = scores.typeCode?.replace(/\D/g, "").charAt(0) ?? "9";
    const data = TYPE_DATA[typeNum] ?? TYPE_DATA["9"]!;
    return {
      typeName: data.name,
      typeCode: `Type ${typeNum}`,
      heroColor: data.color,
      description: data.desc,
      sections: buildSections(typeNum),
      famousPeople: data.famousPeople,
    };
  },
};
