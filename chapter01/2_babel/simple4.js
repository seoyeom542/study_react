function LikeButton() {
  const [Liked, setLiked] = React.useState(false);
  const test = Liked ? "좋아요 취소" : "좋아요";
  return React.createElement("button", {
    onClick: () => setLiked(!Liked)
  }, test);
}
function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    sttle: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("spam", null, count), /*#__PURE__*/React.createElement("button", {
    onclick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onclick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);