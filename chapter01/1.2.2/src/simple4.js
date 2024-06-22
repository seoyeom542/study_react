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

  return (
    <div>
      <LikeButton />
      <div sttle={{ marginTop: 20 }}>
        <span>현재 카운트: </span>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);
