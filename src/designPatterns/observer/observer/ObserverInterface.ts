export interface ObserverInterface {
  update(temp: number, humidity: number, pressure: number): void
}
