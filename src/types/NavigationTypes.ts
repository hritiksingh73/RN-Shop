import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackType = {
  Home: HomeStackType;
  Cart: CartStackType;
  User: undefined;
};

export type CartStackType = {
  CartScreen: undefined;
  ProductDetails: {};
};

export type HomeStackType = {
  HomeScreen: undefined;
  Product: { catID: string };
  ProductDetails: { productID: string };
  CartScreen: undefined;
};

export type AuthStackType = {
  Login: undefined;
  SignUp: undefined;
};

export type HomeStackNavigationProps = NativeStackNavigationProp<HomeStackType>;

export type AuthStackNavigatorProps = NativeStackNavigationProp<AuthStackType>;
