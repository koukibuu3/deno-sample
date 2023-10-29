import { AbstractDuck } from './AbstractDuck.ts'
import { FlyWithWings } from '../behaviors/fly/FlyWithWings.ts'
import { Quack } from '../behaviors/quack/Quack.ts'

/**
 * 真鴨
 */
export class MallardDuck extends AbstractDuck {
  constructor() {
    super()

    this.flyBehavior = new FlyWithWings()
    this.quackBehavior = new Quack()
  }

  public display(): void {
    console.log('真鴨です。')
  }
}
