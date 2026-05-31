export type DemoUser = {
  username: string
  password: string
  displayName: string
}

export const demoUsers: DemoUser[] = [
  { username: 'rok', password: 'rok', displayName: 'Rok' },
  { username: 'pyell', password: 'pyell', displayName: 'Pyell' },
  { username: 'uporabnik1', password: 'uporabnik1', displayName: 'Uporabnik 1' },
]

export const AUTH_STORAGE_KEY = 'matura-auth-current-user'

export const getUserProgressKey = (username: string) =>
  `matura-progress-v1:${username}`
