import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  const founders = [
    'H. R. Bhagat',
    'Santosh P. Kale', 
    'Santosh V. Kale'
  ];

  const companyDetails = [
    { icon: Building, label: 'GST No', value: '27ACBFA6452H1ZH' },
    { icon: Award, label: 'MSME No', value: 'UDYAM-MH-26-0438749 (Micro)' },
    { icon: Mail, label: 'Email', value: 'accurateheavygrinding@outlook.com' },
    { icon: Phone, label: 'Phone', value: '9225505785 / 9225505784' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building precision and trust through granite surface expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Company Story */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Founders</h3>
                </div>
                <div className="space-y-3">
                  {founders.map((founder, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-lg font-medium text-foreground">{founder}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Location</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Gat No. 52, RTO Road, Near Malhar Gad Road, Behind Aai Saheb Hotel, 
                  Kalewadi, Dive, Tal-Purandar, Pune - 412301
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Details & Highlights */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Company Details</h3>
                <div className="space-y-4">
                  {companyDetails.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <detail.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{detail.label}</p>
                        <p className="text-muted-foreground">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-manufacturing-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">100% Focus on Granite Plates</h4>
                      <p className="text-muted-foreground">Niche expertise in granite surface solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Fast Turnaround</h4>
                      <p className="text-muted-foreground">Quick service delivery without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">NABL Traceability</h4>
                      <p className="text-muted-foreground">Certified calibration services you can trust</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Long-Term Support</h4>
                      <p className="text-muted-foreground">Ongoing maintenance and support services</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;