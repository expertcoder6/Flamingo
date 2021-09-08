import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


function profile() {
  return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
       <Text>
           user Screen
       </Text>
   </View>
  );
}

export default profile;