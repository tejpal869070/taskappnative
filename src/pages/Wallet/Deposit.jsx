import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GetDepositMethod } from "../../controller/UserController";

export default function Deposit() {
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [data, setData] = useState();

  const DepositMethod = async () => {
    try {
      const response = await GetDepositMethod();
      if (response.status === 200) {
        setData(response.data.data[0]);
        setLoading(false);
      } else {
        console.log("went wrong");
      }
    } catch (error) {
      setPageError("error");
    }
  };

  useEffect(() => {
    DepositMethod();
  }, []);

  return (
    <View className="flex bg-gray-100  rounded-lg flex-col justify-center items-center text-center align-center w-[90%] pt-6 m-auto">
      <Text className="font-bold text-xl ">Scan QR Code or pay on UPI id</Text>
      {loading ? (
        <Text className="w-40 h-40 m-auto mt-4"></Text>
      ) : (
        <View className="">
          <Image
            source={{ uri: data.qr_code }}
            className="w-40 h-40 m-auto mt-4"
          />
          <Text className="text-center mt-2 text-lg font-semibold">
            UPI: {data.upi_id}{" "}
          </Text>
        </View>
      )}

      <View
        className="w-[100%] flex   py-4 m-auto  mt-6 rounded-lg "
        style={{ backgroundColor: "blue" }}
      >
        <Text className="text-white text-center  text-xl font-bold">
          Complete your deposit
        </Text>
        <View className="px-4">
          <TextInput
            className="bg-gray-50 border  mt-4 pl-2 w-full border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block   py-0.5"
            placeholder="Transection id"
            required=""
          />

          <View className="w-full  flex flex-row items-center justify-between align-center ">
            <TextInput
              className="bg-gray-50 border  mt-4 pl-2 w-[48%] border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block   py-0.5"
              placeholder="Transection id"
              required=""
            />
            <Text
              title="Upload ScreenShot"
              className="w-[48%]  mt-4 rounded-lg bg-gray-50 text-center py-2 text-black"
            //   onPress={selectImage}
            >
              Uplaod ScreenShot
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              className="text-center py-2 mt-2 rounded-lg font-semibold"
              style={{ backgroundColor: "#00bf63" }}
            >
              Submit Deposit Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
