"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "No of PANs Solicited", value: 956, color: "#2563eb" },
  { name: "Received", value: 720, color: "#06b6d4" },
  { name: "Consumed", value: 456, color: "#10b981" },
  { name: "Pending", value: 264, color: "#ef4444" },
]

export function SolicitedSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Solicited & Unsolicited</CardTitle>
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="non-individual">Non Individual</TabsTrigger>
          </TabsList>
          <TabsContent value="individual">
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="non-individual">
            <div className="text-center text-gray-500 py-8">Non Individual data</div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
}
