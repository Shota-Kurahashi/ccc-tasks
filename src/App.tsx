import { useEffect, useState } from "react";

const ENDPOINT = "https://ccc-treasure-api.an.r.appspot.com";

const App = () => {
  const [data, setData] = useState<{
    treasure: string;
  }>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${ENDPOINT}`);
      const json = await res.json();
      setData(json);
    })();
  }, []);

  return <p>{data?.treasure}</p>;
};

export default App;
