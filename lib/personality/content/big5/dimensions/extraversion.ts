import type { Big5DimensionContent } from "../types";

export const EXTRAVERSION: Big5DimensionContent = {
  id: "extraversion",
  label: "Extraversion",
  shortLabel: "Extraversion",
  color: "#C97A30",

  levels: {
    high: {
      overview: `You run on social energy. Other people aren't just enjoyable — they're fuel. A good conversation, a lively dinner, a packed room buzzing with interaction: these don't just entertain you, they physically recharge you. Your brain's reward system fires harder in social contexts than in solitary ones, and this wiring shapes everything from your career to your relationships to your Saturday nights.

This gives you real advantages. You build networks effortlessly. You read rooms quickly. You express enthusiasm in a way that's genuinely contagious — not performed, but felt, and people can tell the difference. In any context where social skills create value — leadership, sales, teaching, community building — you have a structural edge.

The cost is subtler: you may not know yourself as well as quieter people know themselves. Your attention is oriented outward — toward people, events, stimulation — and the inward work of self-reflection doesn't come naturally. You may discover, in rare moments of stillness, that you're not entirely sure what you think about something until you've talked about it with five people. That's not a flaw, but it does mean solitude isn't just uncomfortable — it's genuinely disorienting.`,

      strengths: [
        {
          title: "Social Intelligence",
          description: "You read people quickly and accurately. Micro-expressions, group dynamics, power structures in a room — you process this information in real time, often without conscious effort. This social radar lets you navigate complex interpersonal situations with an ease that others find bewildering.",
          deepDive: "Your social intelligence isn't just 'being friendly.' It's a perceptual system that's been trained by thousands of social interactions. You've built an enormous unconscious database of how people behave, and you pattern-match against it constantly. The person who walks into a party and instantly knows who's comfortable and who's performing, who's interested and who's bored, who holds the real power and who has the title — that's you. This capacity is enormously valuable in leadership, negotiation, and any role that requires reading people. The risk is over-indexing on social data at the expense of other information. Not every signal in the room is relevant to the decision at hand, and your tendency to process social dynamics first can distract from the substantive problem being discussed.",
        },
        {
          title: "Energizing Presence",
          description: "You raise the energy level of any group you join. This isn't hype or performance — it's a genuine enthusiasm that's contagious. Teams with you on them report higher engagement, not because you're entertaining, but because your energy makes the work feel more alive.",
        },
        {
          title: "Network Breadth",
          description: "You maintain a wider social and professional network than most people can manage. This breadth gives you access to information, opportunities, and perspectives that more insular people simply don't encounter. Your network is a genuine strategic asset.",
        },
        {
          title: "Verbal Processing Speed",
          description: "You think by talking. Ideas emerge, clarify, and develop through conversation at a speed that solitary reflection can't match for you. Brainstorming sessions, debates, impromptu discussions — these are your cognitive workshop.",
        },
      ],

      growthEdges: [
        {
          title: "The Solitude Deficit",
          teaser: "You fill every silence, every gap, every alone-moment with social contact. Not because you're afraid of being alone (though maybe), but because your brain treats solitude as a low-stimulation state that needs fixing. The result: you may have thousands of connections and limited self-knowledge.",
          fullExplanation: "High Extraversion creates a specific blind spot: the aspects of yourself that only become visible in stillness remain hidden because you rarely sit still. Self-knowledge requires solitary reflection — the kind of sustained inner attention that your brain codes as 'boring' or 'uncomfortable' and tries to escape through social engagement.\n\nThis isn't a character flaw. It's a neurological preference for external stimulation that happens to compete with the conditions required for introspection. The people in your life who are quieter than you often know themselves better than you know yourself — not because they're smarter, but because they spend more time in the environment where self-knowledge grows.\n\nThe intervention: schedule solitude the way you schedule social events. 30 minutes, alone, no phone, no podcast, no input. Write about what you think or feel. The first few sessions will be excruciating. By the fourth or fifth, you'll start hearing an internal voice you haven't given space to speak. That voice has things to tell you.",
          premiumHook: "Learn why your social orientation creates a specific self-knowledge gap and get a structured solitude practice designed for people who find silence uncomfortable.",
        },
        {
          title: "The Depth Trade-Off",
          teaser: "You have many friends and few who truly know you. Your social energy creates breadth — lots of connections, lots of conversations, lots of group activities. But depth requires the kind of sustained, vulnerable, one-on-one engagement that your stimulation-seeking mind tends to skip past in favor of the next social hit.",
          fullExplanation: "Depth in relationships requires something that high Extraversion doesn't naturally provide: sustained attention to one person over extended periods, including the uncomfortable silences, the repetitive conversations, and the slow accumulation of shared vulnerability that only happens when you stop circulating and stay.\n\nYou can create the experience of intimacy through charm, energy, and genuine warmth. But there's a difference between the warmth that comes from your personality and the depth that comes from sustained investment. Partners and close friends may feel this gap: they enjoy being around you, they feel energized by you, but they're not sure you really see them — because your attention is always partly distributed across the broader social field.\n\nThe practice: choose 3-5 people who matter most. Schedule uninterrupted, one-on-one time with each, regularly. No group hangs, no parties, no multitasking. Just presence. The depth you build in these relationships will become the foundation that your broader social life can't provide.",
          premiumHook: "Discover why your social breadth comes at the cost of depth and get a specific framework for building the intimate connections that your personality doesn't naturally prioritize.",
        },
      ],

      relationshipPattern: "You bring energy, expressiveness, and a social life that never goes flat. Partners of high-Extraversion people often say dating you feels like being plugged into a more vibrant version of reality. The tension: your partner may need more quiet, more intimacy, more sustained one-on-one attention than your social rhythm naturally provides. You may read their withdrawal as rejection when it's actually a need for the kind of deep connection that only happens when the noise stops.",

      careerImplications: "You thrive in people-facing roles: sales, leadership, teaching, public relations, event management, consulting, recruiting, community building. You struggle in isolated technical roles, solitary creative work, or positions that require extended periods of solo deep focus. Your career risk is choosing roles based on social stimulation rather than long-term alignment — staying in a mediocre position because the team is fun, or leaving a great position because the work is solitary.",

      emotionalPattern: "You express emotions outwardly and process them socially. When something good happens, you want to share it immediately. When something bad happens, talking about it is how you metabolize it. This external processing is healthy and effective — as long as you have people available to process with. The vulnerability: when social support is unavailable (during isolation, relocation, or relationship breakdown), your emotional processing system loses its primary tool. Building some capacity for solitary emotional processing provides a backup.",

      stressTriggers: [
        "Extended isolation without social contact",
        "Work environments that require sustained solo focus with minimal interaction",
        "Partners or roommates who need significantly more alone time than you do",
      ],
      flowTriggers: [
        "Collaborative work with energetic, engaged colleagues",
        "Public speaking, presentations, or facilitation",
        "Dynamic social environments with high stimulation and varied interaction",
      ],

      toolkit: [
        {
          title: "The Solitude Practice",
          context: "When you realize you've been socially saturated and haven't spent meaningful time with yourself in weeks",
          action: "Block 45 minutes, alone, with nothing to do. No phone, no music, no podcast. Bring a notebook. Write whatever comes to mind. The first 15 minutes will feel unbearable. Push through. What emerges after the restlessness subsides is often the most honest thinking you'll do all week.",
        },
        {
          title: "The Deep Dive Date",
          context: "When you sense a key relationship is wide but not deep and you want to change that",
          action: "Schedule a 2-hour one-on-one with someone who matters. No agenda, no other people, no restaurant with distracting ambiance. Go for a long walk. Ask questions you've never asked. Share something you've never shared. The discomfort of sustained intimate attention is exactly the signal that you're building something your social breadth can't provide.",
        },
      ],
    },

    moderate: {
      overview: `You're socially amphibious. You can work a room when the situation calls for it and spend a weekend alone without climbing the walls. This flexibility means you're neither dependent on social stimulation nor avoidant of it — you choose based on context, energy, and preference rather than compulsion.

Your social style is selective rather than indiscriminate. You have genuine social skills but deploy them purposefully, not reflexively. You're not the first person to speak in a meeting, but when you do, people listen. You enjoy parties but leave before the energy shift. You value close friendships more than broad networks.

This balance makes you effective across a wider range of social contexts than people at either extreme. You can collaborate and work alone. You can lead and follow. You can energize a group and sit quietly in one.`,

      strengths: [
        {
          title: "Social Versatility",
          description: "You adapt your social engagement to the situation rather than defaulting to one mode. Client dinner? You're warm and engaged. Deep focus work? You're comfortable alone for hours. This range makes you valuable in environments that require both collaboration and independent work.",
        },
        {
          title: "Listening Capacity",
          description: "Because you're not compelled to fill every silence, you actually hear what people are saying. This makes you a better collaborator, a better partner, and a better friend than people who are always broadcasting.",
        },
        {
          title: "Energy Management",
          description: "You instinctively balance social engagement with recovery time. You attend the event and leave when your energy dips. You take the meeting and then close the door for an hour. This self-regulation prevents the burnout that afflicts extreme extraverts and the isolation that traps extreme introverts.",
        },
      ],

      growthEdges: [
        {
          title: "The Social Comfort Zone",
          teaser: "Your moderate Extraversion means you can always find a comfortable position — social enough to not seem withdrawn, quiet enough to not seem overwhelming. This comfort zone works. But it may prevent you from either building the expansive network that high Extraversion creates or developing the deep inner life that low Extraversion cultivates.",
          fullExplanation: "The risk of moderate Extraversion is that you default to a level of social engagement that's comfortable but not optimal for what you're trying to build. If your goal is leadership, you may need to push toward more social visibility than feels natural. If your goal is creative depth, you may need to protect more solitude than feels comfortable.\n\nYour moderate score gives you access to both modes — but access isn't the same as practice. The muscles you don't exercise atrophy. If you always default to your comfortable middle, the extremes become harder to reach when you need them.\n\nThe practice: alternate between weeks of deliberately higher social engagement (say yes to everything, initiate conversations, attend events you'd normally skip) and weeks of deliberate solitude (protect your alone time, decline invitations, go deeper on solo projects). This prevents your comfort zone from calcifying into a limitation.",
          premiumHook: "Learn how to use your social versatility strategically instead of defaulting to your comfort zone — with specific protocols for knowing when to push outward and when to go inward.",
        },
      ],

      relationshipPattern: "You're a balanced partner — present without being overwhelming, independent without being distant. You give space naturally and ask for it without drama. The subtler challenge is that your balance can read as ambiguity: partners may not always know when you want company and when you want space. Being explicit about your social needs — rather than expecting partners to read your moderate, context-dependent signals — prevents the low-grade misunderstandings that accumulate in relationships.",

      careerImplications: "Your social versatility is a genuine career asset. You can handle client-facing roles and deep-focus roles. You can lead teams and work independently. The risk is that your versatility makes it hard to develop a distinctive professional identity — are you the people person or the deep worker? Choosing a lane (while maintaining your ability to flex) helps you build the reputation that drives career advancement.",

      emotionalPattern: "You process emotions through a mix of social and solitary channels. Sometimes talking it out works; sometimes you need to be alone with your thoughts. You instinctively know which approach a given emotion needs. This emotional bilingualism is a genuine strength — just make sure you're actually using both channels rather than defaulting to whichever one is easier at the moment.",

      stressTriggers: [
        "Being forced to one extreme for too long — either constant socializing or prolonged isolation",
        "Environments where your flexible social style is misread as either cold or inauthentic",
        "Social dynamics that require you to perform a consistent persona rather than adapt naturally",
      ],
      flowTriggers: [
        "Work that mixes collaboration with solo deep work",
        "Small-group settings where quality of interaction matters more than quantity",
        "Environments that respect both social engagement and quiet focus",
      ],

      toolkit: [
        {
          title: "The Stretch Week",
          context: "When you suspect your social comfort zone has become a rut",
          action: "Pick one week and push 30% more toward whichever extreme feels less comfortable. If you've been mostly solo, say yes to 3 social events you'd normally skip. If you've been over-socialized, protect 3 evenings of complete solitude. Notice what becomes available at the edge that isn't available in the middle.",
        },
      ],
    },

    low: {
      overview: `Your inner world is your primary residence. Other people's inner worlds are where you visit. The outer social world — networking events, large gatherings, small talk with strangers — is a foreign country where you can function but never fully relax. This isn't shyness or social anxiety (though those can co-exist). It's a fundamental orientation toward internal processing that shapes how you think, create, connect, and recharge.

Your brain processes social stimulation differently than extraverts'. What energizes them depletes you. The party that recharges their batteries drains yours. This isn't a deficit — it's a different optimization target. Your cognitive system is built for depth over breadth, and the environments that support that depth (solitude, quiet, one-on-one conversation, uninterrupted focus) are where you do your best work and feel most like yourself.

The advantage: the work you produce in solitude often has a quality of depth and originality that group-processed work lacks. Your ideas have been pressure-tested internally before they ever reach an audience. The disadvantage: your ideas, your contributions, and your presence are chronically undervalued because you don't broadcast them.`,

      strengths: [
        {
          title: "Deep Processing",
          description: "You think before you speak, consider before you act, and reflect before you decide. In a world that rewards speed and volume, this depth is your competitive advantage. The quality of your contributions — when you make them — is consistently higher than people who think out loud.",
          deepDive: "Your deep processing isn't just introversion. It's a cognitive architecture that routes information through more internal checkpoints before producing output. Research shows that introverts have higher baseline cortical arousal — your brain is already busy internally, which is why additional external stimulation feels overwhelming rather than energizing. The practical result: you produce more considered, nuanced, and accurate work than people who think by talking. But you produce it more slowly, and in environments that reward verbal fluency over written quality, your contributions get systematically underweighted. The strategic move is to find or create channels where your processing style is an advantage: written communication, asynchronous collaboration, prepared presentations (rather than impromptu ones), and one-on-one advisory relationships.",
        },
        {
          title: "Observation Accuracy",
          description: "While extraverts are participating in social dynamics, you're observing them. This gives you a clarity about group behavior, interpersonal patterns, and social systems that the people inside them can't see. You're the person who notices what everyone else missed because they were too busy talking.",
        },
        {
          title: "Relationship Depth",
          description: "You may have fewer friends, but the friendships you have tend to be richer. You invest in the people you care about with a focused attention that creates genuine intimacy. Your close friends feel known by you in a way that breadth-oriented socializers rarely provide.",
        },
        {
          title: "Independent Productivity",
          description: "You don't need team energy, social reinforcement, or collaborative buzz to produce excellent work. Give you a clear problem, a quiet room, and enough time, and you'll produce output that a committee of extraverts couldn't match.",
        },
      ],

      growthEdges: [
        {
          title: "The Visibility Problem",
          teaser: "Your work is better than your reputation. Not because you're bad at politics, but because you're bad at being visible. The ideas you don't share, the contributions you don't claim credit for, the conversations you don't initiate — they represent a chronic under-investment in the social capital that drives opportunity.",
          fullExplanation: "In most professional environments, being good isn't enough. Being known to be good is what drives promotions, opportunities, and influence. Low Extraversion systematically under-invests in visibility because the activities that build it — networking, self-promotion, verbal participation in meetings, social relationship-building — all cost you energy that feels disproportionate to the payoff.\n\nThe math is uncomfortable: the person who does 80% quality work but promotes it at 100% will advance faster than the person who does 100% quality work and promotes it at 40%. This isn't fair. It's also not going to change.\n\nThe intervention isn't to become an extravert. It's to identify the minimum effective dose of visibility that keeps your work from being invisible. This might mean: one LinkedIn post per week, speaking up once per meeting, sending a brief weekly update to your manager, or maintaining 3-4 strategic professional relationships through regular check-ins. Small, sustainable, and consistent — not performative, just visible.",
          premiumHook: "Get the introvert-specific visibility framework that builds professional reputation without requiring you to become someone you're not.",
        },
        {
          title: "The Isolation Drift",
          teaser: "Your preference for solitude can drift from healthy to isolating without you noticing. The transition is gradual: you decline an invitation, then another, then a few more, and one day you realize it's been three weeks since you talked to anyone who isn't a coworker or a cashier. The alone time that was recharging has become a default that's cutting you off.",
          fullExplanation: "There's a threshold where solitude shifts from restorative to harmful. Below that threshold, alone time replenishes your energy and supports your deep processing. Above it, isolation begins to erode your social skills, your mood, and your sense of connection to the broader world.\n\nThe problem for low-Extraversion people is that the transition across this threshold is nearly imperceptible. Each individual decision to stay in makes sense. The cumulative effect doesn't become visible until you've drifted far enough that re-engaging feels overwhelming.\n\nThe practice: set a minimum social baseline. Not a maximum (you already manage that instinctively), but a minimum. Something like: one social interaction outside work per week, one phone call with a close friend per week, one group activity per month. These minimums prevent the drift into isolation without forcing you into overstimulation. Think of it as social maintenance — not because you need social energy, but because the relationships and skills it sustains are assets you can't afford to let atrophy.",
          premiumHook: "Learn to identify the specific point where your healthy solitude becomes harmful isolation — and get the minimum-viable social maintenance plan that keeps you connected without draining you.",
        },
      ],

      relationshipPattern: "You love deeply but quietly. Your partner gets a version of you that the rest of the world doesn't see — more expressive, more playful, more vulnerable. The tension comes from your need for solitude, which partners can experience as withdrawal or rejection. Being explicit about the fact that your alone time is about recharging, not escaping them, prevents the misread that poisons many introvert-extravert partnerships.",

      careerImplications: "You excel in roles that reward deep focus, independent work, and quality over volume: research, software engineering, writing, analysis, skilled technical work, accounting, design (especially the solitary phases). You struggle in roles that require constant social performance: sales, event management, executive leadership with heavy external-facing demands. Your career risk is the visibility problem: exceptional work that goes unrecognized because you don't promote it.",

      emotionalPattern: "You process emotions internally, sometimes for extended periods before expressing them. This produces thorough, well-understood emotional responses — but the delay can frustrate partners and friends who interpret your silence as indifference rather than processing. You may also over-process: running the same emotional scenario through your mind repeatedly without reaching resolution. A journal helps — it gives the internal processing an external outlet without requiring another person.",

      stressTriggers: [
        "Prolonged social situations with no escape route",
        "Open-plan offices and environments with constant interruption",
        "Expectations to be 'on' socially for extended periods without recovery time",
      ],
      flowTriggers: [
        "Uninterrupted solo work on a challenging problem",
        "Deep one-on-one conversation with someone you trust",
        "Quiet environments where you can think without external input",
      ],

      toolkit: [
        {
          title: "The Minimum Viable Social Calendar",
          context: "When your social life has dwindled to near-zero and re-engaging feels overwhelming",
          action: "Commit to one social interaction per week, chosen deliberately — coffee with a friend, not a networking event. Put it on your calendar like an appointment. Don't cancel it even if you don't feel like going (you never will). After 4 weeks, evaluate: has your mood, connection, or energy improved? It almost always has.",
        },
        {
          title: "The Visibility Ritual",
          context: "When your work is going unnoticed because you're not promoting it",
          action: "Every Friday, send a 3-sentence email to your manager or one key stakeholder summarizing what you accomplished that week. Not a brag — just a brief factual update. This one habit, sustained over months, dramatically changes how visible your contributions are without requiring any social performance.",
        },
      ],
    },
  },
};
