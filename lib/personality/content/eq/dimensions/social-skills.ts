import type { EQDimensionContent } from "../types";

export const SOCIAL_SKILLS: EQDimensionContent = {
  id: "social-skills",
  label: "Social Skills",
  shortLabel: "Social Skills",
  color: "#C7A356",

  levels: {
    high: {
      overview: `You move through social situations with a kind of fluency that most people never develop. You read rooms quickly, adjust your communication style to fit the person in front of you, and build rapport almost without thinking about it. This isn't charm — charm is a performance. What you have is genuine social intelligence: the ability to create connection, navigate conflict, and influence outcomes through relationship rather than authority. People leave conversations with you feeling heard, and they remember you.

Your social skills show up in the small things — the way you mirror someone's energy when they're anxious, the way you defuse tension with a well-timed question, the way you remember what matters to people and bring it up when it's relevant. You're good at the big things too: difficult conversations, team dynamics, networking that doesn't feel transactional. You know when to push and when to back off, when to lead and when to follow, when to be direct and when to soften the message.

The practical effect is that you get things done through people. Not by manipulating them — manipulation burns trust — but by understanding what motivates others, what they need to hear, and how to create conditions where collaboration feels natural. Your relationships are assets, and you know how to maintain them without exhausting yourself.`,

      strengths: [
        {
          title: "Rapport Building",
          description: "You create connection quickly and authentically. People feel at ease with you because you signal safety — through your attention, your questions, your willingness to meet them where they are. This isn't small talk; it's the foundation that makes everything else possible.",
          deepDive: "Rapport is the invisible infrastructure of influence. Research on social cognition shows that people make trust decisions in the first few seconds of an interaction based on nonverbal cues — warmth, openness, congruence between words and body language. Your ability to establish rapport quickly means you're not starting from zero in every conversation. You're building on a foundation of perceived safety. The risk for highly skilled people is that rapport becomes automatic — you might not notice when you're over-performing it or when someone doesn't want it. The growth edge is calibrating your approach to people who find rapid connection suspicious or overwhelming.",
        },
        {
          title: "Conflict Resolution",
          description: "You can hold tension without escalating it. You know how to name what's happening, separate the person from the problem, and find paths forward that preserve the relationship. People trust you in difficult moments because you don't take sides — you take the situation seriously.",
          deepDive: "Most people either avoid conflict or escalate it. You do neither. You treat conflict as information — a signal that something important is at stake — and you have the emotional regulation to stay curious when others are defensive. The key skill is de-escalation through validation: acknowledging the other person's experience before problem-solving. This doesn't mean agreeing with them; it means making them feel heard enough that they can hear you. The trap for highly skilled conflict navigators is over-accommodation — smoothing things over so effectively that real issues never get addressed.",
        },
        {
          title: "Influence Without Authority",
          description: "You get things done through persuasion, relationship, and strategic communication rather than hierarchy. People follow your lead because they want to, not because they have to.",
          deepDive: "Influence is the ability to shape outcomes when you don't have formal power. It requires understanding what the other person cares about, speaking to their priorities, and making your ask feel like a win for them. You're good at this because you read people accurately and you're willing to adapt your approach. The shadow side: highly influential people can become so skilled at reading others that they lose touch with their own preferences. You might find yourself agreeing to things you don't want because you've optimised for harmony over authenticity.",
        },
        {
          title: "Collaborative Leadership",
          description: "You bring people together, surface different perspectives, and create conditions where teams perform better than the sum of their parts. You know when to step forward and when to create space for others.",
        },
      ],

      growthEdges: [
        {
          title: "Conflict Avoidance Through Charm",
          teaser: "Your social fluency can become a way to sidestep real confrontation. You're so good at keeping the peace that you never actually have the hard conversation — and resentment builds under the surface.",
          fullExplanation: "Highly socially skilled people have a particular trap: you can defuse almost any situation. Someone's upset? You know exactly what to say to calm them down. Tension in the room? You redirect it. The problem is that defusing isn't always resolving. Sometimes the right move is to let the tension exist, to have the uncomfortable conversation, to risk the relationship for the sake of honesty.\n\nYour charm becomes a form of conflict avoidance when you use it to prevent difficult conversations from ever happening. The other person feels better in the moment — you're so good at that — but the underlying issue remains. Over time, this creates relationships that look harmonious but feel shallow, because the real stuff never got addressed.\n\nThe growth move: notice when you're smoothing over something that needs to be said. Ask yourself: am I resolving this, or am I just making it go away? Sometimes the most socially skilled thing you can do is to stop being skilled for a moment and let the awkwardness happen.",
          premiumHook: "Learn the framework for distinguishing when to defuse versus when to lean into conflict — and how to do the latter without burning bridges.",
        },
        {
          title: "Over-Accommodation",
          teaser: "You're so attuned to what others need that you can lose track of what you need. Your social radar is always on, and it's exhausting — and sometimes it comes at the cost of your own boundaries.",
          fullExplanation: "High social skills mean you're constantly reading the room, adjusting your approach, anticipating what others want. This is a gift — until it becomes a cost. The people who are best at meeting others' needs often struggle to prioritise their own. You say yes when you mean no. You stay longer than you want. You take on the emotional labour of making everyone comfortable.\n\nThe issue isn't that you're a people-pleaser in the classic sense. It's that your social intelligence creates a kind of automatic accommodation — you see what would make things easier for others and you do it, often before they've even asked. The problem is that 'easier for others' sometimes means 'harder for you,' and you're so used to the trade that you don't notice the cumulative cost.\n\nThe intervention: build a pause between reading the room and responding. When you notice yourself accommodating, ask: is this a gift I'm choosing to give, or am I defaulting to it? The difference matters.",
          premiumHook: "Get the boundary calibration protocol that preserves your social strengths while protecting your energy.",
        },
      ],

      workplaceImplications: "Your social skills are a career multiplier. You're the person who gets brought into difficult projects because you can navigate the politics. You're the one who can deliver bad news without burning relationships. You build networks that pay dividends — not through calculation, but through genuine connection. The risk at work is being perceived as 'too political' or 'all style, no substance.' Make sure your social fluency is backed by visible competence. The other risk: you may be so good at making others comfortable that you avoid the confrontations that would actually move things forward. Sometimes the most valuable thing you can do is have the conversation everyone else is avoiding.",

      relationshipImplications: "In close relationships, your social skills create warmth and ease. You're good at reading your partner, at defusing arguments, at making people feel special. The watchpoint: your partner may sometimes wonder if they're getting the real you or the socially optimised version. There's a difference between being genuinely present and performing presence. Make sure you have relationships where you can drop the social performance — where you don't have to read the room, where you can be messy or tired or off your game. The people who love you need to see the version of you that isn't always on.",

      emotionalPattern: "Your emotional life is deeply intertwined with your social life. You feel most alive in connection — in the flow of a good conversation, in the satisfaction of resolving tension, in the warmth of mutual understanding. You're also attuned to social friction; disharmony in your relationships creates more emotional weight for you than for most people. Your challenge is maintaining this sensitivity without letting it consume you — feeling the room without carrying the room.",

      stressTriggers: [
        "Environments where social connection is impossible — remote work without video, cultures that punish warmth",
        "Situations where your usual social tools don't work — people who don't respond to rapport, conflicts that can't be resolved",
        "Chronic over-accommodation — relationships that take more than they give, roles that require constant emotional labour",
      ],
      flowTriggers: [
        "Deep collaborative work — projects where your social skills create genuine synergy",
        "Networking that feels meaningful — conferences, gatherings, one-on-ones where connection is the point",
        "Mediating or facilitating — roles where your ability to read and guide groups is the core competency",
      ],

      toolkit: [
        {
          title: "The Defuse vs. Resolve Check",
          context: "Your instinct is to smooth things over. Sometimes the right move is to let tension exist until it's properly addressed.",
          action: "This week, when you notice yourself defusing a difficult moment, pause and ask: 'Does this need to be resolved, or am I just making it go away?' If it needs resolution, schedule the hard conversation within 48 hours. Track how often you were avoiding versus genuinely helping.",
        },
        {
          title: "The Accommodation Audit",
          context: "You may be giving more socially than you realise. A weekly audit surfaces the cost.",
          action: "Every Sunday for the next month, list 3 moments where you accommodated someone else's needs at a cost to your own. Note what you gave up — time, energy, a preference, a boundary. The goal isn't to stop accommodating; it's to make it conscious. Choose your accommodations rather than defaulting to them.",
        },
        {
          title: "The Off-Duty Practice",
          context: "Your social skills are always on. Building relationships where you can be off creates sustainable energy.",
          action: "Identify one person or context where you can drop the social performance — where you don't have to read the room or optimise for connection. Spend at least 2 hours per week in that mode. Notice what it feels like to not be 'on.'",
        },
      ],
    },

    moderate: {
      overview: `You have solid social skills — you can hold a conversation, work in teams, and generally get along with people. You're not socially awkward, but you're also not someone who naturally reads every room or builds deep rapport with strangers. Your social fluency works best with people you know and in contexts you understand. When things get unfamiliar — new teams, difficult personalities, high-stakes conflict — you can feel out of your depth.

Your strengths show up in stable environments. You're reliable in one-on-ones, you contribute to group discussions, you can deliver feedback when it's straightforward. Where it gets harder is the grey area: reading subtle social cues, navigating office politics, building influence with people who don't report to you, handling the person who's upset but won't say why. These situations require a level of social attunement that you're still developing.

The good news is that social skills are highly trainable. Unlike some personality traits, the ability to read people, build rapport, and navigate conflict improves dramatically with deliberate practice. You're not starting from zero — you have a foundation. The growth is in extending your range: from familiar to unfamiliar, from easy to difficult, from reactive to strategic.`,

      strengths: [
        {
          title: "Reliable Collaboration",
          description: "You show up for teams. You do your part, you communicate when you need to, and you don't create unnecessary drama. People know they can count on you to be a steady presence.",
          deepDive: "Reliability in social contexts is underrated. In a world of high-drama personalities and unreliable collaborators, being someone who consistently shows up, follows through, and doesn't add chaos is genuinely valuable. Your moderate social skills mean you're not the person who reads every nuance — but you're also not the person who creates problems through misreading or overreacting. The growth opportunity is moving from reliable to influential: from being someone people can count on to being someone people seek out.",
        },
        {
          title: "Functional Communication",
          description: "You can express yourself clearly and listen when others speak. You don't dominate conversations or disappear into the background. You hit the middle ground that works for most situations.",
          deepDive: "Functional communication gets the job done. You can convey information, ask questions, and respond appropriately. What separates functional from skilled is calibration — adjusting your style to the person and context. You might use the same approach with everyone, which works fine when people are similar to you and less well when they're not. Building a repertoire of communication styles — when to be direct, when to be gentle, when to use humour — expands your effectiveness significantly.",
        },
        {
          title: "Conflict Tolerance",
          description: "You don't avoid conflict entirely, and you don't escalate unnecessarily. You can have difficult conversations when they're clearly needed — though you may struggle when the need is subtle.",
        },
      ],

      growthEdges: [
        {
          title: "The Unfamiliar Context Gap",
          teaser: "Your social skills work well in familiar territory — people you know, situations you've seen before. When things get new or ambiguous, your confidence drops and you default to safe, generic behaviour.",
          fullExplanation: "Moderate social skills often mean you've developed a set of strategies that work in your usual contexts. With colleagues you've known for years, in meetings that follow a predictable format, with friends who share your communication style — you're fine. The gap appears when you're in a new team, with someone from a different culture or personality type, or in a situation where the social rules aren't clear.\n\nIn these moments, you may default to politeness without connection, or to observation without participation. You're not failing — you're just operating without the playbook you've built for familiar territory.\n\nThe growth move: treat unfamiliar social contexts as practice, not performance. You don't need to get it right the first time. You need to show up, notice what works and what doesn't, and adjust. Each unfamiliar context you navigate expands your range.",
          premiumHook: "Get the unfamiliar-context protocol that builds social confidence in new situations over 4 weeks.",
        },
        {
          title: "The Subtle Cue Blindspot",
          teaser: "You catch the obvious social signals — someone's angry, someone's happy. You miss the subtler ones: the person who's checked out, the tension that hasn't been named, the invitation that wasn't explicitly stated.",
          fullExplanation: "Social fluency operates on multiple levels. At the obvious level, you're fine — you notice when someone is visibly upset or enthusiastic. The gap is at the subtle level: the colleague who's disengaging but hasn't said so, the meeting where everyone's nodding but no one's bought in, the friend who's hinting at something they need but won't ask for directly.\n\nThese subtle cues require sustained attention and the willingness to look beneath the surface. They also require the confidence to act on what you notice — to say 'I'm sensing some hesitation here' or 'You seem like something's on your mind.'\n\nBuilding subtle cue recognition starts with curiosity. In your next three significant conversations, ask yourself: what is this person not saying? What might they need that they haven't asked for? The answers won't always be right, but the practice of looking develops the skill.",
          premiumHook: "Learn the framework for reading and responding to subtle social cues without over-interpreting.",
        },
      ],

      workplaceImplications: "At work, your moderate social skills mean you're generally effective but not yet influential. You get your work done, you don't create problems, and people generally like you. Where you have room to grow is in the political dimension: building relationships with people outside your immediate team, navigating disagreements when the stakes are high, reading the room in meetings where the real decisions happen in the subtext. Your career will benefit from deliberately expanding your social range — not by becoming someone you're not, but by adding tools to your existing repertoire.",

      relationshipImplications: "In close relationships, you're a solid partner and friend. You're present, you listen, you show up. The growth edge is in the deeper layers: noticing when your partner needs something they haven't asked for, having the difficult conversation before resentment builds, reading the emotional weather of your relationships with more precision. Your people don't doubt that you care — they may sometimes wish you noticed more without being told.",

      emotionalPattern: "Your emotional life is connected to your social life in a straightforward way. You feel good when things are going well with people; you feel stressed when there's conflict or ambiguity. You don't have the same sensitivity to social nuance that highly skilled people do — which means you're less exhausted by other people's emotional states, but also less attuned to what's happening beneath the surface. The balance is workable; the opportunity is to develop more granular social-emotional awareness.",

      stressTriggers: [
        "High-stakes social situations — difficult conversations, networking events, conflict with people you need to work with",
        "Ambiguous interpersonal dynamics — when you can't tell if someone's upset with you or just having a bad day",
        "Contexts where your usual social strategies don't apply — new cultures, different personality types, formal settings",
      ],
      flowTriggers: [
        "Collaborative work with people you know and trust",
        "Structured social contexts — meetings with agendas, events with clear purposes",
        "One-on-one conversations where the format is familiar",
      ],

      toolkit: [
        {
          title: "The Unfamiliar Context Practice",
          context: "Your social skills degrade in new situations. Deliberate exposure builds range.",
          action: "Once a week for the next month, put yourself in one socially unfamiliar situation — a networking event, a conversation with someone very different from you, a meeting where you don't know the dynamics. Go with the goal of noticing, not performing. Afterwards, write down what you observed and what you'd do differently. The practice is the point.",
        },
        {
          title: "The Subtext Scan",
          context: "You tend to take conversations at face value. Training yourself to notice what's unsaid expands your social intelligence.",
          action: "In your next three significant conversations, add a mental question: 'What is this person not saying?' Don't assume you know the answer — just hold the question. If something occurs to you, test it gently: 'I'm wondering if there's something else on your mind.' Track how often you're right.",
        },
        {
          title: "The Communication Style Repertoire",
          context: "You may use the same approach with everyone. Different people need different styles.",
          action: "Identify three people you work with who have different communication styles — one direct, one relationship-focused, one detail-oriented. Before your next interaction with each, consciously choose one adjustment: more/less warmth, more/less structure, more/less space for them to talk. Notice what changes.",
        },
      ],
    },

    low: {
      overview: `Social situations feel effortful in a way they don't for many people. You may find yourself missing cues, misreading tone, or struggling to know what to say. Building rapport doesn't come naturally. Conflict feels overwhelming. You might prefer working alone or in small, familiar groups — not because you don't like people, but because the social dimension adds a layer of complexity that drains you. This isn't a character flaw. It's a skill gap, and skill gaps can be addressed.

Low social skills often show up as a pattern: you say the wrong thing without meaning to. You don't notice when someone's upset until they tell you. You avoid networking, difficult conversations, and situations where you'd need to read the room. You may have been told you're 'hard to read' or 'come across as cold' — when from your perspective, you're just focused or uncomfortable. The gap between how you experience yourself and how others experience you is one of the most frustrating aspects of this profile.

The practical impact is real. Relationships take longer to build. Influence is harder to exercise. You may be passed over for roles that require collaboration or leadership, not because you lack competence, but because the social dimension wasn't visible. The good news: social skills are among the most trainable of all EQ dimensions. You're not doomed to isolation. You're starting from a different baseline, and the path forward is concrete.`,

      strengths: [
        {
          title: "Direct Communication",
          description: "You tend to say what you mean. You don't wrap things in layers of social nuance that obscure the message. In contexts that value clarity over diplomacy, this is a genuine strength.",
          deepDive: "People with lower social skills often develop compensatory strengths — and directness is one of them. When you're not naturally attuned to how others might receive your message, you may default to saying things plainly. This can be refreshing. In technical environments, crisis situations, or cultures that prize honesty, your directness is an asset. The growth edge is learning when to soften — not to become fake, but to add a layer of consideration that makes your directness land better. Direct and kind isn't a contradiction.",
        },
        {
          title: "Focus and Independence",
          description: "You can work effectively without constant social reinforcement. You don't need the buzz of collaboration to stay motivated. In roles that require sustained solo focus, this is valuable.",
          deepDive: "The flip side of lower social attunement is often higher tolerance for solitude and independent work. You're not constantly scanning for social feedback, which means you can maintain focus when others get distracted by interpersonal dynamics. This isn't antisocial — it's a different allocation of attention. The challenge is that most meaningful work eventually requires collaboration, and the skills that make you effective alone don't automatically transfer to effectiveness with others.",
        },
        {
          title: "Consistency",
          description: "You're not performing different versions of yourself for different people. What people see is what they get — which can create trust through predictability, even when the social polish isn't there.",
        },
      ],

      growthEdges: [
        {
          title: "The Cue Blindspot",
          teaser: "You miss social signals that others take for granted — the shift in tone, the body language that says 'I'm done with this conversation,' the invitation that was implied but not stated. This creates misunderstandings you don't see coming.",
          fullExplanation: "Social interaction runs on two channels: the explicit (words) and the implicit (tone, body language, what's not said). When you're primarily tuned to the explicit channel, you miss a lot. Someone says 'I'm fine' in a tone that means they're not. A colleague's brief responses signal disengagement. A friend's 'we should hang out sometime' is actually a bid for connection that needs a concrete response.\n\nYou're not missing these cues because you don't care. You're missing them because your brain isn't automatically prioritising that information. The good news: you can train it. Start by explicitly looking for cues in every significant conversation. What's their body language saying? What might they want that they haven't asked for? Treat it as a puzzle, not a test. Wrong guesses are fine — the practice of looking is what builds the skill.",
          premiumHook: "Get the cue-recognition training protocol that builds social attunement in 6 weeks.",
        },
        {
          title: "The Isolation Spiral",
          teaser: "When social situations feel effortful, the natural response is to avoid them. Avoidance reduces practice. Less practice means more effort. The spiral deepens until connection feels increasingly out of reach.",
          fullExplanation: "This is the most insidious pattern for people with lower social skills: socialising is hard, so you do it less. Doing it less means you get less practice. Less practice means it stays hard — or gets harder, as your skills atrophy and your anxiety grows. Meanwhile, your peers are building networks, deepening relationships, and getting better at the very thing you're avoiding.\n\nThe spiral is reversible, but it requires deliberate intervention. You can't wait for socialising to feel easy before you do it. You have to do it while it's still hard, in small doses, with clear goals. One conversation where you practice asking one good question. One networking event where you talk to two people. The goal isn't to become the life of the party — it's to break the avoidance pattern and create opportunities for skill-building.",
          premiumHook: "Learn the exposure protocol that reverses the isolation spiral without overwhelming you.",
        },
      ],

      workplaceImplications: "At work, limited social skills can create friction you don't intend. You might not realise that your emails come across as curt, that your lack of small talk reads as coldness, or that you're missing the political dynamics that affect decisions. Feedback often comes indirectly — 'people find you hard to approach' or 'the team doesn't feel like you're part of it' — and it can feel unfair when you're trying your best. The fix isn't to become someone you're not. It's to add a few high-leverage social behaviours: checking in with people before diving into tasks, asking one personal question in meetings, following up after difficult conversations. Small, consistent changes create disproportionate impact.",

      relationshipImplications: "In close relationships, limited social skills can create a specific frustration: your partner or friends feel that they have to spell everything out. They want you to notice when they're struggling. They want you to initiate connection sometimes. They want you to read the room. When you don't, they may interpret it as not caring — even when you care deeply. The bridge is building explicit habits: scheduled check-ins, direct questions ('How are you really?'), and the willingness to ask when you're not sure. Your people need to know that you want to connect; they may need you to show it in ways that don't come naturally.",

      emotionalPattern: "Your emotional life may feel more internal than social. You experience feelings strongly, but the connection between your emotions and your social behaviour isn't always clear to you — or to others. You might feel disconnected from people without understanding why, or frustrated when your intentions don't match how you're perceived. The pattern isn't that you lack emotion; it's that the social channel for emotional exchange isn't as developed. Building it requires treating social connection as a skill to practice, not a mystery you'll never solve.",

      stressTriggers: [
        "Networking and social events where the purpose is connection itself",
        "Conflict or tension that requires reading the other person's emotional state",
        "Situations where you're expected to pick up on unstated expectations or cues",
      ],
      flowTriggers: [
        "Solo work or small groups with clear task focus",
        "Structured interactions with defined roles and expectations",
        "Contexts where directness is valued over social nuance",
      ],

      toolkit: [
        {
          title: "The One-Question Practice",
          context: "Rapport often starts with one good question. You don't need to become a conversationalist — you need one reliable move.",
          action: "Before every significant conversation this week, prepare one genuine question about the other person — something you're actually curious about. It can be work-related or personal. Ask it early. Listen to the answer. You don't need to follow up with brilliance; the question itself does the work.",
        },
        {
          title: "The Cue Check",
          context: "You miss implicit signals. Making a habit of explicitly checking creates a safety net.",
          action: "In your next five important conversations, add one check-in: 'How are you feeling about this?' or 'Is there anything I'm missing?' or 'What would be most helpful right now?' You're not supposed to read minds — you're creating a channel for information that might not come through otherwise.",
        },
        {
          title: "The Small Connection Ritual",
          context: "Avoidance deepens the gap. Small, regular contact builds the muscle.",
          action: "Commit to one low-stakes social interaction per day for the next 3 weeks — a 2-minute conversation with a colleague, a text to a friend, a comment that acknowledges someone. Keep it brief. The goal is consistency, not depth. Track how it feels over time; the effort should decrease as the habit forms.",
        },
      ],
    },
  },
};
