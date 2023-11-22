export enum AppRouterNames {
  home = 'home',
  categories = 'categories',
  brands = 'brands',
  attributes = 'attributes',
  products = 'products',
  warehouses = 'warehouses',
  orders = 'orders',
  staff = 'staff',
  notFound = 'notFound',
}

export const AppRouterPaths: Record<AppRouterNames, string> = {
  [AppRouterNames.home]: '/',
  [AppRouterNames.categories]: 'categories',
  [AppRouterNames.brands]: 'brands',
  [AppRouterNames.attributes]: 'attributes',
  [AppRouterNames.products]: 'products',
  [AppRouterNames.warehouses]: 'warehouses',
  [AppRouterNames.orders]: 'orders',
  [AppRouterNames.staff]: 'staff',
  [AppRouterNames.notFound]: '*',
}
