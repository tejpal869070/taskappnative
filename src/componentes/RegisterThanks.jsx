import React from 'react'
import { Button, Image, Text, View } from 'react-native'

export default function RegisterThanks({ navigation }) {
  return (
    <View className="flex flex-col justify-center items-center h-screen bg-white">
        <Image source={require("../../assets/img2.jpg")} className="w-40  h-40"/>
        <Text className="mb-10">Thanks for register with us</Text>
        <Button title='Login Now' className="mt-6" onPress={()=>navigation.navigate("Login")}>Login Now !</Button>
    </View>
  )
}
