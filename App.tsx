import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'overmind-react';
import { overmind } from "./src/overmind/setup"
import Component from './src/component';


export default function App() {
  return (<Provider value={overmind}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor:Colors.lighter }}>
          <Component />
        </ScrollView>
      </SafeAreaView> 
    </Provider> 
  );
}


