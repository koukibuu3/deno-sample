import { ObserverInterface } from '../observer/ObserverInterface.ts'
import { SubjectInterface } from './SubjectInterface.ts'

export class WeatherData implements SubjectInterface {
  private observers: ObserverInterface[]
  private temp = 0
  private humidity = 0
  private pressure = 0

  constructor() {
    this.observers = []
  }

  registerObserver(observer: ObserverInterface): void {
    this.observers.push(observer)
  }

  removeObserver(observer: ObserverInterface): void {
    const index = this.observers.findIndex((o) => o === observer)
    index >= 0 && this.observers.splice(index, 1)
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update()
    })
  }

  measurementsChanged(): void {
    this.notifyObservers()
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temp = temp
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }

  getTemp(): number {
    return this.temp
  }

  getHumidity(): number {
    return this.humidity
  }
}
