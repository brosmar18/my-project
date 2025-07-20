import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Using primary color */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-primary text-white z-10 shadow-lg">
                <Header />
            </div>

            <div className="flex pt-16">
                {/* Sidebar - Using darker neutral */}
                <div className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-neutral-dark text-white overflow-y-auto hidden md:block">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <main className="flex-1 md:ml-64 p-6 bg-white min-h-[calc(100vh-64px)]">
                    {children}
                </main>
            </div>
        </div>
    )
}