import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen } from "lucide-react";

const downloads = [
  {
    icon: FileText,
    title: "Root Installer README",
    description: "Complete installation guide for production deployment with root access. Includes system requirements and configuration steps.",
    href: "/root-installer-readme",
    linkText: "View Documentation",
  },
  {
    icon: BookOpen,
    title: "User-Based Installer README",
    description: "Installation instructions for environments with restricted user permissions. Covers non-root deployment scenarios.",
    href: "/user-based-installer-readme",
    linkText: "View Documentation",
  },
  {
    icon: Download,
    title: "HireTrack Installer",
    description: "Production installer package for HireTrack deployment. Download and execute according to your environment requirements.",
    href: "/hiretrack-installer",
    linkText: "Download Installer",
  },
];

const DownloadsSection = () => {
  return (
    <section id="downloads" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Downloads & Documentation
          </h2>
          <p className="text-lg text-muted-foreground">
            Access installation guides and deployment packages for your HireTrack instance. 
            Choose the appropriate installer based on your environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {downloads.map((item) => (
            <div key={item.title} className="card-elevated p-8 flex flex-col">
              <div className="feature-icon mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                {item.description}
              </p>

              <Button variant="download" className="w-full" asChild>
                <a href={item.href}>
                  {item.linkText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
