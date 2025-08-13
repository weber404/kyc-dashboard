"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Menu, ChevronDown } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden lg:flex items-center space-x-2">
            <h1 className="text-xl font-semibold text-gray-900">Axis MF</h1>
          </div>

          <div className="hidden md:flex items-center text-sm text-gray-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search transactions..." className="pl-10 w-64" />
          </div>

          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>

          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <div className="text-sm font-medium text-gray-900">Madhu Kumar</div>
              <div className="text-xs text-gray-500">May 18, 2024</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}
