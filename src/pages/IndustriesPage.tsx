import { Wrench, Plane, FlaskConical, GraduationCap, Factory, Car } from 'lucide-react';

const industries = [
  {
    Icon: Wrench,
    title: 'Precision Tool Rooms',
    description: 'Supporting manufacturing precision with calibrated granite surfaces for quality control and measurement.',
    applications: ['Tool & die manufacturing', 'Precision machining setups', 'Quality inspection stations', 'Gauge calibration areas'],
  },
  {
    Icon: Plane,
    title: 'Aerospace & Automotive',
    description: 'Critical precision requirements for aerospace and automotive component manufacturing and testing.',
    applications: ['Engine component inspection', 'Transmission housing checks', 'Aerospace part verification', 'Assembly fixture plates'],
  },
  {
    Icon: FlaskConical,
    title: 'Calibration Laboratories',
    description: 'NABL accredited calibration services for metrology labs requiring traceable measurements.',
    applications: ['Primary calibration standards', 'Reference surface plates', 'Measurement uncertainty reduction', 'ISO 17025 compliance'],
  },
  {
    Icon: GraduationCap,
    title: 'Engineering Colleges & Institutes',
    description: 'Educational institutions requiring precision measurement equipment for research and training.',
    applications: ['Metrology laboratories', 'Research and development', 'Student training programs', 'Precision measurement courses'],
  },
  {
    Icon: Factory,
    title: 'Heavy Engineering',
    description: 'Large-scale manufacturing operations requiring massive granite plates for heavy component inspection.',
    applications: ['Heavy machinery inspection', 'Large component assembly', 'Foundry pattern making', 'Structural fabrication'],
  },
  {
    Icon: Car,
    title: 'Machine Building Sectors',
    description: 'Machine tool manufacturers requiring precision reference surfaces for assembly and calibration.',
    applications: ['Machine tool assembly', 'CNC machine calibration', 'Precision equipment setup', 'Quality control stations'],
  },
];

const IndustriesPage = () => (
  <div className="container mx-auto px-6 py-16 max-w-5xl">
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-3">Industries We Serve</h1>
      <p className="text-lg text-muted-foreground">
        Trusted by leading organisations across precision-critical sectors.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
      {industries.map(({ Icon, title, description, applications }) => (
        <div key={title} className="bg-white p-7 hover:bg-[hsl(222,52%,28%)]/4 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="h-5 w-5 text-[hsl(222,52%,28%)]" />
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <ul className="space-y-1.5">
            {applications.map((a) => (
              <li key={a} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-[hsl(222,52%,28%)] flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        { number: '50+', label: 'Industries Served' },
        { number: '500+', label: 'Projects Completed' },
        { number: '5+', label: 'Years Experience' },
        { number: '100%', label: 'Quality Assurance' },
      ].map(({ number, label }) => (
        <div key={label} className="border border-border rounded-lg p-5">
          <div className="text-2xl font-bold text-[hsl(222,52%,28%)] mb-1">{number}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default IndustriesPage;
