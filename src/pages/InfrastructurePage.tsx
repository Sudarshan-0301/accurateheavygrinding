const machines = [
  {
    title: 'Double Column VMC Machine',
    spec: '4000 mm × 3000 mm × 600 mm',
    image: '/lovable-uploads/double-column-vmc.jpg',
    alt: 'Double column VMC machine',
  },
  {
    title: 'Precision Grinding Machine',
    spec: '3000 mm × 600 mm × 600 mm',
    image: '/lovable-uploads/precision-grinding.jpg',
    alt: 'Precision grinding machine',
  },
  {
    title: 'Double Column Grinding Machine',
    spec: '3000 mm × 1500 mm × 900 mm',
    image: '/lovable-uploads/double-column-grinding.jpg',
    alt: 'Double column grinding machine',
  },
  {
    title: 'Floor Drilling HMC Machine',
    spec: '3000 mm × 1500 mm × 900 mm',
    image: '/lovable-uploads/floor-drilling-hmc.jpg',
    alt: 'Floor drilling HMC machine',
  },
];

const InfrastructurePage = () => (
  <div className="container mx-auto px-6 py-16 max-w-5xl">
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-3">Plant Machinery & Specifications</h1>
      <p className="text-lg text-muted-foreground">
        World-class granite calibration machinery in a precision-controlled work environment.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {machines.map(({ title, spec, image, alt }) => (
        <div key={title} className="border border-border rounded-lg overflow-hidden group">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{spec}</p>
            <span className="inline-block mt-3 text-xs font-medium text-[hsl(222,52%,28%)] border border-[hsl(222,52%,28%)]/30 rounded-full px-3 py-0.5">
              Precision Certified
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 border border-border rounded-lg p-8">
      <h3 className="font-semibold text-foreground mb-4">Facility Highlights</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Manufacturing Area', value: '25,000+ sq ft' },
          { label: 'Precision Accuracy', value: '±0.001 µm' },
          { label: 'Work Environment', value: 'Temperature Controlled' },
          { label: 'Quality Standard', value: 'ISO Compliant' },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="font-semibold text-foreground text-sm">{value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default InfrastructurePage;
