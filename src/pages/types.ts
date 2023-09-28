export enum AppRouterNames {
  home = 'home',
  categories = 'categories',
  brands = 'brands',
  attributes = 'attributes',
  products = 'products',
  notFound = 'notFound',
}

export const AppRouterPaths: Record<AppRouterNames, string> = {
  [AppRouterNames.home]: '/',
  [AppRouterNames.categories]: 'categories',
  [AppRouterNames.brands]: 'brands',
  [AppRouterNames.attributes]: 'attributes',
  [AppRouterNames.products]: 'products',
  [AppRouterNames.notFound]: '*',
}
