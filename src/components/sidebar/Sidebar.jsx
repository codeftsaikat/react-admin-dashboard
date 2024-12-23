import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const SIDE_BAR = [
    { name: "Overview", icon: BarChart2, color: "#6366f1", path: "/" },
    {
      name: "Products",
      icon: ShoppingBag,
      color: "#8B5CF6",
      path: "/products",
    },
    { name: "Users", icon: Users, color: "#EC4899", path: "/users" },
    { name: "Sales", icon: DollarSign, color: "#10B981", path: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#F59E0B", path: "/orders" },
    {
      name: "Analytics",
      icon: TrendingUp,
      color: "#3B82F6",
      path: "/analytics",
    },
    { name: "Settings", icon: Settings, color: "#6EE7B7", path: "/settings" },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-600">
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
