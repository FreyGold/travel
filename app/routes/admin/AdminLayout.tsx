import { Outlet } from "react-router";

function adminLayout() {
   return (
      <div className="admin-layout">
         <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
         <aside className="children">
            <Outlet />
         </aside>
      </div>
   );
}

export default adminLayout;
