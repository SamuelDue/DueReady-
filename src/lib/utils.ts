import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatReward(type: string, value: number) {
  switch (type) {
    case 'EQUITY':
      return `${value}% equity`
    case 'REV_SHARE':
      return `${value}% revenue share`
    case 'FLAT_FEE':
      return formatCurrency(value)
    default:
      return 'TBD'
  }
} 