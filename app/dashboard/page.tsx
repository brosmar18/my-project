import React from 'react'
import {
    HiOutlineDatabase,
    HiOutlineLink,
    HiOutlineServer,
    HiOutlineChartBar,
    HiOutlineArrowSmUp,
    HiOutlineArrowSmDown,
    HiOutlinePlus,
    HiOutlineCode,
    HiOutlineDownload,
    HiOutlineCloudUpload,
    HiOutlineCog,
} from 'react-icons/hi'

export default function DashboardPage() {
    const stats = [
        {
            title: "Total Databases",
            value: "12",
            change: "+2 this week",
            positive: true,
            icon: HiOutlineDatabase,
            color: "from-accent to-accent-light",
        },
        {
            title: "Active Connections",
            value: "8",
            change: "+1 today",
            positive: true,
            icon: HiOutlineLink,
            color: "from-primary to-primary-light",
        },
        {
            title: "Queries Today",
            value: "1,247",
            change: "-5% from yesterday",
            positive: false,
            icon: HiOutlineChartBar,
            color: "from-neutral to-neutral-dark",
        },
        {
            title: "Storage Used",
            value: "2.4 GB",
            change: "of 10 GB limit",
            positive: true,
            icon: HiOutlineServer,
            color: "from-primary-light to-accent",
        },
    ]

    const recentActivity = [
        {
            action: "New table created",
            database: "ecommerce_db",
            time: "2 minutes ago",
            icon: HiOutlineDatabase,
            bg: "bg-accent/20 text-accent",
        },
        {
            action: "Query executed",
            database: "analytics_db",
            time: "5 minutes ago",
            icon: HiOutlineCode,
            bg: "bg-primary/20 text-primary",
        },
        {
            action: "Connection established",
            database: "user_db",
            time: "10 minutes ago",
            icon: HiOutlineLink,
            bg: "bg-accent-light/20 text-accent-light",
        },
        {
            action: "Backup completed",
            database: "inventory_db",
            time: "1 hour ago",
            icon: HiOutlineCloudUpload,
            bg: "bg-neutral/20 text-neutral-dark",
        },
        {
            action: "Index optimized",
            database: "logs_db",
            time: "2 hours ago",
            icon: HiOutlineCog,
            bg: "bg-neutral/20 text-neutral-dark",
        },
    ]

    const quickLinks = [
        {
            title: "Create New Database",
            description: "Set up a new PostgreSQL database",
            icon: HiOutlinePlus,
            color: "bg-accent",
        },
        {
            title: "Query Builder",
            description: "Build and execute SQL queries",
            icon: HiOutlineCode,
            color: "bg-primary",
        },
        {
            title: "Import Data",
            description: "Upload CSV or SQL files",
            icon: HiOutlineDownload,
            color: "bg-neutral-dark",
        },
    ]

    return (
        <div className="space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-primary mb-2">
                        Welcome to your Dashboard
                    </h1>
                    <p className="text-neutral-dark text-lg">
                        Monitor and manage your PostgreSQL databases with ease
                    </p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <button className="bg-gradient-to-r from-accent to-accent-light text-white px-6 py-3 rounded-xl font-semibold hover:from-accent-dark hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        + New Database
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon
                    return (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-light/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <p className="text-neutral text-sm font-medium mb-1">{stat.title}</p>
                                    <p className="text-3xl font-bold text-primary-dark mb-2">{stat.value}</p>
                                    <p
                                        className={`text-sm flex items-center ${stat.positive ? "text-accent" : "text-neutral"
                                            }`}
                                    >
                                        {stat.positive ? (
                                            <HiOutlineArrowSmUp className="w-4 h-4 mr-1" />
                                        ) : (
                                            <HiOutlineArrowSmDown className="w-4 h-4 mr-1" />
                                        )}
                                        {stat.change}
                                    </p>
                                </div>
                                <div
                                    className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-light/20">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-primary">Recent Activity</h2>
                            <button className="text-accent hover:text-accent-dark font-medium">View All</button>
                        </div>
                        <div className="space-y-4">
                            {recentActivity.map((act, idx) => {
                                const Icon = act.icon
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center space-x-4 p-4 bg-neutral-light/10 rounded-xl hover:bg-neutral-light/20 transition-colors duration-200"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${act.bg}`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-primary-dark">{act.action}</p>
                                            <p className="text-sm text-neutral">
                                                {act.database} • {act.time}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-light/20">
                        <h2 className="text-2xl font-bold text-primary mb-6">Quick Actions</h2>
                        <div className="space-y-4">
                            {quickLinks.map((link, idx) => {
                                const Icon = link.icon
                                return (
                                    <button
                                        key={idx}
                                        className="w-full text-left p-4 rounded-xl border border-neutral-light/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div
                                                className={`${link.color} p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-primary-dark group-hover:text-primary">
                                                    {link.title}
                                                </h3>
                                                <p className="text-sm text-neutral mt-1">{link.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* System Health */}
                    <div className="bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-2xl p-6 border border-accent/20">
                        <h3 className="text-xl font-bold text-primary mb-4">System Health</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-dark">CPU Usage</span>
                                <span className="text-sm font-medium text-accent">23%</span>
                            </div>
                            <div className="w-full bg-neutral-light/30 rounded-full h-2">
                                <div className="bg-accent h-2 rounded-full" style={{ width: '23%' }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-dark">Memory</span>
                                <span className="text-sm font-medium text-primary">67%</span>
                            </div>
                            <div className="w-full bg-neutral-light/30 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
