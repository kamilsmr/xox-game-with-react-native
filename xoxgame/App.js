import { useState } from 'react';
import React from 'react';
import {Text, TouchableOpacity, Button} from 'react-native';
import { VStack, HStack, Flex} from "react-native-flex-layout";


function Box({ value, onPress, disabled, highlighted}) {
  return (
    
    <TouchableOpacity onPress = {onPress}>
      <Flex w={24} h={24} center style={{ backgroundColor: highlighted ? "lightgreen" : "lightgray"}}>
      <Text style={{ fontSize: 20 }}>{ value }</Text>
      </Flex>
    </TouchableOpacity>
    
  )
}

// <VStack /> <View style = {{flex: 1, flexDirection:"colum"}}

function App() {

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [BeforeUnloadEvent, setBoard] = useState(Array(9).fill(null));

  const [highlighted, setHighlighted] = useState([]);

  const [winner, setWinner] =useState(null);

  const handlePress = (index)=> {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(prev => prev === "X" ? "0" : "X")



  }

  const getBox = (index) => (
    <Box 
      value={board[index]}
      onPress={() => handlePress(index)}
      highlighted={highlighted.includes(index)}
      disabled = {winner || board[index] }
    />
  )




  return (
    <VStack fill center spacing ={2}>={{}}
      <Text style style={{fontSize:36}}>{currentPlayer} to Play</Text>
      <HStack spacing={2} shouldWrapChildren>
        {getBox(0)}
        {getBox(1)}
        {getBox(2)}
      </HStack>
      <HStack spacing={2} shouldWrapChildren>
        {getBox(3)}
        {getBox(4)}
        {getBox(5)}
      </HStack>
      <HStack spacing={2} shouldWrapChildren>
        {getBox(6)}
        {getBox(7)}
        {getBox(8)}
      </HStack>
      <Button title="Reset" />
    </VStack>
  )
}

export default App;