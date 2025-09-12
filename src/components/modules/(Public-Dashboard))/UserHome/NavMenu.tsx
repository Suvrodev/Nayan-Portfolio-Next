import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Men",
    subcategories: ["All Shoes", "Brands", "By Color", "By Price", "By Size"],
  },
  {
    name: "Women",
    subcategories: ["All Shoes", "Brands", "By Color", "By Price", "By Size"],
  },
  {
    name: "Children",
    subcategories: [
      "Boys",
      "Girls",
      "Brands",
      "By Color",
      "By Price",
      "By Size",
    ],
  },
  {
    name: "Accessories",
    subcategories: ["Apparel", "Bag", "Brands", "Others"],
  },
  {
    name: "Bata Club",
    subcategories: ["Check Points", "Register", "Benefits"],
  },
];

const NavMenu = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex space-x-4">
        <Button variant="link" className="text-white">
          Mega Deals
        </Button>
        <Button variant="link" className="text-white">
          Sneaker Studio
        </Button>
        {categories.map((category) => (
          <DropdownMenu key={category.name}>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-white">
                {category.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {category.subcategories.map((sub) => (
                <DropdownMenuItem key={sub}>{sub}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
