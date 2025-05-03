import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  showNavLinks?: boolean;
}

export function Header({ showNavLinks = true }: HeaderProps) {
  return (
    <header className="py-6 px-6 md:px-12 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-lg"
          >
            <Image
              src="/logo.png"
              alt="Henophilia Ventures logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            Henophilia Ventures
          </Link>

          {showNavLinks && (
            <nav className="hidden md:flex space-x-8 text-sm">
              <Link
                href="/#model"
                className="hover:text-neutral-500 transition-colors"
              >
                Model
              </Link>
              <Link
                href="/#funding"
                className="hover:text-neutral-500 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#founders"
                className="hover:text-neutral-500 transition-colors"
              >
                Founders
              </Link>
              <Link
                href="/#investors"
                className="hover:text-neutral-500 transition-colors"
              >
                Investors
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
