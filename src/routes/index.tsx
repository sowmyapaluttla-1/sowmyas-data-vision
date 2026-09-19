import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, BarChart3, BriefcaseBusiness, Database, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, PieChart, Quote, X } from "lucide-react";
import { useEffect, useState } from "react";
const portraitUrl = "/images/photo.jpeg";
const employeePreviewUrl = "/images/employee-dashboard.png";
const salesPreviewUrl = "/images/sales-sql-analysis.png";
const universityPreviewUrl = "/images/university-powerbi-dashboard.png";
const churnPreviewUrl = "/images/customer-churn-analysis.png";

const RESUME_URL = "https://drive.google.com/file/d/1i7eGaoDjjSVz3V-WGM8V_YVbAslmxy8B/view?usp=sharing";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Sowmya Paluttla — Data Analyst & Business Analytics" },
      { name: "description", content: "Explore Sowmya Paluttla's data analytics portfolio, experience, and projects using Excel, SQL, Power BI, and Python." },
      { property: "og:title", content: "Sowmya Paluttla — Data Analyst" },
      { property: "og:description", content: "Data analytics portfolio featuring business intelligence, dashboards, reporting, and data visualization projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Experience", "experience"], ["Projects", "projects"], ["Education", "education"], ["Contact", "contact"]];

const skills = [
  ["Programming & Database", ["Python", "MySQL"]],
  ["Data Analysis & BI", ["Power BI", "Power Query", "DAX"]],
  ["Advanced Excel", ["Pivot Tables", "VLOOKUP", "XLOOKUP", "Data Reporting"]],
  ["Analytics", ["Data Cleaning", "Data Validation", "Trend Analysis", "Data Visualization"]],
  ["Professional Skills", ["Analytical Thinking", "Problem Solving", "Attention to Detail", "Communication", "Adaptability", "Storytelling"]],
];

const projects = [
  { n: "01", title: "Employee Report Excel Dashboard", tech: "Microsoft Excel", desc: "Interactive employee reporting dashboard created using Excel for analyzing workforce performance, departments, task status, projects, working mode, and operational metrics.", url: "https://github.com/sowmyapaluttla-1/employee-report-excel-dashboard", image: employeePreview.url },
  { n: "02", title: "Sales Data SQL Analysis", tech: "SQL / MySQL", desc: "SQL-based analysis project focused on extracting, analyzing, and generating business insights from sales data.", url: "https://github.com/sowmyapaluttla-1/sales-data-sql-analysis", image: salesPreview.url },
  { n: "03", title: "University Performance Power BI Dashboard", tech: "Power BI / DAX", desc: "Interactive Power BI dashboard designed to analyze university performance data and present insights through data visualization and business intelligence.", url: "https://github.com/sowmyapaluttla-1/university-performance-powerbi-dashboard", image: universityPreview.url },
  { n: "04", title: "Customer Churn Python Analysis", tech: "Python / Pandas / NumPy / Matplotlib", desc: "End-to-end customer analytics project involving data cleaning, preprocessing, feature engineering, exploratory analysis, churn analysis, engagement analysis, revenue analysis, and business insights.", url: "https://github.com/sowmyapaluttla-1/customer-churn-python-analysis", image: churnPreview.url },
];

const experiences = [
  { n: "01", role: "Associate, ML Data Operations", company: "Amazon", date: "Oct 2025 – Dec 2025", items: ["Performed quality analysis on large-scale datasets to maintain data accuracy and operational quality.", "Audited and annotated datasets using internal tools while following quality standards for Machine Learning workflows.", "Identified data inconsistencies and errors through structured quality checks to improve dataset reliability.", "Processed high-volume data workflows to improve accuracy, efficiency, and consistency.", "Collaborated with cross-functional teams to support reliable data processing and quality assurance.", "Contributed to process improvement by maintaining high precision and accuracy in data handling activities."] },
  { n: "02", role: "Process Associate", company: "Genpact", date: "Sep 2024 – Sep 2025", items: ["Monitored operational performance metrics and SLA breaches to ensure timely service delivery and process efficiency.", "Prepared and maintained Excel-based KPI dashboards for performance monitoring and management reporting.", "Performed data validation, quality checks, and accuracy verification to ensure reliable operational data.", "Analyzed workflow and operational data to identify trends and process improvement opportunities.", "Collaborated with cross-functional teams and participated in weekly client review meetings to present performance insights.", "Maintained process documentation, generated operational reports, and ensured adherence to quality standards and business processes."] },
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <main id="home" className="overflow-hidden">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="editorial-wrap grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#home" className="font-display text-xl font-black">SOWMYA<span className="text-primary">.</span></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold uppercase transition-colors hover:text-primary">{label}</a>)}
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground transition-colors hover:bg-foreground">Resume</a>
        </nav>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-10 place-items-center border border-border lg:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      <div className={`grid overflow-hidden border-t border-border bg-background transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><nav className="min-h-0 editorial-wrap flex flex-col py-3">{nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-bold uppercase">{label}</a>)}<a href={RESUME_URL} target="_blank" rel="noreferrer" className="mt-3 bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-primary-foreground">Download Resume</a></nav></div>
    </header>

    <section className="editorial-wrap relative py-7 pb-16 md:py-10 md:pb-24">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest"><span>✦ &nbsp; Data Analyst</span><span className="hidden text-primary sm:block">Open to data analytics opportunities →</span></div>
      <h1 className="display-title relative z-0 mt-7 text-[19vw] sm:text-[16vw] lg:text-[12rem]">DATA<br className="sm:hidden"/> ANALYST</h1>
      <div className="relative z-10 mt-4 grid items-end gap-7 md:mt-2 md:grid-cols-[0.9fr_1.15fr] lg:mt-6">
        <div className="order-2 max-w-lg pb-3 md:order-1">
          <p className="text-xs font-bold uppercase">Hello, I'm</p>
          <h2 className="mt-2 font-serif text-5xl leading-none sm:text-6xl">Sowmya<br/><span className="text-primary">Paluttla</span></h2>
          <p className="mt-5 text-xs font-bold uppercase text-primary">Data Analyst | Business Analytics | Data Visualization</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">I turn raw data into actionable insights through analysis, visualization, and reporting.</p>
          <div className="mt-6 flex flex-wrap gap-3"><a href="#projects" className="bg-foreground px-5 py-3 text-xs font-bold uppercase text-background transition-colors hover:bg-primary">View My Projects</a><a href={RESUME_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-foreground px-5 py-3 text-xs font-bold uppercase transition-colors hover:border-primary hover:text-primary">Download Resume <ArrowDownToLine size={15}/></a></div>
        </div>
        <div className="order-1 relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden bg-paper-deep md:order-2"><img src={portrait.url} alt="Sowmya Paluttla, Data Analyst" className="relative h-full w-full object-cover object-[center_28%]"/><span className="absolute bottom-4 right-4 bg-background px-3 py-2 text-[9px] font-bold uppercase">Hyderabad, Telangana</span></div>
      </div>
    </section>

    <section id="about" className="editorial-wrap section-rule reveal scroll-mt-20 py-16 md:py-24"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase text-primary">01 / Profile</p><h2 className="mt-4 font-serif text-5xl md:text-6xl">About me</h2></div><div><p className="max-w-3xl text-xl leading-8 md:text-2xl md:leading-10">An analytical and detail-oriented professional with hands-on experience in <span className="text-primary">data quality analysis, operational reporting, and process optimization</span> at Amazon and Genpact. I use SQL, Python, Power BI, and Advanced Excel to clean data, identify patterns, build dashboards, and turn findings into useful business insights.</p><div className="mt-10 grid grid-cols-2 border-l border-t border-border md:grid-cols-4">{[[MapPin,"Location","Hyderabad, Telangana"],[GraduationCap,"Education","B.Tech CSE (AI & ML)"],[BriefcaseBusiness,"Experience","Amazon + Genpact"],[BarChart3,"Focus","Data Analytics & BI"]].map(([Icon,label,value]) => { const C = Icon as typeof MapPin; return <div key={String(label)} className="min-h-36 border-b border-r border-border p-4"><C className="text-primary" size={20}/><p className="mt-7 text-[10px] font-bold uppercase text-muted-foreground">{String(label)}</p><p className="mt-2 text-sm font-semibold">{String(value)}</p></div>})}</div></div></div></section>

    <section id="skills" className="editorial-wrap section-rule reveal scroll-mt-20 py-16 md:py-24"><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase text-primary">02 / Capabilities</p><h2 className="display-title mt-5 text-4xl md:text-6xl">Skills &<br/><span className="serif-accent text-primary">Expertise</span></h2></div><div className="grid sm:grid-cols-2">{skills.map(([category,items], index) => <article key={String(category)} className={`border-t border-border py-6 sm:px-6 ${index % 2 === 1 ? "sm:border-l" : ""}`}><p className="font-serif text-xl">{category as string}</p><div className="mt-4 flex flex-wrap gap-2">{(items as string[]).map(skill => <span key={skill} className="border border-border bg-card px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary">{skill}</span>)}</div></article>)}</div></div></section>

    <section id="experience" className="bg-foreground text-background"><div className="editorial-wrap reveal scroll-mt-20 py-16 md:py-24"><div className="flex items-end justify-between border-b border-background/20 pb-8"><div><p className="text-xs font-bold uppercase text-rust-soft">03 / Career</p><h2 className="display-title mt-4 text-6xl md:text-8xl">Experience</h2></div><BriefcaseBusiness className="hidden text-rust-soft md:block" size={40}/></div>{experiences.map(exp => <article key={exp.n} className="grid gap-6 border-b border-background/20 py-9 lg:grid-cols-[0.18fr_0.55fr_1.27fr]"><span className="font-serif text-4xl text-rust-soft">{exp.n}</span><div><h3 className="text-xl font-semibold">{exp.role}</h3><p className="mt-2 text-sm text-rust-soft">{exp.company} · {exp.date}</p></div><ul className="grid gap-3 text-sm leading-6 text-background/70 md:grid-cols-2">{exp.items.map(item => <li key={item} className="border-l border-rust-soft/50 pl-4">{item}</li>)}</ul></article>)}</div></section>

    <section id="projects" className="editorial-wrap reveal scroll-mt-20 py-20 md:py-28"><div className="grid items-end gap-6 border-b border-border pb-8 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase text-primary">04 / Portfolio</p><h2 className="display-title mt-5 text-5xl md:text-7xl">Selected<br/><span className="serif-accent text-primary">Projects</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Four practical analytics projects across spreadsheets, databases, business intelligence, and Python.</p></div><div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">{projects.map((project) => <article key={project.n} className="group relative transition-transform duration-300 hover:-translate-y-1"><a href={project.url} target="_blank" rel="noreferrer" className="relative block aspect-[16/9] overflow-hidden border border-border bg-card transition-colors group-hover:border-primary"><img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"/><span className="absolute left-3 top-3 bg-foreground px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-background">{project.tech}</span><span className="absolute right-3 top-3 grid size-9 place-items-center bg-background text-foreground"><ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18}/></span></a><div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] gap-4"><span className="font-serif text-3xl text-primary">{project.n}</span><div><h3 className="text-xl font-semibold leading-tight">{project.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.desc}</p><a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase hover:text-primary"><Github size={15}/> View on GitHub <ArrowUpRight size={14}/></a></div></div></article>)}</div></section>

    <section className="section-rule bg-paper-deep"><div className="editorial-wrap reveal grid gap-8 py-16 md:grid-cols-[auto_1fr] md:py-24"><Quote className="text-primary" size={72} strokeWidth={1}/><div><h2 className="display-title max-w-5xl text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">I don't just analyze data.<br/><span className="serif-accent text-primary">I turn data into insights.</span></h2><p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground">From cleaning and validating raw data to building dashboards and identifying trends, I focus on making data easier to understand and useful for decision-making.</p></div></div></section>

    <section className="editorial-wrap section-rule reveal py-16 md:py-20"><div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]"><div><p className="text-xs font-bold uppercase text-primary">05 / Toolkit</p><h2 className="mt-3 font-serif text-4xl">Tools I use</h2></div><div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3">{["Python","SQL / MySQL","Power BI","Power Query","DAX","Microsoft Excel","Pandas","NumPy","Matplotlib"].map((tool,index) => <div key={tool} className="flex min-h-20 items-center gap-3 border-b border-r border-border px-4 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground">{index % 3 === 0 ? <Database size={18}/> : index % 3 === 1 ? <BarChart3 size={18}/> : <PieChart size={18}/>} {tool}</div>)}</div></div></section>

    <section id="education" className="editorial-wrap section-rule reveal scroll-mt-20 py-16 md:py-24"><div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]"><div><p className="text-xs font-bold uppercase text-primary">06 / Foundation</p><h2 className="display-title mt-5 text-6xl md:text-8xl">Education</h2></div><div className="border-l-2 border-primary pl-6 md:pl-10"><p className="font-serif text-3xl md:text-4xl">B.Tech in Computer Science <span className="text-primary">(AI & ML)</span></p><p className="mt-5 text-lg">Swami Vivekananda Institute of Technology, Telangana</p><div className="mt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-5 text-sm"><span><b>Duration</b><br/>2020 – 2024</span><span><b>CGPA</b><br/>7.06 / 10</span></div></div></div></section>

    <section className="bg-primary text-primary-foreground"><div className="editorial-wrap reveal grid items-center gap-7 py-12 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase">Career document</p><h2 className="mt-2 font-serif text-4xl">My Resume</h2><p className="mt-3 text-sm text-primary-foreground/80">Explore my experience, skills, education, and data analytics projects.</p></div><a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 bg-background px-6 py-4 text-xs font-bold uppercase text-foreground transition-transform hover:-translate-y-1">Download Resume <ArrowDownToLine size={17}/></a></div></section>

    <section id="contact" className="editorial-wrap reveal scroll-mt-20 py-16 md:py-24"><div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]"><div><p className="text-xs font-bold uppercase text-primary">07 / Contact</p><h2 className="display-title mt-6 text-4xl md:text-6xl lg:text-7xl">Let's create<br/><span className="serif-accent text-primary">something useful</span></h2><p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">Have a data analytics opportunity, project, or collaboration in mind? I'd love to connect.</p></div><div className="flex flex-col justify-end"><div className="border-y border-border py-6"><a href="mailto:sowmyapaluttla@gmail.com" className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-3 hover:text-primary"><Mail size={19}/><span className="truncate text-sm sm:text-base">sowmyapaluttla@gmail.com</span></a><a href="https://www.linkedin.com/in/sowmya-paluttla/" target="_blank" rel="noreferrer" className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-3 hover:text-primary"><Linkedin size={19}/><span className="truncate text-sm sm:text-base">linkedin.com/in/sowmya-paluttla</span></a><a href="https://github.com/sowmyapaluttla-1" target="_blank" rel="noreferrer" className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-3 hover:text-primary"><Github size={19}/><span className="truncate text-sm sm:text-base">github.com/sowmyapaluttla-1</span></a></div><div className="mt-6 flex flex-wrap gap-2"><a href="mailto:sowmyapaluttla@gmail.com" className="bg-foreground px-5 py-3 text-xs font-bold uppercase text-background hover:bg-primary">Email Me</a><a href="https://www.linkedin.com/in/sowmya-paluttla/" target="_blank" rel="noreferrer" className="border border-foreground px-5 py-3 text-xs font-bold uppercase hover:border-primary hover:text-primary">LinkedIn</a><a href="https://github.com/sowmyapaluttla-1" target="_blank" rel="noreferrer" className="border border-foreground px-5 py-3 text-xs font-bold uppercase hover:border-primary hover:text-primary">GitHub</a></div></div></div></section>

    <footer className="border-t border-border"><div className="editorial-wrap grid gap-5 py-8 text-sm sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><p className="font-display text-lg font-black">Sowmya Paluttla</p><p className="text-xs text-muted-foreground">Data Analyst | Business Analytics</p></div><p className="text-xs text-muted-foreground">© 2026 Sowmya Paluttla. All rights reserved.</p><div className="flex gap-3"><a aria-label="LinkedIn" href="https://www.linkedin.com/in/sowmya-paluttla/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a><a aria-label="GitHub" href="https://github.com/sowmyapaluttla-1" target="_blank" rel="noreferrer"><Github size={18}/></a></div></div></footer>
  </main>;
}