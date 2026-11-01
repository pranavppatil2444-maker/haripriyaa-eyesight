import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useLang } from "@/lib/i18n";
import { DOCTOR_IMAGE, FACADE_IMAGE } from "@/lib/images";

const clinicSpaces = [
  "Consultation room",
  "Operation theatre",
  "Hospital facade",
  "Optical display counter",
];

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About Our Eye Hospital | Haripriyaa Netralaya" }, { name: "description", content: "Meet our ophthalmologist and explore Haripriyaa Netralaya's advanced eye care infrastructure in Islampur." },
  { property: "og:title", content: "About Haripriyaa Netralaya" }, { property: "og:description", content: "Clinical excellence and compassionate eye care in Islampur." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  { property: "og:image", content: FACADE_IMAGE }, { name: "twitter:image", content: FACADE_IMAGE },
] }), component: AboutPage });

function AboutPage() { const { t } = useLang(); return <>
  <PageHero eyebrow={t("About Haripriyaa Netralaya")} title={t("Excellence in eye care for Uran Islampur.")} description={t("A modern ophthalmology practice where surgical precision meets calm, personal attention.")} image={FACADE_IMAGE} />
  <section className="py-28"><div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center"><img src={DOCTOR_IMAGE} loading="lazy" width={1000} height={1250} alt={t("Dr. Neeta Ramesh Patil, eye surgeon and specialist")} className="h-[680px] w-full rounded-lg object-cover" /><div><p className="text-xs font-bold uppercase text-secondary">{t("Your ophthalmologist")}</p><h2 className="display-serif mt-5 text-6xl text-ice">{t("Dr. Neeta Ramesh Patil")}</h2><p className="mt-2 text-sm font-bold uppercase text-secondary">{t("Eye Specialist · M.S. AYU · PhD Scholar")}</p><p className="mt-7 text-base leading-8 text-muted-foreground">{t("Haripriyaa Netralaya has served the community for 10 years, while Dr. Neeta Ramesh Patil brings 16 years of experience in eye care. Her philosophy is simple: explain clearly, recommend honestly, and treat gently.")}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["10 years of hospital service","16 years of doctor experience","Phaco & MICS cataract surgery","Glaucoma screening"].map((item) => <p key={item} className="glass-card flex gap-3 rounded-md p-4 text-sm text-ice"><CheckCircle2 className="size-4 shrink-0 text-secondary" />{t(item)}</p>)}</div><Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">{t("Consult Dr. Neeta Patil")}</Link></div></div></section>
  <section className="border-y border-border bg-panel py-28"><div className="page-shell"><p className="text-xs font-bold uppercase text-secondary">{t("Inside the clinic")}</p><h2 className="display-serif mt-4 text-5xl text-ice sm:text-7xl">{t("Designed around safety and ease.")}</h2><div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_.85fr]"><figure className="relative overflow-hidden rounded-lg border border-border"><img src={FACADE_IMAGE} loading="lazy" width={1600} height={1200} alt={t("Hospital facade")} className="h-[28rem] w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background p-6 pt-16 font-serif text-2xl text-ice">Haripriyaa Netralaya</figcaption></figure><div className="grid gap-4 sm:grid-cols-2">{clinicSpaces.map((name) => <div key={name} className="glass-card flex flex-col justify-between rounded-lg p-6"><span className="font-serif text-xl text-ice">{t(name)}</span><CheckCircle2 className="size-5 text-secondary" /></div>)}</div></div></div></section>
  </>; }
