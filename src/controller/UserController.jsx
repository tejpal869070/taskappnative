import axios from "axios";
import { api } from "../config/api";
import * as SecureStore from "expo-secure-store";
var mobile = SecureStore.getItem("mobile");
var token = SecureStore.getItem("token");

export const userLogin = async (formData) => {
  const postData = {
    mobile: formData.mobile,
    password: formData.password,
  };

  try {
    const response = await axios.post(`${api.API_URL}user/login`, postData);
    console.log(response)
    return response;
  } catch (error) {
    return error;
  }
};

export const GetDepositMethod = async (formData) => {
  const postData = {
    mobile: mobile,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${api.API_URL}user/get-pay-method`,
    postData,
    axiosConfig
  );
  return response;
};

export const GetUserDetails = async () => {
  const postData = {
    mobile: mobile,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${api.API_URL}user/user-details`,
    postData,
    axiosConfig
  );
  return response;
};

export const WithdrawRequest = async (amount) => {
  const postData = {
    mobile: mobile,
    amount: amount,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${api.API_URL}user/add-withdrawal-request`,
    postData,
    axiosConfig
  );

  return response;
};

export const GetUserPaymentHistory = async () => {
  const postData = {
    mobile: mobile,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${api.API_URL}user/get-deposit-request`,
    postData,
    axiosConfig
  );

  return response;
};

export const CancelWithdrawalRequest = async (formData) => {
  const postData = {
    mobile: mobile,
    id: formData.id,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${api.API_URL}user/decline-withdrawal-request`,
    postData,
    axiosConfig
  );
  return response;
};
