import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-light/20 via-white to-accent-light/10">
            {/* Header with glassmorphism effect */}
            <div className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-neutral-light/30 z-50 shadow-lg shadow-primary/5">
                <Header />
            </div>

            <div className="flex pt-20">
                {/* Sidebar with modern design */}
                <div className="fixed left-0 top-20 h-[calc(100vh-80px)] w-72 bg-gradient-to-b from-primary to-primary-dark text-white overflow-y-auto hidden lg:block shadow-2xl shadow-primary/20">
                    <Sidebar />
                </div>

                {/* Main Content with beautiful container */}
                <main className="flex-1 lg:ml-72 p-8 min-h-[calc(100vh-80px)]">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Mobile overlay for sidebar */}
            <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 hidden" id="mobile-overlay"></div>
        </div>
    )
}