import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <ProfileImage src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/11/18/09/One-Direction-Four-Album-Cover.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp"></ProfileImage>
      <ProfileInfo name="OneDirection" date="December 17th, 2024"></ProfileInfo>
    </div>
  );
};

export default Profile;
