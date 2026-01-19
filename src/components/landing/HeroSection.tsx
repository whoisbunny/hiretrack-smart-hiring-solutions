import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "AI-Powered Tracking",
    "Real-Time Pipeline",
    "Role-Based Access",
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 subtle-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Enterprise-Ready Hiring Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Smart AI-Powered Hiring for{" "}
            <span className="text-accent">Modern Teams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            HireTrack manages your complete recruitment lifecycle with real-time tracking, 
            advanced analytics, and seamless integrations. Built for HR teams, interviewers, 
            and candidates.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://hire.upforce.tech/auth/login" target="_blank" rel="noopener noreferrer">
                Access Platform
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#downloads">
                View Documentation
              </a>
            </Button>
          </div>
        </div>

        {/* Hero visual placeholder */}
        <div className="mt-16 lg:mt-20 relative">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
              <div className="h-8 bg-muted/50 border-b border-border flex items-center gap-2 px-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-muted/30 to-background min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                  {/* Pipeline preview */}
                  <div className="space-y-3">
                    <div className="h-3 w-20 bg-accent/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-24 bg-accent/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-16 bg-accent/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
