import { CurrentConditionDisplay } from './observer/CurrentConditionDisplay.ts'
import { WeatherData } from './subject/WeatherData.ts'

class main {
  static run(): void {
    console.log('--- Observer Pattern ---')
    const weatherData: WeatherData = new WeatherData()

    const currentConditionDisplay = new CurrentConditionDisplay(weatherData)
    // const staticsDisplay = new StaticsDisplay(weatherData)
    // const forecastDisplay = new ForecastDisplay(weatherData)

    weatherData.setMeasurements(30, 65, 30.4)
    weatherData.setMeasurements(32, 70, 29.2)
    weatherData.setMeasurements(28, 90, 29.2)

    weatherData.removeObserver(currentConditionDisplay) // 登録解除したためこれ移行通知しても表示されない
    weatherData.setMeasurements(30, 65, 30.4)
  }
}

main.run()
