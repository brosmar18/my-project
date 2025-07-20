import React from 'react'

const Sidebar = () => {
    return (
        <div className="p-4">
            <nav className="space-y-2">
                <a href="/dashboard" className="block px-4 py-2 rounded hover:bg-accent hover:text-primary transition-colors">
                    Dashboard
                </a>
                <a href="/dashboard/databases" className="block px-4 py-2 rounded hover:bg-accent hover:text-primary transition-colors">
                    Databases
                </a>
                <a href="/dashboard/connections" className="block px-4 py-2 rounded hover:bg-accent hover:text-primary transition-colors">
                    Connections
                </a>
                <a href="/dashboard/settings" className="block px-4 py-2 rounded hover:bg-accent hover:text-primary transition-colors">
                    Settings
                </a>
            </nav>
        </div>
    )
}

export default Sidebar