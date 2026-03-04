import type { FocusDimensionContent } from "../types";

export const DEEP_FOCUS: FocusDimensionContent = {
  id: "deep-focus",
  label: "Deep Focus",
  shortLabel: "Deep Focus",
  color: "#315E36",

  levels: {
    high: {
      overview: `You possess a rare ability to lock onto a single task and sustain intense concentration for extended periods. While the modern world is engineered to fragment attention — notifications, open offices, context-switching cultures — your mind naturally resists these interruptions. When you engage with meaningful work, you can enter a state of sustained absorption that most people only experience briefly.

This isn't just willpower. Your cognitive architecture genuinely favours depth over breadth. Your prefrontal cortex maintains task-relevant activation longer than average, and your attentional filters are strong enough to suppress irrelevant stimuli without conscious effort. The result is that you can think deeply about complex problems, hold multi-layered ideas in working memory, and produce work that reflects genuine contemplation rather than surface-level engagement.

The practical effect is visible in the quality of your output. When you have the conditions for deep work — uninterrupted time, clear objectives, minimal context-switching — you consistently produce your best results. The challenge is that modern work environments rarely provide these conditions by default, which means you need to engineer them deliberately.`,

      strengths: [
        {
          title: "Sustained Concentration",
          description: "You can maintain intense focus on a single task for 90+ minutes without significant cognitive degradation, placing you in the top tier of attentional endurance.",
          deepDive: `Most adults can sustain genuine deep focus for about 20-25 minutes before their attention drifts. You operate well beyond this baseline. Your ability to hold a complex task in active working memory for extended periods means you can tackle problems that require sustained reasoning — writing, coding, analysis, design — at a level that fragmented attention simply cannot match. Research on deliberate practice shows that the quality of focused time matters more than total hours. Your capacity for high-quality focused time is a genuine competitive advantage.`,
        },
        {
          title: "Distraction Resistance",
          description: "Your attentional filters suppress irrelevant stimuli effectively. Background noise, visual distractions, and ambient interruptions that derail most people barely register when you're engaged.",
          deepDive: `Your strong attentional gating means that once you've committed cognitive resources to a task, your brain actively suppresses competing signals. This isn't the same as ignoring distractions — it's that your neural processing genuinely deprioritises them. Brain imaging studies show that people with strong deep focus exhibit higher sustained activity in the dorsolateral prefrontal cortex and reduced response in the default mode network during focused work. You're wired for depth.`,
        },
        {
          title: "Complex Problem Navigation",
          description: "Extended focus lets you hold more variables in working memory simultaneously, which means you can navigate problems with multiple interdependencies that overwhelm fragmented thinkers.",
        },
        {
          title: "Quality Over Quantity",
          description: "Your work reflects genuine depth of thought. You naturally produce fewer, higher-quality outputs rather than a high volume of shallow work.",
        },
      ],

      growthEdges: [
        {
          title: "The Tunnel Vision Trap",
          teaser: "Your deep focus can become so absorbing that you miss important signals from your environment — a colleague's urgent message, a shifting priority, or your own body's need for a break.",
          fullExplanation: `The same attentional filters that make your deep focus powerful can also make you dangerously unaware of contextual changes. When you're locked in, you may miss time-sensitive communications, fail to notice that a meeting has started, or push through fatigue signals that degrade your work quality without your awareness.\n\nThis isn't an attention problem — it's an attention allocation problem. Your system is so good at concentrating resources on the current task that it underinvests in peripheral monitoring. The fix isn't to weaken your focus but to build structured checkpoints: set a timer for 45-60 minutes, surface briefly to scan for critical signals, then re-engage. This preserves the depth while preventing the isolation.\n\nThe deeper risk is strategic tunnel vision. You can become so absorbed in the task at hand that you lose sight of whether the task itself is still the right priority. Periodic zooming out — not just from the screen, but from the strategic context — prevents deep work on the wrong thing.`,
          premiumHook: "Get the structured checkpoint protocol that preserves your deep focus while preventing tunnel vision.",
        },
        {
          title: "Transition Difficulty",
          teaser: "Coming out of deep focus is genuinely difficult for you. The cognitive switch-cost when you're pulled from deep work is higher than average, which can make you irritable or disoriented.",
          fullExplanation: `When you're deeply engaged and get interrupted, the subjective experience is almost physical — a jarring disconnect that leaves you feeling disoriented and often frustrated. This isn't overreaction. Your brain has committed significant working memory resources to the current task, and forcing a context switch means dumping that carefully constructed mental model.\n\nThe neurological term is "attention residue" — fragments of the previous task continue to occupy working memory even after you've switched, reducing your effectiveness on the new task and making you want to return to the old one. For strong deep focusers, this residue is particularly sticky.\n\nThe practical intervention is transition rituals. Before you begin deep work, note your stopping point. When interrupted, spend 30 seconds writing down where you are and what the next step would be. This "saves your state" externally so your working memory can release it more cleanly.`,
          premiumHook: "Learn the transition ritual that minimises cognitive switch-cost when leaving deep work.",
        },
      ],

      workplaceImplications: `Your deep focus is a significant professional asset — but only in environments that allow it. In roles that reward extended concentration (software engineering, research, writing, strategic analysis, design), you will consistently outperform peers who lack your attentional endurance. In roles that demand constant context-switching (reactive management, open-plan collaboration, customer service), your strength becomes a liability because the environment never lets you reach the depth where your advantage lives.\n\nThe career strategy is clear: seek roles and work environments that protect extended blocks of uninterrupted time. Negotiate for focus-friendly schedules, batch your meetings, and communicate your working style to colleagues. The organisations that perform best already understand this — they protect deep work as a strategic resource rather than expecting everyone to be perpetually available.`,

      relationshipImplications: `In close relationships, your deep focus can feel like absence. When you're absorbed in work or a personal project, you're genuinely not present — your attention is allocated elsewhere, and your partner or family may experience this as emotional unavailability. The key distinction to communicate is that your absence is attentional, not emotional. You're not withdrawing from the relationship; you're engaged in something that requires your full cognitive resources.\n\nThe practical fix is structured availability. Rather than vaguely being "around" while mentally elsewhere, create clear boundaries: "I'm going to focus for the next two hours, then I'm fully yours." This is better for both parties — you get genuine focus time, and your partner gets genuine presence rather than a half-attentive compromise that satisfies neither.`,

      cognitivePattern: `Your cognitive life is characterised by depth. You think in long arcs rather than quick cycles, prefer to understand something thoroughly before moving on, and find superficial engagement genuinely unsatisfying. This makes you an excellent thinker but sometimes a frustrating conversationalist — you want to go deep when others are content to stay at the surface. Your mind is most alive when it has something complex and meaningful to chew on, and most restless when forced to skim.`,

      stressTriggers: [
        "Constant interruptions that prevent you from reaching cognitive depth",
        "Open-plan offices or environments with persistent ambient distraction",
        "Roles that require rapid context-switching between unrelated tasks",
      ],
      flowTriggers: [
        "Extended blocks of uninterrupted time with a clear, challenging objective",
        "Quiet environments with minimal sensory disruption",
        "Complex problems that require sustained reasoning and multi-step solutions",
      ],

      toolkit: [
        {
          title: "The Focus Block Protocol",
          context: "Your deep focus needs protected time to reach its full depth. Without structure, the environment will fragment it.",
          action: "Schedule 2-3 daily focus blocks of 90 minutes each. During these blocks: close email, silence notifications, use a physical 'do not disturb' signal. Start each block by writing one sentence describing the specific outcome you'll produce. End each block with a 10-minute break before the next task.",
        },
        {
          title: "The State-Save Interrupt Handler",
          context: "Interruptions are inevitable. The damage comes from losing your mental model, not from the interruption itself.",
          action: "Keep a notepad beside you during deep work. When interrupted, spend 15 seconds writing your current thought and next step before looking up. This externalises your working memory so you can return to depth quickly. Track how long it takes to re-engage — with this practice, you should drop from 15-20 minutes to under 5.",
        },
        {
          title: "The Depth Ramp",
          context: "You don't jump to peak depth instantly. Respecting the ramp-up time prevents frustration.",
          action: "Begin each focus session with 5 minutes of low-stakes engagement with the material — re-read your last few paragraphs, review the last commit, scan your notes. This primes your working memory and lets depth build naturally rather than forcing it. Resist the urge to check messages during the ramp-up; this is where most focus sessions fail.",
        },
      ],
    },

    moderate: {
      overview: `You can sustain focused attention when conditions are right, but your concentration is more environment-dependent than you might realise. In a quiet room with a clear task and no competing demands, you can achieve genuine depth. In a busy office with slack notifications and ambient conversation, your focus fragments more quickly than you'd like.

This isn't a deficit — it's actually the most common attention profile. Your brain has a functional deep focus capacity that serves you well in most professional contexts. The gap between your current depth and peak depth is largely about environment management and habit rather than cognitive architecture. With the right conditions and techniques, you can significantly extend your focused work periods.

The key insight is that your focus isn't a fixed trait — it's a state that depends on conditions you can control. Your moderate score means you have the neural hardware for deeper focus; what you need is the environmental software to support it.`,

      strengths: [
        {
          title: "Adaptive Concentration",
          description: "You can adjust your focus depth to match the task — going deeper for complex work and staying lighter for collaborative or administrative tasks. This flexibility is more practically useful than always being locked in deep.",
          deepDive: `People with extremely high deep focus sometimes struggle in environments that require shifting between focus depths. Your moderate profile gives you genuine flexibility: you can go deep when it matters and stay light when the situation demands it. This adaptability means you function well across a wider range of work environments and team structures than someone whose cognitive system is optimised purely for depth.`,
        },
        {
          title: "Environmental Responsiveness",
          description: "You're attuned to your environment in ways that pure deep focusers miss. You notice when the mood in a room shifts, when a conversation needs your input, or when a notification might actually be important.",
        },
        {
          title: "Sustainable Work Rhythms",
          description: "You naturally take breaks and shift attention before hitting cognitive depletion, which means you can maintain consistent output over a full workday rather than burning bright then crashing.",
        },
      ],

      growthEdges: [
        {
          title: "The Depth Ceiling",
          teaser: "You hit a concentration ceiling after 25-35 minutes where your attention starts to wander. This limits your ability to tackle problems that require sustained extended reasoning.",
          fullExplanation: `Your focus follows a predictable curve: strong engagement for the first 20-25 minutes, gradual drift between 25-35 minutes, and active distraction-seeking after 40 minutes without a break. This pattern matches the average adult attention cycle, but it limits your access to the deepest problem-solving states that only emerge after 45-60 minutes of sustained concentration.\n\nThe training approach is progressive overload — the same principle used in physical fitness. Start with your natural 25-minute ceiling and add 5 minutes per week. Use a timer so you know when you're in the extension zone, and commit to staying with the task even when your mind starts reaching for distractions. After 6-8 weeks, most people extend their natural focus window by 50-80%. The key is that each session past your ceiling strengthens the neural circuits that maintain attention.`,
          premiumHook: "Get the 8-week progressive focus training protocol with daily targets and tracking.",
        },
        {
          title: "Distraction Vulnerability",
          teaser: "You're susceptible to what researchers call 'voluntary attention shifts' — you don't just get distracted by interruptions, you actively seek them when focus gets uncomfortable.",
          fullExplanation: `There's an important distinction between involuntary distraction (someone taps your shoulder) and voluntary distraction (you reach for your phone). Your moderate deep focus profile means you're reasonably good at handling involuntary distractions, but you're vulnerable to the voluntary kind. When focus becomes effortful — when the work gets hard, boring, or ambiguous — your brain generates an urge to check something: email, news, messages, social media.\n\nThis urge isn't weakness. It's your brain's reward system offering an easy dopamine hit to relieve the discomfort of sustained effort. The intervention is to make the urge visible: keep a tally of how many times you feel the pull to check something during a focus session. Don't suppress the urge — just notice and count it. Awareness of the pattern is the first step to changing it.`,
          premiumHook: "Learn the urge-surfing technique that converts distraction impulses into focus fuel.",
        },
      ],

      workplaceImplications: `Your moderate deep focus works well in most professional settings. You can handle the mix of focused work and collaboration that modern roles require. The growth opportunity is strategic: identify the 2-3 highest-value tasks in your role that would benefit most from deeper focus, and engineer the conditions for those specific tasks. You don't need to be in deep focus all day — you need to be in deep focus for the right hours.`,

      relationshipImplications: `Your balanced focus profile means you're generally present in conversations and relationships without the "absent when absorbed" pattern that high deep focusers experience. Where you can grow is in the quality of presence: when you're with someone, are you fully there or is part of your mind on a work problem? Practicing deliberate presence — putting the phone away, making eye contact, actively listening — leverages your natural adaptability to deepen your connections.`,

      cognitivePattern: `Your thinking naturally oscillates between focused and diffuse modes. You can concentrate when needed but your mind also wanders productively, making unexpected connections between ideas. This oscillation is actually how creative problem-solving works — the focused mode works the problem and the diffuse mode finds novel angles. Your cognitive style is well-suited to work that requires both analytical depth and creative breadth.`,

      stressTriggers: [
        "Long unstructured periods requiring self-directed focus without clear goals",
        "Environments with unpredictable interruptions that prevent settling into any rhythm",
        "Tasks that demand extended deep thinking without natural break points",
      ],
      flowTriggers: [
        "Clear goals with immediate feedback on progress",
        "Tasks that are challenging but achievable — the sweet spot between boredom and anxiety",
        "Time-boxed work sessions with defined end points",
      ],

      toolkit: [
        {
          title: "The Pomodoro Progression",
          context: "Your natural focus window is about 25 minutes. Use this as a starting point and progressively extend.",
          action: "Start with 25-minute focus blocks with 5-minute breaks (classic Pomodoro). Each week, add 5 minutes to the focus block while keeping the break at 5 minutes. Track your actual focus quality during each session on a 1-5 scale. When quality drops below 3 consistently at a given duration, hold at that level for another week before extending.",
        },
        {
          title: "The Distraction Tally",
          context: "You reach for distractions voluntarily when focus gets uncomfortable. Making this visible is the first step to changing it.",
          action: "During your next focus block, keep a tally mark every time you feel the urge to check your phone, email, or any non-task content. Don't suppress the urge — just mark it and return to work. After the session, review your tally. Most people are shocked by the number. The awareness alone reduces voluntary distraction by 30-40% within a week.",
        },
        {
          title: "The Environment Audit",
          context: "Your focus is more environment-dependent than you realise. Optimising your workspace has outsized impact.",
          action: "For one week, rate your focus quality (1-5) at the end of each work session and note your environment: noise level, visual clutter, device proximity, time of day. After 7 days, identify the pattern. Most people find 2-3 environmental variables that account for most of their focus variation. Fix those and your baseline jumps significantly.",
        },
      ],
    },

    low: {
      overview: `Sustained concentration on a single task is genuinely difficult for you. Your mind reaches for variety, stimulation, or novelty relatively quickly, and maintaining focus on one thing for extended periods requires significant effort that feels unnatural. This isn't laziness or lack of discipline — it's how your attentional system is wired. Your brain has a faster refresh cycle and a lower threshold for seeking new input.

This profile has real costs in environments that demand extended deep work — writing long documents, debugging complex code, conducting detailed analysis. But it also has underappreciated advantages. Your attentional system is built for responsiveness, which means you notice changes in your environment quickly, you adapt to new situations faster, and you're less likely to get stuck in unproductive rumination on a single problem.

The modern work world wasn't designed for people who need sustained deep focus — it was designed for people like you, with its constant stream of messages, meetings, and micro-tasks. The challenge is that the highest-value work in most fields still requires some capacity for depth, and building that capacity, even incrementally, will significantly expand what you can accomplish.`,

      strengths: [
        {
          title: "Rapid Environmental Scanning",
          description: "Your attention moves quickly across your environment, which means you pick up on signals — a colleague's tone shift, an anomaly in a dataset, a change in room dynamics — that deeply focused people miss entirely.",
          deepDive: `Your fast attentional refresh rate means your brain is constantly sampling the environment for new information. While this makes sustained concentration difficult, it makes you exceptionally good at roles that require monitoring multiple streams: air traffic control, trading floors, emergency rooms, event management. In any context where noticing the new thing matters more than staying with the current thing, your attentional profile is an asset.`,
        },
        {
          title: "Energetic Engagement",
          description: "You bring enthusiasm and energy to new tasks. Your initial engagement with a problem is often intense, even if it fades faster than you'd like.",
        },
        {
          title: "Resistance to Rumination",
          description: "You're unlikely to get stuck in unproductive loops of overthinking. Your mind moves on from problems naturally, which protects you from the analysis paralysis that high deep-focus people often experience.",
        },
      ],

      growthEdges: [
        {
          title: "The Shallow Work Trap",
          teaser: "Without deep focus capacity, you default to reactive, low-value tasks that feel productive but don't move the needle. Responding to emails feels like work, but it rarely produces your most important output.",
          fullExplanation: `There's a fundamental distinction between busyness and productivity. Without the ability to sustain deep focus, your workday gravitates toward tasks that provide quick completion rewards: answering messages, attending meetings, doing small administrative tasks. These feel productive because they generate visible output. But the work that actually advances your career and creates lasting value — strategic thinking, creative projects, skill development — requires the kind of sustained attention that doesn't come naturally to you.\n\nThe intervention isn't to force yourself into 3-hour focus sessions. It's to identify the single highest-value task each day and commit to working on it first, for a duration you can actually sustain (even 15 minutes counts). Protecting even a small amount of focused time for deep work — before the reactive tasks flood in — changes the trajectory of your output over weeks and months.`,
          premiumHook: "Get the daily deep work protocol designed specifically for people who struggle with sustained focus.",
        },
        {
          title: "The Finishing Problem",
          teaser: "You start more projects than you finish. The initial phase of anything is stimulating, but as novelty fades and the work becomes repetitive, your engagement drops sharply.",
          fullExplanation: `New projects activate your reward system powerfully: there's novelty, possibility, creative excitement. But every project eventually hits a phase where progress requires grinding through less stimulating work — editing, debugging, refining, implementing. This is where your engagement predictably drops.\n\nThe pattern isn't about commitment or discipline. It's about reward dynamics. Your brain needs more frequent reward signals to maintain engagement. The solution is to restructure how you approach the grind phase: break it into smaller milestones with clear completion markers. Instead of "finish the report," set targets like "write the introduction," "complete the data section," "draft the conclusion." Each completed milestone provides the completion reward your brain needs to keep going.`,
          premiumHook: "Learn the milestone-mapping system that turns long projects into a series of completable sprints.",
        },
      ],

      workplaceImplications: `Your attentional profile means you thrive in roles with variety, rapid response requirements, and frequent novelty. Avoid roles that are primarily deep-work dependent unless you're willing to invest in building that capacity. In your current role, the highest-leverage change is protecting even 30 minutes per day for focused work on your most important task. Do this first thing in the morning before reactive demands take over. This small change will visibly improve your output quality.`,

      relationshipImplications: `In relationships, your scattered attention can actually be a social strength — you're responsive, present in conversations, and quick to notice when something is off. Where it becomes a challenge is in sustained attention during difficult conversations. When a partner needs you to stay with a hard topic for 20 minutes without changing the subject or reaching for your phone, your attentional system resists. Practicing staying with discomfort — even briefly — shows the people who matter that you're willing to invest attention where it counts.`,

      cognitivePattern: `Your mind is a scanner, not a drill. It moves quickly across topics, picks up surface-level patterns efficiently, and excels at synthesis across multiple information streams. Where it struggles is depth: holding one complex idea long enough to fully develop it. Your thinking style favours breadth, novelty, and connection-making over deep analysis of a single thread. This is a genuine cognitive strength in the right context — and a real limitation in contexts that demand sustained depth.`,

      stressTriggers: [
        "Being required to maintain focus on a single monotonous task for extended periods",
        "Environments that restrict movement, breaks, or task-switching",
        "Projects with distant deadlines and no intermediate milestones",
      ],
      flowTriggers: [
        "Highly stimulating tasks with immediate feedback and visible progress",
        "Novel problems that haven't been encountered before",
        "Short, intense sprints with clear objectives and time pressure",
      ],

      toolkit: [
        {
          title: "The Micro-Focus Sprint",
          context: "You don't need to focus for hours. You need to focus for minutes — reliably and strategically.",
          action: "Set a timer for 10 minutes. Work on your single most important task. When the timer rings, you're done — take a 3-minute break. Do this 3-4 times per day. As 10 minutes becomes comfortable, extend to 12, then 15. The goal isn't marathon focus sessions — it's reliable, strategic bursts on high-value work.",
        },
        {
          title: "The First-Task Shield",
          context: "Your focus is strongest in the morning before reactive demands deplete it.",
          action: "Before checking email, messages, or any communication, spend your first 20 minutes on your most important task. Physically write the task on a sticky note and place it where you'll see it first. This single habit — deep work before shallow work — produces disproportionate results for people with your focus profile.",
        },
        {
          title: "The Novelty Injection",
          context: "Your brain craves novelty. Use this to your advantage rather than fighting it.",
          action: "When you notice focus fading on a task, change one thing about how you're doing it: switch to a different room, use paper instead of screen, explain the problem out loud to yourself, or approach it from a completely different angle. The novelty of the new approach often buys another 10-15 minutes of engagement without losing the thread.",
        },
      ],
    },
  },
};
