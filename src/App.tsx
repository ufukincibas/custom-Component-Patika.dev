import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity ,  } from 'react-native';
import Card from './components/Card/Card'
import styles from './components/Card/card_styles'
function App() {
  return (
    <SafeAreaView style={styles.container} >
     <Card title="ilhami" text="Abi sen söyle , ben başka bir ilde miyim?"/>
      <Card title="Yılmaz" text="Benim zevklerim sizin nezdinizde makul bir zemine oturmak zorunda değil."/>
      <Card title="İlkkan" text="Yahşı günde yar yahşı , Yaman günde yetiş gardaş"/>
      <Card title="phoebe" text="MY EYES! MY EYES!"/>
      
    </SafeAreaView>

  );
}


export default App;