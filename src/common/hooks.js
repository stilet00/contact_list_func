import React, { useEffect, useState, useCallback } from "react";
import { add, remove, edit, get, editUser } from "../services/asyncData";
import Button from "@material-ui/core/Button";
import Loader from "../components/Loader/Loader";

export function useData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    get(url).then((data) => {setData(data.data); changeLoading()});
  }, [url]);
  let loader;
  loader = loading ? <Loader /> : null

  let deleteData = useCallback(
    (dataId) => {
      remove(dataId, url).then((res) => {
        setData(data.filter((item) => item.id !== res.data.id));
      });
    },
    [data, url]
  );
  function changeLoading() {
    setLoading(!loading);
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
    editUser(item, url)
  }

  return {
    data,
    setData,
    deleteData,
    saveData,
    saveUser,
    loader
  };
}

export function useShowMore(data) {
  const [renderedItems, setRenderedItems] = useState(10);
  let button;
  if (data.length !== renderedItems) {
    button = (
        <Button variant="contained" color="primary" onClick={showMore}>
          Show more
        </Button>
    );
  } else {
    button = (
        <Button variant="contained" color="primary" onClick={backToMinimal}>
          Minimize
        </Button>
    );
  }
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
    backToMinimal,
    button
  };
}
