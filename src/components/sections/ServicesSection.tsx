import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Award, 
  RefreshCw, 
  Building2, 
  Wrench, 
  Sparkles,
  Ruler,
  ChevronRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'lapping',
      title: 'Granite Surface Plate Lapping & Scrapping',
      icon: Settings,
      description: 'Professional lapping and hand scrapping services to restore granite surface flatness and precision.',
      details: [
        'High-precision lapping using graded abrasives',
        'Hand scrapping for ultimate surface finish',
        'Restoration of worn or damaged surfaces',
        'Precision flatness achievement to required grades'
      ]
    },
    {
      id: 'calibration',
      title: 'Calibration with NABL/NPL Traceable Certificates',
      icon: Award,
      description: 'Certified calibration services with traceable documentation for compliance and quality assurance.',
      details: [
        'NABL/NPL traceable calibration certificates',
        'IS/ASTM standard compliance',
        'On-site and in-house calibration options',
        'Digital calibration reports and documentation'
      ]
    },
    {
      id: 'restoration',
      title: 'Flatness Restoration (Grade 1, 0, 00)',
      icon: RefreshCw,
      description: 'Complete flatness restoration services to achieve precision grades for various applications.',
      details: [
        'Grade 1 restoration for general applications',
        'Grade 0 precision for laboratory use',
        'Grade 00 ultra-precision for metrology',
        'Surface parallelism and squareness correction'
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing Base Plates for CMM/VMM',
      icon: Building2,
      description: 'Custom manufacturing of granite base plates for coordinate measuring machines and vision systems.',
      details: [
        'CMM base plate manufacturing',
        'VMM foundation plates',
        'Custom size and specification plates',
        'Threaded inserts and mounting solutions'
      ]
    },
    {
      id: 'reconditioning',
      title: 'Reconditioning of Damaged Granite Plates',
      icon: Wrench,
      description: 'Complete reconditioning services to restore damaged granite plates to original specifications.',
      details: [
        'Crack repair and structural restoration',
        'Chip and edge damage repair',
        'Surface reconditioning and refinishing',
        'Dimensional accuracy restoration'
      ]
    },
    {
      id: 'finishing',
      title: 'Final Polishing, Epoxy Sealing & Packaging',
      icon: Sparkles,
      description: 'Professional finishing services including surface treatment, sealing, and secure packaging.',
      details: [
        'High-grade surface polishing',
        'Epoxy sealing for durability',
        'Edge finishing and chamfering',
        'Professional packaging for shipping'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Granite Plate Machining, Drilling, Insert Fixing',
      icon: Ruler,
      description: 'Custom machining services according to client drawings and specifications.',
      details: [
        'Precision drilling and boring',
        'Threaded insert installation',
        'Custom groove and slot machining',
        'Client drawing interpretation and execution'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive granite surface solutions from calibration to custom manufacturing
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="lapping" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto gap-2 bg-background p-2 rounded-lg shadow-sm">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex flex-col items-center space-y-2 p-4 h-auto text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-center leading-tight">{service.title.split(' ').slice(0, 2).join(' ')}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <TabsContent key={service.id} value={service.id} className="mt-8">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {service.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {service.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;