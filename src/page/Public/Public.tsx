import { Outlet } from "react-router-dom";
import { Header } from "../../components";

const Public = () => {
  return (
    <div className="">
      <Header></Header>

      <div className="w-full h-full bg-[#f5f5f5]">
        <div className="pt-[80px]">
          <Outlet></Outlet>
        </div>

      </div>
    </div>
  );
};

export default Public;
