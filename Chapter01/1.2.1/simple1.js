function LikeButton() {
    const [Liked, setLiked] = React.useState(false);
    const test = Liked ? '좋아요 취소' : '좋아요';

    return React.createElement(
        'button',
        { onClick: () => setLiked(!Liked)},
        test
    ); 
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);