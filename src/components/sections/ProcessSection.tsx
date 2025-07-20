import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Search, Settings, Award, Brush, Package, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Initial Inspection',
      description: 'Comprehensive assessment using digital & mechanical levels',
      icon: Search,
      details: [
        'Surface flatness measurement',
        'Damage assessment and documentation',
        'Precision level verification',
        'Client requirement analysis'
      ]
    },
    {
      step: 2,
      title: 'Lapping & Hand Scrapping',
      description: 'Precision restoration using graded abrasives',
      icon: Settings,
      details: [
        'Progressive grit lapping process',
        'Hand scrapping for final finish',
        'Continuous measurement monitoring',
        'Quality checkpoints at each stage'
      ]
    },
    {
      step: 3,
      title: 'Calibration & Certification',
      description: 'On-site or in-house calibration with traceable certificates',
      icon: Award,
      details: [
        'NABL/NPL traceable calibration',
        'IS/ASTM standard compliance',
        'Digital calibration reports',
        'Certificate generation and documentation'
      ]
    },
    {
      step: 4,
      title: 'Surface Sealing & Polishing',
      description: 'Professional surface treatment and finishing',
      icon: Brush,
      details: [
        'High-grade surface polishing',
        'Epoxy sealing application',
        'Edge finishing and chamfering',
        'Surface protection coating'
      ]
    },
    {
      step: 5,
      title: 'Epoxy Gluing & Edge Finishing',
      description: 'Structural reinforcement and aesthetic finishing',
      icon: CheckCircle,
      details: [
        'Structural epoxy application',
        'Edge smoothing and finishing',
        'Corner radius completion',
        'Final dimensional verification'
      ]
    },
    {
      step: 6,
      title: 'Stamping, Labeling & Packaging',
      description: 'Final marking and secure packaging for delivery',
      icon: Package,
      details: [
        'Calibration certificate stamping',
        'Identification label application',
        'Protective packaging',
        'Quality assurance documentation'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to precision granite surface restoration and calibration
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-manufacturing-accent to-primary rounded-full"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={step.step} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} mb-6 lg:mb-0`}>
                      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className={`flex items-center space-x-3 mb-4 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-primary">Step {step.step}</span>
                              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className={`flex items-center space-x-2 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="relative">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-primary-foreground font-bold">{step.step}</span>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="flex justify-center mt-4">
                            <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile Step Number */}
                    <div className="lg:hidden w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg mb-4">
                      <span className="text-primary-foreground font-bold">{step.step}</span>
                    </div>

                    {/* Spacer for even steps on large screens */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Summary */}
          <div className="mt-16 text-center">
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-manufacturing-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Quality Assurance at Every Step</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our systematic process ensures consistent quality, precision, and reliability in every granite surface 
                  plate we service. From initial inspection to final delivery, we maintain the highest standards 
                  of workmanship and documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;