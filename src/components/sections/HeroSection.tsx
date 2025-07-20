import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/granite-workshop-hero.jpg';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-steel-blue/90 via-steel-blue/70 to-precision-blue/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">NABL/NPL Traceable Calibration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Accurate Heavy Grinding
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium max-w-3xl mx-auto">
            We don't just grind granite. We build trust – one perfect flat surface at a time.
          </p>

          {/* Description */}
          <div className="bg-card/10 backdrop-blur-sm border border-primary/20 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Accurate Heavy Grinding is a precision granite surface services company in Pune, India. 
              We specialize in calibration, lapping, and reconditioning of granite plates used in aerospace, 
              automotive, metrology labs, and tool rooms. Our services are traceable to NABL/NPL and comply 
              with IS/ASTM standards.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={onContactClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Key Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              'NABL/NPL Traceable',
              'Fast Turnaround',
              '100% Granite Focus'
            ].map((feature) => (
              <div key={feature} className="bg-card/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                <p className="text-primary-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;