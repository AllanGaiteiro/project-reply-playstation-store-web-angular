export interface Game {
  id: number,
  title?: string,
  image: string,
  backgroundImage?: string,
  tags: string[],
  createdBy?: string,
  price?: number
}
