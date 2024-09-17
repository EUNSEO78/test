//css를 js화 할때는 중괄호 2개 필요
// ex) <div style={{width: '100px"...}}></div>

const Box = (props) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: props.backgroundColor,
  };
  return <div style={style}></div>;
};

export default Box;
