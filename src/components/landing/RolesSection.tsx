import { UserCog, ClipboardCheck, UserCircle } from "lucide-react";

const roles = [
  {
    icon: UserCog,
    title: "HR Admins",
    description: "Full control over the hiring process",
    capabilities: [
      "Manage job postings and requirements",
      "Configure hiring pipelines and stages",
      "Access comprehensive analytics",
      "Control user permissions and access",
      "Set up automated workflows",
      "Generate reports and insights",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Interviewers",
    description: "Focused evaluation tools",
    capabilities: [
      "View assigned candidates and schedules",
      "Conduct structured interviews",
      "Submit feedback with scorecards",
      "Access candidate profiles and resumes",
      "Collaborate with team members",
      "Track interview history",
    ],
  },
  {
    icon: UserCircle,
    title: "Candidates",
    description: "Transparent application experience",
    capabilities: [
      "Browse and apply for open positions",
      "Upload resumes and portfolios",
      "Track application status in real-time",
      "Receive automated notifications",
      "Join scheduled video interviews",
      "View feedback when shared",
    ],
  },
];

const RolesSection = () => {
  return (
    <section id="roles" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Role-Based Workflows
          </h2>
          <p className="text-lg text-muted-foreground">
            HireTrack provides tailored experiences for every participant in the hiring process. 
            Clear responsibilities, focused interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div key={role.title} className="card-elevated p-8">
              <div className="feature-icon mb-6">
                <role.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {role.description}
              </p>

              <ul className="space-y-3">
                {role.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
