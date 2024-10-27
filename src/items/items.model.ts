export interface Item {
  id: string,
  name: string,
  price: number,
  description?: string,
  // ユニオン型
  status: 'ON_SALE' | 'SOLD_OUT'
}