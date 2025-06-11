
const NavItem = ({ icon, label, active, setActive }) => (
  <button
    onClick={() => setActive(label)}
    className={`flex items-center gap-2 p-3 rounded-lg text-gray-300 ${
      active === label ? "bg-blue-600 text-white" : "hover:bg-gray-700"
    }`}
  >
    {icon} <span>{label}</span>
  </button>
);

export default NavItem;