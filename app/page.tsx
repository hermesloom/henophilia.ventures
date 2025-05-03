import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ContactForm } from "./components/contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6">
            Economic Infrastructure, Rebuilt From First Principles
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mb-12">
            Henophilia engineers interconnected startup economies: designed for
            core needs, minimal leakage, enduring cooperative governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex px-6 py-3 bg-neutral-800 text-white rounded-md text-sm font-medium transition-colors hover:bg-neutral-700"
            >
              Request Memo
            </Link>
            <Link
              href="/apply"
              className="inline-flex px-6 py-3 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
            >
              Apply to Current Batch
            </Link>
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
            Capital, Structurally Reimagined
          </h2>
          <div className="prose max-w-none text-neutral-800">
            <p className="mb-4">
              We approach venture funding as infrastructure architecture.
            </p>
            <p className="mb-4">
              Each investment cycle: a self-reinforcing system. Multiple
              startups, composed into one functional unit, forming a{" "}
              <strong>closed-loop economy</strong> with shared legal structures,
              internal exchange, governance, human care, and physical
              infrastructure.
            </p>
            <p>
              Through interdependent composition, we achieve stability beyond
              market volatility—sufficiency through mutual integration.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="technical"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            System Architecture: Beyond Isolated Startups
          </h2>
          <div className="prose max-w-none text-neutral-800">
            <p className="mb-4">
              Our technical approach treats economic structures as composable
              systems with explicit interfaces, dependencies, and feedback
              loops.
            </p>
            <p className="mb-4">
              Each venture: a microservice in a distributed architecture.
              Protocols define inter-entity value exchange, governance
              boundaries, and resource allocation. Legal structures function as
              persistent state layers, ensuring system continuity despite node
              replacement.
            </p>
            <p className="mb-4">
              Current financial stacks introduce unnecessary complexity, leakage
              vectors, and extraction points. Our implementation eliminates
              these inefficiencies through direct peer contracts, Byzantine
              fault-tolerant governance, and local sovereignty with global
              interoperability.
            </p>
            <p>
              Core innovation: treating ventures not as growth-optimized
              entities, but as redundant, interdependent nodes in anti-fragile
              infrastructure—each designed for replacement without system
              failure, cooperatively owned, bounded in resource consumption, yet
              unbounded in value production.
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
            From Isolated Ventures to Economic Cohorts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">
                Systemic Cohort Design
              </h3>
              <p className="text-neutral-700">
                Each batch: 5–10 ventures with interconnected value flows.
                Shared land and other physical property, legal structure,
                finance, care, and governance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">
                Structured Ownership Logic
              </h3>
              <p className="text-neutral-700">
                Steward ownership, purpose trusts, cooperative control.
                Governance designed for intact mission continuity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Circular Value Flows</h3>
              <p className="text-neutral-700">
                Internal currencies and mutual credit, minimizing external
                capital dependency. Self-sustaining economic circuits.
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
            Core Infrastructure for Real Economies
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Housing Systems</h3>
              <p className="text-neutral-700">
                Modular dwellings. Cooperative settlements. Land trusts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Alternative Finance</h3>
              <p className="text-neutral-700">
                Mutual credit networks. Time-based currencies. Community
                capital.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Legal Infrastructure</h3>
              <p className="text-neutral-700">
                Steward ownership. Trust law protocols. Collective equity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Governance Protocols</h3>
              <p className="text-neutral-700">
                Consent-based voting. Nested councils. Constitutional
                structures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Care & Labor Systems</h3>
              <p className="text-neutral-700">
                Cooperative caregiving. Mutual support networks. Circular
                service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Land Stewardship</h3>
              <p className="text-neutral-700">
                Regenerative agriculture. Commons management. Ecological
                restoration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Knowledge Commons</h3>
              <p className="text-neutral-700">
                Learning ecosystems. Wisdom transfer. Intergenerational
                practice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Celebration Systems</h3>
              <p className="text-neutral-700">
                Ritual design. Art platforms. Play infrastructure.
                Meaning-making.
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
            Not Building Companies—Building Systems
          </h2>
          <div className="prose max-w-none text-neutral-800 mb-8">
            <p className="mb-4">
              We fund founders who design structural interventions. Below the
              interface, below the product, below the business model.
            </p>
            <p>
              If your venture meets essential needs, enables other ventures, or
              forms connective tissue for a regenerative economy—join a cohort
              where your work becomes vital infrastructure.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex px-6 py-3 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
          >
            Apply to a Cohort
          </Link>
        </div>
      </section>

      {/* For LPs & Institutions */}
      <section
        className="py-20 px-6 md:px-12 border-b border-neutral-100"
        id="investors"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            Capital with Structural Intent
          </h2>
          <div className="prose max-w-none text-neutral-800 mb-8">
            <p className="mb-4">Our investment architecture:</p>
            <ul>
              <li>Purpose-aligned returns</li>
              <li>Ecosystem equity holdings</li>
              <li>Revenue participation without exit pressure</li>
              <li>Legal structures preserving mission integrity</li>
            </ul>
            <p>
              Our LPs fund infrastructure, not speculation. For foundations,
              family offices, mission-driven institutions, catalytic capital.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex px-6 py-3 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
          >
            Request Investment Materials
          </Link>
        </div>
      </section>

      {/* Closing / Contact */}
      <section className="py-20 px-6 md:px-12" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Contact</h2>
          <div className="prose max-w-none text-neutral-800 mb-8">
            <p className="text-lg mb-6">
              Ventures built to outlive their founders—composed for continuity,
              reciprocity, care.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
