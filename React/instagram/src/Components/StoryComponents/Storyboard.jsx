import Story from "./Story";

const Storyboard = (props) => {
  const friends = [
    { name: "Joshua", image: "story/story0.jpg" },
    { name: "Koun_soo", image: "story/story1.jpg" },
    { name: "Eella_swit", image: "story/story2.jpg" },
    { name: "Chum_03", image: "story/story3.jpg" },
    { name: "Pilkagentil_num", image: "story/story4.jpg" },
    { name: "korea", image: "story/story5.jpg" },
    { name: "ito", image: "story/story6.jpg" },
  ];

  return (
    <div className="hide-scrollbar border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll">
      {friends.map((v) => (
        <Story name={v.name} image={v.image} />
      ))}
    </div>
  );
};

export default Storyboard;
