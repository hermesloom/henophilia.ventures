import { ApplicationForm } from "../components/application-form";
import { Header } from "../components/header";

export const metadata = {
  title: "Apply to Henophilia Ventures | Founder Application",
  description:
    "Apply to join a Henophilia Ventures cohort building regenerative economic infrastructure.",
};

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header showNavLinks={false} />

      {/* Main content */}
      <main className="flex-1 py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-medium mb-4">Apply to a Cohort</h1>
            <p className="text-neutral-700 max-w-2xl">
              We're looking for founders building ventures that function as
              infrastructure for a regenerative economy. Your application helps
              us understand how your work might fit within an interdependent
              cohort of aligned ventures.
            </p>
          </div>

          <ApplicationForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-neutral-100 mt-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-sm text-neutral-500">
              © 2025 Henophilia Ventures
            </div>
            <div className="text-sm text-neutral-500">
              <a href="/" className="hover:underline">
                Return to Main Site
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
