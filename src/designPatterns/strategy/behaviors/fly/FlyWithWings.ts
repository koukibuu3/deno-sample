import { FlyBehavior } from './FlyBehavior.ts'

/**
 * 翼で飛ぶ
 */
export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log('翼で飛びます。')
  }
}
