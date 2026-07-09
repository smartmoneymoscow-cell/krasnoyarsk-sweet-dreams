import { Coffee, Home, Heart, Search, ShoppingBag, User, Plus } from "lucide-react";
import cake from "@/assets/product-cake.jpg";
import eclair from "@/assets/product-eclair.jpg";
import tart from "@/assets/product-tart.jpg";
import cappuccino from "@/assets/product-cappuccino.jpg";

/**
 * Realistic phone mockup with the coffee shop app menu screen inside.
 * Pure CSS/SVG — no images beyond product photos.
 */
export function PhoneMenuMock() {
  const items = [
    { name: "Медовик «Столбы»", price: "540 ₽", img: cake, tag: "Хит" },
    { name: "Тарталетка «Часовня»", price: "380 ₽", img: tart, tag: "Новинка" },
    { name: "Эклер «Енисей»", price: "290 ₽", img: eclair },
    { name: "Капучино «Пряничный»", price: "240 ₽", img: cappuccino },
  ];
  const chips = ["Всё", "Десерты", "Выпечка", "Кофе", "Сезон"];

  return (
    <div className="relative mx-auto w-[290px] shrink-0 md:w-[320px]">
      {/* Halo */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[var(--gold)]/40 blur-3xl" />

      {/* Phone frame */}
      <div className="relative aspect-[9/19] w-full rounded-[3rem] border-[12px] border-[#111] bg-[#111] shadow-elegant">
        {/* Side buttons */}
        <span className="absolute -left-[15px] top-24 h-16 w-[3px] rounded-l bg-[#0a0a0a]" />
        <span className="absolute -left-[15px] top-44 h-10 w-[3px] rounded-l bg-[#0a0a0a]" />
        <span className="absolute -right-[15px] top-32 h-20 w-[3px] rounded-r bg-[#0a0a0a]" />

        {/* Screen */}
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-background">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0a0a0a]" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-foreground/80">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-foreground/70" />
              <span className="h-2 w-2 rounded-full bg-foreground/70" />
              <span>100%</span>
            </span>
          </div>

          {/* App header */}
          <div className="px-4 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--caramel)]">
                  Доставка · Красноярск
                </div>
                <div className="text-display text-[17px] font-semibold leading-tight">
                  Доброе утро,
                  <br />
                  <span className="italic text-[var(--caramel)]">Анна</span>
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--cream)]">
                <Search className="h-4 w-4 text-[var(--caramel)]" />
              </div>
            </div>

            {/* Bonus card */}
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--caramel)] p-3 text-[var(--cream)] shadow-soft">
              <div>
                <div className="text-[9px] uppercase tracking-[0.25em] opacity-80">
                  Ваши бонусы
                </div>
                <div className="text-display text-xl font-semibold">1 240 ₽</div>
              </div>
              <div className="text-right text-[9px] leading-tight opacity-80">
                до золотого
                <br />
                статуса <span className="font-semibold text-[var(--gold-soft)]">260 ₽</span>
              </div>
            </div>

            {/* Chips */}
            <div className="mt-3 flex gap-1.5 overflow-hidden">
              {chips.map((c, i) => (
                <span
                  key={c}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${
                    i === 0
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "bg-[var(--cream)] text-foreground/70"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Item list */}
          <div className="mt-3 flex-1 space-y-2 overflow-hidden px-4">
            {items.map((it) => (
              <div
                key={it.name}
                className="flex items-center gap-2.5 rounded-2xl bg-[var(--cream)] p-2 shadow-soft"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                  <img src={it.img} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <div className="truncate text-[11px] font-semibold leading-tight">
                      {it.name}
                    </div>
                    {it.tag && (
                      <span className="rounded-full bg-[var(--gold)]/25 px-1.5 py-0.5 text-[8px] uppercase tracking-wider text-[var(--caramel)]">
                        {it.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-0.5 flex items-center justify-between">
                    <span className="text-display text-sm font-semibold text-[var(--caramel)]">
                      {it.price}
                    </span>
                    <button className="grid h-6 w-6 place-items-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart pill */}
          <div className="mx-4 mt-2 flex items-center justify-between rounded-2xl bg-[var(--foreground)] px-3 py-2 text-[var(--cream)] shadow-elegant">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--foreground)]">
                <ShoppingBag className="h-3.5 w-3.5" />
              </div>
              <div className="text-[10px] leading-tight">
                <div className="opacity-70">3 позиции · 25 мин</div>
                <div className="font-semibold">Корзина</div>
              </div>
            </div>
            <div className="text-display text-sm font-semibold">1 210 ₽</div>
          </div>

          {/* Tab bar */}
          <div className="mt-2 flex items-center justify-around border-t border-[var(--gold)]/20 bg-background/95 px-4 pb-5 pt-2 backdrop-blur">
            {[
              { i: Home, on: false },
              { i: Coffee, on: true, label: "Меню" },
              { i: Heart, on: false },
              { i: User, on: false },
            ].map(({ i: Icon, on }, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-0.5 ${
                  on ? "text-[var(--caramel)]" : "text-foreground/40"
                }`}
              >
                <Icon className={`h-4 w-4 ${on ? "fill-[var(--gold)]/30" : ""}`} />
                {on && <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
