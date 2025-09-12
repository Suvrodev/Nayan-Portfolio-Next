import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  sizes: number[];
}
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <div className="h-48 bg-gray-200 mb-4"></div>{" "}
      {/* Placeholder for image */}
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">Tk {product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">Color: {product.color}</p>
      <div className="flex space-x-2 my-2">
        {product.sizes.map((size) => (
          <Button key={size} variant="outline" size="sm">
            {size}
          </Button>
        ))}
      </div>
      <div className="flex space-x-2">
        <Button>Shop Now</Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
