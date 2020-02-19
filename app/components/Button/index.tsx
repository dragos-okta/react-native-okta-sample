import React from 'react';
import { Text, View, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const ButtonClass = props => {
  const { onPress, btnstyle, btnTitle } = props;
  return (
    <View style={{ margin: 5 }}>
      <Button
        onPress={onPress}
        style={btnstyle === 'solid' ? buttonStyles.solidButton : buttonStyles.borderedButton}
      >
        <Text uppercase={false}>{btnTitle}</Text>
      </Button>
    </View>
  );
};

export default ButtonClass;

const buttonStyles = StyleSheet.create({
  solidButton: {
    backgroundColor: colors.$DFS_red,
    borderRadius: 3,
    borderColor: colors.$DFS_red,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    height: 40,
    color: colors.$white3,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: fonts.$fontFamilyMedium,
    paddingVertical: 5,
  },
  borderedButton: {
    backgroundColor: colors.$white3,
    borderRadius: 3,
    borderColor: colors.$DFS_red,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    height: 40,
    color: colors.$DFS_red,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: fonts.$fontFamilyMedium,
    paddingVertical: 5,
  },
});
