import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import { AuthStackType } from '../types/NavigationTypes';

const Auth = createNativeStackNavigator<AuthStackType>();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: '',
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthNavigator;
