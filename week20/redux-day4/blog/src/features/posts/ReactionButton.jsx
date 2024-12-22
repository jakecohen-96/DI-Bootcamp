const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const { id, reactions } = post;
  const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button className='reactionButton' key={name}>
        {emoji} {reactions[name]}
      </button>
    );
  });
  return (
    <>
      <h2>{renderReaction}</h2>
    </>
  );
};
export default ReactionButton;
