import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_AIP_KEY;
// console.log("api key is", API_KEY);
const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   console.log("url key is",url);

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log("image link is",imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 pt-3 h-full bg-green-500 bg-[#0becd9] mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold  mb-3">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" height="300" className="max-h-[300px]" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-3"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
