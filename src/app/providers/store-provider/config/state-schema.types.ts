import { CounterSchema, UserSchema } from "entities";

export interface StoreSchema {
    counter: CounterSchema
    user: UserSchema
}