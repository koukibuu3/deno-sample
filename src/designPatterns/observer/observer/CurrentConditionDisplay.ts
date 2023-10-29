import { ObserverInterface } from '../observer/ObserverInterface.ts'
import { WeatherData } from '../subject/WeatherData.ts'
import { DisplayElementInterface } from './DisplayElementInterface.ts'

export class CurrentConditionDisplay
  implements ObserverInterface, DisplayElementInterface {
  weatherData: WeatherData
  temp = 0
  humidity = 0

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    this.weatherData.registerObserver(this)
  }

  update(temp: number, humidity: number, _pressure: number): void {
    this.temp = temp
    this.humidity = humidity
    this.display()
  }

  display(): void {
    console.log(
      `現在の気象状況：温度${this.temp}度、湿度${this.humidity}%`,
    )
  }
}
