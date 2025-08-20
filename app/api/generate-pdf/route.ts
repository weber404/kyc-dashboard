import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET() {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  })

  // ===================== SIDEBAR =====================
  doc.setFillColor("#F8FAFC")
  doc.rect(0, 0, 200, 595, "F")

  // Logo area
  doc.setFillColor("#2563EB")
  doc.rect(20, 20, 160, 40, "F")
  doc.setFontSize(14)
  doc.setTextColor("#FFFFFF")
  doc.text("Logo", 90, 45)

  // Navigation items
  const navItems = ["Dashboard", "Applications", "Billing", "Rate Card", "Agreement Copy", "Notices"]
  let navY = 100

  navItems.forEach((item, index) => {
    if (index === 0) {
      // Active item
      doc.setFillColor("#2563EB")
      doc.rect(20, navY - 15, 160, 30, "F")
      doc.setTextColor("#FFFFFF")
    } else {
      doc.setTextColor("#64748B")
    }
    doc.setFontSize(11)
    doc.text(item, 35, navY)
    navY += 40
  })

  // ===================== MAIN HEADER =====================
  doc.setFillColor("#FFFFFF")
  doc.rect(200, 0, 642, 80, "F")

  // Axis MF branding
  doc.setFontSize(18)
  doc.setTextColor("#1E293B")
  doc.text("Axis MF", 220, 35)

  // Breadcrumb
  doc.setFontSize(12)
  doc.setTextColor("#64748B")
  doc.text("Home / Dashboard", 220, 55)

  // Date display
  doc.setFontSize(10)
  doc.text("14 Aug 2025", 350, 35)

  // Search bar representation
  doc.setDrawColor("#E2E8F0")
  doc.setLineWidth(1)
  doc.rect(450, 20, 200, 30)
  doc.setFontSize(10)
  doc.setTextColor("#94A3B8")
  doc.text("Search transactions...", 460, 40)

  // User profile
  doc.setFillColor("#E2E8F0")
  doc.circle(780, 35, 15, "F")
  doc.setFontSize(10)
  doc.setTextColor("#1E293B")
  doc.text("MK", 775, 40)
  doc.setFontSize(9)
  doc.text("Madhu Kumar", 720, 60)
  doc.text("May 18, 2024", 720, 72)

  // ===================== TIME FILTERS =====================
  let mainY = 100
  doc.setFillColor("#2563EB")
  doc.rect(220, mainY, 60, 30, "F")
  doc.setFontSize(11)
  doc.setTextColor("#FFFFFF")
  doc.text("Today", 240, mainY + 20)

  doc.setFillColor("#F1F5F9")
  doc.rect(290, mainY, 80, 30, "F")
  doc.setTextColor("#64748B")
  doc.text("This Month", 305, mainY + 20)
 
 doc.setFillColor("#F1F5F9")
  doc.rect(380, mainY, 60, 30, "F")
  doc.setTextColor("#64748B")
  doc.text("Custom", 395, mainY + 20)

  // Date picker representation
   doc.setFillColor("#F1F5F9")
  doc.rect(450, mainY, 100, 30, "F")
  doc.setTextColor("#64748B")
  doc.text("20 Aug 2025", 465, mainY + 20)

  // Export PDF button
  doc.setFillColor("#2563EB")
  doc.rect(550, mainY, 80, 30, "F")
  doc.setTextColor("#FFFFFF")
  doc.text("Export PDF", 565, mainY + 20)

  // ===================== TOTAL KYCs =====================
  mainY += 60
  doc.setFontSize(14)
  doc.setTextColor("#64748B")
  doc.text("Total KYCs", 220, mainY)
  doc.setFontSize(32)
  doc.setTextColor("#1E293B")
  doc.text("3,456", 220, mainY + 35)

  // ===================== METRIC CARDS =====================
  mainY += 80

  // New KYC Card
  doc.setFillColor("#FFFFFF")
  doc.setDrawColor("#E2E8F0")
  doc.setLineWidth(1)
  doc.rect(220, mainY, 200, 80)

  doc.setFillColor("#2563EB")
  doc.circle(240, mainY + 25, 8, "F")
  doc.setFontSize(12)
  doc.setTextColor("#64748B")
  doc.text("New KYC", 260, mainY + 30)
  doc.setFontSize(24)
  doc.setTextColor("#1E293B")
  doc.text("3,000", 240, mainY + 55)
  doc.setFontSize(10)
  doc.setTextColor("#10B981")
  doc.text("↑ +12%", 320, mainY + 55)
  doc.setFontSize(8)
  doc.setTextColor("#64748B")
  doc.text("400 new KYC · 56 inactive", 240, mainY + 70)

  // Modified KYC Card
  doc.rect(440, mainY, 200, 80)
  doc.setFillColor("#2563EB")
  doc.circle(460, mainY + 25, 8, "F")
  doc.setFontSize(12)
  doc.setTextColor("#64748B")
  doc.text("Modified KYC", 480, mainY + 30)
  doc.setFontSize(24)
  doc.setTextColor("#1E293B")
  doc.text("456", 460, mainY + 55)
  doc.setFontSize(10)
  doc.setTextColor("#EF4444")
  doc.text("↓ -10%", 520, mainY + 55)

  // Categories section
  doc.setFillColor("#FFFFFF")
  doc.rect(660, mainY, 160, 80)
  doc.setFontSize(12)
  doc.setTextColor("#1E293B")
  doc.text("Categories", 670, mainY + 20)
  doc.setFontSize(10)
  doc.setTextColor("#64748B")
  doc.text("Individual    Non Individual", 670, mainY + 35)

  // Progress bars with labels
  doc.text("RI", 670, mainY + 50)
  doc.setFillColor("#E2E8F0")
  doc.rect(690, mainY + 45, 120, 6, "F")
  doc.setFillColor("#1E293B")
  doc.rect(690, mainY + 45, 102, 6, "F") // 85%
  doc.setTextColor("#64748B")
  doc.text("85%", 815, mainY + 50)

  doc.text("NRI", 670, mainY + 65)
  doc.setFillColor("#E2E8F0")
  doc.rect(690, mainY + 60, 120, 6, "F")
  doc.setFillColor("#1E293B")
  doc.rect(690, mainY + 60, 78, 6, "F") // 65%
  doc.text("65%", 815, mainY + 65)

  // ===================== BAR CHARTS =====================
  mainY += 120

  // Chart background
  doc.setFillColor("#FFFFFF")
  doc.rect(220, mainY, 400, 120)

  // Chart labels
  doc.setFillColor("#2563EB")
  doc.circle(230, mainY + 15, 4, "F")
  doc.setFontSize(10)
  doc.setTextColor("#64748B")
  doc.text("Today", 240, mainY + 18)

  doc.setFillColor("#93C5FD")
  doc.circle(280, mainY + 15, 4, "F")
  doc.text("Yesterday", 290, mainY + 18)

  // Y-axis labels
  const yLabels = ["360", "270", "180", "90", "0"]
  let yPos = mainY + 35
  yLabels.forEach((label) => {
    doc.setFontSize(8)
    doc.setTextColor("#94A3B8")
    doc.text(label, 235, yPos)
    yPos += 20
  })

  // Individual bars
  doc.setFontSize(10)
  doc.setTextColor("#64748B")
  doc.text("Individual", 290, mainY + 110)
  doc.setFillColor("#2563EB")
  doc.rect(280, mainY + 35, 30, 65, "F") // Today - 350
  doc.setFillColor("#93C5FD")
  doc.rect(320, mainY + 45, 30, 55, "F") // Yesterday - 280

  // Non Individual bars
  doc.text("Non Individual", 420, mainY + 110)
  doc.setFillColor("#2563EB")
  doc.rect(430, mainY + 40, 30, 60, "F") // Today - 300
  doc.setFillColor("#93C5FD")
  doc.rect(470, mainY + 50, 30, 50, "F") // Yesterday - 250

  // ===================== STATUS CARDS =====================
  mainY += 150
  const statusCards = [
    { label: "KYC Initiated", value: "234", color: "#3B82F6" },
    { label: "Under Process", value: "45", color: "#F59E0B" },
    { label: "Registered", value: "350", color: "#10B981" },
    { label: "Validated", value: "654", color: "#06B6D4" },
    { label: "Hold", value: "269", color: "#8B5CF6" },
    { label: "Docs Pending", value: "100", color: "#EF4444" },
  ]

  let cardX = 220
  statusCards.forEach((card) => {
    doc.setFillColor("#FFFFFF")
    doc.setDrawColor("#E2E8F0")
    doc.rect(cardX, mainY, 95, 70)

    // Icon representation
    doc.setFillColor(card.color)
    doc.circle(cardX + 20, mainY + 20, 8, "F")

    doc.setFontSize(20)
    doc.setTextColor("#1E293B")
    doc.text(card.value, cardX + 15, mainY + 45)

    doc.setFontSize(9)
    doc.setTextColor("#64748B")
    doc.text(card.label, cardX + 5, mainY + 60)

    cardX += 105
  })

  // ===================== SOLICITED & UNSOLICITED =====================
  mainY += 100

  doc.setFillColor("#FFFFFF")
  doc.rect(220, mainY, 600, 180)

  doc.setFontSize(14)
  doc.setTextColor("#1E293B")
  doc.text("Solicited & Unsolicited", 230, mainY + 25)

  // Tab representation
  doc.setFillColor("#F1F5F9")
  doc.rect(230, mainY + 35, 80, 25, "F")
  doc.setFontSize(10)
  doc.setTextColor("#64748B")
  doc.text("Individual", 245, mainY + 50)

  doc.rect(320, mainY + 35, 100, 25, "F")
  doc.text("Non Individual", 330, mainY + 50)

  const chartCenterX = 350
  const chartCenterY = mainY + 120
  const outerRadius = 40
  const innerRadius = 22

  // Create multiple overlapping circles to simulate donut chart segments
  doc.setFillColor("#2563EB") // Blue segment
  doc.circle(chartCenterX, chartCenterY, outerRadius, "F")

  doc.setFillColor("#06B6D4") // Teal segment overlay
  doc.circle(chartCenterX + 15, chartCenterY - 15, outerRadius * 0.8, "F")

  doc.setFillColor("#10B981") // Green segment overlay
  doc.circle(chartCenterX + 15, chartCenterY + 15, outerRadius * 0.6, "F")

  doc.setFillColor("#EF4444") // Red segment overlay
  doc.circle(chartCenterX - 15, chartCenterY + 15, outerRadius * 0.4, "F")

  // Inner white circle for donut effect
  doc.setFillColor("#FFFFFF")
  doc.circle(chartCenterX, chartCenterY, innerRadius, "F")

  // Center value
  doc.setFontSize(14)
  doc.setTextColor("#1E293B")
  doc.text("3,456", chartCenterX - 15, chartCenterY + 5)

  const legendX = 240
  let legendY = mainY + 80
  const legendItems = [
    { label: "No of PANs Solicited", value: "956", color: "#2563EB" },
    { label: "Received", value: "720", color: "#06B6D4" },
    { label: "Consumed", value: "456", color: "#10B981" },
    { label: "Pending", value: "284", color: "#EF4444" },
  ]

  legendItems.forEach((item) => {
    doc.setFillColor(item.color)
    doc.circle(legendX, legendY, 5, "F")
    doc.setFontSize(10)
    doc.setTextColor("#64748B")
    doc.text(item.label, legendX + 15, legendY + 4)
    doc.setFontSize(11)
    doc.setTextColor("#1E293B")
    doc.text(item.value, legendX + 120, legendY + 4)
    legendY += 18
  })

  const statsX = 520

  // No. Of PANs Solicited card
  doc.setFillColor("#FFFFFF")
  doc.setDrawColor("#E2E8F0")
  doc.setLineWidth(1)
  doc.rect(statsX, mainY + 70, 220, 55)

  // Blue indicator circle
  doc.setFillColor("#2563EB")
  doc.circle(statsX + 18, mainY + 88, 5, "F")

  doc.setFontSize(12)
  doc.setTextColor("#64748B")
  doc.text("No. Of PANs Solicited", statsX + 30, mainY + 92)
  doc.setFontSize(20)
  doc.setTextColor("#1E293B")
  doc.text("956", statsX + 18, mainY + 112)
  doc.setFontSize(9)
  doc.setTextColor("#64748B")
  doc.text("400 With KYC", statsX + 18, mainY + 125)
  doc.text("250 With Image", statsX + 100, mainY + 125)
  doc.text("256 Without Image", statsX + 18, mainY + 138)

  // Data Received card
  doc.rect(statsX, mainY + 135, 220, 55)

  // Green indicator circle
  doc.setFillColor("#10B981")
  doc.circle(statsX + 18, mainY + 153, 5, "F")

  doc.setFontSize(12)
  doc.setTextColor("#64748B")
  doc.text("Data Received", statsX + 30, mainY + 157)
  doc.setFontSize(20)
  doc.setTextColor("#1E293B")
  doc.text("320", statsX + 18, mainY + 177)
  doc.setFontSize(9)
  doc.setTextColor("#64748B")
  doc.text("300 With KYC", statsX + 18, mainY + 190)
  doc.text("100 With Image", statsX + 100, mainY + 190)
  doc.text("20 Without Image", statsX + 18, mainY + 203)

  const pdfBuffer = doc.output("arraybuffer")

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="kyc-dashboard-report-${new Date().toISOString().split("T")[0]}.pdf"`,
    },
  })
}
