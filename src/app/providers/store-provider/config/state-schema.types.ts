import { CounterSchema } from 'entities/counter'
import { UserSchema } from 'entities/user'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema
}
