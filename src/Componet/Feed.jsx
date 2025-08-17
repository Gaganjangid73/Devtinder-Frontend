
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addFeed } from "../Utils/feedslice";
import { BASE_URL } from "../Utils/constant";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    (() => {
      const users = Array.isArray(feed) ? feed : feed?.data || [];
      return users.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center m-5">
          {users.map((u, idx) => (
            <UserCard key={u?.id || idx} user={u} />
          ))}
        </div>
      ) : null;
    })()
  );
};

export default Feed;
