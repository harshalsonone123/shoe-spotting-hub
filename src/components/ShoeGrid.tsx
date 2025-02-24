
import { motion } from "framer-motion";
import { ShoeCard } from "./ShoeCard";

interface Shoe {
  id: string;
  image: string;
  name: string;
  brand: string;
  size: string;
}

interface ShoeGridProps {
  shoes: Shoe[];
}

export const ShoeGrid = ({ shoes }: ShoeGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
    >
      {shoes.map((shoe) => (
        <ShoeCard key={shoe.id} {...shoe} />
      ))}
    </motion.div>
  );
};
