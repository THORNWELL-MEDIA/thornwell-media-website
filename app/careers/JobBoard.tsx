"use client";

import { useState } from "react";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import CareersApplyModal from "@/components/CareersApplyModal";

const JOBS = [
  {
    title: "Senior Brand Strategist",
    location: "Toronto, ON (remote-flexible across North America)",
    type: "Full-time",
    summary:
      "You will own brand strategy engagements from positioning through execution. That means leading discovery, building brand architectures, writing positioning and messaging guides, and working with design and content to bring the strategy to life. Most of our clients are in property, professional services, and B2B. You will work across 3 to 5 active accounts at once.",
    requirements: [
      "6 or more years in brand strategy, with agency or consultancy experience preferred",
      "Ability to lead client workshops and present strategy at the executive level",
      "Strong writing skills: you can write a positioning platform, not just talk about one",
      "Experience with B2B and professional services brands is a meaningful advantage",
    ],
    compensation: "$95,000 to $125,000 base",
  },
  {
    title: "Performance Marketing Manager",
    location: "Toronto, ON",
    type: "Full-time",
    summary:
      "You will manage paid media campaigns across Google, Meta, and LinkedIn for Thornwell clients. Your job is to build, optimize, and report on campaigns that drive measurable business outcomes. You will work closely with brand strategy and content to ensure paid and organic are reinforcing each other. You own the numbers.",
    requirements: [
      "4 or more years of hands-on paid media experience across at least two major platforms",
      "Strong analytical skills: comfortable building reports and explaining results to clients",
      "Experience with property, legal, professional services, or B2B categories is a plus",
      "Google Ads and Meta Blueprint certifications are an asset",
    ],
    compensation: "$80,000 to $105,000 base",
  },
  {
    title: "Content Director",
    location: "Remote, North America",
    type: "Full-time",
    summary:
      "You will lead content strategy and production across all Thornwell client accounts. That means building content frameworks, writing and editing long-form pieces, managing freelance writers, and ensuring everything we publish meets a high editorial standard. Most content is B2B: thought leadership, case studies, SEO-driven editorial, and email.",
    requirements: [
      "7 or more years of content experience, with at least 3 years in a senior or editorial director role",
      "Strong writing and editing skills across multiple formats and voices",
      "Experience managing freelance contributors and holding a quality bar",
      "Familiarity with SEO and how editorial content supports organic performance",
    ],
    compensation: "$100,000 to $130,000 base",
  },
  {
    title: "Senior Designer",
    location: "Toronto, ON (remote-flexible across North America)",
    type: "Full-time",
    summary:
      "You will work across brand identity, digital design, and print for our portfolio clients. You are not a production designer. You think strategically about visual identity, know when a design is working and when it is not, and can defend your decisions with clear reasoning. Figma is your primary tool. Motion and spatial work are a bonus.",
    requirements: [
      "5 or more years of design experience, with a strong portfolio in brand identity and digital",
      "Proficient in Figma, with working knowledge of Adobe CC",
      "Ability to present and discuss work confidently with clients",
      "Experience with professional services, real estate, or finance is a meaningful plus",
    ],
    compensation: "$85,000 to $115,000 base",
  },
  {
    title: "Account Director",
    location: "Toronto, ON",
    type: "Full-time",
    summary:
      "You will manage and grow a book of Thornwell client relationships. Day-to-day this means running weekly client status calls, coordinating deliverables across internal teams, identifying scope expansion opportunities, and keeping client satisfaction high. You are the connective tissue between what we promise and what we deliver.",
    requirements: [
      "6 or more years in account management, client services, or agency operations",
      "Track record of retaining and growing client relationships year over year",
      "Strong project management instincts and comfort managing multiple parallel workstreams",
      "Excellent written and verbal communication; comfortable in a fast-moving environment",
    ],
    compensation: "$90,000 to $120,000 base plus performance bonus",
  },
];

export default function JobBoard() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <section className="section bg-paper">
      <div className="container-prose">
        <div className="mb-10">
          <p className="eyebrow mb-2">Open positions</p>
          <h2 className="display text-navy-900 text-3xl font-semibold text-balance">
            We are building a best-in-class team.
          </h2>
          <p className="mt-3 text-base text-graphite max-w-xl">
            Five roles across strategy, creative, media, and client services.
          </p>
        </div>

        <div className="space-y-4">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border border-paper-edge bg-white p-6 md:p-8 shadow-sm hover:border-gold-400/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-[20px] font-semibold text-navy-900">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-graphite uppercase tracking-[0.14em]">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                    <span className="text-gold-700 font-bold">{job.compensation}</span>
                  </div>
                  <p className="mt-4 text-sm text-graphite leading-relaxed max-w-2xl">{job.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-xs text-graphite">
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-gold-600 flex-none" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:ml-6 flex-none">
                  <button
                    onClick={() => setActiveRole(job.title)}
                    className="btn-primary whitespace-nowrap inline-flex items-center gap-2"
                  >
                    Apply
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeRole && (
        <CareersApplyModal
          role={activeRole}
          onClose={() => setActiveRole(null)}
        />
      )}
    </section>
  );
}
