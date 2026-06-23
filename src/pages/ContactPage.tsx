import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const APP_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw8WjSgA2H199URjdTqVWzcvfeYK7VSTDE96fjDmFRPmg8tbii8PoKiIVn2Ss8seKUTvg/exec';

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ fullName: '', mobile: '', email: '', serviceRequirement: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(APP_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form).toString(),
      });
      if (res.ok) {
        toast({ title: 'Request submitted!', description: "We'll contact you within 24 hours." });
        setForm({ fullName: '', mobile: '', email: '', serviceRequirement: '' });
      } else throw new Error();
    } catch {
      toast({ title: 'Submission failed', description: 'Please try again or contact us directly.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full border border-border rounded px-4 py-2.5 text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(222,52%,28%)]/30 focus:border-[hsl(222,52%,28%)] transition';

  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Ready to discuss your granite surface requirements? Get in touch.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
            <input name="fullName" type="text" required value={form.fullName} onChange={handleChange}
              placeholder="Your full name" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Mobile Number *</label>
            <input name="mobile" type="tel" required value={form.mobile} onChange={handleChange}
              placeholder="Your mobile number" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange}
              placeholder="Your email address" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Service Requirement *</label>
            <textarea name="serviceRequirement" required value={form.serviceRequirement} onChange={handleChange}
              placeholder="Describe your granite plate requirements, size, grade, or any queries…"
              rows={5} className={`${inputClass} resize-none`} />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-[hsl(222,52%,28%)] text-white font-semibold py-3 rounded hover:bg-[hsl(222,52%,24%)] transition-colors disabled:opacity-60"
          >
            {submitting ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {submitting ? 'Submitting…' : 'Submit Request'}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            We respond within 24 hours during business days.
          </p>
        </form>

        {/* Contact info */}
        <div className="space-y-8">
          <div className="space-y-5">
            <h2 className="font-semibold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              <a href="tel:+919225505785" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-[hsl(222,52%,28%)]" /> +91 9225505785
              </a>
              <a href="tel:+919225505784" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-[hsl(222,52%,28%)]" /> +91 9225505784
              </a>
              <a href="mailto:accurateheavygrinding@outlook.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-[hsl(222,52%,28%)]" /> accurateheavygrinding@outlook.com
              </a>
              <a
                href="https://maps.app.goo.gl/mmMkzPEMb7DVRd1P8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="h-4 w-4 text-[hsl(222,52%,28%)] flex-shrink-0 mt-0.5" />
                <span>Gat No. 52, RTO Road, Near Malhar Gad Road, Behind Aai Saheb Hotel, Kalewadi, Dive, Tal-Purandar, Pune – 412301</span>
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                title="Accurate Heavy Grinding location"
                src="https://maps.google.com/maps?q=18.4096251,74.0202855&z=17&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-[hsl(222,52%,28%)]" />
              <h3 className="font-semibold text-foreground text-sm">Business Hours</h3>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { day: 'Mon – Wed', hours: '8:30 AM – 6:00 PM' },
                { day: 'Thursday', hours: 'Closed' },
                { day: 'Fri – Sun', hours: '8:30 AM – 6:00 PM' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between">
                  <span className="text-muted-foreground">{day}</span>
                  <span className={`font-medium ${hours === 'Closed' ? 'text-muted-foreground' : 'text-foreground'}`}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-foreground text-sm mb-3">Why Contact Us?</h3>
            <ul className="space-y-2">
              {[
                'Free consultation and quotation',
                'NABL/NPL traceable calibration',
                'On-site service available',
                'Fast turnaround times',
                'Competitive pricing',
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-[hsl(222,52%,28%)] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
