import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


function notification() {
  return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
       <Text>
           notification 
       </Text>
   </View>
  );
}

export default notification;