import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { useCart, formatRub } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Оформление заказа — Красноярские сладости" },
      { name: "description", content: "Оформите заказ с доставкой по Красноярску." },
      { name: "robots", content: "noindex" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, total, clear } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    time: "asap",
    payment: "card",
    comment: "",
  });

  const deliveryFee = total >= 1500 || total === 0 ? 0 : 250;
  const grand = total + deliveryFee;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (placed) {
    return (
      <div className="relative min-h-screen bg-background text-foreground">
        <SiteNav solid />
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 py-32 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--caramel)]">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-display text-4xl font-semibold md:text-5xl">
            Спасибо! Заказ принят.
          </h1>
          <p className="max-w-md text-base text-foreground/75">
            Мы перезвоним вам в ближайшие 5 минут для подтверждения. Курьер
            привезёт заказ в тёплой упаковке за 60 минут.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
            >
              К меню
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-white/70 px-7 py-3.5 text-sm text-[var(--primary)] transition hover:bg-white"
            >
              На главную
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav solid />

      <section className="pt-36 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/menu" className="text-xs uppercase tracking-[0.3em] text-[var(--caramel)]">
            ← Продолжить покупки
          </Link>
          <h1 className="mt-3 text-display text-5xl font-semibold leading-[0.95] md:text-7xl">
            Оформление
            <br />
            <span className="italic text-[var(--caramel)]">заказа.</span>
          </h1>
        </div>
      </section>

      {items.length === 0 ? (
        <div className="mx-auto max-w-2xl px-6 pb-32">
          <div className="rounded-3xl border border-[var(--gold)]/20 bg-[var(--cream)] p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-background">
              <ShoppingBag className="h-8 w-8 text-[var(--caramel)]" />
            </div>
            <div className="mt-6 text-display text-3xl">Корзина пуста</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Добавьте десерты из меню — соберём и привезём в тёплой упаковке.
            </p>
            <button
              onClick={() => navigate({ to: "/menu" })}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
            >
              Открыть меню <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <section className="pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12">
            {/* Left: items + form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[var(--gold)]/20 bg-[var(--cream)] p-6 md:p-8">
                <div className="text-display text-2xl">Ваш заказ</div>
                <ul className="mt-6 divide-y divide-[var(--gold)]/20">
                  {items.map((it) => (
                    <li key={it.id} className="flex gap-4 py-5">
                      <img
                        src={it.img}
                        alt={it.name}
                        className="h-24 w-24 shrink-0 rounded-2xl object-cover"
                      />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-display text-xl leading-tight">
                              {it.name}
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {formatRub(it.price)} за шт.
                            </div>
                          </div>
                          <button
                            onClick={() => remove(it.id)}
                            className="text-muted-foreground transition hover:text-destructive"
                            aria-label="Удалить"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="inline-flex items-center rounded-full border border-[var(--gold)]/40 bg-background">
                            <button
                              onClick={() => setQty(it.id, it.qty - 1)}
                              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[var(--cream)]"
                              aria-label="Меньше"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-9 text-center text-sm font-medium">
                              {it.qty}
                            </span>
                            <button
                              onClick={() => setQty(it.id, it.qty + 1)}
                              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[var(--cream)]"
                              aria-label="Больше"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="text-display text-2xl font-semibold text-[var(--caramel)]">
                            {formatRub(it.price * it.qty)}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <form
                onSubmit={submit}
                className="mt-8 rounded-3xl border border-[var(--gold)]/20 bg-background p-6 md:p-8"
              >
                <div className="text-display text-2xl">Данные для доставки</div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Имя"
                    placeholder="Как к вам обращаться"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Телефон"
                    placeholder="+7 ___ ___ __ __"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    required
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Адрес доставки"
                      placeholder="Улица, дом, квартира"
                      value={form.address}
                      onChange={(v) => setForm({ ...form, address: v })}
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Время доставки
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { id: "asap", label: "Как можно скорее" },
                      { id: "1h", label: "Через 1 час" },
                      { id: "2h", label: "Через 2 часа" },
                      { id: "eve", label: "Вечером" },
                    ].map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setForm({ ...form, time: o.id })}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                          form.time === o.id
                            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                            : "border border-[var(--gold)]/30 bg-[var(--cream)] text-foreground/75"
                        }`}
                      >
                        <Clock className="h-3.5 w-3.5" /> {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Оплата
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { id: "card", label: "Картой онлайн" },
                      { id: "courier", label: "Курьеру картой" },
                      { id: "cash", label: "Наличные" },
                    ].map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setForm({ ...form, payment: o.id })}
                        className={`rounded-full px-4 py-2 text-sm transition ${
                          form.payment === o.id
                            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                            : "border border-[var(--gold)]/30 bg-[var(--cream)] text-foreground/75"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Комментарий
                    </span>
                    <textarea
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      placeholder="Пожелания к заказу, домофон, этаж…"
                      rows={3}
                      className="mt-2 w-full rounded-2xl border border-[var(--gold)]/30 bg-[var(--cream)] px-5 py-3.5 text-sm outline-none transition placeholder:text-foreground/40 focus:border-[var(--gold)] focus:bg-background"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.01]"
                >
                  Оформить заказ · {formatRub(grand)}
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </div>

            {/* Right: sticky summary */}
            <aside className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl border border-[var(--gold)]/20 bg-[var(--cream)] p-6 shadow-soft md:p-8">
                <div className="text-display text-2xl">Итого</div>
                <div className="mt-6 space-y-3 text-sm">
                  <Row label="Товары" value={formatRub(total)} />
                  <Row
                    label="Доставка"
                    value={deliveryFee === 0 ? "Бесплатно" : formatRub(deliveryFee)}
                  />
                  {deliveryFee > 0 && (
                    <div className="rounded-2xl bg-[var(--gold-soft)]/50 p-3 text-xs text-[var(--caramel)]">
                      Добавьте ещё {formatRub(1500 - total)} — и доставка станет бесплатной.
                    </div>
                  )}
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-[var(--gold)]/20 pt-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    К оплате
                  </div>
                  <div className="text-display text-4xl font-semibold text-[var(--caramel)]">
                    {formatRub(grand)}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-display text-lg text-foreground">{value}</span>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-full border border-[var(--gold)]/30 bg-[var(--cream)] px-5 py-3.5 text-sm outline-none transition placeholder:text-foreground/40 focus:border-[var(--gold)] focus:bg-background"
      />
    </label>
  );
}
