import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsappConfig } from '@/config/whatsapp';
import type { ComponentPropsWithoutRef } from 'react';

interface WhatsAppCTAProps {
  variant?: ComponentPropsWithoutRef<typeof Button>['variant'];
  size?: ComponentPropsWithoutRef<typeof Button>['size'];
  className?: string;
}

export default function WhatsAppCTA({ variant = 'default', size = 'default', className }: WhatsAppCTAProps) {
  const handleClick = () => {
    if (!whatsappConfig.phoneNumber) {
      return;
    }

    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
      disabled={!whatsappConfig.phoneNumber}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      WhatsApp for Appointment
    </Button>
  );
}
