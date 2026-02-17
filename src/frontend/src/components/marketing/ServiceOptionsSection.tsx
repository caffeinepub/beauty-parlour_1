import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Home, Check } from 'lucide-react';

export default function ServiceOptionsSection() {
  return (
    <section id="options" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Options
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the option that works best for you—both at the same price
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">In-Parlour Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-center mb-6">
                Visit our fully equipped beauty parlour for a luxurious experience
              </p>
              <ul className="space-y-3">
                {[
                  'State-of-the-art facilities',
                  'Complete range of equipment',
                  'Relaxing ambiance',
                  'Professional environment'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
              No Extra Cost
            </div>
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Home Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-center mb-6">
                Enjoy professional treatments in the comfort of your own home
              </p>
              <ul className="space-y-3">
                {[
                  'Same pricing as in-parlour',
                  'Convenience of your home',
                  'Flexible scheduling',
                  'Professional service guaranteed'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
