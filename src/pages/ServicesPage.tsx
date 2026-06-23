import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'Granite Surface Plate Lapping & Scrapping',
    description: 'Professional lapping and hand scrapping to restore granite surface flatness and precision.',
    details: [
      'High-precision lapping using graded abrasives',
      'Hand scrapping for ultimate surface finish',
      'Restoration of worn or damaged surfaces',
      'Precision flatness achievement to required grades',
    ],
  },
  {
    title: 'Calibration with NABL / NPL Traceable Certificates',
    description: 'Certified calibration with traceable documentation for compliance and quality assurance.',
    details: [
      'NABL/NPL traceable calibration certificates',
      'IS/ASTM standard compliance',
      'On-site and in-house calibration options',
      'Digital calibration reports and documentation',
    ],
  },
  {
    title: 'Flatness Restoration (Grade 1, 0, 00)',
    description: 'Complete flatness restoration to achieve precision grades for various applications.',
    details: [
      'Grade 1 restoration for general applications',
      'Grade 0 precision for laboratory use',
      'Grade 00 ultra-precision for metrology',
      'Surface parallelism and squareness correction',
    ],
  },
  {
    title: 'Manufacturing Base Plates for CMM / VMM',
    description: 'Custom manufacturing of granite base plates for coordinate measuring and vision systems.',
    details: [
      'CMM base plate manufacturing',
      'VMM foundation plates',
      'Custom size and specification plates',
      'Threaded inserts and mounting solutions',
    ],
  },
  {
    title: 'Reconditioning of Damaged Granite Plates',
    description: 'Complete reconditioning to restore damaged granite plates to original specifications.',
    details: [
      'Crack repair and structural restoration',
      'Chip and edge damage repair',
      'Surface reconditioning and refinishing',
      'Dimensional accuracy restoration',
    ],
  },
  {
    title: 'Final Polishing, Epoxy Sealing & Packaging',
    description: 'Professional finishing including surface treatment, sealing, and secure packaging.',
    details: [
      'High-grade surface polishing',
      'Epoxy sealing for durability',
      'Edge finishing and chamfering',
      'Professional packaging for shipping',
    ],
  },
  {
    title: 'Custom Granite Plate Machining, Drilling & Insert Fixing',
    description: 'Custom machining services according to client drawings and specifications.',
    details: [
      'Precision drilling and boring',
      'Threaded insert installation',
      'Custom groove and slot machining',
      'Client drawing interpretation and execution',
    ],
  },
];

const ServiceRow = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-4">
          <span className="text-xs font-mono text-muted-foreground mt-0.5 w-5 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <span className="font-semibold text-foreground group-hover:text-[hsl(222,52%,28%)] transition-colors">
              {service.title}
            </span>
            <p className="text-sm text-muted-foreground mt-0.5">{service.description}</p>
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pl-9">
          <ul className="space-y-2">
            {service.details.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-[hsl(222,52%,28%)] mt-2 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => (
  <div className="container mx-auto px-6 py-16 max-w-3xl">
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-3">Our Services</h1>
      <p className="text-lg text-muted-foreground">
        Comprehensive granite surface solutions — from calibration to custom manufacturing.
      </p>
    </div>
    <div>
      {services.map((service, i) => (
        <ServiceRow key={service.title} service={service} index={i} />
      ))}
    </div>
  </div>
);

export default ServicesPage;
