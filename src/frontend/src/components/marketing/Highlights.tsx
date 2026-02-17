import { Home, Building2, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Highlights() {
  const highlights = [
    {
      icon: Building2,
      title: 'In-Parlour Services',
      description: 'Visit our fully equipped beauty parlour for a premium experience'
    },
    {
      icon: Home,
      title: 'Home Services',
      description: 'Enjoy professional treatments in the comfort of your home'
    },
    {
      icon: Sparkles,
      title: 'No Extra Cost',
      description: 'Home services available at the same price as in-parlour visits'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
