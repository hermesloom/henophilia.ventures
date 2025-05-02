"use client";

import { useState } from "react";

interface FormState {
  founderName: string;
  email: string;
  projectName: string;
  projectDescription: string;
  systemicApproach: string;
  infrastructureCategory: string;
  developmentStage: string;
  teamComposition: string;
  fundingNeeds: string;
  alignment: string;
}

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormState>({
    founderName: "",
    email: "",
    projectName: "",
    projectDescription: "",
    systemicApproach: "",
    infrastructureCategory: "",
    developmentStage: "",
    teamComposition: "",
    fundingNeeds: "",
    alignment: "",
  });

  const totalSteps = 5;

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the email body with all form data
    const emailBody = `
Dear Henophilia Ventures,

I'm submitting my application for consideration in your cohort program.

== FOUNDER INFORMATION ==
Name: ${formData.founderName}
Email: ${formData.email}

== PROJECT OVERVIEW ==
Project Name: ${formData.projectName}
Description: ${formData.projectDescription}

== SYSTEMIC APPROACH ==
How my venture functions as infrastructure: ${formData.systemicApproach}

== CATEGORY & DEVELOPMENT ==
Infrastructure Category: ${formData.infrastructureCategory}
Development Stage: ${formData.developmentStage}

== TEAM & RESOURCES ==
Team Composition: ${formData.teamComposition}
Funding Needs: ${formData.fundingNeeds}

== ALIGNMENT WITH HENOPHILIA ==
Why my venture aligns with your interdependent economic model: ${formData.alignment}

I look forward to discussing how my venture might contribute to a cohort focused on building regenerative economic infrastructure.

Regards,
${formData.founderName}
    `.trim();

    // Encode the email subject and body for the mailto link
    const mailtoSubject = encodeURIComponent(
      "Your Application to Henophilia Ventures"
    );
    const mailtoBody = encodeURIComponent(emailBody);

    // Open the mailto link
    window.location.href = `mailto:applications@henophilia.ventures?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Founder Information</h3>
            <p className="text-neutral-600 mb-6">
              Tell us about yourself as the primary founder or representative.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="founderName"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  id="founderName"
                  type="text"
                  value={formData.founderName}
                  onChange={(e) => updateField("founderName", e.target.value)}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Project Overview</h3>
            <p className="text-neutral-600 mb-6">
              Describe your venture and how it functions as infrastructure
              rather than just a product.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium mb-1"
                >
                  Project Name
                </label>
                <input
                  id="projectName"
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => updateField("projectName", e.target.value)}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-sm font-medium mb-1"
                >
                  Description (200 words max)
                </label>
                <textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) =>
                    updateField("projectDescription", e.target.value)
                  }
                  rows={5}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="systemicApproach"
                  className="block text-sm font-medium mb-1"
                >
                  How does your venture function as infrastructure rather than
                  just a product?
                </label>
                <textarea
                  id="systemicApproach"
                  value={formData.systemicApproach}
                  onChange={(e) =>
                    updateField("systemicApproach", e.target.value)
                  }
                  rows={4}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Category & Development</h3>
            <p className="text-neutral-600 mb-6">
              Help us understand which infrastructure category you're addressing
              and your current stage.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="infrastructureCategory"
                  className="block text-sm font-medium mb-1"
                >
                  Which infrastructure category best describes your venture?
                </label>
                <select
                  id="infrastructureCategory"
                  value={formData.infrastructureCategory}
                  onChange={(e) =>
                    updateField("infrastructureCategory", e.target.value)
                  }
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                >
                  <option value="">Select a category</option>

                  <optgroup label="Shelter & Place">
                    <option value="Housing Systems">Housing Systems</option>
                    <option value="Land Stewardship">Land Stewardship</option>
                    <option value="Community Spaces">Community Spaces</option>
                    <option value="Regenerative Agriculture">
                      Regenerative Agriculture
                    </option>
                    <option value="Placemaking & Belonging">
                      Placemaking & Belonging
                    </option>
                  </optgroup>

                  <optgroup label="Economy & Exchange">
                    <option value="Alternative Finance">
                      Alternative Finance
                    </option>
                    <option value="Mutual Credit">Mutual Credit</option>
                    <option value="Local Currencies">Local Currencies</option>
                    <option value="Gift Economics">Gift Economics</option>
                    <option value="Commons Management">
                      Commons Management
                    </option>
                  </optgroup>

                  <optgroup label="Governance & Structure">
                    <option value="Legal Infrastructure">
                      Legal Infrastructure
                    </option>
                    <option value="Governance Protocols">
                      Governance Protocols
                    </option>
                    <option value="Decision Systems">Decision Systems</option>
                    <option value="Conflict Resolution">
                      Conflict Resolution
                    </option>
                    <option value="Trust Design">Trust Design</option>
                  </optgroup>

                  <optgroup label="Care & Connection">
                    <option value="Care & Labor Systems">
                      Care & Labor Systems
                    </option>
                    <option value="Community Health">Community Health</option>
                    <option value="Elder & Child Support">
                      Elder & Child Support
                    </option>
                    <option value="Mutual Aid Networks">
                      Mutual Aid Networks
                    </option>
                    <option value="Relational Infrastructure">
                      Relational Infrastructure
                    </option>
                  </optgroup>

                  <optgroup label="Joy & Flourishing">
                    <option value="Celebration Systems">
                      Celebration Systems
                    </option>
                    <option value="Play Infrastructure">
                      Play Infrastructure
                    </option>
                    <option value="Ritual Design">Ritual Design</option>
                    <option value="Art & Expression Platforms">
                      Art & Expression Platforms
                    </option>
                    <option value="Meaning-Making Frameworks">
                      Meaning-Making Frameworks
                    </option>
                  </optgroup>

                  <optgroup label="Knowledge & Learning">
                    <option value="Learning Ecosystems">
                      Learning Ecosystems
                    </option>
                    <option value="Knowledge Commons">Knowledge Commons</option>
                    <option value="Wisdom Transfer">Wisdom Transfer</option>
                    <option value="Intergenerational Practice">
                      Intergenerational Practice
                    </option>
                    <option value="Craftsmanship Preservation">
                      Craftsmanship Preservation
                    </option>
                  </optgroup>

                  <option value="Other">Other (specify in description)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="developmentStage"
                  className="block text-sm font-medium mb-1"
                >
                  Current Development Stage
                </label>
                <select
                  id="developmentStage"
                  value={formData.developmentStage}
                  onChange={(e) =>
                    updateField("developmentStage", e.target.value)
                  }
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                >
                  <option value="">Select current stage</option>
                  <option value="Concept/Research">Concept/Research</option>
                  <option value="Prototype">Prototype</option>
                  <option value="Early Users">Early Users</option>
                  <option value="Operating System">Operating System</option>
                  <option value="Scaling Infrastructure">
                    Scaling Infrastructure
                  </option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Team & Resources</h3>
            <p className="text-neutral-600 mb-6">
              Tell us about your team structure and resource requirements.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="teamComposition"
                  className="block text-sm font-medium mb-1"
                >
                  Team Composition
                </label>
                <textarea
                  id="teamComposition"
                  value={formData.teamComposition}
                  onChange={(e) =>
                    updateField("teamComposition", e.target.value)
                  }
                  placeholder="Describe your current team and key roles"
                  rows={3}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="fundingNeeds"
                  className="block text-sm font-medium mb-1"
                >
                  Funding & Resource Needs
                </label>
                <textarea
                  id="fundingNeeds"
                  value={formData.fundingNeeds}
                  onChange={(e) => updateField("fundingNeeds", e.target.value)}
                  placeholder="Outline your current funding requirements and how you envision resources being allocated"
                  rows={3}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Alignment with Henophilia</h3>
            <p className="text-neutral-600 mb-6">
              Explain how your venture aligns with our interdependent economic
              approach and could benefit from being part of a cohort.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="alignment"
                  className="block text-sm font-medium mb-1"
                >
                  Alignment & Cohort Potential
                </label>
                <textarea
                  id="alignment"
                  value={formData.alignment}
                  onChange={(e) => updateField("alignment", e.target.value)}
                  placeholder="How does your venture align with Henophilia's approach to building interdependent economic systems? How could it benefit from and contribute to a cohort?"
                  rows={6}
                  className="w-full p-3 border border-neutral-200 rounded-md focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg border border-neutral-200 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-neutral-200 bg-neutral-50">
        <h2 className="text-2xl font-medium">Founder Application</h2>
        <p className="text-neutral-600 mt-2">
          Apply to join a Henophilia Ventures cohort building regenerative
          economic infrastructure.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-neutral-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-neutral-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div
              className="bg-neutral-800 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form step content */}
        {renderStep()}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-10">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2.5 border border-neutral-200 rounded-md text-sm font-medium transition-colors hover:bg-neutral-50"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-5 py-2.5 bg-neutral-800 text-white rounded-md text-sm font-medium transition-colors hover:bg-neutral-700"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="px-5 py-2.5 bg-neutral-800 text-white rounded-md text-sm font-medium transition-colors hover:bg-neutral-700"
            >
              Submit Application
            </button>
          )}
        </div>
      </form>

      <div className="p-6 md:p-8 border-t border-neutral-200 bg-neutral-50">
        <p className="text-sm text-neutral-500">
          Your application will be reviewed by our team. If your venture aligns
          with our current cohort focus, we'll reach out to schedule a
          conversation.
        </p>
      </div>
    </div>
  );
}
