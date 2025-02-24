
import { motion } from "framer-motion";
import { Card } from "./ui/card";

interface ShoeCardProps {
  image: string;
  name: string;
  brand: string;
  size: string;
}

export const ShoeCard = ({ image, name, brand, size }: ShoeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="text-xs text-gray-500 font-medium">{brand}</div>
          <h3 className="font-semibold text-lg leading-tight text-gray-900">{name}</h3>
          <div className="text-sm text-gray-600">Size: {size}</div>
        </div>
      </Card>
    </motion.div>
  );
};
