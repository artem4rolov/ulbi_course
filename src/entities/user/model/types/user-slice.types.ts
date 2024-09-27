export interface User {
  id: string
  name: string
  avatar?: string
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
