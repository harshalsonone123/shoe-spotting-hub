
import { useState } from "react";
import { ShoeGrid } from "@/components/ShoeGrid";
import { AddShoeButton } from "@/components/AddShoeButton";
import { useToast } from "@/hooks/use-toast";

// Temporary sample data
const sampleShoes = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "Nike Air Max",
    brand: "Nike",
    size: "US 10",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    name: "Adidas Ultra Boost",
    brand: "Adidas",
    size: "US 9.5",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    name: "Jordan 1 Retro High",
    brand: "Jordan",
    size: "US 11",
  },
];

const Index = () => {
  const [shoes] = useState(sampleShoes);
  const { toast } = useToast();

  const handleAddShoe = () => {
    toast({
      title: "Coming Soon!",
      description: "The ability to add shoes will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 backdrop-blur-3xl">
      <header className="py-6 px-6 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Shoe Spotting Hub</h1>
          <p className="mt-2 text-gray-600">Your personal shoe collection showcase</p>
        </div>
      </header>

      <main className="container mx-auto">
        <ShoeGrid shoes={shoes} />
      </main>

      <AddShoeButton onClick={handleAddShoe} />
    </div>
  );
};

export default Index;
