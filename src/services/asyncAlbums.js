const axios = require("axios");
const URL = "https://jsonplaceholder.typicode.com/albums";

export function getAlbums() {
  return axios.get(URL);
}
export function remove(contactID) {
  return axios.delete(URL + contactID, {
    data: {
      id: contactID,
    },
  });
}
export function add(data) {
  return axios.post(URL, {
    name: data.name,
    surname: data.surname,
    phone: data.phone,
  });
}
export function edit(data) {
  return axios.put(URL + data.id, {
    id: data.id,
    name: data.name,
    surname: data.surname,
    phone: data.phone,
  });
}
