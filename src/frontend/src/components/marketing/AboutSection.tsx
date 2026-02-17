import { Award, Heart, Users, Clock } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Expert Professionals',
      description: 'Certified beauticians with years of experience'
    },
    {
      icon: Heart,
      title: 'Premium Products',
      description: 'Only the finest quality beauty products'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Tailored treatments for your unique needs'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Book appointments at your convenience'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We are dedicated to enhancing your natural beauty with professional expertise and personalized care. Our team of skilled beauticians brings years of experience to every service, ensuring you look and feel your absolute best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
