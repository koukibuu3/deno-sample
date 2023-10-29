import { ObserverInterface } from '../observer/ObserverInterface.ts'

export interface SubjectInterface {
  registerObserver(observer: ObserverInterface): void
  removeObserver(observer: ObserverInterface): void
  notifyObservers(): void
}
