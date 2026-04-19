import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Layers, Zap, Info, X, Terminal } from 'lucide-react';

const projects = [
  {
    title: "Moulya CMS",
    description: "Academic administration system digitizing attendance and internal marks workflows.",
    fullDescription: "A comprehensive web-based academic administration system that digitizes attendance tracking, internal marks management, and deficiency reporting, fully replacing obsolete paper workflows with a highly scalable centralized system.",
    contributions: [
      "Implemented attendance-shortage and marks-deficiency calculation engines to automatically flag specific students.",
      "Engineered secure, role-based dashboards with strict access separation for management and lecturers.",
      "Integrated bulk Excel upload pipelines to parse and import large student/lecturer datasets exponentially faster.",
      "Developed complex subject-to-student mapping architectures to seamlessly manage assigned enrollments.",
      "Optimized the user interface using Tailwind CSS for robust cross-device responsiveness."
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "SQLite", "JavaScript", "Tailwind CSS", "Openpyxl", "Jinja2"],
    link: "http://apps.bbhegdecollege.com:8000"
  },
  {
    title: "Student Portal",
    description: "Mobile-first digital identity platform for viewing real-time academic stats securely.",
    fullDescription: "A mobile-first student portal serving as a digital student identity and academic access point. It allows users to view attendance, internal marks, and profile details securely through a centralized and highly intuitive interface.",
    contributions: [
      "Secured authentication flows by implementing strict Roll Number and DOB-based verification protocols.",
      "Built an intuitive student dashboard rendering attendance stats and marks in dynamic, responsive data cards.",
      "Engineered robust data synchronization and migration pipelines between the core database and portal nodes.",
      "Developed isolated modules for privacy-focused profile viewing, attendance history, and marks accessibility.",
      "Designed a highly consistent and fluid UI/UX using Tailwind CSS tailored for mobile environments."
    ],
    tech: ["Python", "Flask", "MongoDB", "JavaScript", "Tailwind CSS", "Jinja2"],
    link: "http://apps.bbhegdecollege.com:7080"
  },
  {
    title: "BBHC Bazaar",
    description: "Multi-vendor e-commerce platform supporting real-time notifications and JWT authentication.",
    fullDescription: "An expansive multi-role marketplace platform architected with separate encrypted portals for Administrators, Sellers, and Users. The system supports full-scale product listings, ordering workflows, and real-time environment updates.",
    contributions: [
      "Architected and maintained seller portal subsystems for dynamic product listing and order node handling.",
      "Integrated reliable real-time order notifications and environmental updates leveraging Socket.IO.",
      "Oversaw and contributed to rigorous authentication and session handling using standard JWT protocols.",
      "Elevated dashboard UI/UX with fluid, responsive layouts and modern React component structures."
    ],
    tech: ["Flask", "JWT", "MongoDB", "React", "Redux", "Socket.IO"],
    github: "https://github.com/erru-2005/BBHC_BAZAR.git"
  },
  {
    title: "Chakshu",
    description: "Smart student registration platform automating workflows with localized image processing.",
    fullDescription: "An advanced student data management system designed to radically streamline the registration process. It incorporates localized image processing, intelligent bulk Excel handling, and automated verification workflows.",
    contributions: [
      "Engineered a localized face-detection photo processing module to automatically standardize large batches of student profile images.",
      "Implemented resilient bulk Excel import/export logic paired with deep validations to eliminate duplicate entries.",
      "Designed a highly modular and maintainable backend architecture utilizing Flask blueprints.",
      "Constructed secure OTP-based verification workflows combined with advanced session handling frameworks.",
      "Developed rapid search and filter utilities for instantaneous record retrieval."
    ],
    tech: ["Python", "Flask", "OpenCV", "Pandas", "Firebase"],
    link: "http://apps.bbhegdecollege.com:5000"
  },
  {
    title: "Graahi",
    description: "Biometric attendance system driven by real-time facial recognition pipelines.",
    fullDescription: "A sophisticated biometric attendance system driven by facial-recognition AI. It features a full web interface for seamless faculty check-in/check-out execution and robust record management.",
    contributions: [
      "Developed the real-time recognition interface and engineered fluid attendance workflow execution screens.",
      "Implemented comprehensive registration and real-time editing utilities for dynamic faculty records.",
      "Assisted in major recognition logic optimizations and the formulation of detailed reporting utilities."
    ],
    tech: ["Python", "FastAPI", "OpenCV", "InsightFace", "NumPy"],
    github: "https://github.com/erru-2005/Attendence_System.git"
  },
  {
    title: "E-Janna Setu",
    description: "Digital library infrastructure employing barcode processing and automated data pipelines.",
    fullDescription: "An advanced library management infrastructure built to handle book issuing/returns, full inventory tracking, and transaction history leveraging rapid barcode-based searching and automated data pipelines.",
    contributions: [
      "Enforced strict student and faculty identity validation algorithms tied to institutional IDs.",
      "Constructed rapid barcode and accession-based search flows to drastically reduce lookup latency.",
      "Engineered automated Excel-to-database synchronization scripts to circumvent manual data input entirely.",
      "Implemented comprehensive transaction exporting and report generation for system auditing."
    ],
    tech: ["Python", "Flask", "MongoDB", "Pandas", "Barcode API"],
    github: "https://github.com/erru-2005/library_Mgt_BBHC.git"
  },
  {
    title: "Result BBHC",
    description: "Analytical web application to process and consolidate complex semester results.",
    fullDescription: "A data-intensive Streamlit-based web application tailored to securely process massive semester result Excel matrices, formulate consolidated outputs, and elegantly handle re-exam data integrations.",
    contributions: [
      "Developed a fluid Streamlit UI engineered for high-volume result processing, featuring real-time previews and progress telemetries.",
      "Deployed automated backup protocols for uploaded and processed matrices leveraging timestamp-based encryption.",
      "Integrated deep search and dimensional filtering mechanics linked to JSON metadata tracking.",
      "Designed precision re-exam update pipelines matching massive student indices via USN mapping."
    ],
    tech: ["Python", "Streamlit", "Pandas", "Openpyxl"],
    link: "http://apps.bbhegdecollege.com:5001"
  },
  {
    title: "Online Exam Sys",
    description: "Secure, highly-controlled online exam delivery node featuring automated scoring analytics.",
    fullDescription: "A highly resilient Flask-based exam delivery environment. The system orchestrates secure logins, precision-timed exams, aggressive anti-cheating controls, automated scoring algorithms, and robust admin reporting mechanisms.",
    contributions: [
      "Architected the secure, end-to-end exam workflow encompassing authentication, delivery, submission, and output.",
      "Implemented rigid timed-exam architectures alongside proactive anti-cheating anomaly detection.",
      "Integrated seamless Excel-based question configuration systems mapped directly to automated scoring microservices.",
      "Developed the administrative console for aggregated result telemetry and secure data exporting."
    ],
    tech: ["Python", "Flask", "Firebase", "HTML/JS"],
    link: "#"
  },
  {
    title: "Tech Manthan 5.0",
    description: "Official web infrastructure powering a dynamic, multi-event technical symposium.",
    fullDescription: "The official, robust web application engineered specifically for a premier college technical fest. It features a scalable architecture supporting distinct multi-event hubs, interconnected dynamic galleries, and centralized registration nodes.",
    contributions: [
      "Architected complex Flask routing paths and scalable Jinja2 template structures to handle massive visitor throughput.",
      "Programmed customized introduction sequence telemetry via sophisticated client-side cookie protocols.",
      "Established fully integrated MongoDB pipelines capable of handling live, dynamic content injection across all nodes."
    ],
    tech: ["Python", "Flask", "Jinja2", "MongoDB"],
    github: "https://github.com/erru-2005/TECH-MANTHAN-WEB.git"
  }
];

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur z-0
        ${index % 3 === 0 ? 'bg-neonPurple' : index % 3 === 1 ? 'bg-neonPink' : 'bg-neonBlue'}`} 
      />
      
      <div className="relative z-10 glass-card p-6 md:p-8 h-full flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
        
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-neonPurple/20 group-hover:border-neonPurple/50 transition-colors">
               <Layers className="text-white/70 group-hover:text-white" size={24} />
            </div>
            <div className="flex gap-4 relative z-20">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:scale-110 transition-transform"><GitBranch size={20} /></a>}
              {project.link && project.link !== "#" && <a href={project.link} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:scale-110 transition-transform"><ExternalLink size={20} /></a>}
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:neon-text transition-all">{project.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="text-[10px] font-mono px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && <span className="text-[10px] font-mono px-2 py-1 rounded-full text-white/30">+{project.tech.length - 4}</span>}
          </div>
          
          <div className="grid grid-cols-2 gap-2 relative z-20">
             <button 
                onClick={onOpen}
                className="w-full py-3 rounded-xl border border-neonPurple/50 group-hover:bg-neonPurple/10 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
             >
                <Info size={14} className="text-neonPurple" /> Details
             </button>
             
             <a 
                href={project.link && project.link !== "#" ? project.link : project.github || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-xl border border-white/10 hover:border-neonBlue/50 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-neonBlue/10 transition-all hover:scale-[1.02]"
             >
                <Zap size={14} className="text-neonBlue" /> Launch
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass border-t border-neonPurple/50 shadow-[0_-10px_60px_rgba(168,85,247,0.15)] bg-[#0a0a0a]/95 rounded-3xl"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-10">
           <div className="flex items-center gap-4 mb-2">
              <div className="p-2 rounded-lg bg-neonPurple/20 border border-neonPurple/50"><Terminal size={20} className="text-neonPurple" /></div>
              <h4 className="text-neonPurple font-mono text-xs tracking-[0.3em] uppercase">Project Specifications</h4>
           </div>
           
           <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-4">{project.title}</h2>
           
           <div className="prose prose-invert max-w-none">
             <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 border-l-2 border-white/10 pl-6">
                {project.fullDescription}
             </p>
             
             <h3 className="text-xl font-bold mb-6 text-white tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-neonPink rounded-full"></span> Core Contributions & Architecture
             </h3>
             <ul className="space-y-4 mb-10">
               {project.contributions.map((point, idx) => (
                 <li key={idx} className="flex items-start gap-4 text-white/70 text-sm md:text-base leading-relaxed">
                   <div className="mt-1.5 w-1 h-1 bg-neonPink rounded-full flex-shrink-0" />
                   <span>{point}</span>
                 </li>
               ))}
             </ul>
             
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/50 mb-4">Technology Stack Matrix</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-4 py-2 rounded-lg bg-black border border-white/10 text-white/80 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                      {t}
                    </span>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  return (
    <section id="projects" className="relative w-full py-32 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h4 className="text-neonPink font-mono text-sm tracking-[0.4em] mb-4 uppercase">Repositories & Deployments</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            PRO<span className="neon-text">JECTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              index={idx} 
              onOpen={() => setSelectedProject(project)} 
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-white/40 font-mono text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
             * System nodes act independently. Click 'Details' to view full engineering specifications or 'Launch' to access the live deployment.
           </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
