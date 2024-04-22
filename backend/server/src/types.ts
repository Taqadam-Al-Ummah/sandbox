// DB Types

export type User = {
  id: string
  name: string
  email: string
  sandbox: Sandbox[]
}

export type Sandbox = {
  id: string
  name: string
  type: "react" | "node"
  init: boolean
  bucket: string | null
  userId: string
}
