import { Feed } from "./components/Feed/Feed.jsx";
import MediaLoader from "./components/MediaLoader/MediaLoader.jsx";
import Poll from "./components/Poll/Poll.jsx";
import PostForm from "./components/PostForm/PostForm.jsx";
import PostText from "./components/PostText/PostText.jsx";

function App() {
  const poll = true;
  return (
    <>
    <Feed>
    <PostForm />
    <PostForm textProp={poll}>
      <PostText />
    </PostForm>
    <PostForm poll={poll}>
      <Poll/>
    </PostForm>
    <PostForm media={poll}>
    <MediaLoader/>
    </PostForm>
    </Feed>
    </>
  )
};

export default App;