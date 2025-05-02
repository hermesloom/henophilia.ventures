import Link from "next/link";

interface HeaderProps {
  showNavLinks?: boolean;
}

export function Header({ showNavLinks = true }: HeaderProps) {
  return (
    <header className="py-6 px-6 md:px-12 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            Henophilia Ventures
          </Link>

          {showNavLinks && (
            <nav className="hidden md:flex space-x-8 text-sm">
              <a
                href="/#model"
                className="hover:text-neutral-500 transition-colors"
              >
                Model
              </a>
              <a
                href="/#funding"
                className="hover:text-neutral-500 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/#founders"
                className="hover:text-neutral-500 transition-colors"
              >
                Founders
              </a>
              <a
                href="/#investors"
                className="hover:text-neutral-500 transition-colors"
              >
                Investors
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
