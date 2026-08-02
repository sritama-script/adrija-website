import { useState } from "react";

export type Review = { name: string; rating: number; text: string };

export const reviews: Review[] = [
  {
    name: "Mahima Bhargava",
    rating: 5,
    text: "Adrija has been a great support and guide. I have been under her care for a couple years and her medicines always fit my symptoms and improve my health super quick. She has been kind and reachable throughout and is super trustable. Really grateful to her.",
  },
  {
    name: "Sourav Sarkar",
    rating: 5,
    text: "I had a really positive experience with Dr. Adrija while she was treating my wife. From the very beginning, she was extremely responsive and took the time to listen carefully to all of her concerns, which made us feel comfortable and confident in her care.",
  },
  {
    name: "Soma Das",
    rating: 5,
    text: "Ma'am provides very good diet plans and she is very polite and supportive. Whenever I call her, she always answers the phone and helps me. By following her diet chart, I have already started losing weight and am seeing positive results. I am very satisfied with her guidance and highly recommend her.",
  },
  {
    name: "Ankur Ganguly",
    rating: 5,
    text: "I highly recommend Dr. Adrija for anyone seeking relief from chronic allergies. I took my mother to see her after months of persistent symptoms, and the experience was exceptional. Dr. Adrija is not only a brilliant diagnostician but also incredibly patient. She took the time to explain the root causes of the allergic triggers and designed a treatment plan that was easy for my mother to follow. My mother has seen a significant improvement in her health and comfort. Thank you, Doctor, for your expertise and kindness!",
  },
  {
    name: "Sibani Banerjee",
    rating: 5,
    text: "I had been suffering from knee pain, waist pain, joint pain and other chronic ailments for quite some time. Over the last 1 year, I have been greatly benefited from Dr. Adrija's homeopathic treatment. Her medicines have worked like magic for me and my overall health has improved significantly. Dr. Adrija is extremely patient and listens to every problem very carefully before prescribing medicines. She explains the treatment properly and makes you feel comfortable and positive about the healing process. Her approach is very gentle yet very effective. I am truly grateful for her treatment and would highly recommend her clinic to anyone looking for safe and effective homeopathic treatment for chronic problems.",
  },
  {
    name: "Goutami De",
    rating: 5,
    text: "I had been struggling with hair loss for quite some time, but Dr. Adrija's treatment truly made a difference. Her prescribed shampoo and hair serum worked wonders and noticeably improved my hair health. She is very patient, understanding and provides personalized care. I'm really grateful for her guidance and highly recommend her to anyone facing similar issues.",
  },
  {
    name: "Shampa Dutta",
    rating: 5,
    text: "I have a wonderful experience with Dr. Adrija and her clinic. I was suffering from OCD for several years. She patiently listened to my concerns and gave appropriate medicine. I am improving day by day. Thank you Dr. Adrija. Thank you so much.",
  },
  {
    name: "Shalini Bisht",
    rating: 5,
    text: "I had thyroid, cervical pain and my erythrocyte sedimentation rate had increased. I consulted Dr Adrija and with the medication given by her, I am fine now. My sister also had cervical pain and my niece used to get periods after 2-3 months due to cyst, but now she is fine. Dr Adrija is a very experienced doctor and a very good counsellor too. So much experience at such a young age is commendable.",
  },
  {
    name: "Sachin Gupta",
    rating: 5,
    text: "I was suffering from Eczema from past 25 years. Then visited Dr. Adrija and started treatment there. In 3 months, my issues have started resolving. I'm much better now. Apart from that, I also took 1 month treatment for dandruff and it's completely resolved now. Thanks to Dr. Adrija.",
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: n }).map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined"
        style={{
          fontSize: 18,
          color: "var(--gold-400)",
          fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        }}
      >
        star
      </span>
    ))}
  </div>
);

const Card = ({ r }: { r: Review }) => (
  <article
    className="card-3d review-card p-5 sm:p-7 flex flex-col gap-3 sm:gap-4 shrink-0 text-left"
    style={{ width: "min(360px, 82vw)", cursor: "default" }}
  >
    <div className="flex items-center justify-between gap-3 shrink-0">
      <h3 className="font-headline text-base sm:text-xl" style={{ color: "var(--ink)", fontWeight: 600 }}>
        {r.name}
      </h3>
      <Stars n={r.rating} />
    </div>
    <div className="gold-divider shrink-0" />
    <div className="review-text-scroll">
      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        {r.text}
      </p>
    </div>
  </article>
);

export default function ReviewsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="marquee mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="marquee-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
        {[...reviews, ...reviews].map((r, i) => (
          <Card key={i} r={r} />
        ))}
      </div>
    </div>
  );
}
