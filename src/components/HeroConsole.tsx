'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import Link from 'next/link';

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const HeroConsole = () => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'samuel.getProfile()',
      output: (
        <div className="space-y-1.5 text-xs text-muted-foreground font-mono">
          <div className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>●</span>
            <span>SYSTEM INITIALIZED — ACTIVE SESSION</span>
          </div>
          <div><span className="text-purple-400">role:</span> "Full-Stack Software Engineer"</div>
          <div><span className="text-purple-400">location:</span> "Lagos, Nigeria (WAT / UTC+1)"</div>
          <div><span className="text-purple-400">core_stack:</span> ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "TailwindCSS"]</div>
          <div><span className="text-purple-400">status:</span> <span className="text-emerald-400">"Available for Full-time Roles & High-Impact Contracts"</span></div>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = [
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'experience', cmd: 'experience' },
    { label: 'contact', cmd: 'contact' },
    { label: 'stats', cmd: 'stats' },
    { label: 'clear', cmd: 'clear' },
  ];

  const handleRunCommand = (cmdToRun: string) => {
    const raw = cmdToRun.trim().toLowerCase();
    if (!raw) return;

    if (raw === 'clear' || raw === 'cls') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: React.ReactNode = null;

    switch (raw) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-muted-foreground font-mono">
            <p className="text-foreground font-semibold">Available commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1">
              <div><span className="text-purple-400">projects</span> — Browse featured production platforms</div>
              <div><span className="text-purple-400">skills</span> — Display technical stack & tools</div>
              <div><span className="text-purple-400">experience</span> — View engineering work history</div>
              <div><span className="text-purple-400">stats</span> — Inspect code & impact metrics</div>
              <div><span className="text-purple-400">contact</span> — Get direct reachout channels</div>
              <div><span className="text-purple-400">clear</span> — Wipe console output</div>
            </div>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-purple-400 font-semibold">// Technical Stack Architecture</div>
            <div className="text-muted-foreground">
              <span className="text-foreground font-medium">Frontend:</span> Next.js (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion
            </div>
            <div className="text-muted-foreground">
              <span className="text-foreground font-medium">Backend & DB:</span> Node.js, Express.js, PostgreSQL, SQL, Firebase, REST APIs, Zod
            </div>
            <div className="text-muted-foreground">
              <span className="text-foreground font-medium">Tooling & DevOps:</span> Git, GitHub Actions, Vercel, Vite, Shadcn UI, Postman
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-purple-400 font-semibold">// Top Featured Projects</div>
            <div className="space-y-1">
              <div>
                <span className="text-foreground font-bold">1. Omnishop</span> — Next.js + Firebase Full E-commerce Platform{' '}
                <Link href="/projects/1" className="text-brand underline hover:text-purple-300">
                  [View Details]
                </Link>
              </div>
              <div>
                <span className="text-foreground font-bold">2. Task Manager</span> — PERN Stack + AI Insights Dashboard{' '}
                <Link href="/projects/2" className="text-brand underline hover:text-purple-300">
                  [View Details]
                </Link>
              </div>
              <div>
                <span className="text-foreground font-bold">3. Admin Dashboard</span> — Next.js + Shadcn Enterprise Interface{' '}
                <Link href="/projects/3" className="text-brand underline hover:text-purple-300">
                  [View Details]
                </Link>
              </div>
            </div>
            <div className="pt-1">
              <Link href="/projects" className="text-xs text-brand font-semibold hover:underline">
                → Explore all 12 projects in archive
              </Link>
            </div>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-purple-400 font-semibold">// Work History & Roles</div>
            <div>
              <span className="text-foreground font-bold">Frontend Developer @ Hoste</span> (2024 — Present)
              <p className="text-muted-foreground text-[11px]">Building enterprise admin dashboards, high-throughput data tables, and REST API integrations with Next.js & TypeScript.</p>
            </div>
            <div>
              <span className="text-foreground font-bold">Freelance Full-Stack Developer</span> (2022 — Present)
              <p className="text-muted-foreground text-[11px]">Delivering scalable web applications, landing pages, and backend APIs for international clients.</p>
            </div>
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono py-1">
            <div className="p-2 rounded bg-secondary/60 border border-border/40">
              <div className="text-muted-foreground text-[11px]">Total Projects Shipped</div>
              <div className="text-foreground font-bold text-sm">12+ Production Apps</div>
            </div>
            <div className="p-2 rounded bg-secondary/60 border border-border/40">
              <div className="text-muted-foreground text-[11px]">Engineering Experience</div>
              <div className="text-foreground font-bold text-sm">3+ Years Practical Code</div>
            </div>
            <div className="p-2 rounded bg-secondary/60 border border-border/40">
              <div className="text-muted-foreground text-[11px]">Code Architecture</div>
              <div className="text-foreground font-bold text-sm">100% Type-Safe TS</div>
            </div>
            <div className="p-2 rounded bg-secondary/60 border border-border/40">
              <div className="text-muted-foreground text-[11px]">Avg Response SLA</div>
              <div className="text-emerald-400 font-bold text-sm">&lt; 24 Hours</div>
            </div>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <div className="text-emerald-400 font-semibold">Direct Communication Channels:</div>
            <div>Email: <a href="mailto:shondesamuel07@gmail.com" className="text-purple-400 underline">shondesamuel07@gmail.com</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/samuelshonde" target="_blank" rel="noreferrer" className="text-purple-400 underline">in/samuelshonde</a></div>
            <div>GitHub: <a href="https://github.com/SAMCOM-07" target="_blank" rel="noreferrer" className="text-purple-400 underline">github.com/SAMCOM-07</a></div>
            <div>Twitter: <a href="https://x.com/SammyShowed" target="_blank" rel="noreferrer" className="text-purple-400 underline">@SammyShowed</a></div>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: &quot;{raw}&quot;. Type <span className="text-purple-400 font-semibold">help</span> or click the action chips below.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        command: raw,
        output,
      },
    ]);
    setInput('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shondesamuel07@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-border/80 bg-[#090d16]/95 dark:bg-[#060910]/95 backdrop-blur-xl shadow-2xl overflow-hidden text-left font-mono">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-border/50 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          <span className="text-[11px] text-muted-foreground/80 ml-2 flex items-center gap-1.5">
            <Terminal size={12} className="text-purple-400" />
            <span>samuel@engine:~$</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="text-[11px] text-muted-foreground hover:text-purple-400 flex items-center gap-1 px-2 py-0.5 rounded bg-secondary/50 border border-border/40 transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check size={11} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={11} />
                <span>copy email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 max-h-[300px] overflow-y-auto space-y-4 scrollbar">
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-emerald-400">❯</span>
              <span className="text-foreground font-semibold">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Interactive Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRunCommand(input);
        }}
        className="flex items-center gap-2 px-4 py-3 bg-[#0a0f1c] border-t border-border/40"
      >
        <span className="text-emerald-400 text-xs font-bold shrink-0">❯</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'projects', 'skills'..."
          className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="text-muted-foreground hover:text-purple-400 shrink-0 p-1 rounded hover:bg-secondary/40 transition-colors"
          aria-label="Submit command"
        >
          <CornerDownLeft size={13} />
        </button>
      </form>

      {/* Quick Action Chips */}
      <div className="px-4 py-2.5 bg-[#080c17] border-t border-border/30 flex items-center gap-1.5 overflow-x-auto scrollbar text-[11px]">
        <span className="text-muted-foreground/60 text-[10px] uppercase font-semibold mr-1 shrink-0 flex items-center gap-1">
          <Sparkles size={10} className="text-purple-400" />
          <span>Quick:</span>
        </span>
        {quickCommands.map((q) => (
          <button
            key={q.cmd}
            type="button"
            onClick={() => handleRunCommand(q.cmd)}
            className="px-2 py-0.5 rounded-md bg-secondary/60 hover:bg-brand/20 hover:text-purple-300 text-muted-foreground border border-border/40 transition-all shrink-0 active:scale-95"
          >
            {q.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroConsole;
