import { 
  Brain, 
  GitBranch, 
  Users, 
  BarChart3, 
  Mail, 
  Video, 
  FileText, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Candidate Tracking",
    description: "Intelligent algorithms analyze and rank candidates based on job requirements, skills matching, and predictive success indicators.",
  },
  {
    icon: GitBranch,
    title: "Real-Time Hiring Pipeline",
    description: "Visual pipeline management with drag-and-drop functionality. Track every candidate through each stage of your recruitment process.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Granular permissions for HR Admins, Interviewers, and Candidates. Each role sees only what they need to be effective.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics & Reporting",
    description: "Comprehensive dashboards with hiring metrics, time-to-fill analysis, source effectiveness, and team performance insights.",
  },
  {
    icon: Mail,
    title: "Email Notifications & Automation",
    description: "Automated communication workflows for application updates, interview scheduling, and candidate follow-ups.",
  },
  {
    icon: Video,
    title: "Google Meet Integration",
    description: "Seamlessly schedule and conduct video interviews with built-in Google Meet integration. Calendar sync included.",
  },
  {
    icon: FileText,
    title: "Structured Job Applications",
    description: "Customizable application forms, resume parsing, and standardized evaluation criteria for consistent hiring decisions.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Enterprise-grade security with encrypted data storage, secure access controls, and comprehensive audit logging.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Hire Smarter
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete suite of tools designed for modern recruitment teams. 
            From AI-powered screening to seamless interview scheduling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="feature-icon mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
