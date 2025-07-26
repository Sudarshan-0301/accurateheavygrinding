import { Card, CardContent } from '@/components/ui/card';

const EquipmentSection = () => {
  const machines = [
    {
      name: 'CNC Machining Center',
      size: '2500 mm × 1800 mm × 1200 mm',
      image: '/lovable-uploads/f9b15fad-c2c1-45b5-a7fa-b2bbc58e4986.png'
    },
    {
      name: 'Surface Grinding Machine',
      size: '4000 mm × 2000 mm × 1500 mm',
      image: '/lovable-uploads/d8d8a0a1-0992-42cd-a5de-a9872bfaa5b6.png'
    },
    {
      name: 'Double Column Grinding Machine',
      size: '5000 mm × 2500 mm × 1800 mm',
      image: '/lovable-uploads/b64f203a-cce7-4aa4-8b93-2e565467b05b.png'
    },
    {
      name: 'Floor Drilling HMC Machine',
      size: '3000 mm × 1500 mm × 900 mm',
      image: '/lovable-uploads/9d117e6c-5698-47bc-a505-4f56a6d34802.png'
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tools & Equipment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art machinery and precision instruments for superior granite surface services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {machines.map((machine, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={machine.image} 
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{machine.name}</h3>
                <p className="text-muted-foreground text-sm">{machine.size}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;