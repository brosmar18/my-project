import React from 'react'
import {
    HiOutlineHome,
    HiOutlineDatabase,
    HiOutlineLink,
    HiOutlineCog,
    HiOutlinePlus,
    HiOutlineCode,
} from 'react-icons/hi'

const Sidebar = () => {
    const navigationItems = [
        {
            title: "Dashboard",
            href: "#",
            icon: HiOutlineHome,
            active: true,
        },
        {
            title: "Databases",
            href: "#",
            icon: HiOutlineDatabase,
            active: false,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: HiOutlineCog,
            active: false,
        },
    ]

    const quickActions = [
        {
            title: "New Connection",
            icon: HiOutlinePlus,
            color: "bg-accent",
        },
        {
            title: "Query Builder",
            icon: HiOutlineCode,
            color: "bg-primary-light",
        },
    ]

    return (
        <div className="h-full flex flex-col">
            {/* Welcome section */}
            <div className="p-6 border-b border-white/10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-1">Welcome back!</h3>
                    <p className="text-white/70 text-sm">Ready to manage your databases?</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-6">
                <div className="space-y-2">
                    {navigationItems.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <a
                                key={idx}
                                href={item.href}
                                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${item.active
                                    ? "bg-white/20 text-white border border-white/30 shadow-lg"
                                    : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <Icon
                                    className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${item.active ? "text-accent-light" : ""
                                        }`}
                                />
                                <span className="font-medium">{item.title}</span>
                                {item.active && (
                                    <div className="ml-auto w-2 h-2 bg-accent-light rounded-full" />
                                )}
                            </a>
                        )
                    })}
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                    <h4 className="text-white/50 text-xs uppercase tracking-wider mb-4 px-4 font-semibold">
                        Quick Actions
                    </h4>
                    <div className="space-y-3">
                        {quickActions.map((action, idx) => {
                            const Icon = action.icon
                            return (
                                <button
                                    key={idx}
                                    className="w-full group flex items-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/20"
                                >
                                    <div
                                        className={`p-2 ${action.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">{action.title}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </nav>

            {/* Status indicator */}
            <div className="p-6 border-t border-white/10">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                        <div>
                            <p className="text-white text-sm font-medium">System Status</p>
                            <p className="text-white/60 text-xs">All systems operational</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
