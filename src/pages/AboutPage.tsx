import { MapPin, Award, Users } from 'lucide-react';

const AboutPage = () => (
  <div className="container mx-auto px-6 py-16 max-w-4xl">
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-3">About Us</h1>
      <p className="text-lg text-muted-foreground">
        Building precision and trust through granite surface expertise.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Left */}
      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-[hsl(222,52%,28%)]" />
            <h2 className="text-xl font-semibold">Founders</h2>
          </div>
          <ul className="space-y-3">
            {['H. R. Bhagat', 'Santosh P. Kale', 'Santosh V. Kale'].map((name) => (
              <li key={name} className="flex items-center gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(222,52%,28%)] flex-shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-[hsl(222,52%,28%)]" />
            <h2 className="text-xl font-semibold">Location</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/mmMkzPEMb7DVRd1P8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground leading-relaxed hover:text-[hsl(222,52%,28%)] transition-colors text-sm"
          >
            Gat No. 52, RTO Road, Near Malhar Gad Road,<br />
            Behind Aai Saheb Hotel, Kalewadi, Dive,<br />
            Tal-Purandar, Pune – 412301
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-[hsl(222,52%,28%)]" />
            <h2 className="text-xl font-semibold">Registrations</h2>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="font-medium text-foreground w-16">GST</dt>
              <dd className="text-muted-foreground">27ACBFA6452H1ZH</dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-medium text-foreground w-16">MSME</dt>
              <dd className="text-muted-foreground">UDYAM-MH-26-0438749 (Micro)</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Right */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Why Choose Us</h2>
        <div className="space-y-6 divide-y divide-border">
          {[
            {
              title: '100% Focus on Granite Plates',
              desc: 'Our niche specialisation means every person, process, and tool is optimised for granite surface work — nothing is generic.',
            },
            {
              title: 'NABL / NPL Traceable Calibration',
              desc: 'Every certificate we issue is traceable to national physical laboratory standards — giving your quality team the confidence they need.',
            },
            {
              title: 'Fast Turnaround',
              desc: 'Efficient processes and dedicated machinery mean less downtime for your operations.',
            },
            {
              title: 'Long-Term Support',
              desc: 'We maintain relationships beyond the job — offering scheduled maintenance and re-calibration services.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="pt-6 first:pt-0">
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
