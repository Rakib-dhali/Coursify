"use client";

import { redirect } from "next/navigation";

    export default function HeroSection() {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-white flex items-center px-6 md:px-16 py-16">
      <div className="max-w-369 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="inline-flex items-center gap-2 self-center lg:self-start bg-white border border-blue-400 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            New Courses Available
          </div>
          <h1 className="font-extrabold text-center lg:text-start text-5xl sm:text-5xl lg:text-5xl leading-tight tracking-tight text-gray-900">
            Master New Skills <br />
            <span className="text-blue-500">Online Anytime,</span> <br />
            Anywhere
          </h1>
          <p className="text-gray-500 text-center text-base sm:text-lg leading-relaxed max-w-lg">
            Join over 50,000+ students learning from world-class mentors.
            Transform your career with industry-leading courses.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => redirect("/courses")} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200">
              Start Learning
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => redirect("https://www.youtube.com/", )} className="flex items-center gap-2 border border-gray-200 hover:border-red-400 hover:bg-red-50 text-gray-800 font-medium px-6 py-3 rounded-full transition-all">
              <span className="w-5 h-5 bg-red-600 rounded flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="white">
                  <path d="M3 2l5 3-5 3V2z" />
                </svg>
              </span>
              YouTube Channel
            </button>
          </div>
          <div className="flex flex-wrap gap-6 pt-2">
            {[
              { emoji: "👥", value: "50K+", label: "Students" },
              { emoji: "📚", value: "200+", label: "Courses"  },
              { emoji: "⭐", value: "4.9",  label: "Rating"   },
            ].map(({ emoji, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-base shrink-0">
                  {emoji}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <div className="absolute -top-4 right-4 z-10 flex items-center gap-2.5 bg-white rounded-2xl shadow-lg px-3.5 py-2.5">
            <div className="flex">
              {["bg-orange-400", "bg-purple-500", "bg-sky-400"].map((c, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white ${i !== 0 ? "-ml-2" : ""}`} />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 leading-tight">Join 50k+ Students</p>
              <p className="text-[10px] text-gray-400">Learning worldwide</p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-slate-800">
            <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e8dcc8"/><stop offset="100%" stopColor="#d4c9b0"/>
                </linearGradient>
                <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B6914"/><stop offset="100%" stopColor="#6B4F10"/>
                </linearGradient>
              </defs>
              <rect width="640" height="480" fill="#1e293b"/>
              <rect x="0" y="0" width="640" height="340" fill="url(#wg)"/>
              <rect x="0" y="340" width="640" height="140" fill="#c8b99a"/>
              <rect x="0" y="310" width="640" height="20" fill="url(#dg)" rx="2"/>
              <rect x="30" y="30" width="155" height="215" fill="#c8dff0" rx="4" opacity="0.8"/>
              <line x1="107" y1="30" x2="107" y2="245" stroke="#9ab8cc" strokeWidth="2"/>
              <line x1="30" y1="138" x2="185" y2="138" stroke="#9ab8cc" strokeWidth="2"/>
              <ellipse cx="500" cy="315" rx="30" ry="8" fill="#5d4a2a"/>
              <rect x="480" y="252" width="40" height="66" rx="5" fill="#7a6035"/>
              <circle cx="480" cy="222" r="38" fill="#22c55e" opacity="0.9"/>
              <circle cx="508" cy="218" r="28" fill="#16a34a" opacity="0.8"/>
              <rect x="222" y="202" width="196" height="122" rx="6" fill="#374151"/>
              <rect x="227" y="207" width="186" height="112" rx="4" fill="#1e293b"/>
              <rect x="230" y="210" width="180" height="106" rx="3" fill="#0f172a"/>
              <rect x="240" y="218" width="78" height="10" rx="3" fill="#3b82f6" opacity="0.7"/>
              <rect x="240" y="233" width="118" height="7" rx="2" fill="#64748b" opacity="0.6"/>
              <rect x="240" y="245" width="98" height="7" rx="2" fill="#64748b" opacity="0.5"/>
              <circle cx="360" cy="232" r="11" fill="#f9a825"/>
              <ellipse cx="360" cy="252" rx="15" ry="10" fill="#e65100"/>
              <rect x="192" y="324" width="256" height="8" rx="3" fill="#4b5563"/>
              <ellipse cx="310" cy="158" rx="54" ry="57" fill="#2d1a0e"/>
              <ellipse cx="310" cy="142" rx="37" ry="41" fill="#d4956a"/>
              <rect x="294" y="177" width="32" height="21" rx="3" fill="#d4956a"/>
              <ellipse cx="310" cy="226" rx="78" ry="40" fill="#c9a090"/>
              <ellipse cx="275" cy="140" rx="15" ry="17" fill="#06b6d4"/>
              <ellipse cx="345" cy="140" rx="15" ry="17" fill="#06b6d4"/>
              <path d="M 275 120 Q 310 93 345 120" stroke="#0284c7" strokeWidth="9" fill="none" strokeLinecap="round"/>
              <rect x="0" y="0" width="640" height="480" fill="rgba(20,30,50,0.12)"/>
            </svg>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-500 rounded-full border-4 border-white/40 justify-content-center hover:scale-110 transition-transform shadow-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.3 3.7a1 1 0 0 1 1.5-.1l7 6a1 1 0 0 1 0 1.5l-7 6A1 1 0 0 1 6 16.3V3.7z"/>
              </svg>
            </button>
          </div>
          <div className="absolute -bottom-4 left-4 z-10 flex items-center gap-2.5 bg-white rounded-2xl shadow-lg px-3.5 py-2.5">
            <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center text-sm shrink-0">
              📖
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 leading-tight">200+ Courses</p>
              <p className="text-[10px] text-gray-400">Available Now</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
    }

