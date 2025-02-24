
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface AddShoeButtonProps {
  onClick: () => void;
}

export const AddShoeButton = ({ onClick }: AddShoeButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={onClick}
        className="fixed bottom-8 right-8 h-14 px-6 rounded-full shadow-lg bg-black text-white hover:bg-gray-800 transition-colors"
      >
        <Plus className="mr-2 h-5 w-5" />
        Add Shoe
      </Button>
    </motion.div>
  );
};
