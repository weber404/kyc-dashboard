"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MetricCards } from "./metric-cards"
import { KYCChart } from "./kyc-chart"
import { StatusCards } from "./status-cards"
import { CategoriesSection } from "./categories-section"
import { SolicitedSection } from "./solicited-section"
import { PANStats } from "./pan-stats"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function DashboardContent() {
  const [timeRange, setTimeRange] = useState("today")
  const [viewType, setViewType] = useState("individual")
  const [date, setDate] = useState<Date>(new Date())
  const [calendarOpen, setCalendarOpen] = useState(false)

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-full">
      {/* Time Range Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <Button
            variant={timeRange === "today" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("today")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Today
          </Button>
          <Button
            variant={timeRange === "month" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("month")}
          >
            This Month
          </Button>
          <Button
            variant={timeRange === "custom" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("custom")}
          >
            Custom
          </Button>
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                {date ? format(date, "dd MMM yyyy") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  if (newDate) {
                    setDate(newDate)
                    setCalendarOpen(false)
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Total KYCs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-gray-600">Total KYCs</CardTitle>
          <div className="text-3xl font-bold">3,456</div>
        </CardHeader>
      </Card>

      {/* Metric Cards */}
      <MetricCards />

      {/* Charts and Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KYCChart />
        <CategoriesSection />
      </div>

      {/* Status Cards */}
      <StatusCards />

      {/* Solicited Section and PAN Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SolicitedSection />
        <PANStats />
      </div>
    </div>
  )
}
