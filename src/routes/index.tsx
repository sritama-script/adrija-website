import { createFileRoute } from "@tanstack/react-router";
import drAdrija from "@/assets/dr-adrija.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const PRIMARY = "#4b6549";
const PRIMARY_CONTAINER = "#8da989";
const ON_PRIMARY_CONTAINER = "#263e25";
const SURFACE = "#f9f9ff";
const SURFACE_CONTAINER = "#e6eeff";
const SURFACE_CONTAINER_LOW = "#eff3ff";
const SECONDARY = "#5b5f5c";
const SECONDARY_CONTAINER = "#dde0dd";
const ON_SURFACE = "#121c2a";
const ON_SURFACE_VARIANT = "#434841";
const OUTLINE_VARIANT = "#c3c8be";
const PRIMARY_FIXED_DIM = "#b1ceac";

const Icon = ({ name, size = 24, fill = 0, className = "" }: { name: string; size?: number; fill?: number; className?: string }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontSize: size, fontVariationSettings: `'FILL' ${fill}, 'wght' 300, 'GRAD' 0, 'opsz' 24` }}
  >
    {name}
  </span>
);

const badges = [
  { icon: "verified", label: "5.0 Rated Clinic" },
  { icon: "history_edu", label: "8+ Years Experience" },
  { icon: "vital_signs", label: "Integrated Treatment" },
  { icon: "videocam", label: "Online Consultation" },
];

const services = [
  { icon: "spa", title: "Lifestyle Treatment", desc: "Holistic approaches to manage chronic conditions through dietary adjustments and mindset shifts." },
  { icon: "content_cut", title: "Hair Loss Treatment", desc: "Natural homeopathic solutions to address thinning hair, scalp health, and nutritional deficiencies." },
  { icon: "face_6", title: "Skin Disorder Treatment", desc: "Addressing acne, eczema, and psoriasis from within for lasting clarity and skin vitality." },
  { icon: "woman", title: "Women's Health", desc: "Specialized care for hormonal balance, PCOD/PCOS, and overall reproductive wellness." },
  { icon: "nutrition", title: "Gut Health & Nutrition", desc: "Custom diet plans to optimize digestion, immunity, and metabolic energy levels." },
  { icon: "fitness_center", title: "Weight Management", desc: "Sustainable weight loss or gain strategies through integrated medicine and therapeutic dietetics." },
];

const testimonials = [
  { text: "Dr. Adrija's nutrition plan changed my energy levels completely. Her approach is very practical.", name: "— Sneha R." },
  { text: "I finally found relief for my chronic skin issue after years of trying other treatments. Highly recommend!", name: "— Amit K." },
  { text: "Very professional and empathetic. She takes the time to listen to everything.", name: "— Priya M." },
];

function Index() {
  return (
    <div className="font-body" style={{ backgroundColor: SURFACE, color: ON_SURFACE }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm"
        style={{ backgroundColor: "rgba(249,249,255,0.8)" }}
      >
        <div className="max-w-[1120px] mx-auto flex justify-between items-center px-5 md:px-6 h-16">
          <div className="font-headline text-2xl select-none" style={{ color: PRIMARY }}>
            Dr. Adrija Chakraborty
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-bold tracking-wide border-b-2 py-1" style={{ color: PRIMARY, borderColor: PRIMARY }}>HOME</a>
            <a href="#services" className="text-sm tracking-wide" style={{ color: SECONDARY }}>SERVICES</a>
            <a href="#profile" className="text-sm tracking-wide" style={{ color: SECONDARY }}>PROFILE</a>
            <a href="#contact" className="text-sm tracking-wide" style={{ color: SECONDARY }}>CONTACT</a>
          </nav>
          <button
            className="px-6 py-2 rounded-xl text-sm font-medium shadow-sm hover:scale-105 active:opacity-80 transition-all"
            style={{ backgroundColor: PRIMARY_CONTAINER, color: ON_PRIMARY_CONTAINER }}
          >
            Book Appointment
          </button>
        </div>
      </header>

      <main className="mt-16 overflow-x-hidden">
        {/* Hero */}
        <section id="home" className="min-h-[819px] flex items-center py-20 px-5" style={{ backgroundColor: SURFACE }}>
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-8">
              <h1 className="font-headline text-4xl md:text-5xl leading-tight" style={{ color: ON_SURFACE, letterSpacing: "-0.02em", fontWeight: 600 }}>
                Prevention is the <span className="italic" style={{ color: PRIMARY }}>strongest</span> medicine.
              </h1>
              <p className="font-headline text-2xl leading-relaxed" style={{ color: SECONDARY, fontWeight: 500 }}>
                Dr. Adrija's Clinic — Healthcare | Nutrition | Holistic Wellness.
              </p>
              <p className="text-lg leading-relaxed max-w-lg" style={{ color: ON_SURFACE_VARIANT }}>
                Treating the individual as a whole, not just the symptoms. Experience personalized homeopathic care and science-backed nutrition to restore your body's natural balance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {badges.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 px-3 py-1 rounded-full border" style={{ backgroundColor: SURFACE_CONTAINER_LOW, borderColor: `${OUTLINE_VARIANT}4d` }}>
                    <Icon name={b.icon} size={18} className="!text-[18px]" />
                    <span className="text-sm" style={{ color: ON_SURFACE_VARIANT }}>{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button className="px-8 py-4 rounded-xl text-sm font-medium text-white shadow-md hover:opacity-90 transition" style={{ backgroundColor: PRIMARY }}>
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full sage-glow p-1" style={{ border: `4px solid ${PRIMARY_FIXED_DIM}33` }}>
                <img src={drAdrija.url} alt="Dr. Adrija Chakraborty" className="w-full h-full object-cover rounded-full border-2 border-white" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: `${PRIMARY}0d` }} />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-5" style={{ backgroundColor: SURFACE_CONTAINER_LOW }}>
          <div className="max-w-[1120px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-3xl md:text-4xl" style={{ color: ON_SURFACE, fontWeight: 600 }}>Our Services</h2>
              <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: PRIMARY_CONTAINER }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="tonal-card p-8 rounded-xl border" style={{ borderColor: `${OUTLINE_VARIANT}33` }}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4" style={{ backgroundColor: SURFACE_CONTAINER }}>
                    <Icon name={s.icon} size={28} className="!text-[28px]" />
                    <style>{`.tonal-card .material-symbols-outlined { color: ${PRIMARY}; }`}</style>
                  </div>
                  <h3 className="font-headline text-2xl mb-2" style={{ fontWeight: 500 }}>{s.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: ON_SURFACE_VARIANT }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="py-20 px-5">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src={drAdrija.url}
                alt="Dr. Adrija Chakraborty portrait"
                className="w-full aspect-[4/5] object-cover rounded-xl shadow-lg border"
                style={{ borderColor: `${OUTLINE_VARIANT}1a` }}
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <span className="text-sm tracking-widest uppercase font-medium" style={{ color: PRIMARY }}>About the Practitioner</span>
              <h2 className="font-headline text-3xl md:text-4xl" style={{ color: ON_SURFACE, fontWeight: 600 }}>Dr. Adrija Chakraborty</h2>
              <p className="font-medium" style={{ color: PRIMARY }}>BHMS | Postgraduate Diploma in Nutrition &amp; Dietetics</p>
              <div className="flex gap-2 py-2 flex-wrap">
                {["Doctor", "Nutritionist", "Health Coach"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: SECONDARY_CONTAINER, color: "#444845" }}>{t}</span>
                ))}
              </div>
              <div className="space-y-4 leading-relaxed" style={{ color: ON_SURFACE_VARIANT }}>
                <p>With over 8 years of dedicated clinical experience, I believe in a holistic approach that bridges the gap between traditional homeopathy and modern nutritional science.</p>
                <p>Having served with the World Cancer Care Charitable Institute, I have seen firsthand the power of integrated healthcare in improving patient outcomes. My mission is to empower individuals to take charge of their health through sustainable lifestyle changes and gentle, effective medicine.</p>
                <p>Whether in-person at my Kolkata clinic or via online consultation, my focus remains on treating the person, not just the diagnosis.</p>
              </div>
              <p className="font-headline italic text-2xl pt-4" style={{ color: PRIMARY, fontWeight: 500 }}>
                "Prevention is the strongest medicine."
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-5" style={{ backgroundColor: `${PRIMARY_FIXED_DIM}33` }}>
          <div className="max-w-[1120px] mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl mb-20" style={{ color: ON_SURFACE, fontWeight: 600 }}>What Patients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center">
                  <div className="flex mb-2" style={{ color: PRIMARY }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={20} fill={1} />
                    ))}
                  </div>
                  <p className="italic mb-4" style={{ color: ON_SURFACE_VARIANT }}>"{t.text}"</p>
                  <p className="text-sm font-bold">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-5">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl md:text-4xl" style={{ color: ON_SURFACE, fontWeight: 600 }}>Get in Touch</h2>
              <p style={{ color: ON_SURFACE_VARIANT }}>Ready to start your journey to better health? Visit the clinic or book an online session.</p>
              <div className="space-y-4 pt-4">
                {[
                  { icon: "call", title: "Phone", value: "+91 98765 43210" },
                  { icon: "mail", title: "Email", value: "contact@dradrija.com" },
                  { icon: "location_on", title: "Address", value: "Akshay Apartment, 123 Canal Street,\nSreebhumi, Laketown, Kolkata – 700048" },
                  { icon: "schedule", title: "Clinic Hours", value: "Mon–Sat: 11:00 AM – 7:30 PM\nSunday: Closed" },
                ].map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <span style={{ color: PRIMARY }}><Icon name={c.icon} /></span>
                    <div>
                      <p className="text-sm font-bold">{c.title}</p>
                      <p className="whitespace-pre-line" style={{ color: ON_SURFACE_VARIANT }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: SURFACE_CONTAINER_LOW, borderColor: `${OUTLINE_VARIANT}4d` }}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: ON_SURFACE }}>Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full bg-white rounded-xl px-4 py-3 border outline-none focus:ring-2 transition-all" style={{ borderColor: `${OUTLINE_VARIANT}4d` }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: ON_SURFACE }}>Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full bg-white rounded-xl px-4 py-3 border outline-none focus:ring-2 transition-all" style={{ borderColor: `${OUTLINE_VARIANT}4d` }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: ON_SURFACE }}>Message</label>
                  <textarea placeholder="How can I help you?" rows={4} className="w-full bg-white rounded-xl px-4 py-3 border outline-none focus:ring-2 transition-all" style={{ borderColor: `${OUTLINE_VARIANT}4d` }} />
                </div>
                <button type="button" className="w-full py-4 rounded-xl text-sm font-medium text-white shadow-sm hover:opacity-90 transition-all" style={{ backgroundColor: PRIMARY }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-5 md:px-6 border-t" style={{ backgroundColor: SURFACE_CONTAINER_LOW, borderColor: `${OUTLINE_VARIANT}4d` }}>
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="font-headline text-2xl" style={{ color: PRIMARY }}>Dr. Adrija Chakraborty</span>
            <p className="mt-1 opacity-90" style={{ color: ON_SURFACE_VARIANT }}>© 2024 Dr. Adrija Chakraborty. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-sm" style={{ color: ON_SURFACE_VARIANT }}>Privacy Policy</a>
            <a href="#" className="text-sm" style={{ color: ON_SURFACE_VARIANT }}>Terms of Service</a>
            <a href="#" className="text-sm" style={{ color: ON_SURFACE_VARIANT }}>Medical Disclaimer</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full transition-all" style={{ backgroundColor: `${PRIMARY}1a`, color: PRIMARY }} aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full transition-all" style={{ backgroundColor: `${PRIMARY}1a`, color: PRIMARY }} aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
