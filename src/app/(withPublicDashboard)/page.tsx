import Home from "@/components/modules/(Public-Dashboard))/Home/Home/Home";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("Home");

const HomePage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
