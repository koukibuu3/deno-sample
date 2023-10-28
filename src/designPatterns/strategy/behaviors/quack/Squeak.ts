import { QuackBehavior } from './QuackBehavior.ts'

/**
 * キューキュー鳴く
 */
export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('キューキュー鳴きます。')
  }
}
