import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">N</span>
                </div>
                <span className="text-sm font-medium text-gray-600">New KYC</span>
              </div>
              <div className="text-2xl font-bold">3,000</div>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">12%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <span className="text-sm font-medium text-gray-600">Modified KYC</span>
              </div>
              <div className="text-2xl font-bold">456</div>
              <div className="text-xs text-gray-500">400 for KYC • 56 Inactive</div>
            </div>
            <div className="flex items-center text-red-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">10%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
