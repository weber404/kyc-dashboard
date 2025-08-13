import { NextResponse } from "next/server"

export async function GET() {
  // Mock dashboard data
  const dashboardData = {
    totalKYCs: 3456,
    newKYC: {
      count: 3000,
      change: 12,
      trend: "up",
    },
    modifiedKYC: {
      count: 456,
      change: -10,
      trend: "down",
      breakdown: {
        forKYC: 400,
        inactive: 56,
      },
    },
    chartData: {
      individual: {
        today: 350,
        yesterday: 280,
      },
      nonIndividual: {
        today: 300,
        yesterday: 250,
      },
    },
    statusCards: [
      { label: "KYC Initiated", value: 234 },
      { label: "Under Process", value: 45 },
      { label: "Registered", value: 350 },
      { label: "Validated", value: 654 },
      { label: "Hold", value: 269 },
      { label: "Docs Pending", value: 100 },
    ],
    categories: {
      individual: {
        ri: 85,
        nri: 65,
      },
      nonIndividual: {
        ri: 75,
        nri: 55,
      },
    },
    solicited: {
      individual: {
        solicited: 956,
        received: 720,
        consumed: 456,
        pending: 264,
      },
    },
    panStats: {
      solicited: {
        total: 956,
        withKYC: 400,
        withImage: 250,
        withoutImage: 256,
      },
      dataReceived: {
        total: 320,
        withKYC: 300,
        withImage: 100,
        withoutImage: 20,
      },
    },
  }

  return NextResponse.json(dashboardData)
}
