const steps = [
  {
    title: 'Initial Inspection',
    description:
      'Comprehensive assessment using digital and mechanical levels — surface flatness measurement, damage documentation, precision level verification, and client requirement analysis.',
  },
  {
    title: 'Lapping & Hand Scrapping',
    description:
      'Progressive grit lapping process using graded abrasives, followed by hand scrapping for the final finish. Continuous measurement monitoring with quality checkpoints at each stage.',
  },
  {
    title: 'Calibration & Certification',
    description:
      'NABL/NPL traceable calibration carried out on-site or in-house. IS/ASTM standard compliance verified, digital calibration reports generated and documented.',
  },
  {
    title: 'Surface Sealing & Polishing',
    description:
      'High-grade surface polishing followed by epoxy sealing application. Edge finishing, chamfering, and surface protection coating applied.',
  },
  {
    title: 'Epoxy Gluing & Edge Finishing',
    description:
      'Structural epoxy application for reinforcement, edge smoothing, corner radius completion, and final dimensional verification.',
  },
  {
    title: 'Stamping, Labelling & Packaging',
    description:
      'Calibration certificate stamping, identification label application, protective packaging, and quality assurance documentation for delivery.',
  },
];

const ProcessPage = () => (
  <div className="container mx-auto px-6 py-16 max-w-3xl">
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-3">Our Process</h1>
      <p className="text-lg text-muted-foreground">
        A systematic approach ensuring consistent quality at every step.
      </p>
    </div>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex gap-8 pb-10 last:pb-0">
            {/* Step circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(222,52%,28%)] text-white flex items-center justify-center text-sm font-bold z-10">
              {i + 1}
            </div>
            {/* Content */}
            <div className="pt-1.5 pb-2">
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14 pt-8 border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed">
        Our systematic process ensures consistent quality, precision, and reliability in every granite surface
        plate we service. From initial inspection to final delivery, we maintain the highest standards of
        workmanship and documentation.
      </p>
    </div>
  </div>
);

export default ProcessPage;
