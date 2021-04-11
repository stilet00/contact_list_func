const axios = require("axios");

export function get(url) {
  return axios.get(url);
}
export function remove(contactID, url) {
  return axios.delete(url + contactID, {
    data: {
      id: contactID,
    },
  });
}
export function add(data, url) {
  return axios.post(url, {
    name: data.name,
    surname: data.surname,
    phone: data.phone,
  });
}
export function edit(data, url) {
  return axios.put(url + data.id, {
    id: data.id,
    name: data.name,
    surname: data.surname,
    phone: data.phone,
  });
}

// for users

export function editUser(data, url) {
  return axios.put(url, { ...data });
}
export function addUser(data, url) {
  return axios.post(url, { ...data });
}
