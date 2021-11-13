import { AuthStatus, Cities, ReviewPostStatus, SortOptions } from 'const';

const fakeOffers = [
  {
    city: {
      name: Cities.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: 'https://8.react.pages.academy/static/hotel/2.jpg',
    images: [
      'https://8.react.pages.academy/static/hotel/1.jpg',
      'https://8.react.pages.academy/static/hotel/2.jpg',
    ],
    title: 'The Pondhouse - A Magical Place',
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: 'house',
    bedrooms: 4,
    maxAdults: 6,
    price: 713,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
      'Air conditioning',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16,
    },
    id: 1,
  },
];

const fakeFavoritesOffersFromServer = [
  {
    city: {
      name: Cities.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    'preview_image': 'https://8.react.pages.academy/static/hotel/2.jpg',
    images: [
      'https://8.react.pages.academy/static/hotel/1.jpg',
      'https://8.react.pages.academy/static/hotel/2.jpg',
      'https://8.react.pages.academy/static/hotel/16.jpg',
    ],
    title: 'The Pondhouse - A Magical Place',
    'is_favorite': true,
    'is_premium': false,
    rating: 2.8,
    type: 'house',
    bedrooms: 4,
    'max_adults': 6,
    price: 713,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
      'Air conditioning',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      'is_pro': true,
      'avatar_url': 'img/avatar-angelina.jpg',
    },
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16,
    },
    id: 1,
  },
];

const fakeFavoritesOffers = [
  {
    city: {
      name: Cities.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: 'https://8.react.pages.academy/static/hotel/2.jpg',
    images: [
      'https://8.react.pages.academy/static/hotel/1.jpg',
      'https://8.react.pages.academy/static/hotel/2.jpg',
      'https://8.react.pages.academy/static/hotel/16.jpg',
    ],
    title: 'The Pondhouse - A Magical Place',
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    type: 'house',
    bedrooms: 4,
    maxAdults: 6,
    price: 713,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
      'Air conditioning',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16,
    },
    id: 1,
  },
];

const fakeFavoritesOffer = {
  city: {
    name: Cities.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  previewImage: 'https://8.react.pages.academy/static/hotel/2.jpg',
  images: [
    'https://8.react.pages.academy/static/hotel/1.jpg',
    'https://8.react.pages.academy/static/hotel/2.jpg',
    'https://8.react.pages.academy/static/hotel/16.jpg',
  ],
  title: 'The Pondhouse - A Magical Place',
  isFavorite: true,
  isPremium: false,
  rating: 2.8,
  type: 'house',
  bedrooms: 4,
  maxAdults: 6,
  price: 713,
  goods: [
    'Washer',
    'Laptop friendly workspace',
    'Breakfast',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  location: {
    latitude: 50.854557,
    longitude: 4.364697,
    zoom: 16,
  },
  id: 1,
};

const fakeOfferFromServer = {
  city: {
    name: Cities.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  'preview_image': 'https://8.react.pages.academy/static/hotel/2.jpg',
  images: [
    'https://8.react.pages.academy/static/hotel/1.jpg',
    'https://8.react.pages.academy/static/hotel/2.jpg',
    'https://8.react.pages.academy/static/hotel/16.jpg',
  ],
  title: 'The Pondhouse - A Magical Place',
  'is_favorite': false,
  'is_premium': false,
  rating: 2.8,
  type: 'house',
  bedrooms: 4,
  'max_adults': 6,
  price: 713,
  goods: [
    'Washer',
    'Laptop friendly workspace',
    'Breakfast',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    'is_pro': true,
    'avatar_url': 'img/avatar-angelina.jpg',
  },
  description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  location: {
    latitude: 50.854557,
    longitude: 4.364697,
    zoom: 16,
  },
  id: 1,
};

const fakeOffer = {
  city: {
    name: Cities.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  previewImage: 'https://8.react.pages.academy/static/hotel/2.jpg',
  images: [
    'https://8.react.pages.academy/static/hotel/1.jpg',
    'https://8.react.pages.academy/static/hotel/2.jpg',
    'https://8.react.pages.academy/static/hotel/16.jpg',
  ],
  title: 'The Pondhouse - A Magical Place',
  isFavorite: false,
  isPremium: false,
  rating: 2.8,
  type: 'house',
  bedrooms: 4,
  maxAdults: 6,
  price: 713,
  goods: [
    'Washer',
    'Laptop friendly workspace',
    'Breakfast',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  location: {
    latitude: 50.854557,
    longitude: 4.364697,
    zoom: 16,
  },
  id: 1,
};

const fakeOffersFromServer = [
  {
    city: {
      name: Cities.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    'preview_image': 'https://8.react.pages.academy/static/hotel/2.jpg',
    images: [
      'https://8.react.pages.academy/static/hotel/1.jpg',
      'https://8.react.pages.academy/static/hotel/2.jpg',
    ],
    title: 'The Pondhouse - A Magical Place',
    'is_favorite': false,
    'is_premium': false,
    rating: 2.8,
    type: 'house',
    bedrooms: 4,
    'max_adults': 6,
    price: 713,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
      'Air conditioning',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      'is_pro': true,
      'avatar_url': 'img/avatar-angelina.jpg',
    },
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16,
    },
    id: 1,
  },
];

const fakeUserFromServer = {
  'avatar_url': 'img/avatar-angelina.jpg',
  email: 'dkdkk@mail.ru',
  id: 1,
  'is_pro': false,
  name: 'Alina',
  token: 'secret',
};

const fakeUserAdapt = {
  avatarUrl: 'img/avatar-angelina.jpg',
  email: 'dkdkk@mail.ru',
  id: 1,
  isPro: false,
  name: 'Alina',
  token: 'secret',
};

const fakeReview = {
  id: 2,
  user: {
    id: 9,
    isPro: true,
    name: 'Sara',
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  rating: 4,
  comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
  date: '2021-10-27T07:58:01.571Z',
};

const fakeReviewsFromServer = [
  {
    id: 1,
    user: {
      id: 9,
      'is_pro': true,
      name: 'Sara',
      'avatar_url': 'img/avatar-angelina.jpg',
    },
    rating: 4,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2021-10-27T07:58:01.571Z',
  },
];

const fakeReviews = [
  {
    id: 1,
    user: {
      id: 9,
      isPro: true,
      name: 'Sara',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    rating: 4,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2021-10-27T07:58:01.571Z',
  },
];

const storeAuth = {
  AUTH: {
    authStatus: AuthStatus.Auth,
    user: fakeUserAdapt,
  },
  OFFERS: {
    offers: [fakeFavoritesOffer, fakeOffer],
    isOffersLoadingStart: false,
    isOffersLoadingComplete: true,
  },
  APP: {
    currentCity: Cities.Paris,
    currentSortOption: SortOptions.Popular,
  },
  OFFER: {
    currentOffer : fakeOffer,
    isCurrentOfferLoading: false,
    isCurrentOfferLoadingError: false,

  },
  REVIEWS: {
    reviews: fakeReviews,
    isReviewsLoading: false,
    reviewPostStatus : ReviewPostStatus.Pristine,
  },
  NEARBY_OFFERS: {
    nearbyOffers: fakeOffers,
    isNearbyOffersLoading: false,
  },
  FAVORITES_OFFERS: {
    favoritesOffers: fakeFavoritesOffers,
    isFavoriteOffersLoading: false,
  },
};

const storeNoAuth = {
  AUTH: {
    authStatus: AuthStatus.NoAuth,
    user: null,
  },
  OFFERS: {
    offers: fakeOffers,
    isOffersLoadingStart: false,
    isOffersLoadingComplete: true,
  },
  APP: {
    currentCity: Cities.Paris,
    currentSortOption: SortOptions.Popular,
  },
  OFFER: {
    currentOffer : fakeOffer,
    isCurrentOfferLoading: false,
    isCurrentOfferLoadingError: false,

  },
  REVIEWS: {
    reviews: fakeReviews,
    isReviewsLoading: false,
    reviewPostStatus : ReviewPostStatus.Pristine,
  },
  NEARBY_OFFERS: {
    nearbyOffers: fakeOffers,
    isNearbyOffersLoading: false,
  },
  FAVORITES_OFFERS: {
    favoritesOffers: fakeFavoritesOffers,
    isFavoriteOffersLoading: false,
  },
};

export {
  fakeOffers,
  fakeOffersFromServer,
  fakeFavoritesOffersFromServer,
  fakeFavoritesOffers,
  fakeOfferFromServer,
  fakeOffer,
  fakeFavoritesOffer,
  fakeUserFromServer,
  fakeUserAdapt,
  fakeReview,
  fakeReviewsFromServer,
  fakeReviews,
  storeAuth,
  storeNoAuth
};
