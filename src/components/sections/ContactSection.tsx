import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock, Star } from 'lucide-react';

const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8WjSgA2H199URjdTqVWzcvfeYK7VSTDE96fjDmFRPmg8tbii8PoKiIVn2Ss8seKUTvg/exec'

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    serviceRequirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams(formData).toString();

      const response = await fetch(APP_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted!",
          description: "Thank you for your inquiry. We'll contact you within 24 hours.",
        });
        setFormData({ fullName: '', mobile: '', email: '', serviceRequirement: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your granite surface plate requirements? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Request a Quote</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceRequirement">Service Requirement or Query *</Label>
                  <Textarea
                    id="serviceRequirement"
                    name="serviceRequirement"
                    required
                    value={formData.serviceRequirement}
                    onChange={handleChange}
                    placeholder="Please describe your granite surface plate requirements, size specifications, grade requirements, or any other queries..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">📞 Call Us</h4>
                      <div className="space-y-1">
                        <a href="tel:+919225505785" className="text-primary hover:text-primary/80 transition-colors block">
                          +91 9225505785
                        </a>
                        <a href="tel:+919225505784" className="text-primary hover:text-primary/80 transition-colors block">
                          +91 9225505784
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Available: Mon-Sat, 9 AM - 6 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">📧 Email</h4>
                      <a href="mailto:accurateheavygrinding@outlook.com" className="text-primary hover:text-primary/80 transition-colors">
                        accurateheavygrinding@outlook.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">📍 Address</h4>
                      <a 
                        href="https://maps.app.goo.gl/mmMkzPEMb7DVRd1P8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors leading-relaxed"
                      >
                        Gat No. 52, RTO Road, Near Malhar Gad Road,<br />
                        Behind Aai Saheb Hotel, Kalewadi, Dive,<br />
                        Tal-Purandar, Pune - 412301
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Highlights */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-manufacturing-accent/5">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Why Contact Us?</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Free consultation and quotation',
                    'NABL/NPL traceable calibration',
                    'On-site service available',
                    'Fast turnaround times',
                    'Competitive pricing',
                    'Long-term support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Wednesday</span>
                    <span className="text-foreground font-medium">8:30 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thursday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Sunday</span>
                    <span className="text-foreground font-medium">8:30 AM - 6:00 PM</span>
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

export default ContactSection;