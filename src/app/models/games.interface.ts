export interface Game {
  id: number,
  title?: string,
  image: string,
  tags: string[],
  createdBy?: string,
  price?: number
}
