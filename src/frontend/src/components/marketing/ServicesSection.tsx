import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Droplet, Scissors, Crown, Wind, Star } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: 'All Functional Makeups',
      description: 'Professional makeup for all occasions including parties, events, and daily wear. We use premium products to enhance your natural beauty.'
    },
    {
      icon: Droplet,
      title: 'Skin & Facial Treatment',
      description: 'Rejuvenating facials, deep cleansing, anti-aging treatments, and customized skincare solutions for glowing, healthy skin.'
    },
    {
      icon: Scissors,
      title: 'Hair Care & Styling',
      description: 'Expert haircuts, coloring, treatments, and styling services. From everyday looks to special occasion hairstyles.'
    },
    {
      icon: Crown,
      title: 'Bridal Makeup',
      description: 'Complete bridal packages including makeup, hair styling, and pre-wedding treatments to make your special day perfect.'
    },
    {
      icon: Wind,
      title: 'Saree & Dupatta Draping',
      description: 'Professional draping services for sarees and dupattas in various traditional and contemporary styles for any occasion.'
    },
    {
      icon: Star,
      title: 'Essential & Grooming',
      description: 'Threading, waxing, manicure, pedicure, and other essential grooming services for complete personal care.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive beauty solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
