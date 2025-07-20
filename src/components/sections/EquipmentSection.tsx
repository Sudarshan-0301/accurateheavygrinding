import { Card, CardContent } from '@/components/ui/card';
import { 
  Cog, 
  Ruler, 
  Zap, 
  Eye, 
  MoveHorizontal, 
  Droplets,
  Wind,
  Settings
} from 'lucide-react';

const EquipmentSection = () => {
  const equipment = [
    {
      name: 'Granite Lapping Machines',
      icon: Cog,
      description: 'High-precision automated lapping systems for uniform surface finishing',
      specifications: [
        'Precision spindle systems',
        'Variable speed control',
        'Automated feed mechanisms',
        'Coolant circulation systems'
      ]
    },
    {
      name: 'Hand Scrapping Kits',
      icon: Settings,
      description: 'Professional hand tools for precision surface finishing and flatness correction',
      specifications: [
        'Carbide-tipped scrapers',
        'Various blade geometries',
        'Precision handles',
        'Surface finish tools'
      ]
    },
    {
      name: 'Electronic Levels',
      icon: Ruler,
      description: 'Digital measurement systems for precise flatness and levelness verification',
      specifications: [
        '0.0001" resolution',
        'Digital readout displays',
        'Data logging capability',
        'Multiple measurement modes'
      ]
    },
    {
      name: 'Autocollimators',
      icon: Eye,
      description: 'Optical instruments for angular and straightness measurements',
      specifications: [
        'Sub-arcsecond accuracy',
        'Digital autocollimators',
        'Laser interferometry',
        'Computer-controlled systems'
      ]
    },
    {
      name: 'Granite Handling Cranes',
      icon: MoveHorizontal,
      description: 'Specialized lifting equipment for safe granite plate handling and positioning',
      specifications: [
        'Variable load capacity',
        'Precision positioning',
        'Safety interlocks',
        'Smooth operation systems'
      ]
    },
    {
      name: 'Epoxy Sealing Stations',
      icon: Droplets,
      description: 'Controlled environment facilities for epoxy application and curing',
      specifications: [
        'Temperature control',
        'Humidity regulation',
        'Dust-free environment',
        'Curing monitoring systems'
      ]
    },
    {
      name: 'Dust-Free Finishing Workstations',
      icon: Wind,
      description: 'Clean room environments for final surface preparation and inspection',
      specifications: [
        'HEPA filtration systems',
        'Positive pressure chambers',
        'Controlled lighting',
        'Anti-static surfaces'
      ]
    },
    {
      name: 'Calibration Equipment',
      icon: Zap,
      description: 'NABL traceable measurement instruments for certification services',
      specifications: [
        'Traceable to NPL standards',
        'Regular calibration schedules',
        'Uncertainty calculations',
        'Digital documentation'
      ]
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tools & Equipment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art machinery and precision instruments for superior granite surface services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {equipment.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Equipment Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6 text-center">
              <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Precision Machinery</h3>
              <p className="text-muted-foreground text-sm">
                Advanced lapping and finishing equipment for superior surface quality
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-manufacturing-accent/5 to-manufacturing-accent/10">
            <CardContent className="p-6 text-center">
              <Eye className="h-12 w-12 text-manufacturing-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Measurement Systems</h3>
              <p className="text-muted-foreground text-sm">
                High-precision optical and electronic measurement instruments
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-steel-blue/5 to-steel-blue/10">
            <CardContent className="p-6 text-center">
              <Wind className="h-12 w-12 text-steel-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Clean Environment</h3>
              <p className="text-muted-foreground text-sm">
                Controlled atmosphere workstations for contamination-free processing
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technology Commitment */}
        <div className="mt-16 text-center">
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-manufacturing-accent/5 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Technology Investment</h3>
              <p className="text-lg text-muted-foreground">
                We continuously invest in the latest precision equipment and measurement technology 
                to maintain our position as industry leaders in granite surface services. Our equipment 
                is regularly calibrated and maintained to ensure consistent, traceable results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;