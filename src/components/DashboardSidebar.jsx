import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const DashboardSidebar = ({ onNavigate }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClick = (link) => {
        onNavigate(link);
        if (isSidebarOpen) {
            toggleSidebar(); // Close the sidebar after a selection in mobile view
        }
    };

    return (
        <div className='relative'>
            {/* Toggle button for small screens */}
            <button
                className={`md:hidden block absolute ${isSidebarOpen ? "top-6" : "top-1"} left-4 z-50 bg-green-900 text-white rounded-md p-2`}
                onClick={toggleSidebar}
                aria-expanded={isSidebarOpen} // Accessibility improvement
            >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 md:relative md:translate-x-0 w-64 bg-gray-800 text-white
                transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}>
                <div className='bg-green-700 text-white flex flex-col h-screen p-4'>
                    <div className='flex items-center justify-center h-20'>
                        <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
                    </div>
                    <nav>
                        <ul className='space-y-2'>
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 rounded-md"
                                    onClick={() => handleClick("ManageProducts")}
                                >
                                    Manage Products
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 rounded-md"
                                    onClick={() => handleClick("ManageCustomers")}
                                >
                                    Manage Customers
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 rounded-md"
                                    onClick={() => handleClick("ManageOrders")}
                                >
                                    Manage Orders
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
