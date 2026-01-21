import { 
  Brain, 
  GitBranch, 
  Users, 
  BarChart3, 
  Mail, 
  FileText, 
  Shield,
  Calendar,
  Search,
  Palette,
  Building2,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Features",
    description: "Choose from 4 AI providers (Gemini, ChatGPT, Claude, Perplexity) with intelligent resume analysis and multi-dimensional candidate scoring.",
    category: "AI-Powered",
  },
  {
    icon: GitBranch,
    title: "Drag-and-Drop Pipeline",
    description: "Visual Kanban board with real-time status updates. Drag candidates between stages with instant synchronization across tabs.",
    category: "Candidate Management",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Granular permissions for Administrators, HR Managers, Interviewers, and Candidates. Complete organization-level scoping.",
    category: "Security",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics & Reporting",
    description: "Comprehensive dashboards with hiring metrics, conversion rates, time-to-fill analysis, and interactive data visualization.",
    category: "Analytics",
  },
  {
    icon: Mail,
    title: "Multi-Provider Email System",
    description: "Support for SMTP, Resend, and Brevo with customizable email templates, queue management, and delivery tracking.",
    category: "Communication",
  },
  {
    icon: Calendar,
    title: "Google Calendar Integration",
    description: "Full two-way sync with Google Calendar, automatic Google Meet links, timezone support, and real-time event updates.",
    category: "Scheduling",
  },
  {
    icon: FileText,
    title: "Flexible File Storage",
    description: "Choose from Local Storage, Cloudinary, or AWS S3 per organization. Secure file access with encrypted storage.",
    category: "File Management",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "2FA support, JWT authentication, encrypted data storage and comprehensive audit trails.",
    category: "Security",
  },
  {
    icon: Search,
    title: "Advanced Search & Filtering",
    description: "Multi-criteria search, saved searches, advanced filtering with AND/OR logic, and export capabilities.",
    category: "Search",
  },
  {
    icon: Palette,
    title: "Customization & Branding",
    description: "Custom fields system, organization branding, multi-organization support, and flexible form configurations.",
    category: "Customization",
  },
  {
    icon: Building2,
    title: "Multi-Tenant System",
    description: "Complete data isolation with organization-level configuration for all features. True multi-tenancy with secure separation.",
    category: "Multi-Tenancy",
  },
  {
    icon: Zap,
    title: "Real-Time Features",
    description: "Real-time collaboration, multi-tab synchronization, and instant notifications.",
    category: "Real-Time",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted/30 scroll-mt-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">240+ Features Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Hire Smarter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A complete suite of tools designed for modern recruitment teams. 
            From AI-powered screening to seamless interview scheduling.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/features">
              Explore All Features
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 group hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="feature-icon group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                  {feature.category}
                </span>
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

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see all features in detail?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/features">
              View Complete Feature List
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
