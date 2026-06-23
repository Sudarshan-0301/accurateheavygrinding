import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[hsl(222,48%,20%)] text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Accurate Heavy Grinding</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Precision granite surface plate calibration, lapping, and reconditioning. NABL/NPL traceable. Pune, India.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-xs text-white/50">
            <span>GST: 27ACBFA6452H1ZH</span>
            <span>MSME: UDYAM-MH-26-0438749</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-white/50">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              'Surface Plate Lapping & Scrapping',
              'NABL/NPL Traceable Calibration',
              'Flatness Restoration',
              'CMM/VMM Base Plate Manufacturing',
              'Custom Granite Machining',
            ].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-white transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-white/50">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+919225505785" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Phone className="h-4 w-4 flex-shrink-0" /> +91 9225505785
            </a>
            <a href="tel:+919225505784" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Phone className="h-4 w-4 flex-shrink-0" /> +91 9225505784
            </a>
            <a href="mailto:accurateheavygrinding@outlook.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Mail className="h-4 w-4 flex-shrink-0" /> accurateheavygrinding@outlook.com
            </a>
            <a
              href="https://maps.app.goo.gl/mmMkzPEMb7DVRd1P8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white/80 hover:text-white transition-colors"
            >
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Gat No. 52, RTO Road, Kalewadi, Dive, Tal-Purandar, Pune – 412301</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Accurate Heavy Grinding. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
          {['NABL Traceable', 'NPL Standards', 'IS/ASTM Compliant', 'MSME Certified'].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
