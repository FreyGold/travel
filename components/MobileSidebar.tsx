//@ts-nocheck
import { Link } from "react-router";
import { Sidebar, SidebarComponent } from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems";

function MobileSidebar() {
   let sidebar: SidebarComponent;
   const toggleBar = () => {
      sidebar.toggle();
   };
   return (
      <div className="mobile-sidebar wrapper">
         <header>
            <Link to="/" className="link-logo">
               <img
                  src="/assets/icons/logo.svg"
                  alt="Logo"
                  className="size-[30px]"
               />
               <h1>Tourvisto</h1>
            </Link>
            <button onClick={toggleBar}>
               <img
                  src="/assets/icons/menu.svg"
                  alt="Menu"
                  className="size-7 cursor-pointer"
               />
            </button>
         </header>

         <SidebarComponent
            width={270}
            //@ts-ignore
            ref={(Sidebar) => (sidebar = Sidebar)}
            created={() => sidebar.hide()}
            closeOnDocumentClick={true}
            showBackdrop={true}
            type="over">
            <NavItems handleClick={toggleBar}></NavItems>
         </SidebarComponent>
      </div>
   );
}

export default MobileSidebar;
