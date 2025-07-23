import { Card, CardContent } from '@/components/ui/card';
import { Building, Cog, Settings, Wrench, Ruler, Zap, Thermometer } from 'lucide-react';

const InfrastructureSection = () => {
  const infrastructureItems = [
    {
      id: 1,
      title: "Controlled Temperature Inspection Room",
      description: "Climate-controlled assembly area ensuring accuracy in final laser and torque inspections.",
      image: "/lovable-uploads/70e04d2d-4977-44a5-92fc-ddaae663ef18.png",
      alt: "Controlled temperature inspection room with multiple granite surface plates",
      icon: Building
    },
    {
      id: 2,
      title: "Double Column VMC Machine (4000×3000×600 mm)",
      description: "High-precision CNC for heavy-duty component machining and granite base flattening.",
      image: "/lovable-uploads/bea2bae1-5914-4de9-ac55-de8d5b79ef80.png",
      alt: "Double column VMC machine for precision machining",
      icon: Cog
    },
    {
      id: 3,
      title: "PRECISION GRINDING M/C",
      description: "SIZE: 3000 mm X 600 mm X 600 mm.",
      image: "/lovable-uploads/9e67035f-3b0c-4e5d-95d9-38cb7f16e4c9.png",
      alt: "Precision grinding machine for surface finishing",
      icon: Settings
    },
    {
      id: 4,
      title: "High precision Double Column Grinding M/C",
      description: "Size – 3000 mm X 1500 MM x 900 mm",
      image: "/lovable-uploads/25c8332b-54a8-48c4-9fcd-da77463a24a3.png",
      alt: "High precision double column grinding machine",
      icon: Settings
    },
    {
      id: 5,
      title: "Torque Test Inspection",
      description: "Torque testing is conducted on large assemblies to ensure structural and joint integrity during precision operations.",
      image: "/lovable-uploads/ce3ae9e4-0811-4ed1-ac84-ae203e5ecf1a.png",
      alt: "Torque test inspection on large assemblies",
      icon: Wrench
    },
    {
      id: 6,
      title: "Flatness Inspection Using Digital Instruments",
      description: "High-accuracy flatness measurements performed using calibrated digital levels, ensuring compliance with surface flatness tolerances.",
      image: "/lovable-uploads/9c3b66e1-9a32-482d-83b9-c936ff3c9c85.png",
      alt: "Flatness inspection using digital instruments",
      icon: Ruler
    },
    {
      id: 7,
      title: "Final Assembly Laser Inspection",
      description: "Laser-based alignment ensures accurate final positioning and flatness verification before dispatch.",
      image: "/lovable-uploads/4dab7894-2392-4f24-9e86-56e804e0a7a9.png",
      alt: "Final assembly laser inspection",
      icon: Zap
    },
    {
      id: 8,
      title: "Flatness Inspection Using Digital Instruments",
      description: "Repeatable and precise flatness verification process carried out with NABL-traceable digital equipment.",
      image: "/lovable-uploads/2c6d8a0d-343f-43dc-979b-6485b6b02a2e.png",
      alt: "Flatness inspection using digital instruments",
      icon: Ruler
    },
    {
      id: 9,
      title: "Granite Temperature Inspection with Testo Digital Thermometer",
      description: "Thermal measurement of granite surfaces using Testo meters to ensure temperature-controlled calibration and lapping.",
      image: "/lovable-uploads/765a99c3-b206-46a9-99f8-fa427dbc4308.png",
      alt: "Granite temperature inspection with Testo digital thermometer",
      icon: Thermometer
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Infrastructure & Technical Strength
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are equipped with world-class granite calibration machinery, laser inspection tools, 
            and precision-controlled work zones to serve clients across India and internationally.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="space-y-12">
          {infrastructureItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                     <div className="space-y-4">
                       <div className="flex items-start gap-3">
                         <item.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                         <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                           {item.title}
                         </h3>
                       </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Technical Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Precision Certified
                      </div>
                    </div>
                  </div>
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