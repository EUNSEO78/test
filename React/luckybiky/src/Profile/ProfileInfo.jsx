const ProfileInfo = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <span>{props.name}</span>
      <span style={{ color: "gray" }}>{props.date}</span>
    </div>
  );
};

export default ProfileInfo;
