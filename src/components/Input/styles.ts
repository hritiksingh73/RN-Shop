import colors from '@src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    borderColor: colors.grey,
    paddingLeft: 10,
    color: colors.textColor,
  },
  errorText: {
    paddingLeft: 5,
    paddingTop: 5,
    color: 'red',
  },
  iconStyle: {
    position: 'absolute',
    right: 13,
    top: 13,
  },
});

export default styles;
