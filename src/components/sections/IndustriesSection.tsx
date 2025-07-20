import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Plane, 
  FlaskConical, 
  GraduationCap, 
  Factory,
  Car,
  CheckCircle
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      title: 'Precision Tool Rooms',
      icon: Wrench,
      description: 'Supporting manufacturing precision with calibrated granite surfaces for quality control and measurement.',
      applications: [
        'Tool & die manufacturing',
        'Precision machining setups',
        'Quality inspection stations',
        'Gauge calibration areas'
      ]
    },
    {
      title: 'Aerospace & Automotive',
      icon: Plane,
      description: 'Critical precision requirements for aerospace and automotive component manufacturing and testing.',
      applications: [
        'Engine component inspection',
        'Transmission housing checks',
        'Aerospace part verification',
        'Assembly fixture plates'
      ]
    },
    {
      title: 'Calibration Laboratories',
      icon: FlaskConical,
      description: 'NABL accredited calibration services for metrology labs requiring traceable measurements.',
      applications: [
        'Primary calibration standards',
        'Reference surface plates',
        'Measurement uncertainty reduction',
        'ISO 17025 compliance'
      ]
    },
    {
      title: 'Engineering Colleges & Institutes',
      icon: GraduationCap,
      description: 'Educational institutions requiring precision measurement equipment for research and training.',
      applications: [
        'Metrology laboratories',
        'Research and development',
        'Student training programs',
        'Precision measurement courses'
      ]
    },
    {
      title: 'Heavy Engineering',
      icon: Factory,
      description: 'Large-scale manufacturing operations requiring massive granite plates for heavy component inspection.',
      applications: [
        'Heavy machinery inspection',
        'Large component assembly',
        'Foundry pattern making',
        'Structural fabrication'
      ]
    },
    {
      title: 'Machine Building Sectors',
      icon: Car,
      description: 'Machine tool manufacturers and builders requiring precision reference surfaces.',
      applications: [
        'Machine tool assembly',
        'CNC machine calibration',
        'Precision equipment setup',
        'Quality control stations'
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across various precision-critical industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  {/* Icon Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{industry.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Applications */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Key Applications:</h4>
                    <div className="space-y-2">
                      {industry.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Industries Served' },
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Quality Assurance' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-manufacturing-accent/5 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Your Industry Not Listed?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We work with any industry requiring precision granite surface solutions. 
                Our expertise extends beyond these sectors to meet your specific requirements.
              </p>
              <p className="text-primary font-semibold">
                Contact us to discuss your unique precision measurement needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;