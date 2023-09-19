import axios from "axios";
export const sentOneTimeCredetialToDB = (whatsAppNumber) => {
  axios.post("http://localhost:3001/verify", {
    whatsAppNumber,
  });
};

export const verifyCode = (whatsAppNumber, code) => {
  return axios.post("http://localhost:3001/login", { whatsAppNumber, code });
};
