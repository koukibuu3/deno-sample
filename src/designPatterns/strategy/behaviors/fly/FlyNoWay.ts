import { FlyBehavior } from './FlyBehavior.ts'

/**
 * 飛ばない
 */
export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log('飛びません。')
  }
}
