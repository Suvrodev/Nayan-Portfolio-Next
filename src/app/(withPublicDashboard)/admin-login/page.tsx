import Login from "@/components/modules/(Admin-Dashboard)/Login/Login";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("Login");

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
