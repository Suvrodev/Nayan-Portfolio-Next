import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="Email Address" type="email" required />
          <Input placeholder="Password" type="password" required />
          <a href="#" className="text-sm text-blue-600">
            Forgot your password?
          </a>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button>Login</Button>
        </DialogFooter>
        <div className="text-center">
          <Button variant="link">Create Account</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
