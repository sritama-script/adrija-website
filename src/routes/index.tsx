import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Menu } from "lucide-react";
const clinicLogo = { url: "/logo.png" };
const drAdrija = { url: "/doctor-photo.jpg" };
import ReviewsMarquee from "@/components/ReviewsMarquee";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  component: Index,
});

const Icon = ({
  name,
  size = 22,
  fill = 0,
  className = "",
  style,
}: {
  name: string;
  size?: number;
  fill?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontSize: size,
      fontVariationSettings: `'FILL' ${fill}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      ...style,
    }}
  >
    {name}
  </span>
);

type CardItem = {
  icon: string;
  title: string;
  short: string;
  long: string;
  image: string;
};

const homoeopathyCards: CardItem[] = [
  {
    icon: "woman",
    title: "Women's Health",
    short: "PCOS, Hormonal Balance & Menstrual Health",
    long: "Gentle homoeopathic care to restore hormonal balance, ease PCOS symptoms, regulate cycles and support reproductive wellness — treating the underlying constitution, not just the symptoms.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "content_cut",
    title: "Hair Loss & Scalp Disorders",
    short: "Natural solutions for thinning hair & scalp health",
    long: "Targeted constitutional remedies that address the root causes of hair fall — stress, hormones, nutrition and scalp conditions — paired with lifestyle guidance for lasting regrowth.",
    image: "https://images.unsplash.com/photo-1595944924261-95f9dae66d64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "face_6",
    title: "Skin Disorders",
    short: "Acne, eczema, psoriasis & pigmentation",
    long: "Homoeopathy heals skin from within. Individualised remedies for chronic and recurring skin issues, restoring clarity and confidence without suppression.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "self_improvement",
    title: "Lifestyle & Stress",
    short: "Anxiety, sleep, burnout & emotional wellbeing",
    long: "Gentle remedies and mindful lifestyle coaching to calm the nervous system, restore sleep, and rebuild emotional resilience for modern-day stressors.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "pulmonology",
    title: "Respiratory Disorders",
    short: "Asthma, allergies, sinusitis & recurrent colds",
    long: "Long-term homoeopathic support for chronic respiratory conditions — strengthening immunity and reducing dependence on repeated antibiotics or inhalers.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "accessibility_new",
    title: "Joint & Musculoskeletal",
    short: "Arthritis, back pain & joint stiffness",
    long: "Constitutional treatment to reduce inflammation, improve mobility and manage chronic pain naturally — supported with posture and nutrition guidance.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "neurology",
    title: "Headache & Migraine",
    short: "Chronic headaches, migraine & tension pain",
    long: "Individualised remedies that address migraine triggers — stress, hormones, sleep and digestion — to reduce the frequency and intensity of attacks without daily painkillers.",
    image: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "gastroenterology",
    title: "Digestive Disorders",
    short: "Acidity, GERD, IBS & constipation",
    long: "Gentle homoeopathic care to calm acidity and reflux, regulate bowel function and settle IBS — combined with tailored dietary guidance for lasting gut comfort.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
  },
];


const nutritionCards: CardItem[] = [
  {
    icon: "monitor_weight",
    title: "Weight Management",
    short: "Sustainable weight loss & healthy weight gain",
    long: "Personalised nutrition and lifestyle plans that go beyond calorie counting — addressing metabolism, hormones and habits for lasting, healthy results.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "nutrition",
    title: "Gut Health & Digestion",
    short: "IBS, bloating, acidity & microbiome balance",
    long: "Restore digestive comfort with gut-friendly meal planning, targeted foods and lifestyle rhythms that heal the microbiome and reduce inflammation.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "female",
    title: "PCOS Nutrition",
    short: "Insulin-friendly plans for PCOS & PCOD",
    long: "Evidence-based nutrition that improves insulin sensitivity, supports ovulation, and helps manage weight and skin changes associated with PCOS.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "thermostat",
    title: "Thyroid & Hormonal",
    short: "Nutrition for hypo/hyperthyroid & hormone balance",
    long: "Nutrient-focused planning that supports thyroid function and hormonal balance — with realistic meals designed around your lifestyle and preferences.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "bloodtype",
    title: "Diabetes & Lifestyle",
    short: "Blood sugar control & metabolic wellness",
    long: "Structured meal plans to stabilise blood sugar, lower cholesterol and reverse early metabolic disorders — with counselling for lasting habit change.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "family_restroom",
    title: "Child & Family Nutrition",
    short: "Growth, immunity & everyday family meals",
    long: "Age-appropriate nutrition plans for children and families — supporting growth, immunity, focus and fussy-eater challenges with practical, tasty meals.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
];

const homoeopathyApproach = [
  "Individualised Case Taking",
  "Constitutional Treatment",
  "Safe & Natural Medicines",
  "Holistic & Long-term Healing",
  "Support for Chronic Conditions",
];

const nutritionReceive = [
  "Personalised Diet Plan",
  "Lifestyle Counselling",
  "Meal Planning",
  "Regular Follow-up & Support",
  "Sustainable Results",
];

const badges = [
  { icon: "star", label: "5.0 Rated Clinic · 61+ Reviews" },
  { icon: "workspace_premium", label: "8+ Years Experience" },
  { icon: "vital_signs", label: "Integrated Treatment + Nutrition" },
  { icon: "videocam", label: "Online Consultation Available" },
];


const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#homoeopathy", label: "Homoeopathy" },
  { href: "#nutrition", label: "Nutrition" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const WHATSAPP_LINK =
  "https://wa.me/917888724387?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation";
const WEB3FORMS_ACCESS_KEY = "41ca12a2-3ca8-4aab-9946-10d119ba7670";
const CONTACT_EMAIL = "dradrija.clinic@gmail.com";
const CALENDLY_URL = "https://calendly.com/dradrija-clinic/new-meeting";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

function openCalendly(e: React.MouseEvent) {
  e.preventDefault();
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  const [active, setActive] = useState<CardItem | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Scroll-linked navbar shrink: --nav-t goes 0 (top) -> 1 (scrolled)
  useEffect(() => {
    const SHRINK_DISTANCE = 220;
    let frame = 0;
    const apply = () => {
      frame = 0;
      const t = Math.min(1, Math.max(0, window.scrollY / SHRINK_DISTANCE));
      headerRef.current?.style.setProperty("--nav-t", t.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);


  useEffect(() => {
    const ids = ["home", "about", "homoeopathy", "nutrition", "reviews", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      to: CONTACT_EMAIL,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="font-body" style={{ backgroundColor: "#fbfbf7", color: "var(--ink)" }}>
      {/* Header */}
      <header ref={headerRef} className="glass-nav nav-dynamic fixed top-0 left-0 w-full z-50">
        <div className="nav-bar max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-5 md:px-8">
          <a href="#home" className="flex items-center gap-2 shrink-0 min-w-0">
            <img src={clinicLogo.url} alt="Dr. Adrija's Clinic" className="nav-logo w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link text-sm font-medium tracking-wide${
                  activeSection === l.href.slice(1) ? " nav-link-active" : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={CALENDLY_URL}
              onClick={openCalendly}
              className="pill-nav pill-nav-sheen px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 text-xs sm:text-sm font-medium hidden sm:inline-flex"
            >
              Book Appointment
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full shrink-0"
              style={{
                color: "var(--sage-800)",
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(201,165,76,0.35)",
              }}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="mobile-menu-glass w-[82vw] sm:max-w-sm p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full pt-6">
            <a href="#home" className="flex items-center gap-2 px-6 pb-5 shrink-0">
              <img src={clinicLogo.url} alt="Dr. Adrija's Clinic" className="h-28 w-auto" />
            </a>
            <div className="gold-divider mx-6 mb-4" />
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`mobile-nav-link text-base font-medium tracking-wide${
                    activeSection === l.href.slice(1) ? " mobile-nav-link-active" : ""
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <a
                href={CALENDLY_URL}
                onClick={(e) => {
                  setMobileOpen(false);
                  openCalendly(e);
                }}
                className="btn-primary-cta w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium"
              >
                <Icon name="calendar_month" size={18} />
                Book Appointment
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>


      <main className="nav-offset overflow-x-hidden">
        {/* Hero */}
        <section id="home" className="gradient-hero relative">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-5 md:px-8 pt-8 pb-20 md:pt-10 md:pb-28">
            <div className="space-y-7">

              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl leading-[1.05]" style={{ color: "var(--ink)", fontWeight: 600 }}>
                Heal <em className="italic text-sage" style={{ fontStyle: "italic" }}>Naturally.</em> Live Better.
              </h1>
              <p className="font-headline text-2xl sm:text-3xl md:text-4xl leading-snug" style={{ color: "var(--sage-700)", fontWeight: 600 }}>
                Dr. Adrija's Clinic
              </p>
              <p className="text-sm sm:text-base md:text-lg" style={{ color: "var(--ink-soft)" }}>
                Personalised Homoeopathic Care • Nutrition • Holistic Wellness
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--ink-soft)" }}>
                Treating the individual as a whole — not just the symptoms. Personalised homoeopathic
                care blended with science-backed nutrition and lifestyle guidance to restore your body's
                natural balance.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {badges.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/70"
                    style={{ border: "1px solid rgba(201,165,76,0.28)", backdropFilter: "blur(6px)" }}
                  >
                    <Icon name={b.icon} size={16} className="text-gold" style={{ color: "var(--gold-500)" }} />
                    <span className="text-xs md:text-[13px]" style={{ color: "var(--ink-soft)" }}>{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={CALENDLY_URL}
                  onClick={openCalendly}
                  className="btn-primary-cta inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-medium"
                >
                  <Icon name="calendar_month" size={18} />
                  Book Consultation
                </a>
                <a
                  href="#homoeopathy"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm font-medium transition-colors"
                  style={{ color: "var(--sage-700)", border: "1px solid rgba(75,101,73,0.25)" }}
                >
                  Explore Treatments <Icon name="arrow_forward" size={18} />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <div
                className="absolute -top-6 -right-6 w-48 h-48 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(201,165,76,0.18)" }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(141,169,137,0.35)" }}
              />
              <div className="frame-photo w-60 sm:w-72 md:w-[420px] aspect-[4/5] relative z-10">
                <img src={drAdrija.url} alt="Dr. Adrija Chakraborty" />
              </div>
            </div>
          </div>
        </section>

        {/* Homoeopathy */}
        <section id="homoeopathy" className="py-16 sm:py-24 px-5 md:px-8" style={{ backgroundColor: "#eef3ea" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl" style={{ color: "var(--ink)", fontWeight: 700 }}>
                Homoeopathy
              </h2>
              <p className="font-headline text-xl sm:text-2xl md:text-3xl mt-3" style={{ color: "var(--sage-700)", fontWeight: 500 }}>
                Gentle. <em className="italic text-sage">Safe.</em> Effective.
              </p>

              <div className="w-24 mx-auto mt-5 gold-divider" />
              <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Homoeopathy treats the root cause of illness and helps the body heal naturally.
                Every treatment is tailored to your constitution, history and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 sm:gap-8">
              {/* Approach card */}
              <div className="card-3d p-6 sm:p-8 self-start">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-orb" style={{ width: 44, height: 44, borderRadius: 12 }}>
                    <Icon name="task_alt" size={22} />
                  </div>
                  <h3 className="font-headline text-2xl" style={{ fontWeight: 600 }}>Our Approach</h3>
                </div>
                <div className="gold-divider mb-5" />
                <ul className="space-y-3.5">
                  {homoeopathyApproach.map((item) => (
                    <li key={item} className="check-item">
                      <span className="check-dot"><Icon name="check" size={14} /></span>
                      <span className="text-[15px]" style={{ color: "var(--ink-soft)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Condition cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {homoeopathyCards.map((c) => (
                  <button
                    key={c.title}
                    type="button"
                    onClick={() => setActive(c)}
                    className="card-3d p-6 text-left"
                  >
                    <div className="icon-orb mb-5">
                      <Icon name={c.icon} size={26} />
                    </div>
                    <h4 className="font-headline text-xl mb-2" style={{ fontWeight: 600, color: "var(--ink)" }}>
                      {c.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      {c.short}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--sage-700)" }}>
                      Learn more <Icon name="arrow_forward" size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition */}
        <section id="nutrition" className="gradient-nutrition py-16 sm:py-24 px-5 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl" style={{ color: "var(--ink)", fontWeight: 700 }}>
                Nutrition
              </h2>
              <p className="font-headline text-xl sm:text-2xl md:text-3xl mt-3" style={{ color: "var(--sage-700)", fontWeight: 500 }}>
                Eat Right. <em className="italic" style={{ color: "var(--gold-500)" }}>Live Right.</em>
              </p>

              <div className="w-24 mx-auto mt-5 gold-divider" />
              <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Personalised nutrition plans tailored to your body, goals and lifestyle — designed to
                make healthy eating simple, sustainable and enjoyable.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 sm:gap-8">
              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 order-2 lg:order-1">
                {nutritionCards.map((c) => (
                  <button
                    key={c.title}
                    type="button"
                    onClick={() => setActive(c)}
                    className="card-3d p-6 text-left"
                  >
                    <div className="icon-orb mb-5">
                      <Icon name={c.icon} size={26} />
                    </div>
                    <h4 className="font-headline text-xl mb-2" style={{ fontWeight: 600, color: "var(--ink)" }}>
                      {c.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      {c.short}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--sage-700)" }}>
                      Learn more <Icon name="arrow_forward" size={16} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Receive card */}
              <div className="card-3d p-6 sm:p-8 self-start order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-orb" style={{ width: 44, height: 44, borderRadius: 12 }}>
                    <Icon name="restaurant" size={22} />
                  </div>
                  <h3 className="font-headline text-2xl" style={{ fontWeight: 600 }}>What You Receive</h3>
                </div>
                <div className="gold-divider mb-5" />
                <ul className="space-y-3.5">
                  {nutritionReceive.map((item) => (
                    <li key={item} className="check-item">
                      <span className="check-dot"><Icon name="check" size={14} /></span>
                      <span className="text-[15px]" style={{ color: "var(--ink-soft)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Profile */}
        <section id="about" className="py-16 sm:py-24 px-5 md:px-8" style={{ backgroundColor: "#fbfbf7" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-48 h-48 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(201,165,76,0.18)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-56 h-56 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(141,169,137,0.35)" }}
              />
              <div className="frame-photo w-full max-w-[440px] aspect-[4/5] mx-auto relative z-10">
                <img src={drAdrija.url} alt="Dr. Adrija Chakraborty portrait" />
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 gold-divider" />
                <span className="section-label text-gold">About the Practitioner</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--ink)", fontWeight: 600 }}>
                Dr. Adrija Chakraborty
              </h2>
              <p className="font-medium" style={{ color: "var(--sage-700)" }}>
                BHMS · Postgraduate Diploma in Nutrition &amp; Dietetics
              </p>

              <div className="flex gap-2 flex-wrap">
                {["Doctor", "Nutritionist", "Health Coach"].map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "linear-gradient(135deg,#e6ede1,#f7efd9)",
                      color: "var(--sage-800)",
                      border: "1px solid rgba(201,165,76,0.35)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-4 leading-relaxed text-[15px] md:text-base" style={{ color: "var(--ink-soft)" }}>
                <p>
                  BHMS from Lord Mahavira Homoeopathic Medical College, Ludhiana, with 8+ years of
                  clinical experience bridging traditional homoeopathy and modern nutritional science.
                </p>
                <p>
                  Senior Consultant with the World Cancer Care Charitable Institute, Jalandhar, and
                  lead practitioner at multiple medical camps across Punjab and Kolkata.
                </p>
                <p>
                  Now practising from her Kolkata clinic, with online consultations available for
                  patients across India and abroad.
                </p>
              </div>
              <div className="gold-divider my-4" />
              <p className="font-headline italic text-xl sm:text-2xl md:text-3xl" style={{ color: "var(--sage-700)", fontWeight: 500 }}>
                "Prevention is the strongest medicine."
              </p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="gradient-reviews py-16 sm:py-24 px-0 md:px-0 overflow-hidden">
          <div className="max-w-[1200px] mx-auto text-center px-5 md:px-8">
            <span className="section-label text-gold">Patient Reviews</span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mt-4" style={{ color: "var(--ink)", fontWeight: 600 }}>
              What Our <em className="italic text-sage">Patients</em> Say
            </h2>
            <div className="w-24 mx-auto mt-5 gold-divider" />
            <p className="mt-5 text-sm font-semibold tracking-wide" style={{ color: "var(--sage-700)" }}>
              <span className="text-gold">★</span> 5.0 Rated Clinic · 61+ Google Reviews
            </p>
          </div>
          <ReviewsMarquee />
        </section>


        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24 px-5 md:px-8" style={{ backgroundColor: "#fbfbf7" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <div className="space-y-7">
              <span className="section-label text-gold">Contact</span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--ink)", fontWeight: 600 }}>
                Get in <em className="italic text-sage">Touch</em>
              </h2>
              <div className="w-24 gold-divider" />
              <p style={{ color: "var(--ink-soft)" }}>
                Ready to start your journey to better health? Visit the clinic in Kolkata or book
                an online session from anywhere in the world.
              </p>
              <div className="space-y-5 pt-2">
                {[
                  { icon: "call", title: "Phone", value: "+91 78887 24387" },
                  { icon: "mail", title: "Email", value: "dradrija.clinic@gmail.com" },
                  {
                    icon: "location_on",
                    title: "Clinic Address",
                    value: "Akshay Apartment, 123 Canal Street,\nSreebhumi, Laketown, Kolkata – 700048",
                  },
                  {
                    icon: "schedule",
                    title: "Clinic Hours",
                    value: "Mon – Sat: 11:00 AM – 7:30 PM\nSunday: Closed",
                  },
                ].map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="icon-orb" style={{ width: 44, height: 44, borderRadius: 12 }}>
                      <Icon name={c.icon} size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{c.title}</p>
                      <p className="whitespace-pre-line text-[15px] mt-0.5" style={{ color: "var(--ink-soft)" }}>
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-6 sm:p-8 md:p-10 rounded-3xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,165,76,0.35)",
                boxShadow: "0 30px 60px -30px rgba(38,62,37,0.2), 0 0 0 6px rgba(247,239,217,0.5)",
              }}
            >
              <h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-2" style={{ fontWeight: 600 }}>
                Send a Message
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>
                We usually respond within one working day.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "Enter your name" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--ink)" }}>
                      {f.label}
                    </label>
                    <input
                      name={f.name}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="w-full bg-white rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all"
                      style={{ border: "1px solid rgba(201,165,76,0.35)" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--ink)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-white rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all"
                    style={{ border: "1px solid rgba(201,165,76,0.35)" }}
                  />
                </div>
                {formStatus === "success" && (
                  <div
                    className="rounded-xl px-4 py-3 text-sm"
                    style={{
                      background: "rgba(141,169,137,0.18)",
                      color: "var(--sage-700)",
                      border: "1px solid rgba(75,101,73,0.3)",
                    }}
                  >
                    Thank you! Your message has been sent. We'll get back to you shortly.
                  </div>
                )}
                {formStatus === "error" && (
                  <div
                    className="rounded-xl px-4 py-3 text-sm"
                    style={{
                      background: "rgba(178,138,52,0.12)",
                      color: "var(--gold-500)",
                      border: "1px solid rgba(178,138,52,0.4)",
                    }}
                  >
                    Sorry, something went wrong. Please try again, or reach us directly by phone or WhatsApp at +91 78887 24387.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="gradient-btn w-full py-4 rounded-full text-sm font-medium text-white shadow-md hover:opacity-95 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Icon name="send" size={18} /> {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-12 sm:pt-14 pb-8 px-5 md:px-8" style={{ backgroundColor: "var(--sage-800)", color: "#f4f0e2" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pb-10">
            <div className="text-center md:text-left">
              <img
                src="/logo-transparent.png"
                alt="Dr. Adrija's Clinic"
                className="h-28 sm:h-40 md:h-52 w-auto max-w-full mx-auto md:mx-0"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}
              />
              <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-xs">
                Holistic healthcare, science-backed nutrition and gentle homoeopathy — from Kolkata to the world.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="section-label mb-4" style={{ color: "var(--gold-200)" }}>Quick Links</p>
              <ul className="space-y-2 text-sm opacity-90">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About Me" },
                  { href: "#homoeopathy", label: "Homoeopathy" },
                  { href: "#nutrition", label: "Nutrition" },
                  { href: "#reviews", label: "Reviews" },
                  { href: "#contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="section-label mb-4" style={{ color: "var(--gold-200)" }}>Connect</p>
              <div className="flex gap-3 justify-center md:justify-start">
                {[
                  { icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
                  { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
                    style={{ border: "1px solid rgba(236,220,174,0.4)", color: "var(--gold-200)" }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm opacity-80">
                +91 78887 24387<br />dradrija.clinic@gmail.com
              </p>
            </div>
          </div>
          <div className="md:hidden gold-divider opacity-40 my-8" />
          <div className="hidden md:block gold-divider opacity-40" />
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-75">
            <p>© 2026 Dr. Adrija Chakraborty. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl w-[92vw] max-h-[92vh] overflow-y-auto p-0 overflow-x-hidden gap-0" style={{ borderRadius: 24, border: "1px solid rgba(201,165,76,0.35)" }}>
          {active && (
            <>
              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(38,62,37,0.75) 100%)" }} />
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 text-white">
                  <div className="icon-orb" style={{ width: 44, height: 44, borderRadius: 12 }}>
                    <Icon name={active.icon} size={22} />
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl sm:text-3xl" style={{ fontWeight: 600, color: "var(--ink)" }}>
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm" style={{ color: "var(--sage-700)" }}>
                    {active.short}
                  </DialogDescription>
                </DialogHeader>
                <div className="gold-divider my-5" />
                <p className="leading-relaxed text-[15px]" style={{ color: "var(--ink-soft)" }}>
                  {active.long}
                </p>
                <a
                  href={CALENDLY_URL}
                  onClick={(e) => {
                    setActive(null);
                    openCalendly(e);
                  }}
                  className="btn-primary-cta mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                >
                  <Icon name="calendar_month" size={16} />
                  Book a Consultation
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
