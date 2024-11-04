// components/ServiceCard.tsx
import { Button } from '@/components/ui/button'; // Ensure ShadCN UI button component is configured.
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white text-2xl mb-2">{title}</h3>
        <Button className="bg-orange-500 text-white">BARCHASI</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
