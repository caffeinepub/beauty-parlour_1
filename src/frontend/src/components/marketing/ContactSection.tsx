import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Book your appointment today and discover the difference professional care makes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Book Your Appointment
                  </h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Contact us on WhatsApp to schedule your appointment and learn about our current discounts and special offers.
                  </p>
                </div>

                <div className="pt-4">
                  <WhatsAppCTA variant="default" size="lg" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border">
                  <div className="flex items-start gap-3 text-left">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Location</div>
                      <div className="text-sm text-muted-foreground">
                        Serving your area with in-parlour and home services
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Availability</div>
                      <div className="text-sm text-muted-foreground">
                        Flexible scheduling to suit your convenience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
