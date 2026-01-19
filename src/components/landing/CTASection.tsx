import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Join organizations that have streamlined their recruitment with HireTrack. 
            Start making data-driven hiring decisions today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
            >
              <a href="https://hire.upforce.tech/auth/login" target="_blank" rel="noopener noreferrer">
                Access HireTrack
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#downloads">
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
