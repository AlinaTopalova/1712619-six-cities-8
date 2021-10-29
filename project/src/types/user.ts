export type User = {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
  token: string,
 };

export type UserResponse = Omit<User, 'avatarUrl' | 'isPro'> & {
 'avatar_url': string,
 'is_pro': boolean,
};
