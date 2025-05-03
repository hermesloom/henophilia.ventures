import Link from "next/link";

interface FooterProps {
  showHomeLink?: boolean;
}

export function Footer({ showHomeLink = false }: FooterProps) {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-neutral-100 mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-neutral-500">
              © 2025 Henophilia Ventures
            </div>
            <a
              href="https://www.linkedin.com/company/henophiliaventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-800 transition-colors"
              aria-label="Henophilia Ventures LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          {showHomeLink ? (
            <div className="text-sm text-neutral-500">
              <Link href="/" className="hover:underline">
                Return to Main Site
              </Link>
            </div>
          ) : (
            <div className="text-sm text-neutral-500">
              Economic Infrastructure, Rebuilt From First Principles
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
