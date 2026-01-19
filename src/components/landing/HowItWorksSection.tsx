import { CircleDot } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Job Listings",
    description: "HR Admins define job requirements, qualifications, and evaluation criteria. Configure automated screening rules.",
  },
  {
    number: "02",
    title: "Candidates Apply",
    description: "Candidates submit applications through structured forms. AI parses resumes and scores against job requirements.",
  },
  {
    number: "03",
    title: "Pipeline Management",
    description: "Move candidates through customizable stages. Track progress in real-time with collaborative notes and ratings.",
  },
  {
    number: "04",
    title: "Schedule Interviews",
    description: "Assign interviewers and schedule meetings with Google Meet integration. Automated calendar invites sent to all parties.",
  },
  {
    number: "05",
    title: "Collect Feedback",
    description: "Interviewers submit structured feedback using standardized scorecards. All evaluations centralized for comparison.",
  },
  {
    number: "06",
    title: "Make Decisions",
    description: "Review analytics, compare candidates, and make data-driven hiring decisions. Automated offer and rejection workflows.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How HireTrack Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined workflow from job posting to final offer. 
            Every step designed for efficiency and collaboration.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`card-elevated p-6 inline-block ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-accent">{step.number}</span>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-accent items-center justify-center">
                  <CircleDot className="w-4 h-4 text-accent" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
