"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dark, setDark] = useState(true);
  const [expanded, setExpanded] = useState({
    summary: true, contact: true, skills: true,
    projects: true, experience: true, education: true,
  });
  const sectionRefs = useRef({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  const expandAll = () => setExpanded({ summary: true, contact: true, skills: true, projects: true, experience: true, education: true });
  const collapseAll = () => setExpanded({ summary: false, contact: false, skills: false, projects: false, experience: false, education: false });

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = dark ? "bg-gray-950" : "bg-gray-100";
  const headerBg = dark ? "bg-gray-900" : "bg-white";
  const cardBg = dark ? "bg-gray-900" : "bg-white";
  const borderColor = dark ? "border-green-500/20" : "border-green-600/30";
  const hoverBorder = dark ? "hover:border-green-400/50" : "hover:border-green-600";
  const hoverShadow = dark ? "hover:shadow-green-900/30" : "hover:shadow-green-200";
  const bodyText = dark ? "text-gray-300" : "text-gray-700";
  const mutedText = dark ? "text-gray-400" : "text-gray-500";
  const headingText = dark ? "text-white" : "text-gray-900";

  return (
    <main className={`min-h-screen ${bg} text-gray-100 transition-colors duration-300`}>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-0.5 bg-green-400 z-50 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      {/* Header */}
      <header className={`relative ${headerBg} border-b ${borderColor} text-center py-16 px-6 overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-green-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-64 h-24 bg-yellow-500/5 blur-2xl rounded-full" />

        {/* Dark mode toggle */}
        <div className="absolute top-4 right-4">
          <button onClick={() => setDark(!dark)} className="font-mono text-xs px-3 py-1 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded transition-all duration-200">{dark ? "[ light ]" : "[ dark ]"}</button>
        </div>

        <div className="relative mx-auto mb-6 flex justify-center">
          <div className="p-1 rounded-full bg-gradient-to-br from-green-400 to-yellow-500">
            <img src="https://asce260901.github.io/portfolio-site/Usf Logo Png.jpeg" alt="USF Logo" className={`w-24 h-24 object-contain rounded-full ${dark ? "bg-gray-900" : "bg-white"}`} />
          </div>
        </div>

        <p className="font-mono text-green-400 text-xs tracking-widest uppercase mb-2">Aspiring Web Developer</p>
        <h1 className={`text-4xl sm:text-5xl font-mono font-bold ${headingText} mb-1`}>Alejandro <span className="text-green-400">Martinez</span></h1>
        <p className={`${mutedText} font-mono text-sm mt-2`}>B.S. Business Analytics &amp; Information Systems</p>
        <p className={`${mutedText} font-mono text-xs mt-1`}>University of South Florida — Cybersecurity Concentration</p>

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button onClick={expandAll} className="font-mono text-xs px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 rounded transition-all duration-200 tracking-wider">Expand All</button>
          <button onClick={collapseAll} className="font-mono text-xs px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 rounded transition-all duration-200 tracking-wider">Collapse All</button>
          <a href="https://asce260901.github.io/portfolio-site/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 rounded transition-all duration-200 tracking-wider">Portfolio</a>
          <a href="https://github.com/Asce260901" target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 rounded transition-all duration-200 tracking-wider">GitHub</a>
          <a href="mailto:AJMH2609@gmail.com" className="font-mono text-xs px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 rounded transition-all duration-200 tracking-wider">Contact Me</a>
          <a href="/Alejandro_Martinez_Resume_Web_Developing.pdf" download className="font-mono text-xs px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30 hover:border-yellow-400 rounded transition-all duration-200 tracking-wider">Download Resume</a>
        </div>
      </header>

      {/* Body Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Summary - full width */}
        <section ref={(el) => (sectionRefs.current["summary"] = el)} className={`md:col-span-2 ${cardBg} border ${borderColor} rounded-lg ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-300`}>
          <button onClick={() => toggle("summary")} className="w-full text-left flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="font-mono text-green-400 text-lg font-bold tracking-wider uppercase">Summary</h2>
            <span className="font-mono text-green-500 text-sm">{expanded.summary ? "[-]" : "[+]"}</span>
          </button>
          <div className="h-px bg-green-500/20 mx-6" />
          {expanded.summary && (
            <p className={`px-6 py-4 text-sm ${bodyText} font-mono leading-relaxed`}>
              University of South Florida student pursuing a B.S. in Business Analytics &amp; Information Systems with a growing focus on web development. Built hands-on projects in HTML, CSS, and JavaScript and brings strong experience in fast-paced operations, cross-team coordination, and customer support. Known for learning quickly, communicating clearly, and creating practical, user-focused solutions.
            </p>
          )}
        </section>

        {/* Contact */}
        <section ref={(el) => (sectionRefs.current["contact"] = el)} className={`${cardBg} border ${borderColor} rounded-lg ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-300`}>
          <button onClick={() => toggle("contact")} className="w-full text-left flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="font-mono text-green-400 text-lg font-bold tracking-wider uppercase">Contact</h2>
            <span className="font-mono text-green-500 text-sm">{expanded.contact ? "[-]" : "[+]"}</span>
          </button>
          <div className="h-px bg-green-500/20 mx-6" />
          {expanded.contact && (
            <ul className={`px-6 py-4 text-sm font-mono ${bodyText} space-y-2`}>
              <li><span className="text-green-500 mr-2">--</span>Email: <a href="mailto:AJMH2609@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">ajmh2609@gmail.com</a></li>
              <li><span className="text-green-500 mr-2">--</span>GitHub: <a href="https://github.com/Asce260901" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">github.com/Asce260901</a></li>
              <li><span className="text-green-500 mr-2">--</span>LinkedIn: <a href="https://www.linkedin.com/in/alejandro-martinez-a079b0298/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">linkedin.com/in/alejandro-martinez</a></li>
              <li><span className="text-green-500 mr-2">--</span>Mobile: <a href="tel:8139705841" className="text-green-400 hover:text-green-300 transition-colors">813-970-5841</a></li>
              <li><span className="text-green-500 mr-2">--</span>Portfolio: <a href="https://asce260901.github.io/portfolio-site/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">asce260901.github.io/portfolio-site</a></li>
            </ul>
          )}
        </section>

        {/* Skills */}
        <section ref={(el) => (sectionRefs.current["skills"] = el)} className={`${cardBg} border ${borderColor} rounded-lg ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-300`}>
          <button onClick={() => toggle("skills")} className="w-full text-left flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="font-mono text-green-400 text-lg font-bold tracking-wider uppercase">Skills</h2>
            <span className="font-mono text-green-500 text-sm">{expanded.skills ? "[-]" : "[+]"}</span>
          </button>
          <div className="h-px bg-green-500/20 mx-6" />
          {expanded.skills && (
            <ul className={`px-6 py-4 text-sm font-mono ${bodyText} space-y-2`}>
              <li><span className="text-yellow-400 mr-2">*</span><span className="text-green-400">Web Dev:</span> HTML, CSS, JavaScript, Responsive Design, Git, GitHub, GitHub Pages</li>
              <li><span className="text-yellow-400 mr-2">*</span><span className="text-green-400">Data &amp; Business:</span> Python, SQL, Tableau, Excel, Data Visualization</li>
              <li><span className="text-yellow-400 mr-2">*</span><span className="text-green-400">Platforms:</span> VS Code, Word, PowerPoint</li>
              <li><span className="text-yellow-400 mr-2">*</span><span className="text-green-400">Languages:</span> English, Spanish</li>
            </ul>
          )}
        </section>

        {/* Projects - full width */}
        <section ref={(el) => (sectionRefs.current["projects"] = el)} className={`md:col-span-2 ${cardBg} border ${borderColor} rounded-lg ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-300`}>
          <button onClick={() => toggle("projects")} className="w-full text-left flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="font-mono text-green-400 text-lg font-bold tracking-wider uppercase">Projects</h2>
            <span className="font-mono text-green-500 text-sm">{expanded.projects ? "[-]" : "[+]"}</span>
          </button>
          <div className="h-px bg-green-500/20 mx-6" />
          {expanded.projects && (
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-2 border-green-500/40 pl-4">
                <h3 className={`font-mono ${headingText} text-sm font-bold`}>Portfolio Website <span className="text-green-500 font-normal">| HTML, CSS, JS</span></h3>
                <ul className={`mt-2 text-sm ${mutedText} font-mono space-y-1`}>
                  <li><span className="text-green-500 mr-1">-</span>Built and deployed a responsive portfolio website.</li>
                  <li><span className="text-green-500 mr-1">-</span>Organized content for clear navigation across devices.</li>
                </ul>
              </div>
              <div className="border-l-2 border-green-500/40 pl-4">
                <h3 className={`font-mono ${headingText} text-sm font-bold`}>Retail Discount Engine <span className="text-green-500 font-normal">| JS, HTML, CSS</span></h3>
                <ul className={`mt-2 text-sm ${mutedText} font-mono space-y-1`}>
                  <li><span className="text-green-500 mr-1">-</span>Browser-based pricing tool with discount logic.</li>
                  <li><span className="text-green-500 mr-1">-</span>Simple interface, easy to update.</li>
                </ul>
              </div>
              <div className="border-l-2 border-green-500/40 pl-4">
                <h3 className={`font-mono ${headingText} text-sm font-bold`}>Pricing &amp; Inventory Tools <span className="text-green-500 font-normal">| JS, HTML, CSS</span></h3>
                <ul className={`mt-2 text-sm ${mutedText} font-mono space-y-1`}>
                  <li><span className="text-green-500 mr-1">-</span>Web-based tools for pricing and inventory reordering.</li>
                  <li><span className="text-green-500 mr-1">-</span>Focused on practical workflows for small-business use.</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Experience - full width */}
        <section ref={(el) => (sectionRefs.current["experience"] = el)} className={`md:col-span-2 ${cardBg} border ${borderColor} rounded-lg ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-300`}>
          <button onClick={() => toggle("experience")} className="w-full text-left flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="font-mono text-green-400 text-lg font-bold tracking-wider uppercase">Experience</h2>
            <span className="font-mono text-green-500 text-sm">{expanded.experience ? "[-]" : "[+]"}</span>
          </button>
          <div className="h-px bg-green-500/20 mx-6" />
          {expanded.experience && (
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-yellow-500/40 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className={`font-mono ${headingText} text-sm font-bold`}>Customer Operations Representative</h3>
                  <span className="font-mono text-xs text-yellow-400 mt-1 sm:mt-0">Jan 2026 – Present</span>
                </div>
                <p className="font-mono text-green-500 text-xs mt-1">Eulen Aviation — Tampa International Airport</p>
                <ul className={`mt-2 text-sm ${mutedText} font-mono space-y-1`}>
                  <li><span className="text-yellow-500 mr-1">-</span>Support ticket-counter operations for multiple airline partners.</li>
                  <li><span className="text-yellow-500 mr-1">-</span>Resolve time-sensitive passenger issues across teams.</li>
                  <li><span className="text-yellow-500 mr-1">-</span>Deliver professional service during peak travel periods.</li>
                </ul>
              </div>
              <div className="border-l-2 border-yellow-500/40 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className={`font-mono ${headingText} text-sm font-bold`}>Operations &amp; Customer Support Lead</h3>
                  <span className="font-mono text-xs text-yellow-400 mt-1 sm:mt-0">Nov 2021 – Dec 2025</span>
                </div>
                <p className="font-mono text-green-500 text-xs mt-1">Marvis Enterprises Corporation — Tampa, FL</p>
                <ul className={`mt-2 text-sm ${mutedText} font-mono space-y-1`}>
                  <li><span className="text-yellow-500 mr-1">-</span>Coordinated daily operations and team activities.</li>
                  <li><span className="text-yellow-500 mr-1">-</span>Handled escalated customer concerns and improvements.</li>
                  <li><span className="text-yellow-500 mr-1">-</span>Trained staff on operational processes.</li>
                </ul>
              </div>
              <p className={`font-mono text-xs ${mutedText} italic md:col-span-2`}>+ Patio Operations Manager, Vilo Fence | Outside Sales Representative, Miracle Furniture</p>
            </div>
          )}
        </section>

        {/* Education - full width */}
        <section ref={(el) => (sectionRefs.current["education"] = el)} className={`md:col-span-2 ${cardBg} border ${borderColor} rounded-lg ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-300`}>
          <button onClick={() => toggle("education")} className="w-full text-left flex justify-between items-center px-6 pt-5 pb-3">
            <h2 className="font-mono text-green-400 text-lg font-bold tracking-wider uppercase">Education</h2>
            <span className="font-mono text-green-500 text-sm">{expanded.education ? "[-]" : "[+]"}</span>
          </button>
          <div className="h-px bg-green-500/20 mx-6" />
          {expanded.education && (
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-green-500/40 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className={`font-mono ${headingText} text-sm font-bold`}>University of South Florida</h3>
                  <span className="font-mono text-xs text-yellow-400 mt-1 sm:mt-0">Expected 2026</span>
                </div>
                <p className="font-mono text-green-400 text-xs mt-1">B.S. Business Analytics &amp; Information Systems — Cybersecurity Concentration</p>
                <p className={`font-mono text-xs ${mutedText} mt-2`}><span className="text-green-500">Coursework:</span> Business App Dev, Systems Analysis, Database Design, Data Communications, Python for Analytics, AI &amp; Analytics</p>
              </div>
              <div className="border-l-2 border-green-500/40 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className={`font-mono ${headingText} text-sm font-bold`}>Hillsborough Community College</h3>
                  <span className="font-mono text-xs text-yellow-400 mt-1 sm:mt-0">Completed Aug 2024</span>
                </div>
                <p className="font-mono text-green-400 text-xs mt-1">A.A., Computer Science Pathway</p>
              </div>
            </div>
          )}
        </section>

      </div>

      {/* Footer */}
      <footer className={`border-t border-green-500/20 ${dark ? "bg-gray-950" : "bg-gray-100"} text-center py-6 font-mono text-xs text-green-500/70`}>
        © 2026 Alejandro Martinez | University of South Florida
      </footer>

      {/* Back to Top */}
      {scrollProgress > 10 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 z-50 font-mono text-xs px-4 py-2 ${dark ? "bg-gray-900" : "bg-white"} border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 rounded transition-all duration-200`}
        >
          ^ Top
        </button>
      )}

    </main>
  );
}