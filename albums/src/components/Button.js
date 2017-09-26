import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
 const { buttonStyle, textStyle } = styles;
  return (

  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
     {children}
    </Text>
  </TouchableOpacity>
  );
};
  const styles = {

 textStyle: {
    alignSelf: 'center',
    Color: '#007aff',
    fontSize: 16,
    fontWeiht: 600,
    paddingTop: 10,
    paddingBottom: 10
    },
 buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      borderRadius: 5,
      borderWidth: 1,
      backgroundColor: '#fff',
      marginLeft: 5,
      marginRight: 5,
      borderColor: '#007aff'
      }
    };

export default Button;
