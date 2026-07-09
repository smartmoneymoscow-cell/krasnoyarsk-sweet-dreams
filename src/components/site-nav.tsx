import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

function Monogram() {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/60 bg-gradient-to-br from-[var(--vanilla)] to-[var(--gold-soft)] shadow-soft">
      <span className="text-display text-xl leading-none text-[var(--caramel)]">К</span>
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
    </div>
  );
}

export function SiteNav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const { count, open } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isSolid ? "glass-panel py-3 shadow-soft" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Monogram />
          <div className="leading-tight">
            <div className="text-display text-lg font-semibold tracking-wide">
              Красноярские сладости
            </div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Кафе и кондитерская
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          <Link
            to="/menu"
            className="group relative text-sm text-foreground/80 transition hover:text-foreground"
          >
            Меню
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/"
            hash="story"
            className="group relative text-sm text-foreground/80 transition hover:text-foreground"
          >
            О нас
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/"
            hash="delivery"
            className="group relative text-sm text-foreground/80 transition hover:text-foreground"
          >
            Доставка
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/"
            hash="contact"
            className="group relative text-sm text-foreground/80 transition hover:text-foreground"
          >
            Контакты
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
        <button
          onClick={open}
          aria-label="Корзина"
          className="relative inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/10 px-4 py-2.5 text-sm text-foreground transition hover:bg-[var(--gold)]/20"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Корзина</span>
          {count > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--primary)] px-1.5 text-[11px] font-semibold text-[var(--primary-foreground)]">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
