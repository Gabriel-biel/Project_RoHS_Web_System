
interface Reposts {
  expiration_date: Date
} // pdf

interface Documents {
  fispq: string // pdf
  reports: Reposts
}

interface Subparts {
  name: string
  date: Date
  documents: Array<Documents>
}

interface Product {
  code: string // xxxxcx2343
  description: string
  subparts: Subparts
  gwi11a1: string // excel
  fispq: string // pdf
}

interface Send {
  product_code: string
  submit_date: string
  status: 'approved' | 'waiting' | 'reproved' // 'waiting'
  comment?: string
}
