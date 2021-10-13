import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function CustomRow(props) {
  const stop = require("../assets/playB.png");
  const run = require("../assets/pauseB.png");

  const [isPlay, setPlay] = useState(stop);
  const [bc, setbc] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  const [sound, setSound] = useState();

  function back() {
    return isPlay === run ? 0 : 2;
  }
  
  function setImg(){
    return isPlay === run ? stop : run;
  }
  
  function handleCLick() {
    return isPlaying ? setIsPlaying(0) : setIsPlaying(1);
  }

  useEffect(() => {
    async function playSound() {
    if(isPlaying){
      try {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
          { uri: props.url },
          { shouldPlay: true }
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
      }
      catch (error) {
        console.log(error);
      }
      
    }
    else{
      try{
        sound.pauseAsync();
        sound.unloadAsync();
        console.log('stopping Sound');
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  playSound();

  }, [isPlaying]);

  const clicked = () => {
    setPlay(setImg());
    setbc(back());
    handleCLick();
  }
  
  return (
    <TouchableOpacity  onPress={clicked} style = {[styles.item, {borderWidth: bc}]}>
        <Image style = {styles.image} source = {isPlay} />
        <Text style = {styles.text}>{props.title}</Text>
      </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
    item : {
      backgroundColor : '#FFF',
      elevation : 5,
      borderRadius : 20,
      margin : 10,
      padding : 10,
      shadowColor : "#000",
      shadowOpacity : 0.3,
      shadowOffset : {
        height : 10,
        width : 0,
      },
      shadowRadius : 10,
      opacity : 0.8,
      flexDirection : 'row',
      alignContent : "center",
      borderColor : "#7BE9A7",
      },
      image : {
        height : 50,
        width : 50,
        margin : 15,
      },
      text : {
        fontSize: 30,
        fontWeight : 'bold',
        justifyContent: "space-between",
        alignContent : 'center',
        margin : 20,
      },    
});
