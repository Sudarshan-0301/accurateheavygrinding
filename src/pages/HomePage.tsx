import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/granite-workshop-hero.jpg';

const HomePage = () => (
  <div>
    {/* Hero */}
    <section
      className="relative min-h-[88vh] flex items-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-[hsl(222,48%,14%)]/85" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
            <span className="w-8 h-px bg-white/40" />
            NABL / NPL Traceable · Pune, India
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Precision Granite<br />Surface Solutions
          </h1>
          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
            Accurate Heavy Grinding specialises in calibration, lapping, and reconditioning of granite plates
            for aerospace, automotive, metrology labs, and tool rooms — compliant with IS/ASTM standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[hsl(222,52%,28%)] font-semibold px-6 py-3 rounded hover:bg-white/90 transition-colors"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Key highlights */}
    <section className="border-b border-border bg-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Industries Served' },
            { number: '500+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '±0.001 µm', label: 'Precision Accuracy' },
          ].map(({ number, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-[hsl(222,52%,28%)] mb-1">{number}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why AHG */}
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-3">Why Accurate Heavy Grinding?</h2>
        <p className="text-muted-foreground mb-10">
          We don't just grind granite. We build trust — one perfect flat surface at a time.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            '100% focus on granite surface plates — niche expertise',
            'NABL/NPL traceable calibration certificates issued',
            'Fast turnaround without compromising accuracy',
            'On-site and in-house service options across India',
            'IS/ASTM standard compliant for every grade',
            'Long-term maintenance support post-service',
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-[hsl(222,52%,28%)] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{point}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-10 border-t border-border flex flex-wrap gap-6">
          <Link to="/services" className="text-sm font-semibold text-[hsl(222,52%,28%)] hover:underline flex items-center gap-1">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/about" className="text-sm font-semibold text-[hsl(222,52%,28%)] hover:underline flex items-center gap-1">
            About us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-[hsl(222,52%,28%)] hover:underline flex items-center gap-1">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
