import React from 'react'
import {
    HiOutlineDatabase,
    HiOutlineSearch,
    HiOutlineBell,
    HiOutlineUserCircle,
    HiOutlineChevronDown,
    HiOutlineCog,
    HiOutlineLogout,
} from 'react-icons/hi'

const Header = () => {
    return (
        <div className="h-full flex items-center justify-between px-8">
            {/* Left side - Logo and title */}
            <div className="flex items-center space-x-4">
                {/* Logo/Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                    <HiOutlineDatabase className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <div>
                    <h1 className="lg:text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        PostgreSQL Manager
                    </h1>
                </div>
            </div>

            {/* Right side - Actions and user menu */}
            <div className="flex items-center space-x-6">
                {/* Search bar */}
                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineSearch className="h-5 w-5 text-neutral" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search databases..."
                        className="w-80 pl-10 pr-4 py-2.5 bg-neutral-light/20 border border-neutral-light/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder-neutral"
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2.5 text-neutral hover:text-primary transition-colors duration-200 hover:bg-primary/5 rounded-xl">
                    <HiOutlineBell className="w-6 h-6" />
                    <span className="absolute top-1 right-1 w-3 h-3 bg-accent rounded-full border-2 border-white" />
                </button>

                {/* User menu */}
                <div className="relative group">
                    <button className="flex items-center space-x-3 px-4 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl hover:from-accent-dark hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group-hover:scale-105">
                        {/* Avatar */}
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <HiOutlineUserCircle className="w-5 h-5" />
                        </div>
                        <span className="font-medium hidden sm:block">Admin</span>
                        <HiOutlineChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>

                    {/* Dropdown menu */}
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-neutral-light/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                        <div className="p-2">
                            <a
                                href="#"
                                className="flex items-center space-x-3 px-4 py-3 text-neutral-dark hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                            >
                                <HiOutlineUserCircle className="w-5 h-5" />
                                <span>Profile</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center space-x-3 px-4 py-3 text-neutral-dark hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                            >
                                <HiOutlineCog className="w-5 h-5" />
                                <span>Settings</span>
                            </a>
                            <hr className="my-2 border-neutral-light/30" />
                            <a
                                href="#"
                                className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                            >
                                <HiOutlineLogout className="w-5 h-5" />
                                <span>Sign out</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
