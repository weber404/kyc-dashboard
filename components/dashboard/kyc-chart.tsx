"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Individual",
    Today: 350,
    Yesterday: 280,
  },
  {
    name: "Non Individual",
    Today: 300,
    Yesterday: 250,
  },
]

export function KYCChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <span className="text-sm">Yesterday</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="Today" fill="#2563eb" />
            <Bar dataKey="Yesterday" fill="#93c5fd" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
