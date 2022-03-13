import React from 'react';
import {Text} from 'react-native';
import { VStack, HStack } from "react-native-flex-layout";


function Box() {
  return <Text>X</Text>
}

// <VStack /> <View style = {{flex: 1, flexDirection:"colum"}}

function App() {
  return (
    <VStack fill center>
      <HStack>
        <Box />
        <Box />
        <Box />
      </HStack>
      <HStack>
        <Box />
        <Box />
        <Box />
      </HStack>
      <HStack>
        <Box />
        <Box />
        <Box />
      </HStack>
    </VStack>
  )
}

export default App;