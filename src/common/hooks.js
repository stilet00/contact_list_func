import React, { useEffect, useState, useCallback } from "react";
import {
  add,
  remove,
  edit,
  get,
  editUser,
  addUser,
} from "../services/asyncData";
import Button from "@material-ui/core/Button";
import Loader from "../components/Loader/Loader";
import { USER } from "../constants/constants";

export function useData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get(url).then((data) => {
      setData(data.data);
      changeLoading();
    });
  }, [url]);
  let loader;
  loader = loading ? <Loader /> : null;

  let deleteData = useCallback(
    (dataId) => {
      remove(dataId, url).then((res) => {
        setData(data.filter((item) => item.id !== res.data.id));
      });
    },
    [data, url]
  );
  function changeLoading() {
    setLoading(false);
  }
  function saveData(item) {
    if (!item.id) {
      add(item, url).then((res) => {
        setData([...data, res.data]);
      });
    } else {
      edit(item, url).then((res) => {
        setData(
          data.map((item) => (item.id === res.data.id ? res.data : item))
        );
      });
    }
  }
  function saveUser(item) {
    setLoading(true);
    editUser(item, url).then((res) => setLoading(false));
  }

  function newUser() {
    setLoading(true);
    addUser(USER, url).then((res) => {
      setData([...data, res.data]);
      changeLoading();
    });
  }

  return {
    data,
    setData,
    deleteData,
    saveData,
    saveUser,
    newUser,
    loader,
  };
}

export function useShowMore(data) {
  const [renderedItems, setRenderedItems] = useState(10);

  function showMore() {
    if (data.length - renderedItems >= 10) {
      setRenderedItems(renderedItems + 10);
    } else {
      setRenderedItems(renderedItems + (data.length - renderedItems));
    }
  }
  function backToMinimal() {
    setRenderedItems(10);
  }
  return {
    renderedItems,
    showMore,
    backToMinimal
  };
}
