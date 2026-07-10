import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Plus, Search, ShoppingBag } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { MENU, CATEGORIES, type MenuCategory } from "@/lib/menu-data";
import { useCart, formatRub } from "@/lib/cart";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState<MenuCategory | "all">("all");
  const [query, setQuery] = useState("");
  const { add, count, open } = useCart();

  const items = MENU.filter(
    (m) => (cat === "all" || m.category === cat) &&
      (query.trim() === "" ||
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.desc.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav solid />

      <section className="relative overflow-hidden pt-36 pb-14">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--vanilla)] via-[var(--cream)] to-[var(--gold-soft)]/60" />
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/" className="text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
            ← На главную
          </Link>
          <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-display text-5xl font-semibold leading-[0.95] md:text-7xl">
                Меню
                <br />
                <span className="italic text-[var(--caramel)]">кафе.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
                Авторские десерты, свежая выпечка и спешелти-кофе. Добавляйте в
                корзину — соберём и привезём за 60 минут по Красноярску.
              </p>
            </div>
            <button
              onClick={open}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
            >
              <ShoppingBag className="h-4 w-4" />
              Корзина
              {count > 0 && (
                <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--gold)] px-1.5 text-[11px] font-semibold text-[var(--primary)]">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="sticky top-[76px] z-30 border-y border-[var(--gold)]/20 bg-background/85 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  cat === c.id
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-soft"
                    : "border border-[var(--gold)]/30 bg-[var(--cream)] text-foreground/75 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <label className="relative flex w-full max-w-xs items-center">
            <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по меню…"
              className="w-full rounded-full border border-[var(--gold)]/30 bg-[var(--cream)] py-2.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-[var(--gold)] focus:bg-background"
            />
          </label>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {items.length === 0 ? (
            <div className="mx-auto max-w-md rounded-3xl border border-[var(--gold)]/20 bg-[var(--cream)] p-12 text-center">
              <div className="text-display text-2xl">Ничего не нашли</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Попробуйте другую категорию или очистите поиск.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl bg-[var(--cream)] shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
                  style={{
                    animation: `reveal-up 0.7s ${i * 60}ms cubic-bezier(0.16,1,0.3,1) both`,
                  }}
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
                          add({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            img: item.img,
                          })
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
          )}
        </div>
      </section>

      <section className="border-t border-[var(--gold)]/20 bg-[var(--cream)] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
          <div className="text-display text-2xl">
            Готовы оформить заказ?
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
          >
            Перейти к оформлению <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
