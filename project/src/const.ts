export const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  LogIn = '/login',
  LogOut  = '/logout',
}

export enum SortOptions {
  Popular = 'Popular',
  PriceLowToHigh= 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewPostStatus {
  Initial = 'INITIAL',
  Loading = 'LOADING',
  Success = 'SUCCES',
  Error = 'ERROR',
}
