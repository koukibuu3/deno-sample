import { QuackBehavior } from './QuackBehavior.ts'

/**
 * ガーガー鳴く
 */
export class Quack implements QuackBehavior {
  quack() {
    console.log('ガーガー鳴きます。')
  }
}
