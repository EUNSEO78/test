import InteractiveIcons from "./InteractiveIcons";
import Like from "./Like";
import Comment from "./Comment";

const FeedBottom = (props) => {
  return (
    <>
      <InteractiveIcons />
      <Like {...props} />
      <Comment {...props} />
    </>
  );
};

export default FeedBottom;
