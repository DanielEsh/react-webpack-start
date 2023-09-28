export enum AppRouterNames {
  home = 'home',
  notFound = 'notFound',
}

enum Paths {
  home = '/',
  notFound = '*',
}

export const AppRouterPaths: Record<AppRouterNames, string> = {
  [AppRouterNames.home]: Paths.home,
  [AppRouterNames.notFound]: Paths.notFound,
}
