import type { EQDimensionContent } from "../types";

export const MOTIVATION: EQDimensionContent = {
  id: "motivation",
  label: "Motivation",
  shortLabel: "Motivation",
  color: "#C97A30",

  levels: {
    high: {
      overview: `You have a strong internal engine that drives you toward goals with energy and persistence, even when external rewards are thin or delayed. This isn't about being a workaholic — it's about having a reliable source of fuel that doesn't depend on praise, promotions, or perfect conditions. You pursue things because they matter to you, not because someone is watching. When setbacks hit, you recalibrate rather than stall. When interest wanes, you dig for the deeper why rather than abandoning ship.

Your motivation is characterised by a growth orientation: you see challenges as information, not verdicts. A failed project isn't proof you're inadequate — it's data about what to adjust. This mindset creates resilience that looks almost irrational to people who depend on external validation. You'll keep going when others have already checked out, not because you're stubborn, but because your sense of progress is internally calibrated. You know when you're improving even when the world hasn't noticed yet.

The practical effect is that people experience you as someone who finishes what they start. You don't need constant reassurance to stay engaged. You don't collapse when feedback is critical. You bring energy to projects that others find draining, because your motivation comes from the work itself — from mastery, from meaning, from the satisfaction of getting better at something hard. This makes you both a reliable colleague and a partner who doesn't need to be propped up by external validation.`,

      strengths: [
        {
          title: "Intrinsic Drive",
          description: "You're motivated by the work itself — curiosity, mastery, meaning — rather than by external rewards. This means your energy doesn't evaporate when praise is scarce or when nobody's watching. You show up because showing up matters to you.",
          deepDive: "Intrinsic motivation is one of the most robust predictors of sustained performance in the research. People who are driven by internal factors — autonomy, competence, relatedness — maintain effort through setbacks that would derail those dependent on external validation. Your ability to find fuel in the work itself means you're less vulnerable to toxic environments, indifferent managers, or periods when recognition is absent. The flip side: you may underestimate how much others need external validation, and your self-sufficiency can read as aloofness to people who are still building their internal engine.",
        },
        {
          title: "Resilience Through Setbacks",
          description: "When things go wrong, you don't interpret failure as identity. You separate what happened from who you are, which lets you learn and try again without the emotional collapse that derails many people.",
          deepDive: "Carol Dweck's research on growth mindset maps directly onto high motivation: people who believe ability can be developed treat setbacks as temporary obstacles rather than permanent verdicts. Your resilience isn't denial — you feel disappointment, frustration, even doubt. But those feelings don't become the conclusion. You process them and move to 'what do I do next?' This is a learnable skill, but you've already integrated it. The watchpoint: sometimes you bounce back so quickly that you skip the emotional processing that would make the learning stick. Resilience and avoidance can look similar from the outside.",
        },
        {
          title: "Goal Persistence",
          description: "You pursue goals with sustained energy over time. You don't need novelty or constant wins to stay engaged — you can work through the boring middle of long projects because the endpoint matters to you.",
          deepDive: "Grit — passion and perseverance for long-term goals — correlates more strongly with achievement than talent in many domains. Your ability to maintain effort through the plateau phase, when progress is invisible and motivation naturally dips, is what separates people who start from people who finish. You've learned that the middle is where most people quit, and you've built the capacity to keep going. This makes you invaluable on multi-year projects, relationship commitments, and any endeavour that doesn't offer quick feedback.",
        },
        {
          title: "Growth Orientation",
          description: "You're oriented toward getting better rather than proving you're already good. Feedback, even critical feedback, is useful data rather than a threat to your self-worth.",
        },
      ],

      growthEdges: [
        {
          title: "The Burnout Risk",
          teaser: "Your internal drive doesn't have an off switch. You can push through fatigue, ignore warning signs, and exhaust yourself because the motivation feels so natural that you forget it has limits.",
          fullExplanation: "Highly motivated people often struggle to recognise when they're overextended. Your drive feels like a gift — why would you turn it off? But motivation and energy are different resources. You can be deeply motivated and physically depleted. The people who crash hardest are often the ones who had the most fuel to begin with.\n\nThe fix isn't to dampen your motivation. It's to build external guardrails: hard stops, mandatory recovery, and people who have permission to tell you when you're running on fumes. Your internal engine will keep firing even when the tank is empty — you need systems that force refuelling before that happens.",
          premiumHook: "Get the burnout prevention protocol designed specifically for high-drive people who don't notice they're depleted.",
        },
        {
          title: "Impatience With Others",
          teaser: "Because your motivation feels so natural, you may struggle to understand people who need external structure, frequent feedback, or visible rewards to stay engaged. Your self-sufficiency can read as judgment.",
          fullExplanation: "You didn't choose your motivation — it developed through a combination of temperament, experience, and environment. Other people developed differently. When a colleague needs more praise, a direct report needs clearer milestones, or a partner needs more reassurance, your instinct may be frustration: why can't they just find it within themselves?\n\nThe growth move is to treat motivation as a variable, not a virtue. Some people have strong intrinsic drive; others need more external scaffolding. Neither is morally superior. Your job in leadership and relationships is to meet people where they are — to provide the structure, recognition, or clarity they need — rather than expecting them to match your internal engine.",
          premiumHook: "Learn the motivation-matching framework for leading and loving people whose drive works differently from yours.",
        },
      ],

      workplaceImplications: "Your motivation is a career multiplier. You deliver when others stall. You take on hard projects because you're energised by difficulty. You don't need micromanagement or constant praise — you need autonomy and meaningful work, and you'll run with it. The risk: you may overcommit because saying yes feels natural, and you may not notice when your team or direct reports need more support than you needed at their stage. Use your energy to lift others, not just to outpace them.",

      relationshipImplications: "In close relationships, your internal drive means you don't need your partner to be your primary source of validation. You can pursue your own goals, maintain your own interests, and bring energy to the relationship without draining your partner for reassurance. This creates a healthy independence that supports interdependence.\n\nThe watchpoint: your self-sufficiency can feel like distance to partners who want to feel needed. And your resilience through setbacks may make it hard for you to understand when your partner needs you to slow down, acknowledge their struggle, or simply sit with difficulty rather than immediately problem-solving. Not everyone processes setbacks by moving forward — some people need to pause first.",

      emotionalPattern: "Your emotional life is oriented toward forward motion. You experience disappointment and frustration, but they tend to mobilise rather than paralyse you. Your default response to difficulty is 'what's next?' rather than 'why me?' This isn't suppression — it's a motivational style that uses negative emotions as fuel for adjustment rather than as reasons to stop.",

      stressTriggers: [
        "Environments that punish initiative or reward compliance over autonomy",
        "Being blocked from meaningful progress — stagnation feels worse than failure",
        "People who interpret your drive as competition or threat rather than shared energy",
      ],
      flowTriggers: [
        "Challenging work with clear stakes and room for mastery",
        "Projects where progress is visible and effort compounds",
        "Environments that reward initiative and don't punish failure",
      ],

      toolkit: [
        {
          title: "The Recovery Audit",
          context: "Your drive doesn't signal when to stop. External systems need to do that job.",
          action: "For the next two weeks, track your energy level at the start and end of each day on a 1–10 scale. Note any days you worked through clear fatigue. If you see a pattern of declining baseline, schedule one mandatory non-negotiable recovery block per week — no work, no productivity, just rest. Treat it like a meeting you cannot miss.",
        },
        {
          title: "The Motivation Translation",
          context: "People around you may need different fuel than you do. Translating your drive into their language builds connection.",
          action: "Identify one person — colleague, direct report, or partner — whose motivation style differs from yours. This week, offer them one form of support that matches their needs: explicit recognition, a clearer milestone, or a structured check-in. Notice how their engagement shifts when you meet them where they are.",
        },
        {
          title: "The Pause Protocol",
          context: "Your default is forward motion. Sometimes the most motivated move is to stop and process.",
          action: "When you experience a setback this week, add a 10-minute pause before problem-solving. Sit with the disappointment, frustration, or doubt. Write down what you're feeling. Only after that, move to 'what's next?' This builds the emotional processing that makes resilience sustainable rather than brittle.",
        },
      ],
    },

    moderate: {
      overview: `You have a working relationship with motivation — you can sustain effort when conditions are right, and you know what it feels like to be genuinely engaged. But your drive is more conditional than it could be. When external rewards are scarce, when feedback is delayed, or when the work gets boring, your energy dips. You're not dependent on constant validation, but you do rely on a mix of internal interest and external structure to keep going. This is common. Most people operate in this zone.

Your motivation tends to work best when you can see progress, when the stakes feel meaningful, and when you're not doing it alone. You struggle more in the plateau phases — the long middle of projects where nothing seems to change, the relationship phases where novelty has faded, the career stretches where promotion feels distant. In those moments, you may find yourself waiting for something external to reignite you rather than knowing how to generate the spark yourself.

The good news is that motivation is highly trainable. Unlike temperament, which has a genetic component, the capacity for sustained intrinsic drive can be built through deliberate practice. You're not stuck at moderate — you're at a developmental inflection point where the right practices can shift your default from conditional to more self-sustaining.`,

      strengths: [
        {
          title: "Responsive Engagement",
          description: "When conditions align — interesting work, clear goals, good feedback — you engage fully. You know what motivated effort feels like, and you can access it when the context supports it.",
          deepDive: "Having experienced genuine motivation means you have a reference point. You're not starting from zero — you know the difference between going through the motions and being genuinely engaged. This awareness is the foundation for building more consistent motivation. The people who struggle most are often those who've never experienced deep intrinsic drive and therefore don't know what they're building toward. You do.",
        },
        {
          title: "Context Awareness",
          description: "You can identify what helps and hinders your motivation. You know which environments energise you and which drain you, which gives you data for making better choices.",
          deepDive: "Self-knowledge about motivation is underrated. Many people blame themselves for low motivation when the real issue is a mismatch between their needs and their environment. Your ability to notice 'I thrive with autonomy' or 'I need more frequent feedback' means you can seek out or shape conditions that support your drive. The next step is using that awareness proactively rather than only in retrospect.",
        },
        {
          title: "Recovery Capacity",
          description: "When you do lose motivation, you can usually find your way back. You've had slumps before and recovered, which means you don't catastrophise temporary dips.",
        },
      ],

      growthEdges: [
        {
          title: "The External Dependency Trap",
          teaser: "Your motivation rises and falls with external conditions — praise, deadlines, visible progress. When those disappear, you stall. Building internal drivers reduces your vulnerability to context.",
          fullExplanation: "Moderate motivation often means you're over-reliant on external scaffolding. Deadlines work. Praise works. Visible progress works. But when you're between projects, when feedback is delayed, or when you're in a role that offers little recognition, your engine sputters. The goal isn't to become immune to external factors — even highly motivated people respond to context — but to develop internal drivers that can sustain you through the gaps.\n\nThe intervention: identify one aspect of your work or life that you find intrinsically interesting — curiosity, mastery, connection, meaning — and build a small daily practice around it. Five minutes of something you'd do even if nobody noticed. Over time, this strengthens the internal circuit that doesn't depend on external reward.",
          premiumHook: "Get the 30-day protocol for building intrinsic drivers that work even when external rewards are absent.",
        },
        {
          title: "The Plateau Abandonment Pattern",
          teaser: "You tend to lose motivation in the boring middle — when progress is invisible and the finish line feels far. Learning to persist through plateaus is where moderate becomes high.",
          fullExplanation: "The most common motivation failure isn't giving up at the start. It's giving up in the middle. The beginning has novelty and excitement. The end has the finish line in sight. The middle has neither — just grind. If your motivation is conditional on visible progress, the middle will always be your weak point.\n\nBuilding plateau tolerance requires two things: first, making progress visible even when it's small (track something — words written, skills practiced, conversations had). Second, connecting the daily grind to the larger why. Why does this matter? What would finishing change? The people who persist through plateaus aren't more motivated — they've built better feedback loops and stronger meaning connections.",
          premiumHook: "Access the plateau persistence framework with specific practices for the boring middle of any goal.",
        },
      ],

      workplaceImplications: "At work, your moderate motivation means you perform well when the context supports you — clear goals, good feedback, interesting projects — but you may struggle during organisational transitions, slow periods, or roles that offer little autonomy or recognition. Your growth comes from building internal drivers and learning to generate your own feedback loops when the environment doesn't provide them.",

      relationshipImplications: "In relationships, your motivation style means you're engaged when the relationship feels rewarding — novelty, connection, visible growth — but you may drift when things get routine or when your partner is going through a low-energy phase. Building the capacity to sustain connection through the boring middle of long-term relationships, when novelty has faded and effort feels unrewarded, deepens intimacy significantly.",

      emotionalPattern: "Your motivation has good days and flat days. When conditions align, you feel energised and purposeful. When they don't, you may feel stuck, waiting for something to change. This isn't a character flaw — it's a developmental stage. The people with the most consistent motivation didn't start there; they built it through practice. You're in the building phase.",

      stressTriggers: [
        "Extended periods without visible progress or feedback",
        "Environments that offer little autonomy or meaning",
        "Being compared to people who seem to have limitless internal drive",
      ],
      flowTriggers: [
        "Clear goals with measurable milestones",
        "Work that connects to your values or interests",
        "Environments with supportive feedback and recognition",
      ],

      toolkit: [
        {
          title: "The Intrinsic Micro-Practice",
          context: "Building internal drivers requires daily practice, not occasional inspiration.",
          action: "Identify one 5-minute activity you find genuinely interesting — something you'd do even if nobody noticed. Commit to doing it daily for 21 days. No productivity goal, no sharing requirement. The practice strengthens your internal motivation circuit. Track completion; notice how your baseline energy shifts.",
        },
        {
          title: "The Progress Visibility Hack",
          context: "Your motivation dips when progress is invisible. Making it visible changes everything.",
          action: "Choose one goal you're working toward. Create a simple tracker — a checklist, a streak counter, or a daily log. Each day, record one concrete thing you did that moved you forward, no matter how small. Review weekly. The act of recording creates feedback your brain craves when external feedback is absent.",
        },
        {
          title: "The Why Reconnect",
          context: "When motivation fades, the connection to meaning has usually gone dormant.",
          action: "Write down your answer to: 'Why does this matter to me?' for one goal or relationship that's currently feeling flat. Be specific — not 'because I should' but 'because when I finish this, I'll feel...' or 'because this person matters to me when...' Revisit this when motivation dips. Reconnecting to the why often reignites the how.",
        },
      ],
    },

    low: {
      overview: `Motivation operates in your life more as something that happens to you than something you generate. You may find yourself waiting for the right conditions — the right job, the right partner, the right moment — before you feel ready to engage. When you do feel motivated, it often comes from external pressure: deadlines, expectations, fear of disappointing others. When that pressure lifts, so does your energy. This isn't laziness. It's a developmental gap in the capacity for self-sustaining drive.

Low motivation in the EQ sense means you haven't yet built strong internal drivers. You may depend heavily on external structure — someone else's deadlines, someone else's goals, someone else's approval — to get moving. Setbacks tend to stall you rather than redirect you. When things get hard or boring, the default is to disengage rather than dig for a deeper reason to continue. This creates patterns: starting projects you don't finish, relationships that drift when the initial spark fades, goals that feel compelling in theory but never quite get traction.

The practical impact is that your potential outpaces your follow-through. You have capacity — intelligence, skills, ideas — but the engine that would convert that into sustained action is underdeveloped. The good news: motivation is among the most trainable of the EQ dimensions. The brain regions and psychological patterns that support intrinsic drive can be built through deliberate practice. You're not stuck. You're at the beginning of a build.`,

      strengths: [
        {
          title: "Pressure Responsiveness",
          description: "When external stakes are clear — a deadline, a commitment to someone, a consequence — you can mobilise. You're not incapable of effort; you respond to structure when it exists.",
          deepDive: "Your responsiveness to external pressure is a strength, not a weakness. It means you're coachable, you honour commitments when they're explicit, and you can perform when the stakes are clear. The growth opportunity is learning to create internal stakes — to generate the same mobilising pressure from within when external structure is absent. Many highly motivated people started exactly where you are and built internal drivers by borrowing from external structure until the internal circuit developed.",
        },
        {
          title: "Realistic Assessment",
          description: "You may have a clearer view than highly motivated people of how much effort things actually require. You're less likely to overcommit or burn out from unsustainable drive.",
          deepDive: "High motivation can blind people to the real cost of their goals. You may see more clearly: this will take years, this will be boring, this might not work. That realism isn't pessimism — it's accurate forecasting. The challenge is moving from accurate assessment to committed action anyway. The goal isn't to become blindly optimistic; it's to add persistence to your realism.",
        },
        {
          title: "Low Burnout Risk",
          description: "You're unlikely to exhaust yourself through overdrive. Your energy conservation may protect you from the burnout that afflicts highly motivated people who don't know when to stop.",
        },
      ],

      growthEdges: [
        {
          title: "The Waiting Mode",
          teaser: "You may be waiting for motivation to arrive before you act — for the right mood, the right conditions, the right moment. But motivation often follows action, not the other way around.",
          fullExplanation: "One of the most counterintuitive findings in motivation research: action creates motivation more reliably than motivation creates action. People who wait to feel motivated before they start often wait forever. The people who start small — even when they don't feel like it — often find that motivation catches up. Your brain rewards action. It releases dopamine when you make progress. The trick is to start so small that resistance is minimal: 2 minutes of the thing, one tiny step, one micro-commitment. Momentum builds from there.\n\nThe protocol: pick one goal. Identify the smallest possible first action — so small it feels almost silly. Do it tomorrow. Don't wait for motivation. Just do the tiny thing. Notice what happens to your energy after.",
          premiumHook: "Get the action-before-motivation protocol with specific micro-steps for breaking the waiting pattern.",
        },
        {
          title: "The External Scaffolding Gap",
          teaser: "You may lack the internal structure that keeps you moving when nobody's watching. Building self-generated structure — deadlines, accountability, feedback loops — bridges the gap.",
          fullExplanation: "If your motivation depends on external pressure, the solution isn't to magically develop internal drive overnight. It's to build external scaffolding that you control. Create artificial deadlines. Find an accountability partner. Set up systems that generate the structure you need until internal drivers develop. Many people use external scaffolding permanently — coaches, mastermind groups, public commitments — and there's nothing wrong with that. The goal is sustainable action, not moral purity about where the motivation comes from.\n\nThe intervention: identify one goal. Add one form of external structure you control: a weekly check-in with a friend, a public commitment, a deadline you've set for yourself. Use the structure until the habit forms. Over time, the internal driver may develop — or the external structure may become a permanent part of your system. Both work.",
          premiumHook: "Access the scaffolding-building framework: how to create external structure that develops into internal drive.",
        },
      ],

      workplaceImplications: "At work, low motivation often shows up as inconsistent performance — strong when deadlines loom or when someone is watching, weaker when autonomy is high and feedback is delayed. You may be perceived as needing more direction than your peers, or as someone who doesn't take initiative. The fix isn't to fake enthusiasm; it's to build the systems — accountability, structure, progress tracking — that create the conditions for sustained engagement until internal drivers develop.",

      relationshipImplications: "In close relationships, low motivation can manifest as passivity — waiting for your partner to initiate, to plan, to create the spark. You may love them but struggle to show it through consistent effort when the initial excitement fades. Partners may feel they're carrying more of the relational weight. The bridge is building habits of connection that don't depend on feeling motivated: scheduled check-ins, small rituals, explicit commitments. Action creates the feeling; the feeling doesn't always create the action.",

      emotionalPattern: "Your relationship to motivation is reactive. You respond to what's in front of you — pressure, interest, novelty — rather than generating drive from within. This isn't a moral failing. It's a skill gap. The people who seem to have endless internal drive weren't born with it; they built it. You're at the start of that build. The first step is accepting that motivation can be developed, and that small actions create the conditions for larger ones.",

      stressTriggers: [
        "Situations that require self-directed effort with no external structure",
        "Being compared to or measured against people with stronger internal drive",
        "Long-term goals that offer no short-term feedback or reward",
      ],
      flowTriggers: [
        "Clear external structure — deadlines, accountability, explicit expectations",
        "Novel or high-stakes situations that create natural urgency",
        "Tasks with immediate feedback and visible progress",
      ],

      toolkit: [
        {
          title: "The 2-Minute Start",
          context: "Motivation often follows action. Starting tiny bypasses the resistance that keeps you waiting.",
          action: "Pick one goal you've been putting off. Identify the smallest possible first action — open the document, put on your running shoes, send one message. Commit to doing it for 2 minutes only. No obligation to continue. Do this for 5 days. Notice how often the 2 minutes expands once you've started. You're training your brain that action precedes motivation.",
        },
        {
          title: "The Accountability Add",
          context: "You respond to external pressure. Create pressure you control.",
          action: "Choose one goal. Tell one person what you're going to do and when. Ask them to check in with you. The act of committing to another person creates structure your brain recognises. Do this for one goal for 2 weeks. Track whether completion rates improve.",
        },
        {
          title: "The Progress Log",
          context: "When feedback is absent, your brain has nothing to reward. Creating visible progress creates the feedback loop motivation needs.",
          action: "Each evening, write down one thing you did today that moved you toward any goal — no matter how small. 'Sent one email.' 'Walked for 10 minutes.' 'Had one difficult conversation.' The act of recording creates the progress signal your brain needs when external feedback is scarce. Do this for 21 days.",
        },
      ],
    },
  },
};
