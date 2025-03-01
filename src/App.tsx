import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";;
import { Route, Routes } from 'react-router-dom';
import {Login,Home,Public,Screeningform,Statistical} from './page'
import path from './routes/path'

const MyPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="font-main h-full bg-[#f5f5f5]">
      <Routes>
        <Route path={path.LOGIN} element={<Login></Login>}></Route>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}></Route>
         
          <Route path={path.SCREENINGFORM} element={<Screeningform/>}></Route>
          <Route path={path.STATISTICAL} element={<Statistical/>}></Route>
        </Route>
      </Routes>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            {/* <Spin /> */}
          </div>
        }
        >
        {/* <MainRoutes /> */}
        {/* <Scroll /> */}
      </Suspense>
    </main>
  );
};

export default MyPage;
