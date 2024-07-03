import { CounterSchema } from 'entities/counter'
import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/auth-by-username'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema
  auth?: AuthSchema
}
