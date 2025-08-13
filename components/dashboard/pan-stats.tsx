import { Card, CardContent } from "@/components/ui/card"
import { Shield, Database } from "lucide-react"

export function PANStats() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-medium">No. Of PANs Solicited</span>
          </div>
          <div className="text-3xl font-bold mb-4">956</div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">400 With KYC</div>
              <div className="text-gray-600">250 With Image</div>
            </div>
            <div>
              <div className="text-gray-600">256 Without Image</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="h-6 w-6 text-green-600" />
            <span className="font-medium">Data Received</span>
          </div>
          <div className="text-3xl font-bold mb-4">320</div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">300 With KYC</div>
              <div className="text-gray-600">100 With Image</div>
            </div>
            <div>
              <div className="text-gray-600">20 Without Image</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
