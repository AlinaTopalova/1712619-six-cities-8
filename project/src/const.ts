const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

const enum ApiRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  LogIn = '/login',
  LogOut  = '/logout',
  FavoritesOffers = '/favorite',
}

enum SortOptions {
  Popular = 'Popular',
  PriceLowToHigh= 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum ReviewPostStatus {
  Pristine = 'PRISTINE',
  Posting = 'POSTING',
  Posted = 'POSTED',
  NotPosted = 'NOT_POSTED',
}

export {
  AppRoute,
  ApiRoute,
  SortOptions,
  Cities,
  AuthStatus,
  ReviewPostStatus
};
