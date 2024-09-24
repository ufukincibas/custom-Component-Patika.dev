import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Alert } from 'react-native';
import styles from './card_styles'


function Card(props) {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.person}>{props.title}</Text>
          <Text style={styles.toSay}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.button_container} onPress={() => Alert.alert("you liked " + props.title + "'s post")}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>);}

      export default Card;