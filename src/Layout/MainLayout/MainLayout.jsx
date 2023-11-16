import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { DataContext } from "../../Components/UseContext/Use";

const MainLayout = () => {
  const allData = useLoaderData();

  return (
    <div className="w-4/5 mx-auto">
      <DataContext.Provider value={allData}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DataContext.Provider>
    </div>
  );
};

export default MainLayout;
