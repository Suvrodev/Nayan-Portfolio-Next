import Registration from "@/components/modules/(Admin-Dashboard)/Registration/Registration";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("Registration");

const RegistrationPage = () => {
  return (
    <div>
      <Registration />
    </div>
  );
};

export default RegistrationPage;
