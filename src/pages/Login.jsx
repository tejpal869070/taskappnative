import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { userLogin } from "../controller/UserController";
import * as SecureStore from "expo-secure-store";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    if (password && mobile) {
      setFormError("");
      const userData = {
        password: password,
        mobile: mobile,
      };
      const response = await userLogin(userData);
      if (response.status === 200) {
        SecureStore.setItem("token", response.data.token);
        SecureStore.setItem("mobile", response.data.mobile);
        
        navigation.navigate("Dashboard");
      } else {
        setFormError(response.response.data.message);
      }
    } else {
      setFormError("Please fill in all fields");
    }
    setIsLoading(false);
  };

  return (
    <ScrollView>
      <View className=" gap-4 flex flex-col justify-center items-center h-screen  ">
        <Text className="font-bold text-5xl "> TASK APP</Text>
        <Text className="text-[red]"> {formError} </Text>
        <TextInput
          placeholder="Mobile"
          className="w-3/4 bg-[red] border-2 pl-2 rounded-lg text-black"
          value={mobile}
          onChangeText={setMobile}
        />
        <TextInput
          placeholder="Password"
          className="w-3/4 bg-[red] border-2 pl-2 rounded-lg text-black"
          value={password}
          onChangeText={setPassword}
        />
        <Text
          className="w-3/4 bg-black text-white text-center py-2 rounded-sm "
          onPress={handleLogin}
        >
          {" "}
          {isLoading ? "Loading..." : "Login"}{" "}
        </Text>
        <Text
          title="go to register"
          onPress={() => navigation.navigate("Register")}
        >
          SignUp
        </Text>
      </View>
    </ScrollView>
  );
}
