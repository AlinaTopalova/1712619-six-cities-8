export type Offer = {
  bedrooms: number,
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    }
  }
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  maxAdults: number,
  price: number,
  goods: string[],
  host: {
    id: number,
    name: string,
    isPro: boolean,
    avatarUrl: string,
  }
  description: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  }
  id: number
};

export type OfferResponse = Omit<
  Offer,
  | 'host'
  | 'isFavorite'
  | 'isPremium'
  | 'previewImage'
  | 'maxAdults'
> & {
  host: {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string,
  },
  'is_favorite': boolean,
  'is_premium': boolean,
  'max_adults': number,
  'preview_image': string,
}
