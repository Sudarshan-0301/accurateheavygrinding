import { Card, CardContent } from '@/components/ui/card';
import { Building, Cog, Settings, Wrench, Ruler, Zap, Thermometer } from 'lucide-react';

const InfrastructureSection = () => {
  const infrastructureItems = [
    {
      id: 1,
      title: "Double Column VMC Machine",
      description: "Size: 4000 mm × 3000 mm × 600 mm",
      image: "/lovable-uploads/f9b15fad-c2c1-45b5-a7fa-b2bbc58e4986.png",
      alt: "Double column VMC machine for precision machining",
      icon: Cog
    },
    {
      id: 2,
      title: "Precision Grinding Machine",
      description: "Size: 3000 mm × 600 mm × 600 mm",
      image: "/lovable-uploads/d8d8a0a1-0992-42cd-a5de-a9872bfaa5b6.png",
      alt: "Precision grinding machine for surface finishing",
      icon: Settings
    },
    {
      id: 3,
      title: "Double Column Grinding Machine",
      description: "Size: 3000 mm × 1500 mm × 900 mm",
      image: "/lovable-uploads/b64f203a-cce7-4aa4-8b93-2e565467b05b.png",
      alt: "Double column grinding machine",
      icon: Settings
    },
    {
      id: 4,
      title: "Floor Drilling HMC Machine",
      description: "Size: 3000 mm × 1500 mm × 900 mm",
      image: "/lovable-uploads/9d117e6c-5698-47bc-a505-4f56a6d34802.png",
      alt: "Floor drilling HMC machine",
      icon: Cog
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Plant Machinery & Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are equipped with world-class granite calibration machinery, laser inspection tools, 
            and precision-controlled work zones to serve clients across India and internationally.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {infrastructureItems.map((item) => (
            <Card key={item.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-foreground leading-tight">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  Precision Certified
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Experience World-Class Manufacturing Standards
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our state-of-the-art facility combines advanced machinery with skilled craftsmanship 
              to deliver precision granite products that meet international quality standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <strong>25,000+ sq ft</strong> Manufacturing Area
              </span>
              <span className="flex items-center gap-2">
                <strong>±0.001mm</strong> Precision Accuracy
              </span>
              <span className="flex items-center gap-2">
                <strong>Temperature Controlled</strong> Environment
              </span>
              <span className="flex items-center gap-2">
                <strong>ISO Standards</strong> Compliance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;