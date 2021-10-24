export type OfferReview = {
  id: number,
  user: {
    id: number,
    isPro: boolean,
    name: string,
    avatarUrl: string,
  },
  rating: number,
  comment: string,
  date: string,
};

export type OfferReviewResponse = Omit<OfferReview, 'user'>
& {
  user: {
    'id': number,
    'is_pro': boolean,
    'name': string,
    'avatar_url': string,
  }
}
