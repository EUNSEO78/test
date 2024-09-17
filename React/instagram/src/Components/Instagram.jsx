import Feed from "./FeedComponents/Feed";
import Navigation from "./Navigation";
import Storyboard from "./StoryComponents/Storyboard";
import Topbar from "./Topbar";

const Instagram = () => {
  const data = [
    {
      image: "story/story0.jpg",
      name: "Joshua",
      isPopular: true,
      city: "NewYork",
      nation: "USA",
      images: ["feeds/feed0.jpg", "feeds/feed1.jpg", "feeds/feed2.jpg"],
      likePeople: [
        "craig_love",
        "jinseal",
        "woo",
        "choi",
        "kim",
        "bae",
        "seo",
        "sooyaaa__",
        "charlieputh",
        "rose_s",
        "cherry_99",
        "pink_2389",
        "bam",
        "dark_yoo",
        "kang_seo",
        "chum",
        "wodi",
        "wodi_1",
      ],
      date: "September 19",
    },
    {
      image: "story/story1.jpg",
      name: "Koun_soo",
      isPopular: false,
      city: "Chicago",
      nation: "USA",
      images: ["feeds/feed3.jpg", "feeds/feed4.jpg", "feeds/feed5.jpg"],
      likePeople: [
        "charlieputh",
        "craig_love",
        "jinseal",
        "woo",
        "choi",
        "kim",
        "bae",
        "seo",
        "sooyaaa__",
        "rose_s",
      ],
      date: "December 20",
    },
    {
      image: "story/story2.jpg",
      name: "Eella_swit",
      isPopular: false,
      city: "London",
      nation: "United Kingdom",
      images: ["feeds/feed6.jpg", "feeds/feed7.jpg", "feeds/feed8.jpg"],
      likePeople: [
        "cherry_99",
        "craig_love",
        "jinseal",
        "woo",
        "choi",
        "kim",
        "bae",
        "seo",
      ],
      date: "April 17",
    },
    {
      image: "story/story3.jpg",
      name: "Chum_03",
      isPopular: true,
      city: "Seoul",
      nation: "Korea",
      images: ["feeds/feed9.jpg", "feeds/feed10.jpg", "feeds/feed11.jpg"],
      likePeople: [
        "kang_seo",
        "craig_love",
        "jinseal",
        "woo",
        "choi",
        "kim",
        "bae",
        "seo",
        "Eella_swit",
      ],
      date: "April 17",
    },
    {
      image: "story/story4.jpg",
      name: "Pilkagentil_num",
      isPopular: true,
      images: ["feeds/feed12.jpg", "feeds/feed13.jpg", "feeds/feed14.jpg"],
      likePeople: [
        "dark_yoo",
        "cherry_99",
        "craig_love",
        "jinseal",
        "woo",
        "choi",
        "kim",
        "bae",
        "seo",
      ],
      date: "April 17",
    },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full max-w-sm m-auto ">
        <Topbar />
        <Storyboard />
        <section style={{ paddingBottom: "60px" }}>
          {data.map((v) => (
            <Feed {...v} />
          ))}
        </section>
        <Navigation />
      </div>
    </div>
  );
};

export default Instagram;
