function LikeButton() {
  const [Liked, setLiked] = React.useState(false);
  const test = Liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!Liked) },
    test
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(
      "div",
      { style: { marginTop: 20 } },
      React.createElement("span", null, "현재 카운트: "),
      React.createElement("span", null, count),
      React.createElement(
        "button",
        { onClick: () => setCount(count + 1) },
        "증가"
      ),
      React.createElement(
        "button",
        { onClick: () => setCount(count - 1) },
        "감소"
      )
    )
  );
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);
