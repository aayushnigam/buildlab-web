import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sprints = [
  {
    id: 1,
    title: 'Sprint 1: Foundation',
    label: 'Weeks 1-4',
    subtitle: 'Foundation & Research',
    highlight: {
        icon: "psychology",
        title: "Prompt Engineering & Research",
        desc: "Master Prompt Engineering, Gemini AI Studio, and multimodal research to validate your top 10 business ideas.",
        checkpoints: ["Gemini vs ChatGPT", "Idea Validation", "Product Requirement Docs"],
        details: [
            "Advanced Prompt Engineering: Few-shot, Chain-of-Thought, and ReAct patterns.",
            "Multimodal Research: Analyzing images, videos, and documents with Gemini 1.5 Pro.",
            "Market Validation: Using AI to scrape and synthesize competitor data.",
            "PRD Generation: Automating the creation of technical specifications.",
            "Idea Scoring: Building a rubric to rank business ideas by feasibility and impact."
        ]
    },
    modules: [
        { 
            week: 1, 
            icon: "landscape", 
            title: "AI Landscape", 
            desc: "Understanding the tools. Basic prompting techniques.",
            details: [
                "The evolution of LLMs: From GPT-3 to Gemini 1.5.",
                "Understanding Tokenization and Context Windows.",
                "The 'Vibe' of different models: When to use what.",
                "Setting up a professional AI workspace.",
                "Introduction to Zero-shot and One-shot prompting."
            ]
        },
        { 
            week: 2, 
            icon: "travel_explore", 
            title: "Deep Research", 
            desc: "Using Perplexity and Gemini Multimodal for visual analysis.",
            details: [
                "Perplexity Pro: Advanced search and source verification.",
                "Gemini Multimodal: Extracting data from complex charts and diagrams.",
                "Synthesizing research into actionable insights.",
                "AI-assisted literature reviews and patent searches.",
                "Building a research database with Notion and AI."
            ]
        },
        { 
            week: 3, 
            icon: "smart_toy", 
            title: "Gemini AI Studio", 
            desc: "System instructions. Creating a 'Custom Expert' model.",
            details: [
                "Deep dive into Gemini AI Studio (formerly MakerSuite).",
                "Crafting perfect System Instructions.",
                "Temperature, Top-K, and Top-P: Tuning model behavior.",
                "Safety settings and content filtering.",
                "Testing and iterating on model responses."
            ]
        },
        { 
            week: 4, 
            icon: "description", 
            title: "Specification", 
            desc: "Writing Product Requirement Docs (PRD) and wireframing with AI.",
            details: [
                "Structure of a modern PRD.",
                "Using AI to identify edge cases in product logic.",
                "Wireframing with v0.dev and screenshot-to-code tools.",
                "User Flow mapping with AI diagramming tools.",
                "Finalizing the blueprint for Sprint 2."
            ]
        }
    ]
  },
  {
    id: 2,
    title: 'Sprint 2: Building',
    label: 'Weeks 5-6',
    subtitle: 'The No-Code Sprint',
    highlight: {
        icon: "code",
        title: "Natural Language to Live App",
        desc: "Enter the \"vibe coding\" phase using Replit Agent and v0.dev to build your Minimum Viable Product (MVP).",
        checkpoints: ["Natural Language Input", "Instant UI Generation", "Live Deployment"],
        details: [
            "Introduction to 'Vibe Coding': Building by describing.",
            "Replit Agent: From prompt to full-stack application.",
            "v0.dev: Generating React components with natural language.",
            "Connecting Frontend to Backend without writing boilerplate.",
            "One-click deployments and environment management."
        ]
    },
    modules: [
        { 
            week: 5, 
            icon: "calculate", 
            title: "First Tool", 
            desc: "Building the first calculator/tool with natural language.",
            details: [
                "Defining the core utility of your tool.",
                "Prompting Replit Agent for logic implementation.",
                "Basic UI styling with Tailwind CSS via AI.",
                "Handling user inputs and basic state management.",
                "Deploying your first live URL."
            ]
        },
        { 
            week: 6, 
            icon: "bug_report", 
            title: "Iteration & Debugging", 
            desc: "Learning to fix errors like 'fix the login error' through dialogue.",
            details: [
                "Reading and interpreting AI-generated code.",
                "The art of the 'Bug Report' prompt.",
                "Iterative improvement: Adding features one by one.",
                "User testing and feedback loops.",
                "Preparing the MVP for Sprint 3."
            ]
        }
    ]
  },
  {
    id: 3,
    title: 'Sprint 3: Marketing',
    label: 'Weeks 8-12',
    subtitle: 'Marketing',
    highlight: {
        icon: "campaign",
        title: "Marketing & Content Creation",
        desc: "Design professional brand identities with Midjourney and launch high-converting landing pages using AI copywriting.",
        checkpoints: ["AI SEO Blogs", "Social Calendars", "Landing Page Design"],
        details: [
            "Brand Identity: Generating logos and style guides with Midjourney.",
            "AI Copywriting: Mastering the 'Brand Voice' prompt.",
            "SEO Strategy: Using AI for keyword research and content mapping.",
            "Video Marketing: Creating AI avatars and voiceovers.",
            "Conversion Optimization: AI-assisted A/B testing ideas."
        ]
    },
    modules: [
        { 
            week: 8, 
            icon: "article", 
            title: "Content Strategy", 
            desc: "Planning content pillars and SEO strategy with AI.",
            details: [
                "Defining target audience personas with AI.",
                "Creating a 3-month content calendar in minutes.",
                "Identifying 'Low-Hanging Fruit' SEO keywords.",
                "Mapping content to the user journey.",
                "Setting up analytics to track content performance."
            ]
        },
        { 
            week: 9, 
            icon: "post_add", 
            title: "Asset Generation", 
            desc: "Generating blog posts and social media visuals.",
            details: [
                "Batch producing 30 social media posts with AI.",
                "Creating consistent brand visuals with Midjourney 'Style Reference'.",
                "Writing long-form SEO blogs that don't sound like AI.",
                "Automating image resizing for different platforms.",
                "Creating short-form video scripts."
            ]
        },
        { 
            week: 10, 
            icon: "web", 
            title: "Landing Pages", 
            desc: "Building high-conversion landing pages for the product.",
            details: [
                "Structure of a high-converting landing page.",
                "Using AI to write compelling headlines and CTAs.",
                "Building the page with Framer or v0.dev.",
                "Integrating lead capture forms.",
                "Mobile optimization and speed testing."
            ]
        },
        { 
            week: 11, 
            icon: "ads_click", 
            title: "Distribution", 
            desc: "Launching on product directories and social channels.",
            details: [
                "Product Hunt launch strategy with AI.",
                "Automating outreach to niche directories.",
                "AI-assisted cold DM/email scripts.",
                "Setting up basic ad campaigns with AI-generated creative.",
                "Engaging with early adopters."
            ]
        },
        { 
            week: 12, 
            icon: "trending_up", 
            title: "Growth", 
            desc: "Scaling user acquisition.",
            details: [
                "Analyzing user data for growth opportunities.",
                "Referral program design with AI.",
                "Automating customer support with AI chatbots.",
                "Retention strategies: Keeping users coming back.",
                "Preparing for the final automation sprint."
            ]
        }
    ]
  },
  {
    id: 4,
    title: 'Sprint 4: Launch & Scale',
    label: 'Weeks 15-16',
    subtitle: 'Automation & Launch',
    highlight: {
        icon: "account_tree",
        title: "Automation & Demo Day",
        desc: "Automate business workflows using n8n and Zapier, culminating in a live Demo Day pitch to parents and mentors.",
        checkpoints: ["n8n Workflows", "Automated Emails", "The Final Pitch"],
        details: [
            "Introduction to n8n: The power of self-hosted automation.",
            "Building complex multi-step workflows.",
            "Connecting your app to 500+ external tools.",
            "Automating the 'Boring Stuff': Invoicing, CRM, and Reports.",
            "Pitch Deck generation with AI."
        ]
    },
    modules: [
        { 
            week: 15, 
            icon: "mic", 
            title: "Pitch Prep", 
            desc: "Crafting a compelling narrative for Demo Day.",
            details: [
                "The 'Storytelling' framework for startup pitches.",
                "Designing slides with AI presentation tools.",
                "Public speaking practice with AI feedback.",
                "Anticipating and preparing for Q&A.",
                "Final polish on the live demo."
            ]
        },
        { 
            week: 16, 
            icon: "emoji_events", 
            title: "Demo Day", 
            desc: "The Grand Finale. Pitching the startup.",
            details: [
                "Live presentation to mentors and parents.",
                "Networking with potential partners.",
                "Celebrating the 16-week journey.",
                "Post-program roadmap and support.",
                "Graduation and certification."
            ]
        }
    ]
  }
];

const Curriculum: React.FC = () => {
  const [activeSprint, setActiveSprint] = useState(1);
  const [selectedModule, setSelectedModule] = useState<any>(null);

  const activeData = sprints.find(s => s.id === activeSprint) || sprints[0];

  return (
    <section id="curriculum" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background-dark">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Curriculum Breakdown
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            16 Weeks. 4 Phases. <span className="text-primary relative inline-block">
              Zero Theory.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 5.51963 80.9999 1.99999 198 1.99999" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            From abstract idea to live app. A structured accelerator for student builders.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-full space-y-8">
            <div className="flex overflow-x-auto no-scrollbar border-b border-slate-800 pb-0 gap-8">
              {sprints.map((sprint) => (
                <button 
                    key={sprint.id}
                    onClick={() => setActiveSprint(sprint.id)}
                    className={`group relative pb-4 px-2 flex-shrink-0 text-left focus:outline-none min-w-[160px] transition-all duration-300 ${activeSprint === sprint.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span className={`text-xs font-bold tracking-widest uppercase mb-1 block ${activeSprint === sprint.id ? 'text-primary' : 'text-slate-500'}`}>{sprint.label}</span>
                  <span className={`text-xl font-bold block transition-colors ${activeSprint === sprint.id ? 'text-white' : 'text-slate-300 group-hover:text-primary'}`}>{sprint.title}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-slate-400 font-medium">{sprint.subtitle}</span>
                  </div>
                  {activeSprint === sprint.id && (
                    <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary shadow-[0_-4px_12px_rgba(80,143,97,0.4)]" />
                  )}
                  {activeSprint !== sprint.id && (
                      <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-transparent group-hover:bg-primary/30 transition-colors"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="grid lg:grid-cols-12 gap-8 min-h-[400px]">
                {/* Highlight Card */}
                <div className="lg:col-span-4 flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={`highlight-${activeSprint}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedModule({ ...activeData.highlight, week: activeData.label })}
                            className="bg-surface-dark border border-slate-800 rounded-2xl p-8 h-full relative overflow-hidden group hover:border-primary/40 transition-colors duration-300 cursor-pointer"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-300"></div>
                            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-6 text-primary">
                                        <span className="material-icons-round text-3xl">{activeData.highlight.icon}</span>
                                        <span className="text-sm font-bold tracking-wider uppercase">Sprint Focus</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">{activeData.highlight.title}</h2>
                                    <p className="text-slate-400 leading-relaxed mb-6">
                                        {activeData.highlight.desc}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {activeData.highlight.checkpoints.map((pt, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                            <span className="material-icons-round text-primary text-base">check_circle</span>
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 flex items-center text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                                    View Details
                                    <span className="material-icons-round text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Modules Grid */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
                    <AnimatePresence mode="popLayout">
                        {activeData.modules.map((mod) => (
                             <motion.div 
                                key={`mod-${activeSprint}-${mod.week}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedModule(mod)}
                                className="bg-surface-dark border border-slate-800 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <span className="material-icons-round text-slate-300 group-hover:text-primary transition-colors">{mod.icon}</span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 border border-slate-700 rounded px-2 py-0.5">Week {mod.week}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{mod.title}</h3>
                                <p className="text-sm text-slate-400 mb-4">
                                    {mod.desc}
                                </p>
                                <div className="flex items-center text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details
                                    <span className="material-icons-round text-xs ml-1">add</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                     <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(101,158,114,0.5)]"></span>
                     <span className="text-sm text-slate-400 font-medium">Next Cohort: <span className="text-white font-bold">April 2024</span></span>
                </div>
                <button 
                    onClick={() => window.open('/BuildLab_Syllabus.pdf', '_blank')}
                    className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/30 flex items-center justify-center gap-2"
                >
                    Download Syllabus PDF
                    <span className="material-icons-round text-sm">download</span>
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedModule && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedModule(null)}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-2xl bg-surface-dark border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
                    <button 
                        onClick={() => setSelectedModule(null)}
                        className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                    >
                        <span className="material-icons-round">close</span>
                    </button>

                    <div className="p-8 sm:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-icons-round text-primary text-4xl">{selectedModule.icon}</span>
                            </div>
                            <div>
                                <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                                    {typeof selectedModule.week === 'number' ? `Week ${selectedModule.week}` : selectedModule.week}
                                </span>
                                <h2 className="text-3xl font-bold text-white">{selectedModule.title}</h2>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Overview</h4>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {selectedModule.desc}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Curriculum Details</h4>
                                <ul className="space-y-4">
                                    {selectedModule.details?.map((detail: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                                            <span className="text-slate-300 leading-relaxed">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-800 flex justify-end">
                            <button 
                                onClick={() => setSelectedModule(null)}
                                className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Curriculum;