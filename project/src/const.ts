export const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const enum ApiRoute {
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

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewPostStatus {
  Pristine = 'PRISTINE',
  Posting = 'POSTING',
  Posted = 'POSTED',
  NotPosted = 'NOT_POSTED',
}
