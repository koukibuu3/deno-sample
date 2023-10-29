import { FlyNoWay } from '../behaviors/fly/FlyNoWay.ts'
import { Squeak } from '../behaviors/quack/Squeak.ts'
import { AbstractDuck } from './AbstractDuck.ts'

/**
 * ゴム製のアヒル
 */
export class RubberDuck extends AbstractDuck {
  constructor() {
    super()

    this.flyBehavior = new FlyNoWay()
    this.quackBehavior = new Squeak()
  }

  public display(): void {
    console.log('ゴム製のアヒルです。')
  }
}
