import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom Design Consultation",
    description:
      "Konsultasi personal untuk menerjemahkan ide, identitas brand, dan target pasar menjadi konsep koleksi yang kuat.",
    icon: "✦",
  },
  {
    title: "Custom Pattern Design",
    description:
      "Pembuatan pola yang presisi dan disesuaikan dengan desain, ukuran, serta karakter bahan pilihan Anda.",
    icon: "◇",
  },
  {
    title: "Custom Embroidery",
    description:
      "Detail bordir eksklusif dengan hasil rapi untuk menghadirkan ciri khas yang berkelas pada setiap produk.",
    icon: "✣",
  },
  {
    title: "Production",
    description:
      "Proses produksi end-to-end dengan kontrol kualitas yang konsisten, mulai dari sampel hingga produk akhir.",
    icon: "⌁",
  },
  {
    title: "Photoshoot Handling",
    description:
      "Penanganan photoshoot produk dari konsep kreatif, styling, hingga visual siap digunakan untuk promosi.",
    icon: "◎",
  },
  {
    title: "Video Campaign Handling",
    description:
      "Produksi video campaign yang membangun cerita brand dan menampilkan koleksi secara lebih hidup dan menarik.",
    icon: "▷",
  },
  {
    title: "Custom Website",
    description:
      "Website khusus yang elegan, responsif, dan dirancang untuk memperkuat kehadiran digital bisnis fashion Anda.",
    icon: "⌘",
  },
  {
    title: "Brand Identity & Creative Direction",
    description:
      "Pengembangan identitas visual dan arah kreatif yang konsisten agar brand Anda tampil kuat, autentik, dan mudah dikenali.",
    icon: "✧",
  },
  {
    title: "Packaging & Label Design",
    description:
      "Desain kemasan, hang tag, dan label pakaian yang memperkuat karakter brand serta meningkatkan pengalaman pelanggan.",
    icon: "▱",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <p className="section-kicker">OUR SERVICES</p>
          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              From First Sketch to a
              <span className="text-gold"> Remarkable Brand</span>
            </h1>
            <p className="max-w-lg text-sm leading-7 text-stone-600 md:justify-self-end md:text-base">
              Solusi kreatif dan produksi terpadu untuk membantu brand Anda
              bertumbuh—dari pengembangan desain hingga kampanye dan pengalaman
              digital.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="flex items-start justify-between">
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-8 font-serif text-2xl leading-snug">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {service.description}
              </p>
              <Link to="/contact" className="service-link">
                DISCUSS THIS SERVICE <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-20">
          <p className="section-kicker">LET'S WORK TOGETHER</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600">
            Ceritakan kebutuhan dan visi brand Anda. Kami akan membantu memilih
            layanan serta proses yang paling tepat.
          </p>
          <Link to="/contact" className="services-cta-button mt-8 inline-flex">
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
