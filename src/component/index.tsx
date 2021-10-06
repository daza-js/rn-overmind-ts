import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useOvermind } from '../overmind'

const Component = () => {
    const {state, actions} = useOvermind()
    
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 25, textAlign:"center"}}>Mi primera app con Overmind y TS</Text> 
          <View style={styles.containerCounter}>
            <Button title="-" onPress={() => actions.decrement(1)} />
            <Text style={{ fontSize: 26 }}>{state.counter.toString()}</Text>
            <Button title="+" onPress={() => actions.increment(1)} />
          </View>
        </View> 
    )
}

export default Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  containerCounter: {
    marginTop:50, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  },
});