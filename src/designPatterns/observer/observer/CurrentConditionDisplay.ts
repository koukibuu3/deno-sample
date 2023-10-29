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

  update(): void {
    this.temp = this.weatherData.getTemp()
    this.humidity = this.weatherData.getHumidity()
    this.display()
  }

  display(): void {
    console.log(
      `現在の気象状況：温度${this.temp}度、湿度${this.humidity}%`,
    )
  }
}
