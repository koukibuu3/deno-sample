import { FlyBehavior } from '../behaviors/fly/FlyBehavior.ts'
import { QuackBehavior } from '../behaviors/quack/QuackBehavior.ts'

/**
 * 鴨の抽象クラス
 */
export abstract class AbstractDuck {
  // 継承先のクラスで振る舞いの実装を注入するためここではオプショナルで定義するしかない
  protected flyBehavior?: FlyBehavior
  protected quackBehavior?: QuackBehavior

  public abstract display(): void

  public performFly(): void {
    this.flyBehavior?.fly()
  }

  public performQuack(): void {
    this.quackBehavior?.quack()
  }

  public swim(): void {
    console.log('泳ぎます。というか浮かびます。')
  }
}
