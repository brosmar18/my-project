import React from 'react'

const Header = () => {
    return (
        <div className="h-full flex items-center justify-between px-6">
            <h1 className="text-xl font-semibold">PostgreSQL Manager</h1>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-accent text-primary rounded hover:bg-accent-light transition-colors">
                    User Menu
                </button>
            </div>
        </div>
    )
}

export default Header