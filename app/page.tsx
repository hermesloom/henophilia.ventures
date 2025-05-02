import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6">
            Rebuilding Economic Infrastructure from First Principles
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mb-12">
            Henophilia Ventures funds and engineers interdependent startup
            economies—designed to meet core needs, reduce systemic leakage, and
            sustain cooperative ownership over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex px-6 py-3 bg-neutral-800 text-white rounded-md text-sm font-medium transition-colors hover:bg-neutral-700"
            >
              Request Memo
            </a>
            <a
              href="/apply"
              className="inline-flex px-6 py-3 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
            >
              Founders: Apply to a Batch
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="intro"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            Capital, Composed Differently
          </h2>
          <div className="prose max-w-none text-neutral-800">
            <p className="mb-4">
              We approach venture funding as infrastructure design.
            </p>
            <p className="mb-4">
              Each investment cycle is engineered as a self-reinforcing system:
              multiple startups, composed into a functional unit. Together they
              form a <strong>closed-loop economy</strong>, sharing legal
              frameworks, internal trade, governance protocols, and regenerative
              housing infrastructure.
            </p>
            <p>
              By composing aligned ventures as interdependent structures, we
              reduce volatility, increase mutual sufficiency, and unlock
              long-term stability beyond extractive market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="model"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            From Isolated Startups to Economic Cohorts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">
                Systemic Cohort Design
              </h3>
              <p className="text-neutral-700">
                Each batch includes 5–10 startups whose value flows
                interconnect—housing, legal structure, internal finance, care,
                governance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">
                Integrated Ownership Logic
              </h3>
              <p className="text-neutral-700">
                We structure ventures using steward ownership, purpose trusts,
                and cooperative control to retain mission continuity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Circular Value Flows</h3>
              <p className="text-neutral-700">
                Cohorts develop shared currencies and mutual credit systems to
                reduce reliance on external capital markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Fund */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="funding"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            Venture-Scale Infrastructure for the Real Economy
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Housing Systems</h3>
              <p className="text-neutral-700">
                Modular dwellings, cooperative settlements, land stewardship
                trusts
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Alternative Finance</h3>
              <p className="text-neutral-700">
                Mutual credit, demurrage currencies, community capital tools
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Legal Infrastructure</h3>
              <p className="text-neutral-700">
                Steward ownership contracts, trust law toolkits, collective
                equity models
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Governance Protocols</h3>
              <p className="text-neutral-700">
                Token-weighted voting, nested councils, constitutional
                frameworks
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Care & Labor Systems</h3>
              <p className="text-neutral-700">
                Cooperative caregiving, founder support ecosystems, circular
                service networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Founders */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="founders"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            You're Not Building a Company—You're Building a System
          </h2>
          <div className="prose max-w-none text-neutral-800 mb-8">
            <p className="mb-4">
              We work with founders who design ventures as structural
              interventions—solving problems beneath the user interface, beneath
              the product layer, beneath the business model.
            </p>
            <p>
              If your work meets essential needs, enables others, or forms the
              connective tissue of a regenerative economy, we want to fund
              you—and embed you in a cohort where your venture becomes necessary
              infrastructure.
            </p>
          </div>
          <a
            href="/apply"
            className="inline-flex px-6 py-3 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
          >
            Apply to a Cohort
          </a>
        </div>
      </section>

      {/* For LPs & Institutions */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="investors"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            Designed for Patient Capital with Structural Intent
          </h2>
          <div className="prose max-w-none text-neutral-800 mb-8">
            <p className="mb-4">
              Henophilia Ventures offers a uniquely structured investment
              strategy:
            </p>
            <ul>
              <li>Purpose-aligned returns</li>
              <li>Ecosystem equity</li>
              <li>Revenue participation without exit dependency</li>
              <li>
                Legal containers that ensure value remains in service of mission
              </li>
            </ul>
            <p>
              Our LPs support infrastructure, not speculation. We welcome
              foundations, family offices, mission-driven funds, and catalytic
              institutions.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
          >
            Request Investment Materials
          </a>
        </div>
      </section>

      {/* Closing / Contact */}
      <section className="py-20 px-6 md:px-12" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Contact Us</h2>
          <div className="prose max-w-none text-neutral-800 mb-8">
            <p className="text-lg mb-6">
              We build ventures that outlive their founders—because they're
              composed for continuity, reciprocity, and care.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-neutral-100 mt-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-sm text-neutral-500">
              © 2025 Henophilia Ventures
            </div>
            <div className="text-sm text-neutral-500">
              Rebuilding economic infrastructure from first principles
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
