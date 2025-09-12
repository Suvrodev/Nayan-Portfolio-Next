import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CartModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
const CartModal = ({ isOpen, setIsOpen }: CartModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        <div className="text-center py-4">
          <p>Your cart is currently empty.</p>
          <Button variant="link" onClick={() => setIsOpen(false)}>
            Continue Shopping
          </Button>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button>View Cart</Button>
          <Button>Check out now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
