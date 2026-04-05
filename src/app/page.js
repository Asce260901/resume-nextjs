"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header
        className={`bg-green-800 text-white text-center py-12 px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <div className="mx-auto mb-4 flex justify-center">
          <img
            src="https://asce260901.github.io/portfolio-site/Usf Logo Png.jpeg"
            alt="USF Logo"
            className="w-24 h-24 object-contain rounded-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Alejandro Martinez</h1>
        <p className="text-sm text-green-100">A.A., Computer Science</p>
        <p className="text-sm text-green-100">Business Analytics and Information Systems</p>
        <p className="text-sm text-green-100">University of South Florida</p>
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Professional Summary</h2>
          <hr className="border-yellow-600 mb-4" />
          <p className="text-sm text-gray-700 leading-relaxed">
            University of South Florida student pursuing a B.S. in Business Analytics & Information Systems with a growing focus
            on web development. Built hands-on projects in HTML, CSS, and JavaScript and brings strong experience in fast-paced
            operations, cross-team coordination, and customer support. Known for learning quickly, communicating clearly, and
            creating practical, user-focused solutions.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Contact</h2>
          <hr className="border-yellow-600 mb-4" />
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Email: <a href="mailto:AJMH2609@gmail.com" className="text-green-700 hover:underline">ajmh2609@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/Asce260901" className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Asce260901</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/alejandro-martinez-a079b0298/" className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/alejandro-martinez</a></li>
            <li>Mobile: <a href="tel:8139705841" className="text-green-700 hover:underline">813-970-5841</a></li>
            <li>Portfolio: <a href="https://asce260901.github.io/portfolio-site/" className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">asce260901.github.io/portfolio-site</a></li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Technical Skills</h2>
          <hr className="border-yellow-600 mb-4" />
          <ul className="text-sm text-gray-700 space-y-1">
            <li><span className="font-bold">Web Development:</span> HTML, CSS, JavaScript, Responsive Web Design, Git, GitHub, GitHub Pages</li>
            <li><span className="font-bold">Data & Business Tools:</span> Python, SQL, Tableau, Excel (functions, PivotTables), Data Visualization</li>
            <li><span className="font-bold">Software & Platforms:</span> VS Code, Word, PowerPoint</li>
            <li><span className="font-bold">Languages:</span> English, Spanish</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Projects</h2>
          <hr className="border-yellow-600 mb-4" />
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900">Portfolio Website <span className="font-normal text-gray-500">| HTML, CSS, JavaScript, GitHub Pages</span></h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
              <li>Built and deployed a responsive portfolio website to present projects, skills, and coursework in a clean, user-friendly format.</li>
              <li>Organized content and layout for clear navigation and a polished presentation across devices.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900">Retail Discount Engine <span className="font-normal text-gray-500">| JavaScript, HTML, CSS</span></h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
              <li>Developed a browser-based pricing tool that applies discount logic and inventory-cycling rules to support business decisions.</li>
              <li>Structured the interface and core logic to keep the tool simple to use and easy to update.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900">Pricing, Order, and Inventory Workflow Tools <span className="font-normal text-gray-500">| JavaScript, HTML, CSS</span></h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
              <li>Created web-based tools for pricing support, customer tracking, order management, and inventory reordering.</li>
              <li>Focused on practical workflows, readable interfaces, and accurate output for small-business use cases.</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Experience</h2>
          <hr className="border-yellow-600 mb-4" />
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="text-sm font-bold text-gray-900">Customer Operations Representative (Airline Services)</h3>
              <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4 sm:whitespace-nowrap">Jan 2026 – Present</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Eulen Aviation, Tampa International Airport, Tampa, FL</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Support ticket-counter and customer service operations for multiple airline partners in a high-volume airport environment.</li>
              <li>Resolve time-sensitive passenger issues by coordinating across teams and following operational and security procedures.</li>
              <li>Balance competing priorities, document outcomes, and deliver professional service during peak travel periods.</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="text-sm font-bold text-gray-900">Operations & Customer Support Lead</h3>
              <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4 sm:whitespace-nowrap">Nov 2021 – Dec 2025</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Marvis Enterprises Corporation, Tampa, FL</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Coordinated daily operations and team activities to maintain service efficiency and customer support quality.</li>
              <li>Handled escalated customer concerns, supported workflow improvements, and helped maintain strong service standards.</li>
              <li>Trained staff on operational processes and contributed to consistent day-to-day execution in a fast-paced setting.</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 italic">Additional Experience: Patio Operations Manager, Vilo Fence | Outside Sales Representative, Miracle Furniture</p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Education</h2>
          <hr className="border-yellow-600 mb-4" />
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="text-sm font-bold text-gray-900">University of South Florida, Tampa, FL</h3>
              <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4 sm:whitespace-nowrap">Expected 2026</span>
            </div>
            <p className="text-sm text-gray-700">B.S. Business Analytics & Information Systems, Cybersecurity Concentration</p>
            <p className="text-sm text-gray-600 mt-1"><span className="font-bold">Relevant Coursework:</span> Business Application Development, Systems Analysis & Design, Database Design & Administration, Business Data Communications, Python for Business Analytics, AI & Analytics for Organizations</p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="text-sm font-bold text-gray-900">Hillsborough Community College, Tampa, FL</h3>
              <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4 sm:whitespace-nowrap">Completed Aug 2024</span>
            </div>
            <p className="text-sm text-gray-700">A.A., Computer Science Pathway</p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-4 text-xs">
        © 2026 Alejandro Martinez | University of South Florida
      </footer>

    </main>
  );
}