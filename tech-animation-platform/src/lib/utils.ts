import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generatePDF() {
  // PDF generation logic using jsPDF and html2canvas
  return new Promise<void>((resolve) => {
    // Implementation will be added
    resolve()
  })
}