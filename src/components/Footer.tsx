import { Building, Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-blue text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-manufacturing-accent" />
              <div>
                <h3 className="text-xl font-bold">Accurate Heavy Grinding</h3>
                <p className="text-sm text-primary-foreground/80">Precision Granite Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              We don't just grind granite. We build trust – one perfect flat surface at a time. 
              Specializing in NABL/NPL traceable calibration and precision granite surface solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-manufacturing-accent">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/90 hover:text-manufacturing-accent cursor-pointer transition-colors">
                Granite Surface Plate Lapping
              </li>
              <li className="text-primary-foreground/90 hover:text-manufacturing-accent cursor-pointer transition-colors">
                NABL/NPL Traceable Calibration
              </li>
              <li className="text-primary-foreground/90 hover:text-manufacturing-accent cursor-pointer transition-colors">
                Flatness Restoration
              </li>
              <li className="text-primary-foreground/90 hover:text-manufacturing-accent cursor-pointer transition-colors">
                CMM/VMM Base Plate Manufacturing
              </li>
              <li className="text-primary-foreground/90 hover:text-manufacturing-accent cursor-pointer transition-colors">
                Custom Granite Machining
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-manufacturing-accent">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-manufacturing-accent flex-shrink-0" />
                <span className="text-primary-foreground/90">9225505785 / 9225505784</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-manufacturing-accent flex-shrink-0" />
                <span className="text-primary-foreground/90">accurateheavygrinding@outlook.com</span>
              </div>
              <div className="text-primary-foreground/90">
                <strong>GST:</strong> 27ACBFA6452H1ZH<br />
                <strong>MSME:</strong> UDYAM-MH-26-0438749
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-manufacturing-accent mb-4">Quality Standards & Certifications</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/90">
              <span className="bg-primary-foreground/10 px-3 py-1 rounded-full">NABL Traceable</span>
              <span className="bg-primary-foreground/10 px-3 py-1 rounded-full">NPL Standards</span>
              <span className="bg-primary-foreground/10 px-3 py-1 rounded-full">IS/ASTM Compliant</span>
              <span className="bg-primary-foreground/10 px-3 py-1 rounded-full">MSME Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Accurate Heavy Grinding. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">Follow us:</span>
              <div className="flex space-x-3">
                <div className="bg-primary-foreground/10 p-2 rounded-full hover:bg-manufacturing-accent/20 transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4 text-manufacturing-accent" />
                </div>
                <div className="bg-primary-foreground/10 p-2 rounded-full hover:bg-manufacturing-accent/20 transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4 text-manufacturing-accent" />
                </div>
                <div className="bg-primary-foreground/10 p-2 rounded-full hover:bg-manufacturing-accent/20 transition-colors cursor-pointer">
                  <Twitter className="h-4 w-4 text-manufacturing-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;