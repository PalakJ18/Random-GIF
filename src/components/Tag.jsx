import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_AIP_KEY;

const Tag = () => {
  const [tag, setTag] = useState("car");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);


  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);


  return (
    <div className="w-1/2 pt-3 h-full bg-blue-500 bg-[#f2eb29dd] mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline mb-3 font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} width="450" height="250" className="max-h-[250px]" />)
      }

      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-3"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
