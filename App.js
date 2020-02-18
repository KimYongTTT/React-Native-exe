import React from "react";
import Loading from "./loader";
import * as Location from "expo-location";
import {Alert, TouchableHighlightBase} from "react-native";
import axios from "axios";
import Weather from "./Weather";
import { Ionicons } from "@expo/vector-icons";


const API_KEY = "baf7b0a43839fa4549794c8b1c038ee7";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main:{ temp },
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    //console.log(data);
    this.setState({
      isLoading: false,
      condition: weather[0].main, 
      temp
    });

  };
  
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      //console.log(response);
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
      
    }catch(error){
      Alert.alert("can't find you", "So sad");
    } 
      
  };
  
  componentDidMount(){
    this.getLocation();
  }
  
  render(){
    console.log("fuck");
    
    const {isLoading, condition ,temp} = this.state;
    console.log(isLoading, condition, temp);
    return isLoading ?  <Loading/> : <Weather temp={Math.round(temp)} condition={condition} /> ;
  };
}

