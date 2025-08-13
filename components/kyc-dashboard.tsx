"use client"

import { useState } from "react"
import { Sidebar } from "./dashboard/sidebar"
import { Header } from "./dashboard/header"
import { DashboardContent } from "./dashboard/dashboard-content"

export function KYCDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
