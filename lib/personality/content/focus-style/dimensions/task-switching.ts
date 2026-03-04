import type { FocusDimensionContent } from "../types";

export const TASK_SWITCHING: FocusDimensionContent = {
  id: "task-switching",
  label: "Task Switching",
  shortLabel: "Task Switching",
  color: "#C97A30",

  levels: {
    high: {
      overview: `You possess exceptional cognitive flexibility. Your brain shifts between tasks with minimal switch-cost — the cognitive penalty most people pay when changing context. Where others lose 15-25 minutes of productive capacity each time they're pulled from one task to another, you can reorient quickly and maintain performance across multiple streams of work. This isn't a superficial ability to juggle; it's a genuine neural efficiency in updating task sets and releasing irrelevant information from working memory.

Research on task-switching identifies two core components: goal shifting (changing what you're trying to accomplish) and rule activation (loading the new task's mental framework). Your system excels at both. You can drop one context and pick up another without the residual activation that slows most people down. This makes you unusually effective in dynamic environments — roles with frequent interruptions, collaborative work requiring rapid pivots, or situations where priorities shift unpredictably.

The trade-off is real. Your cognitive architecture is optimised for breadth and responsiveness rather than sustained depth. You thrive when variety and adaptability matter more than prolonged immersion in a single problem. Understanding this trade-off — and when to resist your natural tendency to switch — is the key to leveraging your strength without fragmenting your attention across too many half-finished threads.`,

      strengths: [
        {
          title: "Minimal Switch-Cost",
          description: "You incur far less cognitive penalty when changing tasks than most people. Your brain updates task sets efficiently, which means you can handle frequent context shifts without the performance drop others experience.",
          deepDive: `Task-switching research consistently shows that humans pay a measurable cost when shifting attention between unrelated tasks — typically 200-500 milliseconds per switch at minimum, and often 15-20 minutes to fully re-engage with complex work. Your profile suggests you operate at the low end of this range. Your working memory appears to release previous task context more cleanly, and your attentional system loads new task-relevant information more quickly. This isn't just speed; it's a genuine cognitive advantage in any role where responsiveness and adaptability matter more than sustained single-task focus.`,
        },
        {
          title: "Cognitive Flexibility",
          description: "You can hold multiple mental frameworks simultaneously and shift between them without confusion. This flexibility makes you effective in roles that require synthesising information from disparate domains.",
          deepDive: `Cognitive flexibility — the ability to adapt thinking in response to changing demands — correlates with creativity, problem-solving under uncertainty, and leadership in complex environments. Your high task-switching capacity suggests strong executive function in the domain of mental set-shifting. You're less likely to get stuck in rigid approaches when a situation demands a different strategy. This makes you valuable in ambiguous roles where the right approach isn't obvious and may need to change mid-stream.`,
        },
        {
          title: "Dynamic Environment Thriving",
          description: "You perform well when priorities shift, interruptions are frequent, and the work requires constant recalibration. Chaos that derails others often energises you.",
        },
        {
          title: "Rapid Reorientation",
          description: "You can drop into a new context and become productive quickly. Meetings, ad-hoc requests, and unexpected demands don't derail your day the way they do for people with high switch-cost.",
        },
      ],

      growthEdges: [
        {
          title: "Breadth Over Depth",
          teaser: "Your ability to switch easily can become a liability when the highest-value work requires sustained immersion. You may favour variety over the deep engagement that produces breakthrough results.",
          fullExplanation: `The same cognitive flexibility that makes you effective in dynamic environments can prevent you from reaching the depth where the most valuable work happens. Complex problems — strategic thinking, creative breakthroughs, technical mastery — often require 45-90 minutes of uninterrupted engagement before the best insights emerge. Your brain, optimised for switching, may generate an urge to shift before you reach that threshold.\n\nThe pattern is subtle: you're not avoiding hard work, you're following your natural preference for variety. But the result is the same — a portfolio of partially completed high-value tasks rather than finished work that moves the needle. The intervention is deliberate depth blocks: schedule 2-3 sessions per week where switching is explicitly forbidden. Treat these as non-negotiable. Your flexibility is an asset; it shouldn't be the default for everything.`,
          premiumHook: "Get the depth block protocol designed for high task-switchers who need to protect time for sustained work.",
        },
        {
          title: "Fragmented Attention",
          teaser: "When you spread attention across too many tasks, you may feel productive while actually achieving less. The illusion of progress can mask shallow engagement across many fronts.",
          fullExplanation: `High task-switchers often maintain a long list of active projects, each receiving periodic attention. This feels productive — you're always moving something forward. But research on multitasking and attention residue suggests that spreading focus across many tasks reduces the quality of work on each. Your brain carries fragments of incomplete tasks in working memory, creating background cognitive load that subtly degrades performance.\n\nThe fix is ruthless prioritisation. Limit yourself to 2-3 active high-value tasks at any time. When something new demands attention, explicitly decide what gets deprioritised — don't add to the pile without subtracting. Your strength is switching efficiently between a small number of important things, not maintaining 12 half-attended projects.`,
          premiumHook: "Learn the active-task cap system that prevents fragmentation while preserving your switching advantage.",
        },
      ],

      workplaceImplications: `You're ideally suited for roles that reward adaptability: project management, operations, client-facing work, leadership in fast-moving environments, or any position where priorities shift frequently. You'll outperform colleagues who struggle with context-switching in these settings. The risk is gravitating toward reactive work — responding to whatever lands in your inbox — at the expense of proactive, high-value work that requires protected focus time.\n\nYour career strategy: seek environments that value your flexibility, but build structures that force depth on your most important projects. Negotiate for a mix of dynamic and protected time. The organisations that will get the most from you understand that your switching ability is an asset for certain work streams, but that your highest-impact output still requires blocks of uninterrupted attention.`,

      relationshipImplications: `In relationships, your cognitive flexibility can be a strength — you're responsive, adaptable, and less likely to get rigid when plans change. You can pivot from work mode to presence mode more easily than people with high switch-cost. The potential downside is that your partner may experience you as scattered or unable to stay with difficult conversations. When they need sustained attention on an emotional topic, your natural tendency to shift can feel like avoidance.\n\nThe fix is explicit commitment: when your partner says they need to talk about something important, put your phone away, make eye contact, and commit to staying with the conversation for a defined period. Your flexibility means you can do this when you choose to — the key is choosing to, rather than defaulting to your natural switching rhythm.`,

      cognitivePattern: `Your mind is built for movement. You think in quick cycles, prefer variety over repetition, and find sustained single-topic engagement less natural than shifting between ideas. You make connections across domains easily because your attention isn't locked to one frame. The trade-off is that you may struggle to go as deep on any single thread as someone with lower switching capacity — not because you lack intelligence, but because your cognitive style favours breadth. Your mind is most alive when it has multiple interesting problems to move between, and can feel restless when forced into prolonged single-task focus.`,

      stressTriggers: [
        "Being forced to stay on a single task for extended periods without variety",
        "Environments that punish or restrict natural switching behaviour",
        "Roles that demand deep, sustained focus without any dynamic elements",
      ],
      flowTriggers: [
        "Dynamic work with multiple streams and shifting priorities",
        "Environments where rapid pivots are expected and rewarded",
        "Tasks that benefit from cross-domain synthesis and flexible thinking",
      ],

      toolkit: [
        {
          title: "The Depth Block Protocol",
          context: "Your switching strength can prevent you from reaching the depth where breakthrough work happens. You need structured protection for sustained focus.",
          action: "Schedule 2-3 weekly blocks of 60-90 minutes for your highest-value project. During these blocks, close all other tabs, silence notifications, and treat switching as forbidden. Use a physical timer. Start with one block per week if 90 minutes feels impossible — the goal is building the habit of sustained engagement, not perfection.",
        },
        {
          title: "The Active-Task Cap",
          context: "Spreading attention across too many tasks creates the illusion of productivity while reducing actual output quality.",
          action: "List all projects currently receiving your attention. Cap active high-value tasks at 3. For everything else, either schedule it for a future block or explicitly deprioritise it. When something new demands attention, decide what gets dropped before adding. Review weekly.",
        },
        {
          title: "The Switch Ritual",
          context: "Even with low switch-cost, intentional transitions improve the quality of work in each context.",
          action: "Before switching tasks, spend 30 seconds writing one sentence: what you accomplished and what the next step would be. This externalises the mental state so you can release it fully. When you return, read the sentence first. This minimises residual activation and improves re-engagement speed.",
        },
      ],
    },

    moderate: {
      overview: `You can switch between tasks when needed, but you pay a noticeable cognitive cost. Each context shift requires a transition period — a few minutes to reorient, load the new task's mental framework, and release the previous one. This isn't a deficit; it's the most common attentional profile. You have functional task-switching capacity that serves you well in most professional contexts, especially when variety is planned rather than imposed.

The key distinction for you is between planned and unplanned switching. When you choose to move between tasks — finishing one thing and deliberately starting another — you can manage the transition reasonably well. When you're interrupted unexpectedly, the cost is higher. Your brain has committed resources to the current task, and the forced switch creates more disruption than it should. The gap between your performance with planned vs. unplanned switches is the main lever for improvement.

With better switching rituals and more control over when transitions happen, you can significantly reduce the cognitive tax you pay. Your moderate score means you have the capacity for both depth and flexibility; what you need is structure to optimise when each mode gets used.`,

      strengths: [
        {
          title: "Planned Variety Capacity",
          description: "When you control the timing of switches, you can work effectively across multiple tasks. You function well with structured variety — different types of work in different blocks — rather than constant reactive shifting.",
          deepDive: `The difference between planned and unplanned task-switching is neurologically significant. Planned switches allow your brain to prepare: you can complete a natural stopping point, externalise your current state, and load the new context deliberately. Unplanned switches — interruptions, urgent requests — force an abrupt transition that leaves attention residue. Your profile suggests you handle planned variety well; the growth edge is building systems that convert unplanned switches into something closer to planned ones.`,
        },
        {
          title: "Balanced Depth and Breadth",
          description: "You can sustain focus when needed and switch when appropriate. This balance makes you adaptable across a wide range of work environments without the extremes of either pure depth or pure flexibility.",
          deepDive: `Your moderate profile occupies a useful middle ground. You're not locked into single-task focus like low switchers, nor do you fragment across many tasks like high switchers. This balance means you can handle the typical mix of focused work and collaboration that most roles require. The key is that your performance depends heavily on how transitions are managed — with good rituals, you function well; without them, you pay more cost than necessary.`,
        },
        {
          title: "Transition Awareness",
          description: "You're aware when you're in a transition state, which means you can develop rituals to manage it. People with very high or very low switching capacity often lack this metacognitive awareness.",
        },
      ],

      growthEdges: [
        {
          title: "Unplanned Interruption Vulnerability",
          teaser: "Interruptions that you didn't choose cause more disruption than they should. A single unexpected request can derail your focus for longer than the interruption itself.",
          fullExplanation: `When you're engaged in a task and get interrupted — a message, a colleague's question, an urgent request — the cognitive cost extends well beyond the time spent on the interruption. Your brain carries "attention residue" from the interrupted task, which degrades your performance on the new task and creates a pull to return to the original work. For moderate task-switchers, this residue is significant but manageable with the right approach.\n\nThe intervention is the "state-save and schedule" protocol. When interrupted, spend 15 seconds writing down where you were and what the next step would be. Then explicitly schedule when you'll return to that task. This externalises the mental state and gives your brain permission to release it. The scheduled return reduces the background pull. Most people find this cuts recovery time from 15-20 minutes to under 5.`,
          premiumHook: "Get the state-save protocol that minimises the cost of unplanned interruptions.",
        },
        {
          title: "Switching Ritual Gap",
          teaser: "You don't yet have consistent rituals for transitioning between tasks. Ad-hoc switching creates unnecessary cognitive load and reduces the quality of work in both contexts.",
          fullExplanation: `Without deliberate transition rituals, every task switch is a minor cognitive scramble. You leave one context with fragments still active, arrive at the next without fully loading it, and may find yourself thinking about the previous task when you should be engaged in the new one. The cumulative cost across a day of switching is substantial.\n\nThe fix is a simple ritual: before leaving any task, write one sentence — what you accomplished and what the next step would be. Before starting any new task, read any existing notes for that task and state the specific outcome you're working toward. This 30-second bookending creates clean transitions. After 2 weeks, most people report noticeably better focus in each context and less mental clutter.`,
          premiumHook: "Learn the 30-second transition ritual that creates clean switches between tasks.",
        },
      ],

      workplaceImplications: `Your moderate task-switching profile works well in most professional settings. You can handle the mix of focused work and collaboration that modern roles require. The growth opportunity is reducing the cost of unplanned switches: batch your communication (check messages at defined times rather than constantly), use status indicators to signal when you're in focus mode, and build the state-save habit so that when interruptions happen, you recover quickly. You don't need to become a high task-switcher — you need to optimise the switches you already make.`,

      relationshipImplications: `You're generally present in relationships without the extreme patterns of either high or low task-switchers. You can shift from work to presence, though the transition may take a few minutes. Where you can improve is making that transition explicit: when you arrive home or finish work, take 2-3 minutes to consciously shift context before engaging with your partner or family. A brief ritual — changing clothes, making tea, a short walk — signals to your brain that you're switching modes. This prevents the "physically present, mentally elsewhere" state that frustrates partners.`,

      cognitivePattern: `Your thinking moves between focused and flexible modes. You can concentrate on a single task when conditions support it, and you can switch when the situation demands it — but neither comes as effortlessly as it does for people at the extremes. Your cognitive style is well-suited to work that requires both some depth and some variety. The key is managing transitions deliberately so that you're fully in one mode or the other, rather than perpetually in a muddy in-between state.`,

      stressTriggers: [
        "Frequent unplanned interruptions that prevent sustained engagement with any task",
        "Environments with no control over when or how often you switch context",
        "Back-to-back meetings or tasks with no transition time between them",
      ],
      flowTriggers: [
        "Planned work blocks with clear boundaries and minimal unexpected interruptions",
        "Tasks that allow natural completion points before switching",
        "Environments where you can batch similar work and reduce switch frequency",
      ],

      toolkit: [
        {
          title: "The State-Save Protocol",
          context: "Unplanned interruptions cause more disruption than they should because you lose your mental model of the interrupted task.",
          action: "Keep a notepad or digital capture system beside you. When interrupted, spend 15 seconds writing: current thought, next step, and when you'll return. Then engage fully with the interruption. When you return, read your notes first. Track recovery time — with this habit, it should drop significantly within a week.",
        },
        {
          title: "The Transition Ritual",
          context: "Ad-hoc switching creates cognitive clutter. A simple ritual creates clean boundaries between tasks.",
          action: "Before leaving any task: write one sentence (what you did, what's next). Before starting any new task: read existing notes, state the specific outcome. Do this for every switch for one week. Notice the difference in focus quality.",
        },
        {
          title: "The Communication Batch",
          context: "Constant message-checking creates a stream of unplanned switches. Batching converts them into planned ones.",
          action: "Set 2-3 fixed times per day to check email and messages (e.g., 10am, 2pm, 4pm). Between those times, close communication apps and work in focus mode. When urgent issues arise, colleagues learn to use other channels. This single change often reduces daily switch count by 50% or more.",
        },
      ],
    },

    low: {
      overview: `Context-switching is cognitively expensive for you. Your brain strongly prefers staying with a single task until completion. When you're forced to switch — by an interruption, a shifting priority, or the demands of a dynamic environment — you pay a high cost: disorientation, frustration, and a significant drop in performance on the new task. This isn't stubbornness or resistance to change; it's how your attentional system is wired. Your cognitive architecture favours depth and completion over flexibility.

This profile has real advantages. When you can stay with one task, you produce work of exceptional quality. Your ability to go deep, maintain continuity of thought, and follow a single thread to completion is a genuine strength. You're less likely to produce fragmented, shallow output. The challenge is that many modern work environments are designed around frequent switching — open plans, constant messaging, meeting-heavy cultures — which creates chronic friction for your cognitive style.

The strategy isn't to force yourself to become a high task-switcher. It's to engineer your environment and role so that switching is minimised, and to develop the minimal switching capacity you need for unavoidable transitions. Your strength is depth; the goal is protecting the conditions that let you use it.`,

      strengths: [
        {
          title: "Completion Focus",
          description: "You have a strong drive to finish what you start. Once engaged with a task, you prefer to see it through rather than leaving it partially done. This produces finished work rather than a portfolio of half-completed projects.",
          deepDive: `Completion focus is a distinct cognitive strength. Many people struggle with the "last 20%" of projects — the editing, refining, and finishing that requires sustained attention without the novelty of the initial phase. Your low task-switching profile means you're more likely to push through to completion. Your brain doesn't generate the same urge to switch when the work gets repetitive or less stimulating. This makes you valuable for projects that require someone to actually finish, not just start.`,
        },
        {
          title: "Depth and Continuity",
          description: "You can maintain a single thread of thought for extended periods. Your working memory holds task context strongly, which means you can tackle complex problems that require sustained reasoning without losing the thread.",
          deepDive: `Your attentional system maintains task-relevant activation for longer than average. When you're engaged with a problem, your brain doesn't readily release it — which is why switching feels costly. But this same tendency means you can hold complex, multi-step reasoning in mind without the fragmentation that afflicts high task-switchers. You're built for work that requires following a single idea to its conclusion.`,
        },
        {
          title: "Resistance to Fragmentation",
          description: "You're unlikely to spread your attention across too many half-attended tasks. Your natural preference for single-task focus protects you from the shallow engagement that plagues people who switch too easily.",
        },
      ],

      growthEdges: [
        {
          title: "Inflexibility in Dynamic Environments",
          teaser: "When priorities shift rapidly or interruptions are constant, you struggle. Your cognitive style is a poor fit for roles that demand frequent pivots.",
          fullExplanation: `Environments that reward adaptability — reactive management, client-facing roles with constant requests, fast-moving startups — create chronic stress for your attentional profile. Every forced switch feels like a violation. You may become irritable, experience more fatigue, or produce lower-quality work because you're never fully engaged with any single task long enough to reach your depth.\n\nThe intervention has two parts. First, where possible, choose roles and environments that protect extended focus. Your strength is depth; seek contexts that value it. Second, when switching is unavoidable, develop a minimal ritual: write one sentence capturing where you are before leaving a task. This doesn't eliminate the cost, but it reduces the "lost thread" feeling and makes return easier. Accept that you'll never love switching — the goal is making it less painful when it's necessary.`,
          premiumHook: "Get the minimal switching ritual designed for people who find context-shifts genuinely costly.",
        },
        {
          title: "The Rigidity Risk",
          teaser: "Your preference for staying with one task can become rigidity when the situation genuinely demands a pivot. Knowing when to switch — even when it's uncomfortable — is a learnable skill.",
          fullExplanation: `There's a difference between protecting your focus and refusing to adapt. Sometimes the right move is to switch — a genuine emergency, a strategic shift, a colleague's urgent need. Your low task-switching profile may make you resist these pivots even when they're appropriate. You might experience the request to switch as an imposition rather than a legitimate demand.\n\nThe growth edge is developing a decision rule: when someone requests your attention, ask "Is this genuinely urgent or can it wait?" If it's urgent, switch — and use your state-save ritual to make the transition less costly. If it can wait, schedule it and protect your current focus. The key is that the decision is conscious rather than reflexive. Your default can stay "stay with the task" — but you want the flexibility to override it when the situation warrants.`,
          premiumHook: "Learn the urgency filter that helps you switch when it matters without abandoning your depth advantage.",
        },
      ],

      workplaceImplications: `Your low task-switching profile is a significant asset in roles that reward depth: research, writing, software development, analysis, design, or any work that benefits from extended concentration. Seek environments that protect focus — companies with focus-friendly policies, roles with control over your schedule, and cultures that don't equate responsiveness with productivity. Avoid roles that are primarily reactive unless you're willing to accept the cognitive cost.\n\nIn your current role, the highest-leverage change is reducing switch frequency: batch meetings, set communication boundaries, and block extended focus time. Communicate your working style to colleagues — "I do my best work in 2-hour blocks; I'll respond after" — so they understand rather than interpreting your focus as unavailability.`,

      relationshipImplications: `In relationships, your single-task focus can feel like presence when you're engaged — you're fully there, not mentally scattered. The challenge is the transition: when you're absorbed in work and your partner needs your attention, the switch is genuinely difficult. You may seem irritable or slow to engage. The fix is advance signalling: tell your partner when you're entering a focus block and when you'll be available. When they need you, give yourself a minute to consciously shift context before responding. Your depth of presence, when you're there, can be a strength — the key is making the transition to "there" deliberate rather than forced.`,

      cognitivePattern: `Your mind is built for continuity. You think in long arcs, prefer to follow a single thread to completion, and find fragmented attention genuinely unsatisfying. Your working memory holds task context strongly, which supports depth but makes switching costly. You're most effective when you can stay with one problem long enough to fully develop your thinking. Your cognitive style favours completion, thoroughness, and sustained engagement over breadth and rapid adaptation.`,

      stressTriggers: [
        "Constant interruptions that prevent you from sustaining focus on any single task",
        "Environments that demand rapid pivots and punish sustained concentration",
        "Roles that equate availability and responsiveness with performance",
      ],
      flowTriggers: [
        "Extended blocks of uninterrupted time on a single meaningful task",
        "Environments that protect focus and minimise unexpected demands",
        "Projects with clear scope that allow you to work through to completion",
      ],

      toolkit: [
        {
          title: "The Focus Block Shield",
          context: "Your cognitive style requires protected time. Without it, the environment will fragment your attention.",
          action: "Schedule 2-3 daily blocks of 90-120 minutes for your most important work. Communicate these blocks to colleagues. Use a physical do-not-disturb signal. Treat these as non-negotiable. Start with one block per day if needed — the goal is creating conditions where your depth advantage can operate.",
        },
        {
          title: "The State-Save for Switches",
          context: `When you must switch, the cost is high. A brief ritual reduces the lost-thread feeling and makes return easier.`,
          action: `Keep a notepad beside you. When interrupted or forced to switch, spend 30 seconds writing: where you are, what the next step would be, and any key thoughts. Do not skip this even when rushed. When you return, read your notes first. This does not eliminate switch-cost but significantly reduces the disorientation.`,
        },
        {
          title: "The Urgency Filter",
          context: `Not every request requires an immediate switch. Developing a filter prevents unnecessary fragmentation.`,
          action: `When someone requests your attention during focus time, ask: Is this urgent (needs response within 30 minutes) or can it wait? If it can wait, say you will get to it at a specific time and add it to your list. If it is urgent, use your state-save ritual, then switch. Track how many urgent requests were actually urgent — most people find 70% could have waited.`,
        },
      ],
    },
  },
};
