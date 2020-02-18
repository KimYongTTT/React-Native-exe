import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOption = {
    Haze: {
        iconName: "weather-hail",
        gradient: ['#f79d00','#64f38c'],
        title: "hail as fuck" ,
        subtitle: "haha"

    },
    sunny: {
        iconName: "ios-sunny",
        gradient: ['#fceabb','#f8b500'],
        title: "",
        subtitle: ""
    },
    Thunderstorm: {
        iconName: "ios-thunderstorm",
        gradient: ['#000000','#434343'],
        title: "",
        subtitle: ""
    },
    Clear: {
        iconName: "ios-star",
        gradient: ['#00d2ff','#928DAB'],
        title: "clear as -------------",
        subtitle: "feeling good these days"
    }
};


export default function Weather({temp, condition}){
    console.log("weather~~");
    
    return (
    
    <LinearGradient style={styles.container} colors={weatherOption[condition].gradient}>
        
        <View style={styles.halfContainer}>
            <Ionicons size={100} name={weatherOption[condition].iconName} color="white" />
            <Text style={styles.temp}> {condition} </Text>
            <Text style={styles.temp}> {temp}o </Text>
        </View>
        <View style={styles.halfContainer}>
            <View style={styles.textContainer}>
    <Text style={styles.title}>{weatherOption[condition].title}</Text>
    <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
            </View>
        </View>
    </LinearGradient>
        
        
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm" , 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired
};

const styles = StyleSheet.create({
   container:{
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
   } ,
   temp: {
        fontSize: 36,
        color: "white"
   },

   halfContainer:{
       flex:1,
       justifyContent:"center",
       alignItems:"center"
   },
   title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300"
   },
   subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
   },
   textContainer: {
       paddingHorizontal: 20,
       alignItems: "flex-start"
   }
});