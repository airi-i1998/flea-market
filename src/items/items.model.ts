export interface Item {
  id: string,
  name: string,
  price: number,
  description?: string,
  // ユニオン型
  state: 'ON_SALE' | 'SOLD_OUT'
}