import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  ArrowRight,
  Truck,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Sparkles,
  Star,
  Snowflake,
  Smartphone,
  Apple,
  Download,
  Cake,
  Coffee,
  Plus,
} from "lucide-react";

import heroCityImg from "/assets/hero-city.png";
import coffeeCityImg from "/assets/coffee-city.png";
import chapelGoldImg from "/assets/chapel-gold.png";
import chapelGreenImg from "/assets/chapel-green.png";

import cappuccino from "@/assets/product-cappuccino.jpg";

import { SiteNav } from "@/components/site-nav";
import { PhoneMenuMock } from "@/components/phone-menu-mock";
import { MENU } from "@/lib/menu-data";
import { useCart, formatRub } from "@/lib/cart";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <SugarDust />
      <SiteNav />
      <Hero />
      <Marquee />
      <Signature />
      <Story />
      <Featured />
      <Delivery />
      <Testimonials />
      <AppDownload />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sugar dust                                                                  */
/* -------------------------------------------------------------------------- */
function SugarDust() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 14 + Math.random() * 18,
        delay: -Math.random() * 25,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.35 + Math.random() * 0.4,
      })),
    [],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: "blur(0.5px)",
            boxShadow: "0 0 6px rgba(255,240,210,0.6)",
            animation: `sugar-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as never]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero — editorial split: solid cream text panel + cinematic image gallery    */
/* -------------------------------------------------------------------------- */
function Hero() {
  const slides = [
    { src: chapelGoldImg, kb: "ken-burns-a" },
    { src: heroCityImg, kb: "ken-burns-b" },
    { src: coffeeCityImg, kb: "ken-burns-c" },
    { src: chapelGreenImg, kb: "ken-burns-a" },
  ];
  const cycle = slides.length * 7;

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[var(--vanilla)] via-[var(--cream)] to-[var(--gold-soft)]/60 pt-24"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%), radial-gradient(50% 40% at 90% 80%, color-mix(in oklab, var(--caramel) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-12 md:gap-14 md:pb-24">
        {/* Left: text on solid, readable background */}
        <div className="animate-reveal md:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--cream)] px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[var(--caramel)] shadow-soft">
            <Snowflake className="h-3.5 w-3.5" />
            Зимняя коллекция · Красноярск
          </div>

          <h1 className="text-display text-[3.25rem] font-semibold leading-[0.95] tracking-tight text-[var(--primary)] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Красноярские
            <br />
            <span className="relative inline-block italic text-[var(--caramel)]">
              сладости
              <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[var(--gold)] via-[var(--caramel)] to-transparent" />
            </span>
            <br />
            каждый день.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
            Кафе и кондитерская в сердце Красноярска. Авторские десерты,
            ароматный кофе и доставка по всему городу — каждое утро с ароматом
            свежей выпечки.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
            >
              Смотреть меню
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#delivery"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--primary)]/25 bg-white/70 px-8 py-4 text-sm font-medium text-[var(--primary)] transition hover:bg-white"
            >
              Доставка по городу
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.25em] text-[var(--foreground)]/80">
            <div className="flex items-center gap-2">
              <Star className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              4.9 · 2 300 отзывов
            </div>
            <div>С 2019 года</div>
            <div>Ручная работа</div>
          </div>
        </div>

        {/* Right: cinematic image stack */}
        <div className="relative md:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2rem] border border-[var(--gold)]/40 shadow-elegant md:aspect-[3/4]">
            {slides.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  animation: `slide-fade ${cycle}s ease-in-out ${(i * cycle) / slides.length}s infinite`,
                }}
              >
                <img
                  src={s.src}
                  alt="Пряничный Красноярск"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    animation: `${s.kb} ${cycle}s ease-in-out ${(i * cycle) / slides.length}s infinite alternate`,
                    willChange: "transform",
                  }}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Floating caption card */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-[var(--cream)]/95 px-5 py-3 shadow-soft backdrop-blur">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--caramel)]">
                  Живая витрина
                </div>
                <div className="text-display text-base font-semibold">
                  Пряничный Красноярск
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--primary)]">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Small floating badges — outside the image frame */}
          <div className="animate-float-slow absolute -left-16 top-6 hidden rounded-2xl border border-[var(--gold)]/40 bg-[var(--cream)] px-4 py-3 shadow-soft lg:block">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--foreground)]/60">
              Доставка
            </div>
            <div className="text-display text-lg font-semibold text-[var(--caramel)]">
              60 минут
            </div>
          </div>
          <div className="animate-float-slow absolute -right-16 bottom-10 hidden rounded-2xl border border-[var(--gold)]/40 bg-[var(--cream)] px-4 py-3 shadow-soft lg:block">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--foreground)]/60">
              Медовик
            </div>
            <div className="text-display text-lg font-semibold text-[var(--caramel)]">
              от 540 ₽
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Marquee                                                                     */
/* -------------------------------------------------------------------------- */
function Marquee() {
  const items = [
    "Свежая выпечка каждое утро",
    "Ремесленный шоколад",
    "Ваниль Мадагаскар",
    "Кофе спешелти",
    "Доставка 60 минут",
    "Ручная роспись глазурью",
    "Медовик по семейному рецепту",
    "Белый шоколад Valrhona",
  ];
  return (
    <section className="relative overflow-hidden border-y border-[var(--gold)]/20 bg-[var(--cream)] py-5">
      <div className="marquee whitespace-nowrap text-display text-xl italic text-[var(--caramel)]/80">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <Sparkles className="h-4 w-4 text-[var(--gold)]" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Signature                                                                   */
/* -------------------------------------------------------------------------- */
function Signature() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-[var(--gold-soft)]/50 blur-3xl" />
          <div className="animate-float-slow overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={cappuccino}
              alt="Капучино на фоне пряничного Красноярска"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="glass-panel absolute -bottom-6 -right-4 hidden rounded-2xl px-5 py-4 text-sm md:block">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              подача
            </div>
            <div className="text-display text-lg">Пряничный капучино</div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
            <span className="h-px w-8 bg-[var(--gold)]" /> Фирменное
          </div>
          <h2 className="text-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            Десерт, в котором <br />
            <span className="italic text-[var(--caramel)]">живёт город.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground">
            Наши мастера отливают часовню Параскевы Пятницы из белого шоколада,
            выпекают Столбы из имбирного теста и укрывают всё сахарной пудрой,
            как первым снегом.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat value="120+" label="Авторских десертов" />
            <Stat value="18" label="Кондитеров" />
            <Stat value="60′" label="Доставка" />
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-display text-4xl text-[var(--caramel)]">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Story                                                                       */
/* -------------------------------------------------------------------------- */
function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10 opacity-40">
        <img src={chapelGreenImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
          <span className="h-px w-8 bg-[var(--gold)]" /> Наша история{" "}
          <span className="h-px w-8 bg-[var(--gold)]" />
        </div>
        <h2 className="text-display text-4xl leading-tight md:text-6xl">
          Мы влюблены в город <br />
          <span className="italic text-[var(--caramel)]">на вкус ванили.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground">
          Кондитерская «Красноярские сладости» родилась из одного зимнего утра,
          когда пар от капучино напомнил снег над Енисеем. С тех пор мы каждый
          день пересобираем город из белого шоколада, карамели и мёда.
        </p>
        <div className="gold-divider mx-auto mt-14 max-w-md" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Featured — preview of menu with add-to-cart                                 */
/* -------------------------------------------------------------------------- */
function Featured() {
  const featured = MENU.slice(0, 6);
  const { add } = useCart();

  return (
    <section id="menu" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
              <span className="h-px w-8 bg-[var(--gold)]" /> Витрина
            </div>
            <h2 className="text-display text-4xl leading-tight md:text-6xl">
              Хиты нашей <br />
              <span className="italic text-[var(--caramel)]">кондитерской.</span>
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-white/70 px-6 py-3 text-sm text-[var(--primary)] transition hover:bg-white"
          >
            Всё меню <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-[var(--cream)] shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              style={{ animation: `reveal-up 0.9s ${i * 80}ms cubic-bezier(0.16,1,0.3,1) both` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                {item.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--caramel)] shadow-soft backdrop-blur">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="flex items-end justify-between gap-4 p-6">
                <div className="min-w-0 flex-1">
                  <h3 className="text-display text-2xl leading-tight">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-display text-4xl font-semibold leading-none text-[var(--caramel)] md:text-5xl">
                    {formatRub(item.price)}
                  </div>
                  <button
                    onClick={() =>
                      add({ id: item.id, name: item.name, price: item.price, img: item.img })
                    }
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--primary-foreground)] transition hover:scale-[1.03]"
                  >
                    <Plus className="h-3 w-3" /> В корзину
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Delivery                                                                    */
/* -------------------------------------------------------------------------- */
function Delivery() {
  const steps = [
    { icon: Cake, title: "Выбираете десерт", text: "Свежие торты, пирожные и напитки — прямо с витрины сегодняшнего утра." },
    { icon: Coffee, title: "Мы упаковываем", text: "Термо-коробки с ленточкой и запиской. Кофе — в теплокружках." },
    { icon: Truck, title: "Курьер везёт", text: "60 минут по Красноярску. Бесплатно от 1 500 ₽." },
  ];
  return (
    <section id="delivery" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--vanilla)] via-[var(--cream)] to-[var(--gold-soft)]/60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
            <span className="h-px w-8 bg-[var(--gold)]" /> Доставка{" "}
            <span className="h-px w-8 bg-[var(--gold)]" />
          </div>
          <h2 className="text-display text-4xl leading-tight md:text-6xl">
            Тёплый десерт <br />
            <span className="italic text-[var(--caramel)]">у вашей двери.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--gold)]/20 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)]/80 text-[var(--caramel)] shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Шаг 0{i + 1}
              </div>
              <h3 className="mt-2 text-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[var(--gold)]" /> Ежедневно 8:00 — 23:00
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-[var(--gold)]" /> От 1 500 ₽ — бесплатно
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--gold)]" /> По всему Красноярску
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */
function Testimonials() {
  const quotes = [
    { name: "Анна К.", role: "гость с 2020", text: "«Пришла за капучино — влюбилась в город заново. Кажется, будто съедаешь маленькую сказку.»" },
    { name: "Максим Р.", role: "заказчик", text: "«Заказал торт на день рождения дочки — она смотрела на него как на игрушку. Есть было почти жалко. Почти.»" },
    { name: "Ольга В.", role: "гость", text: "«Лучший медовик в Красноярске. И интерьер как в европейской кофейне — светло, тепло, ванильно.»" },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
            <span className="h-px w-8 bg-[var(--gold)]" /> Отзывы
          </div>
          <h2 className="text-display text-4xl leading-tight md:text-5xl">
            Что говорят гости.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-3xl border border-[var(--gold)]/20 bg-[var(--cream)] p-8 shadow-soft"
            >
              <div className="flex gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 text-display text-xl leading-snug text-foreground/90">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{q.name}</div>
                <div className="text-muted-foreground">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* App Download                                                                */
/* -------------------------------------------------------------------------- */
function AppDownload() {
  const features = [
    { title: "Бонус 500 ₽", text: "За регистрацию — сразу после первого заказа." },
    { title: "Живая карта курьера", text: "Смотрите путь заказа в реальном времени." },
    { title: "Клуб «Пряничный»", text: "Ранний доступ к новинкам и закрытые дегустации." },
    { title: "Оплата в один тап", text: "Apple Pay, Google Pay и сохранённые карты." },
  ];

  return (
    <section id="app" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)] via-[#3d2416] to-[var(--primary)]" />
      <div
        className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(255,215,140,0.7), transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(255,240,210,0.5), transparent 60%)",
        }}
      />
      {/* Faint marquee ring */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 items-center overflow-hidden opacity-[0.06]">
        <div className="marquee whitespace-nowrap text-display text-[8rem] italic text-[var(--gold-soft)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>Красноярские сладости ·</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        {/* Copy */}
        <div className="text-[var(--cream)] lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)] backdrop-blur">
            <Smartphone className="h-3.5 w-3.5" /> Мобильное приложение
          </div>
          <h2 className="text-display text-4xl font-semibold leading-[1.05] md:text-6xl">
            Вся кондитерская —
            <br />
            <span className="italic text-[var(--gold-soft)]">в вашем кармане.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--cream)]/85 md:text-lg">
            Заказывайте десерты в один тап, копите бонусы за каждую покупку и
            получайте персональные подборки от наших кондитеров.
          </p>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--gold-soft)]/25 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-2 text-[var(--gold-soft)]">
                  <Sparkles className="h-4 w-4" />
                  <div className="text-display text-lg font-semibold">{f.title}</div>
                </div>
                <p className="mt-2 text-sm text-[var(--cream)]/75">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--cream)] px-6 py-3.5 text-[var(--primary)] shadow-elegant transition hover:scale-[1.02]"
            >
              <Apple className="h-7 w-7" />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--primary)]/70">
                  Скачать в
                </div>
                <div className="text-display text-lg font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--cream)] px-6 py-3.5 text-[var(--primary)] shadow-elegant transition hover:scale-[1.02]"
            >
              <Download className="h-7 w-7" />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--primary)]/70">
                  Доступно в
                </div>
                <div className="text-display text-lg font-semibold">Google Play</div>
              </div>
            </a>
            <div className="flex items-center gap-2 text-xs text-[var(--cream)]/70">
              <Star className="h-3.5 w-3.5 fill-[var(--gold-soft)] text-[var(--gold-soft)]" />
              4.9 · 12k+ загрузок
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <PhoneMenuMock />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact — info + map card, no form                                          */
/* -------------------------------------------------------------------------- */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-[var(--cream)]/40 to-background" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
            <span className="h-px w-8 bg-[var(--gold)]" /> Контакты
          </div>
          <h2 className="text-display text-4xl leading-tight md:text-6xl">
            Загляните на <br />
            <span className="italic text-[var(--caramel)]">чашку кофе.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground">
            Мы работаем каждый день с раннего утра и до самой ночи. Приходите
            смотреть, как рождается пряничный город — или заказывайте прямо сейчас.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <ContactRow icon={MapPin} label="Адрес">
              Красноярск, пр. Мира, 100
            </ContactRow>
            <ContactRow icon={Clock} label="Часы работы">
              Ежедневно · 8:00 — 23:00
            </ContactRow>
            <ContactRow icon={Phone} label="Телефон">
              +7 (391) 000-00-00
            </ContactRow>
            <ContactRow icon={Instagram} label="Соцсети">
              @krasnoyarsk.patisserie
            </ContactRow>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
            >
              Собрать заказ <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+73910000000"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-white/70 px-7 py-4 text-sm font-medium text-[var(--primary)] transition hover:bg-white"
            >
              <Phone className="h-4 w-4" /> Позвонить
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img
            src={coffeeCityImg}
            alt="Кафе Красноярские сладости"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[var(--cream)]/95 p-5 shadow-soft backdrop-blur">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--caramel)]">
              Флагман
            </div>
            <div className="mt-1 text-display text-xl font-semibold">
              Пр. Мира, 100 · Красноярск
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              5 минут пешком от Театральной площади
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--caramel)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-1 text-display text-lg">{children}</dd>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/20 bg-[var(--cream)] py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <div className="text-display text-2xl font-semibold">
          Красноярские <span className="italic text-[var(--caramel)]">сладости</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Кафе и кондитерская
        </div>
        <div className="gold-divider w-40" />
        <p className="max-w-md text-sm text-muted-foreground">
          Сделано с любовью к городу. Испечено сегодня утром. С сахарной пудрой,
          как первый снег над Енисеем.
        </p>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/menu" className="hover:text-foreground">Меню</Link>
          <span>·</span>
          <a href="#delivery" className="hover:text-foreground">Доставка</a>
          <span>·</span>
          <a href="#contact" className="hover:text-foreground">Контакты</a>
          <span>·</span>
          <a href="#app" className="hover:text-foreground">Приложение</a>
        </div>
        <div className="text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} Красноярские сладости. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
