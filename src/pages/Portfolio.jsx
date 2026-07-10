import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { title: "Sculpted Elegance", category: "Evening Wear", location: "Jakarta", image: "foto1.jpg", size: "tall" },
  { title: "Quiet Silhouettes", category: "Modest Wear", location: "Bandung", image: "foto2.jpg", size: "standard" },
  { title: "Coastal Form", category: "Resort Wear", location: "Bali", image: "foto3.jpg", size: "wide" },
  { title: "Little Reverie", category: "Kids Wear", location: "Surabaya", image: "foto4.jpg", size: "standard" },
  { title: "Runway No. 05", category: "Evening Wear", location: "Singapore", image: "foto5.jpg", size: "tall" },
  { title: "Modern Heritage", category: "Modest Wear", location: "Kuala Lumpur", image: "foto6.jpg", size: "wide" },
  { title: "Essential Tailoring", category: "Ready to Wear", location: "Jakarta", image: "foto7.jpg", size: "standard" },
  { title: "Earth & Thread", category: "Ready to Wear", location: "Yogyakarta", image: "foto8.jpg", size: "standard" },
  { title: "After Dark", category: "Evening Wear", location: "Dubai", image: "foto9.jpg", size: "wide" },
];

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export default function Portfolio() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const visibleProjects = category === "All"
    ? projects
    : projects.filter((project) => project.category === category);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="section-kicker">SELECTED WORKS · 2024—2026</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Collections Crafted with
                <span className="text-gold"> Purpose & Precision</span>
              </h1>
            </div>
            <div className="md:justify-self-end">
              <p className="max-w-md text-sm leading-7 text-stone-600">
                A curated selection of collections developed with visionary
                brands—from first concept to the final runway.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-serif text-3xl text-gold">09</span>
                <span className="text-[10px] leading-5 tracking-[0.15em] text-stone-500">FEATURED<br />PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="portfolio-filter" role="group" aria-label="Filter portfolio">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "portfolio-filter-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="portfolio-gallery mt-10">
          {visibleProjects.map((project, index) => (
            <button
              type="button"
              className={`portfolio-project portfolio-project-${project.size}`}
              key={project.title}
              onClick={() => setSelected(project)}
              aria-label={`View ${project.title}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${project.image}`}
                alt={project.title}
                loading="lazy"
              />
              <span className="portfolio-project-shade" />
              <span className="portfolio-project-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="portfolio-project-info">
                <span className="portfolio-project-category">{project.category} · {project.location}</span>
                <span className="portfolio-project-title">{project.title}</span>
                <span className="portfolio-project-view">VIEW PROJECT <i>↗</i></span>
              </span>
            </button>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="py-20 text-center text-stone-500">No projects in this category.</p>
        )}
      </section>

      <section className="portfolio-closing">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-20">
          <p className="section-kicker">YOUR COLLECTION COULD BE NEXT</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Have a Vision Worth Creating?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
            Let&apos;s transform your ideas into a collection that carries your brand&apos;s unique point of view.
          </p>
          <Link to="/contact" className="services-cta-button mt-8 inline-flex">
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {selected && (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button type="button" className="portfolio-lightbox-close" aria-label="Close project" onClick={() => setSelected(null)}>×</button>
          <div className="portfolio-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={`${import.meta.env.BASE_URL}images/${selected.image}`} alt={selected.title} />
            <div className="portfolio-lightbox-copy">
              <p className="section-kicker">{selected.category} · {selected.location}</p>
              <h2 className="mt-3 font-serif text-3xl">{selected.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Creative development, sampling, and production by Aireta Studio.
                Every detail was thoughtfully developed to reflect the collection&apos;s identity.
              </p>
              <Link to="/contact" className="gold-link mt-6 inline-flex" onClick={() => setSelected(null)}>
                CREATE A SIMILAR PROJECT <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
