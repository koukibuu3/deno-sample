import { MallardDuck } from './models/MallardDuck.ts'
import { RubberDuck } from './models/RubberDuck.ts'

class main {
  public static run(): void {
    console.log('--- Strategy Pattern ---')

    const mallardDuck = new MallardDuck()
    mallardDuck.display()
    mallardDuck.performFly()
    mallardDuck.performQuack()
    mallardDuck.swim()

    const rubberDuck = new RubberDuck()
    rubberDuck.display()
    rubberDuck.performFly()
    rubberDuck.performQuack()
    rubberDuck.swim()
  }
}

main.run()
