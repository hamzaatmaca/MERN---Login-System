import axios from "axios";
import { endpoint } from "../utils/endpoint";

const fetchAxiosData = (url, method, payload) => {
  axios.defaults.headers.common["Authorization"] = ` ${localStorage.getItem(
    "ai.token"
  )}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  if (method === "get") {
    return axios[method](String(endpoint) + url);
  }

  if (method === "post" || method === "put" || method === "delete") {
    return axios[method](String(endpoint) + url, payload);
  }
};

const useFetch = (url, method, payload) => {
  return new Promise((resolve, reject) => {
    if (typeof method !== "string" || method === undefined || method === null) {
      reject(new Error(`method can not be empty`));
    }

    if (
      method.toUpperCase().trim() != "GET" &&
      method.toUpperCase().trim() != "POST" &&
      method.toUpperCase().trim() != "DELETE" &&
      method.toUpperCase().trim() != "PUT"
    ) {
      reject(new Error(`method must be GET - POST - PUT - DELETE`));
    }

    if (typeof url !== "string" || url === undefined || url === null) {
      reject(new Error(`url can not be empty`));
    }

    if (method !== "GET") {
      if (payload === undefined || payload === null)
        reject(new Error(`payload can not be empty`));
    }

    switch (method.toUpperCase()) {
      case "GET":
        resolve(fetchAxiosData(url, method.toLowerCase()));
        break;
      case "POST":
      case "PUT":
        resolve(fetchAxiosData(url, method.toLowerCase(), payload));
        break;
      case "DELETE":
        const addDataParameterForDotnetToPayload = {
          data: payload,
        };
        resolve(
          fetchAxiosData(
            url,
            method.toLowerCase(),
            addDataParameterForDotnetToPayload
          )
        );
        break;
    }
  });
};

export default useFetch;
