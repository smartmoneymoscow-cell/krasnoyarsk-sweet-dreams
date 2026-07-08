import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  ArrowRight,
  Coffee,
  Croissant,
  Cake,
  Truck,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Send,
  Sparkles,
  Star,
  Snowflake,
  Smartphone,
  Apple,
  Download,
} from "lucide-react";

import heroCity from "@/assets/hero-city.asset.json";
import coffeeCity from "@/assets/coffee-city.asset.json";
import chapelGold from "@/assets/chapel-gold.asset.json";
import chapelGreen from "@/assets/chapel-green.asset.json";

import eclair from "@/assets/product-eclair.jpg";
import tart from "@/assets/product-tart.jpg";
import croissant from "@/assets/product-croissant.jpg";
import cake from "@/assets/product-cake.jpg";
import macarons from "@/assets/product-macarons.jpg";
import cappuccino from "@/assets/product-cappuccino.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Красноярские сладости — кафе и кондитерская" },
      {
        name: "description",
        content:
          "Красноярские сладости — кафе и кондитерская. Авторские десерты, ароматный кофе и доставка сладостей по Красноярску.",
      },
      { property: "og:title", content: "Красноярские сладости — кафе и кондитерская" },
      {
        property: "og:description",
        content: "Авторские десерты, ароматный кофе и доставка по Красноярску.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroCity.url },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <SugarDust />
      <Nav />
      <Hero />
      <Marquee />
      <Signature />
      <Story />
      <Menu />
      <Delivery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sugar dust — global falling particles                                       */
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
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: "Меню" },
    { href: "#story", label: "О нас" },
    { href: "#delivery", label: "Доставка" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel py-3 shadow-soft"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <Monogram />
          <div className="leading-tight">
            <div className="text-display text-lg font-semibold tracking-wide">Красноярские сладости</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Кафе и кондитерская
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-foreground/80 transition hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#delivery"
          className="hidden items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/10 px-5 py-2.5 text-sm text-foreground transition hover:bg-[var(--gold)]/20 md:inline-flex"
        >
          Заказать <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Monogram() {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/60 bg-gradient-to-br from-[var(--vanilla)] to-[var(--gold-soft)] shadow-soft">
      <span className="text-display text-xl leading-none text-[var(--caramel)]">К</span>
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero — "video-like" cinematic gingerbread Krasnoyarsk sequence              */
/* -------------------------------------------------------------------------- */
function Hero() {
  const slides = [
    { src: chapelGold.url, kb: "ken-burns-a" },
    { src: heroCity.url, kb: "ken-burns-b" },
    { src: coffeeCity.url, kb: "ken-burns-c" },
    { src: chapelGreen.url, kb: "ken-burns-a" },
  ];
  const total = slides.length;
  const cycle = total * 7; // 7s per slide

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              animation: `slide-fade ${cycle}s ease-in-out ${(i * cycle) / total}s infinite`,
            }}
          >
            <img
              src={s.src}
              alt="Пряничный Красноярск"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                animation: `${s.kb} ${cycle}s ease-in-out ${(i * cycle) / total}s infinite alternate`,
                willChange: "transform",
              }}
            />
          </div>
        ))}
        {/* Warm tint + gradient overlays — stronger for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)]/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/10" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(60% 40% at 20% 30%, rgba(255,215,140,0.5), transparent 70%)",
          }}
        />
      </div>

      {/* Steam wisps */}
      <div className="pointer-events-none absolute bottom-24 left-1/3 hidden md:block">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute block h-24 w-8 rounded-full bg-white/40 blur-2xl"
            style={{
              left: i * 18,
              animation: `steam-rise ${5 + i}s ease-out ${i * 0.8}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:justify-center">
        <div
          className="max-w-2xl animate-reveal rounded-3xl bg-background/55 p-8 backdrop-blur-md md:bg-transparent md:p-0 md:backdrop-blur-0"
          style={{ textShadow: "0 2px 24px rgba(255,248,230,0.75)" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-white/80 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[var(--caramel)] shadow-soft backdrop-blur">
            <Snowflake className="h-3.5 w-3.5" />
            Зимняя коллекция · Красноярск
          </div>
          <h1 className="text-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Красноярские <br />
            <span className="text-gold-gradient italic">сладости</span> <br />
            каждый день.
          </h1>
          <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
            Кафе и кондитерская в сердце Красноярска. Авторские десерты,
            ароматный кофе и доставка по всему городу — каждое утро с ароматом
            свежей выпечки.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
            >
              Смотреть меню
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#delivery"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/30 bg-white/80 px-8 py-4 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white"
            >
              Доставка по городу
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-8 text-xs font-medium uppercase tracking-[0.25em] text-foreground/75">
            <div className="flex items-center gap-2">
              <Star className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              4.9 · 2 300 отзывов
            </div>
            <div>С 2019 года</div>
            <div>Ручная работа</div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-foreground/60">
          <span>Пролистайте</span>
          <span className="h-10 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
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
/* Signature — hero product with side story                                    */
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
              width={1200}
              height={1200}
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
          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75">
            Наши мастера отливают часовню Параскевы Пятницы из белого шоколада,
            выпекают Столбы из имбирного теста и укрывают всё сахарной пудрой,
            как первым снегом. Возьмите чашку кофе и загляните внутрь — город
            оживёт прямо на блюдце.
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
        <img
          src={chapelGreen.url}
          alt=""
          className="h-full w-full object-cover"
        />
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
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
          Кондитерская «Красноярск» родилась из одного зимнего утра, когда пар
          от капучино напомнил снег над Енисеем. С тех пор мы каждый день
          пересобираем город из белого шоколада, карамели и мёда — для тех, кто
          верит, что красота начинается с маленького.
        </p>
        <div className="gold-divider mx-auto mt-14 max-w-md" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Menu                                                                        */
/* -------------------------------------------------------------------------- */
type Item = {
  name: string;
  desc: string;
  price: string;
  img: string;
  tag?: string;
};

const menu: Item[] = [
  {
    name: "Медовик «Столбы»",
    desc: "Тонкие медовые коржи, сметанный крем, засахаренная клюква.",
    price: "540 ₽",
    img: cake,
    tag: "Хит",
  },
  {
    name: "Эклер «Енисей»",
    desc: "Заварное тесто, крем на белом шоколаде, глянцевая карамель.",
    price: "290 ₽",
    img: eclair,
  },
  {
    name: "Тарталетка «Часовня»",
    desc: "Песочная корзинка, ванильный мусс, карамелизированные орехи, золото.",
    price: "380 ₽",
    img: tart,
    tag: "Новинка",
  },
  {
    name: "Круассан ручной складки",
    desc: "72 слоя, французское масло, сахарная пудра как первый снег.",
    price: "230 ₽",
    img: croissant,
  },
  {
    name: "Макаронс «Ассорти»",
    desc: "Шесть вкусов: ваниль, солёная карамель, фисташка, малина, кофе, роза.",
    price: "690 ₽",
    img: macarons,
  },
  {
    name: "Капучино «Пряничный»",
    desc: "Спешелти-обжарка, молочная пена, нотка пряного сиропа и корицы.",
    price: "240 ₽",
    img: cappuccino,
  },
];

function Menu() {
  const [tab, setTab] = useState<"all" | "cakes" | "coffee">("all");
  const filtered =
    tab === "all"
      ? menu
      : tab === "cakes"
        ? menu.slice(0, 5)
        : menu.slice(5);

  return (
    <section id="menu" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
              <span className="h-px w-8 bg-[var(--gold)]" /> Меню
            </div>
            <h2 className="text-display text-4xl leading-tight md:text-6xl">
              Витрина, от которой <br />
              <span className="italic text-[var(--caramel)]">не оторвать глаз.</span>
            </h2>
          </div>
          <div className="flex gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--cream)] p-1">
            {[
              { id: "all", label: "Всё" },
              { id: "cakes", label: "Десерты" },
              { id: "coffee", label: "Кофе" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as "all" | "cakes" | "coffee")}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  tab === t.id
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ProductCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, index }: { item: Item; index: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl bg-[var(--cream)] shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
      style={{ animation: `reveal-up 0.9s ${index * 90}ms cubic-bezier(0.16,1,0.3,1) both` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          width={1200}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        {item.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--caramel)] shadow-soft backdrop-blur">
            {item.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="text-display text-2xl leading-tight">{item.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>
        </div>
        <div className="text-right">
          <div className="text-display text-lg text-[var(--caramel)]">
            {item.price}
          </div>
          <button className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-foreground/70 transition hover:text-[var(--caramel)]">
            В корзину <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Delivery                                                                    */
/* -------------------------------------------------------------------------- */
function Delivery() {
  const steps = [
    {
      icon: Cake,
      title: "Выбираете десерт",
      text: "Свежие торты, пирожные и напитки — прямо с витрины сегодняшнего утра.",
    },
    {
      icon: Coffee,
      title: "Мы упаковываем",
      text: "Термо-коробки с ленточкой и запиской. Кофе — в теплокружках.",
    },
    {
      icon: Truck,
      title: "Курьер везёт",
      text: "60 минут по Красноярску. Бесплатно от 1 500 ₽.",
    },
  ];
  return (
    <section
      id="delivery"
      className="relative overflow-hidden py-28 md:py-36"
    >
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
              className="group relative overflow-hidden rounded-3xl border border-[var(--gold)]/20 bg-white/60 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)]/80 text-[var(--caramel)] shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Шаг 0{i + 1}
              </div>
              <h3 className="mt-2 text-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70">
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
    {
      name: "Анна К.",
      role: "гость с 2020",
      text: "«Пришла за капучино — влюбилась в город заново. Кажется, будто съедаешь маленькую сказку.»",
    },
    {
      name: "Максим Р.",
      role: "заказчик",
      text: "«Заказал торт на день рождения дочки — она смотрела на него как на игрушку. Есть было почти жалко. Почти.»",
    },
    {
      name: "Ольга В.",
      role: "гость",
      text: "«Лучший медовик в Красноярске. И интерьер как в европейской кофейне — светло, тепло, ванильно.»",
    },
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
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={coffeeCity.url}
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-display text-4xl leading-tight md:text-6xl">
            Загляните на <br />
            <span className="italic text-[var(--caramel)]">чашку кофе.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/75">
            Мы работаем каждый день с раннего утра и до самой ночи. Приходите
            смотреть, как рождается пряничный город.
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
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass-panel rounded-3xl p-8 shadow-elegant"
        >
          <div className="text-display text-2xl">Заказать доставку</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Оставьте номер — перезвоним за 5 минут и соберём заказ.
          </p>
          <div className="mt-8 space-y-4">
            <Field label="Имя" placeholder="Как к вам обращаться" />
            <Field label="Телефон" placeholder="+7 ___ ___ __ __" type="tel" />
            <Field label="Что желаете?" placeholder="Медовик, эклер, капучино…" />
          </div>
          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-4 text-sm text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.01]"
          >
            Отправить заявку <Send className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </form>
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

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full border border-[var(--gold)]/30 bg-white/70 px-5 py-3.5 text-sm outline-none transition placeholder:text-foreground/40 focus:border-[var(--gold)] focus:bg-white"
      />
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/20 bg-[var(--cream)] py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <Monogram />
        <div className="text-display text-2xl">
          Красноярск · <span className="italic text-[var(--caramel)]">patisserie</span>
        </div>
        <div className="gold-divider w-40" />
        <p className="max-w-md text-sm text-muted-foreground">
          Сделано с любовью к городу. Испечено сегодня утром. С сахарной пудрой,
          как первый снег над Енисеем.
        </p>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <a href="#menu" className="hover:text-foreground">Меню</a>
          <span>·</span>
          <a href="#delivery" className="hover:text-foreground">Доставка</a>
          <span>·</span>
          <a href="#contact" className="hover:text-foreground">Контакты</a>
        </div>
        <div className="text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} Красноярск Patisserie. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
