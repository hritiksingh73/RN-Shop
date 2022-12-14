import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '@src/constants/colors';
import { HomeStackNavigationProps } from '@src/types/NavigationTypes';
// Todo:- Implement Search Functionality better
const HomeHeader = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigation = useNavigation<HomeStackNavigationProps>();

  const handleChange = (newText: React.SetStateAction<string>) => {
    setSearchTerm(newText);
  };

  const submitHandler = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="search rnshop.com "
        placeholderTextColor={colors.grey}
        style={styles.input}
        autoCapitalize="none"
        value={searchTerm}
        onChangeText={handleChange}
        // onFocus={() => navigation.navigate('Search')}
      />
      <Pressable style={styles.iconContainer} onPress={submitHandler}>
        <Icon name="search1" size={30} />
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.secondary,
    height: 120,
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    // color: 'black',
    height: 40,
    width: '80%',
    padding: 5,
    marginHorizontal: 10,
  },
  iconContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});

export default HomeHeader;
