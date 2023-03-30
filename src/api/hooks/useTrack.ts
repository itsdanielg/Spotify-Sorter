import { useEffect, useState } from "react";
import { fetchTrack } from "../calls/fetchTrack";
import { useToken } from "./useToken";

export function useTrack() {
  const { token } = useToken();

  const [track, setTrack] = useState();

  useEffect(() => {
    const getTrack = async () => {
      const track = await fetchTrack(token, "2ETfAQdC1qP2CGk9PjPXCm");
    };
    getTrack();
  }, []);

  return track;
}
