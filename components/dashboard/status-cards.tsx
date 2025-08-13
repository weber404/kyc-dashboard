import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Clock, CheckCircle, Shield, Pause, FileText } from "lucide-react"

const statusData = [
  { icon: Rocket, label: "KYC Initiated", value: 234, color: "text-blue-600" },
  { icon: Clock, label: "Under Process", value: 45, color: "text-orange-600" },
  { icon: CheckCircle, label: "Registered", value: 350, color: "text-green-600" },
  { icon: Shield, label: "Validated", value: 654, color: "text-green-600" },
  { icon: Pause, label: "Hold", value: 269, color: "text-blue-600" },
  { icon: FileText, label: "Docs Pending", value: 100, color: "text-red-600" },
]

export function StatusCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {statusData.map((status, index) => (
        <Card key={index}>
          <CardContent className="p-4 text-center">
            <status.icon className={`h-8 w-8 mx-auto mb-2 ${status.color}`} />
            <div className="text-2xl font-bold mb-1">{status.value}</div>
            <div className="text-xs text-gray-600">{status.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
