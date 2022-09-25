import axios from "axios";

const URLROOT = "https://apimongonodejs.onrender.com/api/auth/";
const CONFIG = {
  headers: {
    "auth-token": localStorage.getItem("token"),
  },
};

export const loginService = async (form) => {
  const url =  `${URLROOT}/login`;
  const result = await axios.post(url, form)
  //console.log(form);
  /* Se puede colocar resp solo y ya con este vienne todo la respuesta compleata,
  encaso de ser necesario se puede colocar solo lo que se quieres recibir */
  return result.data;

};

export const signupSerivce = async (form) => {
  const resp = await axios.post("https://apimongonodejs.onrender.com/api/auth/", form);
  return resp.data;
};

export const verifyingTokenService = async () => {
  const result = await axios.get(`${URLROOT}`, CONFIG)  
  return result.data;
};