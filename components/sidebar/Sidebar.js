import NavItem from "@/components/sidebar/nav/navItem";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
    const [active, setActive] = useState("Home");
  
    return (
      <div className="w-64 bg-gray-900 text-white p-5 flex flex-col min-h-screen">
        <h2 className="text-xl font-bold mb-6">My App</h2>
        
        <NavItem icon={<AiOutlineHome />} label="Home" active={active} setActive={setActive} />
        <NavItem icon={<AiOutlineMessage />} label="Messages" active={active} setActive={setActive} />
        <NavItem icon={<AiOutlineSetting />} label="Settings" active={active} setActive={setActive} />
      </div>
    );
  };

  export default Sidebar;