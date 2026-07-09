import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart, formatRub } from "@/lib/cart";

export function CartDrawer() {
  const { items, isOpen, close, setQty, remove, total, count } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-background shadow-elegant transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-[var(--gold)]/20 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-[var(--caramel)]" />
            <div>
              <div className="text-display text-xl">Ваш заказ</div>
              <div className="text-xs text-muted-foreground">
                {count > 0 ? `${count} позиций` : "Пока пусто"}
              </div>
            </div>
          </div>
          <button
            onClick={close}
            className="rounded-full p-2 text-foreground/70 transition hover:bg-[var(--cream)] hover:text-foreground"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--cream)]">
                <ShoppingBag className="h-8 w-8 text-[var(--caramel)]" />
              </div>
              <div className="text-display text-2xl">Корзина пуста</div>
              <p className="max-w-xs text-sm text-muted-foreground">
                Добавьте десерты из меню — соберём и привезём в тёплой упаковке.
              </p>
              <Link
                to="/menu"
                onClick={close}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.02]"
              >
                Открыть меню
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li
                  key={it.id}
                  className="flex gap-4 rounded-2xl border border-[var(--gold)]/20 bg-[var(--cream)] p-3"
                >
                  <img
                    src={it.img}
                    alt={it.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-display text-base leading-tight">{it.name}</div>
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
                          className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-[var(--cream)]"
                          aria-label="Меньше"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{it.qty}</span>
                        <button
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-[var(--cream)]"
                          aria-label="Больше"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="text-display text-lg font-semibold text-[var(--caramel)]">
                        {formatRub(it.price * it.qty)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--gold)]/20 bg-[var(--cream)]/60 px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Итого
              </div>
              <div className="text-display text-3xl font-semibold text-[var(--caramel)]">
                {formatRub(total)}
              </div>
            </div>
            <Link
              to="/cart"
              onClick={close}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant transition hover:scale-[1.01]"
            >
              Оформить заказ
            </Link>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Бесплатная доставка от 1 500 ₽ · Красноярск · 60 минут
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
