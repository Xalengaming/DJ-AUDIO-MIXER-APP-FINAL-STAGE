import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
  render(){
    return(
      <view>
        <TouchableOpacity
          style={styles.button1}
          onPress={this.playSound}>
          <Text
            style={styles.text1}>
            Sound 1
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={styles.button2}
          onPress={this.playSound}>
          <Text
            style={styles.text2}>
            Sound 2
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={styles.button3}
          onPress={this.playSound}>
          <Text
            style={styles.text3}>
            Sound 3
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={styles.button4}
          onPress={this.playSound}>
          <Text
            style={styles.text4}>
            Sound 4
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={styles.button5}>
          <Text
            style={styles.text5}>
            Stop Sound
          </Text>
        </TouchableOpacity>
        <br></br>
      </view>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <SoundButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1:{
    backgroundColor: 'red',
    marginLeft: 125,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text1:{
     fontWeight: 'bold',
     fontSize: 18,
  },

  button2:{
    backgroundColor: 'grey',
    marginLeft: 125,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text2:{
    fontWeight: 'bold',
    fontSize: 18,
  },

  button3:{
    backgroundColor: 'blue',
    marginLeft: 125,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text3:{
    fontWeight: 'bold',
    fontSize: 18,
  },

  button4:{
    backgroundColor: 'green',
    marginLeft: 125,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text4:{
    fontWeight: 'bold',
    fontSize: 18,
  },

  button5:{
    backgroundColor: 'yellow',
    marginLeft: 125,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 50,
    borderRadius: 50,
  },

  text5:{
    fontWeight: 'bold',
    fontSize: 18,
  }
});