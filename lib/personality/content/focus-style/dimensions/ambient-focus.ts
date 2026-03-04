import type { FocusDimensionContent } from "../types";

export const AMBIENT_FOCUS: FocusDimensionContent = {
  id: "ambient-focus",
  label: "Ambient Focus",
  shortLabel: "Ambient Focus",
  color: "#93A2B6",

  levels: {
    high: {
      overview: `You possess exceptional peripheral awareness. Your attentional system maintains broad environmental monitoring even while engaged in focused work. You notice subtle mood shifts in a room, changes in background noise, the moment someone enters or leaves, and patterns that others miss entirely. This isn't distraction — it's a different kind of attention, one that keeps multiple ambient streams active simultaneously.

Your cognitive architecture favours breadth of awareness over narrow concentration. Research on divided attention suggests that some individuals have naturally higher capacity for monitoring non-focal stimuli without degrading primary task performance. You can work productively while your brain continues to sample the environment for significant changes. This makes you unusually attuned to social dynamics, environmental shifts, and emerging situations that build gradually rather than announcing themselves.

The practical effect is that you often sense things before they're explicit. You notice when a colleague is struggling before they say anything, when a meeting is about to go off the rails, or when the energy in a space has shifted. This environmental sensitivity is a genuine asset in collaborative work, leadership, and any role where reading the room matters. The challenge is that your awareness can become overwhelming when the environment offers too much to monitor, and others may misinterpret your broad attention as distraction.`,

      strengths: [
        {
          title: "Exceptional Peripheral Awareness",
          description: "You maintain awareness of environmental changes, mood shifts, and background patterns while working. Your brain samples multiple ambient streams without requiring conscious effort.",
          deepDive: `Most people operate with a narrow attentional spotlight — when they focus on a task, their peripheral awareness drops sharply. Your system maintains a wider attentional field. Studies of sustained attention show that individuals with high ambient focus exhibit different neural activation patterns: reduced suppression of non-focal stimuli and more distributed attentional resources. This means you're genuinely processing more of your environment in parallel, not just occasionally glancing up. The result is that you catch signals — a colleague's hesitation, a change in room temperature, an anomaly in background conversation — that narrowly focused people never register.`,
        },
        {
          title: "Social and Environmental Reading",
          description: "You pick up on subtle social cues, team dynamics, and unspoken tensions. You often sense what's happening beneath the surface before it becomes explicit.",
          deepDive: `Your ambient awareness extends to the social dimension. You notice micro-expressions, tone shifts, who's engaging with whom, and the emotional undertone of a space. This isn't mind-reading — it's that your attentional system is tuned to process the continuous stream of social information that most people filter out when focused. In leadership, negotiation, and collaborative contexts, this gives you a significant advantage. You can adjust your approach in real time based on what you're picking up, and you're rarely blindsided by conflicts or dynamics that were building in plain sight.`,
        },
        {
          title: "Multi-Stream Monitoring",
          description: "You can work effectively while keeping track of several ambient information streams. This capacity supports roles that require situational awareness alongside task execution.",
        },
        {
          title: "Early Signal Detection",
          description: "You notice emerging patterns and gradual changes before they become obvious. Problems rarely surprise you because you've been tracking their development.",
        },
      ],

      growthEdges: [
        {
          title: "Sensory Overload",
          teaser: "Your broad awareness can become overwhelming when environments offer too much to monitor. Open offices, busy meetings, and information-dense contexts can leave you exhausted and unable to filter.",
          fullExplanation: `The same capacity that makes you attuned to your environment can turn against you when the environment is too rich. Your brain doesn't have an off switch for ambient monitoring — it keeps sampling, processing, and tracking. In high-stimulus environments — open-plan offices, crowded events, multi-person video calls — the cognitive load of maintaining awareness across so many streams can exceed your capacity. The result is fatigue, difficulty concentrating on your primary task, and sometimes genuine overwhelm.\n\nThe intervention isn't to suppress your awareness but to manage your exposure. Identify which environments reliably overload you and limit your time in them. When you must be in high-stimulus contexts, create micro-zones of reduced input: noise-cancelling headphones with low ambient sound, positioning yourself with your back to the busiest area, or taking regular breaks to a quieter space. The goal is to honour your awareness capacity while preventing it from depleting you.`,
          premiumHook: "Get the environmental load management protocol designed for high ambient focus.",
        },
        {
          title: "The Distraction Misinterpretation",
          teaser: "Others may perceive your broad attention as distraction or lack of focus. You're often hyperaware, not unfocused — but the outward behaviour can look the same.",
          fullExplanation: `When you're scanning the room, noticing who just walked in, or tracking a side conversation while also working, you can appear distracted to people who equate focus with a fixed gaze and minimal environmental engagement. The irony is that you're processing more, not less — but the visible behaviour (looking around, responding to ambient cues, seeming to split attention) reads as inattention to those who don't share your cognitive style.\n\nThe practical fix is communication. Explain to key colleagues and managers that your working style includes environmental monitoring and that it supports your effectiveness rather than undermining it. Offer evidence: the times you caught an issue early, noticed a dynamic shift, or anticipated a problem. For situations where narrow focus is genuinely required — presentations, high-stakes negotiations — consciously narrow your attentional field for that period. You have the capacity for both modes; the key is deploying the right one for the context.`,
          premiumHook: "Learn how to communicate your ambient focus style and when to consciously narrow your attention.",
        },
      ],

      workplaceImplications: `Your ambient focus is a significant asset in roles that require situational awareness: leadership, project management, client relations, event coordination, and any collaborative work where reading the room matters. You'll excel in environments that reward your ability to sense emerging issues, track team dynamics, and respond to environmental cues. You may struggle in roles that demand sustained narrow focus in high-stimulus environments — the cognitive conflict between your natural broad awareness and the requirement to ignore your environment can be draining.\n\nThe career strategy is to seek roles and teams where your environmental sensitivity is valued. In organisations that prize collaboration and emotional intelligence, your awareness is a strength. In organisations that equate productivity with heads-down focus, you may need to advocate for the value of your different attentional style.`,

      relationshipImplications: `In close relationships, your ambient awareness makes you unusually attuned to your partner's state. You notice mood shifts, unspoken concerns, and subtle changes in engagement before they're articulated. This can feel like emotional intelligence and presence — and it often is. The growth edge is that your awareness can sometimes feel intrusive or overwhelming to partners who prefer more privacy in their internal experience. Not everyone wants to be read that accurately.\n\nBalance your natural attunement with respect for your partner's need for space. Check in rather than assume: "I'm picking up that something might be off — do you want to talk about it?" This honours your awareness while giving them agency.`,

      cognitivePattern: `Your cognitive life is characterised by broad, distributed attention. You think in context — your mind naturally holds environmental and social information alongside your primary focus. You're rarely surprised by developments because you've been tracking their emergence. The trade-off is that sustained narrow focus requires more effort for you than for people with naturally narrow attentional styles. Your mind wants to stay open to the environment; closing that aperture is work.`,

      stressTriggers: [
        "High-stimulus environments with too many ambient streams to monitor",
        "Situations requiring sustained narrow focus when environmental changes are occurring",
        "Contexts where your broad attention is misinterpreted as distraction or lack of commitment",
      ],
      flowTriggers: [
        "Environments with moderate, manageable ambient input that rewards your awareness",
        "Tasks that benefit from environmental monitoring alongside primary work",
        "Collaborative contexts where reading the room directly supports your effectiveness",
      ],

      toolkit: [
        {
          title: "The Environmental Load Audit",
          context: "Your awareness capacity has limits. Identifying which contexts overload you prevents chronic depletion.",
          action: "For one week, rate your energy level (1-5) at the end of each significant context: specific meetings, work locations, social events. Note the ambient load: how many people, how much noise, how many simultaneous streams. After 7 days, map which contexts drain you. Create rules: limit time in high-load contexts, schedule recovery after them, and protect low-load time for deep work.",
        },
        {
          title: "The Conscious Narrowing Protocol",
          context: "You can narrow your attention when needed — it just requires deliberate activation.",
          action: "When a task demands narrow focus, use a physical cue: put on headphones, position your screen to block peripheral view, or set a 25-minute timer. Tell yourself: `For this period, I'm intentionally narrowing.` When the timer rings, release and let your awareness broaden again. The key is making the switch deliberate rather than fighting your natural style all day.",
        },
        {
          title: "The Style Communication Script",
          context: "Others misinterpret your broad attention. A brief explanation prevents the distraction narrative.",
          action: "Prepare a 30-second explanation: `I work with broad awareness — I notice environmental and social cues while I work. It supports my effectiveness in [X way]. If I seem distracted, I'm often tracking multiple streams.` Use this with managers and close colleagues. Offer to demonstrate the value: point out something you noticed that others missed.",
        },
      ],
    },

    moderate: {
      overview: `You maintain a balanced awareness of your environment. You notice important changes — when someone enters the room, when a conversation shifts tone, when the context demands your attention — but you can filter most background noise when you need to focus. Your attentional system doesn't lock you into a bubble, nor does it keep you constantly scanning. You operate in the middle range: aware enough to stay contextually attuned, focused enough to sustain productive work.

This is the most common ambient focus profile. Your brain has functional filters that let you prioritise task-relevant information while still sampling the environment for significant signals. You're unlikely to be completely blindsided by developments that were building in your periphery, but you may occasionally miss subtle cues that high ambient-focus people catch earlier. The trade-off is that you're less vulnerable to sensory overload and environmental distraction than those with exceptional peripheral awareness.

The practical effect is adaptability. You can work effectively in a range of environments — from quiet focus spaces to moderately busy offices — without the extremes of either hyperawareness or tunnel vision. Your growth opportunity is recognising when your balanced awareness might miss something important, and building light-touch check-in habits for high-stakes contexts.`,

      strengths: [
        {
          title: "Balanced Environmental Awareness",
          description: "You notice significant environmental changes without being overwhelmed by ambient input. Your filters work well enough to protect focus while keeping you contextually attuned.",
          deepDive: `Your attentional system strikes a functional balance between focal and peripheral processing. When you're engaged in a task, you maintain enough environmental sampling to catch important signals — a colleague approaching with urgency, a meeting starting, a shift in room dynamics — without the constant broad monitoring that characterises high ambient focus. This means you get the benefits of situational awareness without the cognitive cost of processing everything. Research suggests this balanced profile is associated with good performance across a wide range of work contexts.`,
        },
        {
          title: "Adaptive Filtering",
          description: "You can adjust how much environmental input you let in based on context. In collaborative settings, you open up; in focus work, you narrow appropriately.",
        },
        {
          title: "Reduced Overload Vulnerability",
          description: "You're less likely than high ambient-focus people to experience sensory overload in busy environments. Your natural filtering protects your cognitive resources.",
        },
      ],

      growthEdges: [
        {
          title: "Subtle Cue Blind Spots",
          teaser: "You may miss subtle environmental and social cues that build gradually. Changes that don't announce themselves can surprise you.",
          fullExplanation: `Your balanced awareness means you filter more aggressively than high ambient-focus people. Most of the time, this is efficient — you avoid processing irrelevant stimuli. But the trade-off is that subtle, gradual changes can slip past your filters. A colleague's mood shifting over several days, a project risk building quietly, a relationship dynamic changing incrementally — these may not register until they've reached a threshold that forces your attention.\n\nThe intervention is periodic deliberate scanning. In high-stakes contexts — key relationships, critical projects, team dynamics — build in 5-minute reflection blocks: "What might I be missing? What's changed that I haven't fully registered?" This doesn't require constant monitoring; it's a structured check-in that compensates for your natural filtering.`,
          premiumHook: "Get the periodic scanning protocol for catching subtle cues before they become problems.",
        },
        {
          title: "The Gradual Change Blindness",
          teaser: "You're occasionally surprised by developments that were building in your periphery. Your filters work well for obvious changes but can miss slow-building shifts.",
          fullExplanation: `Your attentional system is tuned to notice discrete changes — someone entering, a tone shift, an immediate event. Gradual changes — morale declining over weeks, a process slowly breaking down, a relationship cooling incrementally — don't trigger the same salience. Your brain treats them as background rather than signal until they cross a threshold.\n\nThe fix is temporal awareness. When something eventually surprises you, ask: "When did this actually start?" Often you'll find it was building for a while. Build the habit of occasionally asking that question proactively: "What's been changing slowly that I might not have fully registered?" A monthly or weekly reflection on gradual shifts can catch issues before they become surprises.`,
          premiumHook: "Learn the gradual change audit that surfaces slow-building developments before they surprise you.",
        },
      ],

      workplaceImplications: `Your balanced ambient focus serves you well across most professional contexts. You're neither overwhelmed by environmental input nor oblivious to it. In collaborative work, you'll generally notice what matters. In focus work, you can filter effectively. The growth opportunity is in high-stakes situations where subtle cues matter: leadership transitions, sensitive negotiations, team conflict. In those contexts, add deliberate scanning rather than relying solely on your natural awareness.`,

      relationshipImplications: `In relationships, your balanced awareness means you're generally present and attuned without the intensity of hyperawareness. You notice when something is clearly off and you're not lost in a bubble. The growth edge is in catching subtle shifts earlier — a partner's gradual withdrawal, a dynamic changing slowly. Periodic check-ins ("How are we doing? Is there anything I might be missing?") can compensate for your natural filtering and deepen connection.`,

      cognitivePattern: `Your thinking integrates environmental context when it's relevant but doesn't require constant ambient input. You can focus when needed and broaden when useful. This flexibility is a strength — you're not locked into either extreme. Your mind naturally prioritises what seems important, which usually works well but can occasionally filter out signals that would have been valuable in retrospect.`,

      stressTriggers: [
        "Situations where subtle cues matter but don't announce themselves",
        "Contexts that require constant environmental monitoring without breaks",
        "Being blamed for missing something that was building gradually in plain sight",
      ],
      flowTriggers: [
        "Environments with moderate, manageable ambient input",
        "Tasks that allow natural oscillation between focus and environmental awareness",
        "Contexts where your balanced filtering supports both productivity and situational awareness",
      ],

      toolkit: [
        {
          title: "The Periodic Scan",
          context: "Your natural filtering can miss gradual changes. Structured check-ins compensate.",
          action: "Once per week, set a 5-minute block to ask: `What might be changing that I haven't fully registered?` Consider key relationships, projects, and team dynamics. Write down one or two possibilities. Follow up on anything that feels worth investigating. This habit catches slow-building developments before they become surprises.",
        },
        {
          title: "The High-Stakes Prep",
          context: "In critical situations, your default awareness may not be enough.",
          action: "Before important meetings, negotiations, or difficult conversations, do a 2-minute environmental and social scan. Who's in the room? What's the mood? What might be under the surface? Setting this intention primes your awareness for that context. You don't need to maintain this level constantly — just for the high-stakes moments.",
        },
        {
          title: "The Surprise Post-Mortem",
          context: "When something surprises you, there's often a pattern to what you missed.",
          action: "When you're blindsided by a development, ask: `When did this actually start? What were the early signals?` Write down your answers. Over time, you'll identify your personal blind spots — the types of gradual changes you tend to miss. Use that knowledge to build targeted scanning for those categories.",
        },
      ],
    },

    low: {
      overview: `You work in a bubble. When you're focused on a task, your attentional system narrows sharply and your environmental awareness drops. You may not notice someone entering the room, a conversation happening nearby, or subtle shifts in mood or dynamics until they become impossible to ignore. This isn't a character flaw — it's how your cognitive architecture allocates attention. Your brain commits resources to the focal task and suppresses peripheral input aggressively.

This profile has significant strengths. Your immunity to environmental distractions means you can sustain focus in conditions that would fragment others' attention. Open offices, background conversation, visual movement — these affect you less because your attentional filters are strong. When you need to concentrate, you can. The cost is that you may miss social cues, team dynamics, and environmental changes that would benefit from your awareness. You can seem oblivious when you're actually just focused.

The practical strategy is to leverage your strength — deep, distraction-resistant focus — while building light-touch habits that compensate for your environmental blind spots. You don't need to become hyperaware; you need periodic, deliberate check-ins in contexts where awareness matters.`,

      strengths: [
        {
          title: "Immunity to Environmental Distraction",
          description: "Background noise, visual movement, and ambient activity barely register when you're focused. You can work effectively in conditions that fragment others' attention.",
          deepDive: `Your strong attentional gating means that once you've committed to a task, your brain actively suppresses competing environmental input. This is the inverse of high ambient focus: where they maintain broad awareness, you narrow sharply. The neural result is similar to high deep focus — sustained activation in task-relevant regions and strong suppression of irrelevant stimuli. In environments that others find distracting — open offices, busy cafes, shared workspaces — you can achieve the concentration that eludes them. This is a genuine advantage for focus-dependent work.`,
        },
        {
          title: "Sustained Focus in Noisy Contexts",
          description: "You can maintain concentration in environments that would derail people with higher ambient awareness. Your bubble protects your cognitive resources.",
          deepDive: `People with high ambient focus often struggle in busy environments because their awareness keeps pulling in input. You have the opposite experience: the busier the environment, the more your system seems to narrow and protect your focus. This makes you well-suited to focus-intensive work in non-ideal conditions. You can write in a coffee shop, code in an open office, or analyse data while others are talking nearby. Your attentional architecture is built for this.`,
        },
        {
          title: "Efficient Resource Allocation",
          description: "Your brain doesn't spend cognitive resources on environmental monitoring. More of your attention is available for the task at hand.",
        },
        {
          title: "Reduced Social Overwhelm",
          description: "You're less likely to be drained by the constant social and environmental processing that affects high ambient-focus people in collaborative settings.",
        },
      ],

      growthEdges: [
        {
          title: "Missing Social and Team Cues",
          teaser: "Your environmental blind spots extend to social dynamics. You may miss when a colleague is struggling, when a meeting has gone off track, or when your input is needed.",
          fullExplanation: `Your strong focal attention means you filter out a lot of social information when you're working. A colleague's frustrated tone, a meeting that's lost the room, a dynamic shift that others have noticed — these can pass beneath your awareness until someone explicitly draws your attention. The cost is that you may seem disconnected or unresponsive in collaborative contexts. People may feel you're not present even when you're in the same room.\n\nThe intervention isn't to become hyperaware — that would undermine your focus strength. It's to build structured check-in points. In meetings, pause every 15-20 minutes and consciously scan: How is everyone? Is the dynamic working? Do I need to adjust? In one-on-ones, make a habit of explicitly asking how the other person is. Your natural style won't pick this up; you need to create moments where you deliberately broaden.`,
          premiumHook: "Get the structured check-in protocol that compensates for low ambient awareness without sacrificing focus.",
        },
        {
          title: "The Oblivious Perception",
          teaser: "Others may perceive you as oblivious or disengaged when you're actually just focused. Your strength can read as a social liability.",
          fullExplanation: `When you don't notice that someone has been trying to get your attention, or when you miss a cue that a conversation has shifted, people may interpret this as lack of care or engagement. The reality is that your attentional system simply didn't process the signal — but the impact on others is the same. They feel unseen or ignored.\n\nThe fix is twofold. First, communicate your working style: "When I'm focused, I go into a bubble. I'm not ignoring you — I literally don't register. If it's important, please get my attention directly." Second, build exit points. Set a timer or use a visual cue that prompts you to surface periodically. A quick scan of the room, a check of messages, a moment to see if anyone needs you — these don't require changing your fundamental style, just adding structure that compensates for your natural narrow focus.`,
          premiumHook: "Learn how to communicate your focus style and build exit points that prevent the oblivious perception.",
        },
      ],

      workplaceImplications: `Your low ambient focus is a strength in roles that reward sustained concentration and immunity to distraction. You'll excel in individual contributor work, deep analysis, and any context where environmental awareness is secondary to output quality. You may struggle in roles that require constant attunement to team dynamics, client reactions, or situational shifts — leadership, sales, facilitation — unless you build deliberate check-in habits.\n\nThe career strategy is to lean into focus-intensive work while adding structure for awareness in collaborative contexts. You don't need to change who you are; you need to create moments where you deliberately broaden. Schedule brief check-ins, use timers to surface from deep work, and communicate your style so others know how to reach you.`,

      relationshipImplications: `In close relationships, your focus bubble can feel like absence. When you're absorbed in work or a project, you may not notice your partner's mood, their attempts to connect, or cues that they need attention. This isn't indifference — it's that your attentional system doesn't allocate resources there when you're focused. The fix is explicit connection rituals. Rather than assuming you'll notice, create scheduled moments of full presence: "When we have dinner, I'm putting my phone away and I'm fully here." Your partner gets guaranteed attention; you get to focus without guilt the rest of the time.`,

      cognitivePattern: `Your cognitive life is characterised by depth and narrowness. When you engage with something, you engage fully — and your environment recedes. Your mind doesn't naturally hold ambient information alongside focal content. This makes you an excellent focuser and a sometimes oblivious collaborator. Your thinking is thorough and concentrated rather than broadly attuned. The trade-off is clear: you gain focus capacity and lose environmental awareness. Both can be managed with the right habits.`,

      stressTriggers: [
        "Roles or situations that require constant environmental and social awareness",
        "Being perceived as oblivious or uncaring when you're actually focused",
        "Missing important cues that lead to avoidable problems or relationship strain",
      ],
      flowTriggers: [
        "Environments where you can focus without needing to monitor the room",
        "Tasks that reward sustained concentration over situational awareness",
        "Contexts that value your immunity to distraction and depth of focus",
      ],

      toolkit: [
        {
          title: "The Surface Timer",
          context: "Your natural style keeps you in a bubble. You need external prompts to surface.",
          action: "Set a timer for 45-60 minutes during focus work. When it rings, take 2 minutes to consciously scan: Check messages. Look around. Is anyone trying to get your attention? Do you need to adjust to anything? Then return to focus. This doesn't fragment your concentration — it creates deliberate exit points that prevent the oblivious perception.",
        },
        {
          title: "The Explicit Check-In",
          context: "You won't naturally pick up on how others are doing. Make it explicit.",
          action: "In one-on-ones and key conversations, add a direct question: `How are you doing? Is there anything I should know that I might not have picked up?` Your natural style won't surface this information; you need to ask. People appreciate the intention even when the awareness doesn't come naturally.",
        },
        {
          title: "The Style Communication",
          context: "Others misinterpret your focus as disengagement. A brief explanation prevents that.",
          action: "Tell key people: `When I'm focused, I go into a bubble — I don't notice much around me. It's not that I don't care. If you need me, please get my attention directly.` This sets accurate expectations and gives them a way to reach you that works with your cognitive style.",
        },
      ],
    },
  },
};
