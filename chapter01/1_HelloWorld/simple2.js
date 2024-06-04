function LikeButton() {
    const [Liked, setLiked] = React.useState(false);
    const test = Liked ? '좋아요 취소' : '좋아요';

    return React.createElement(
        'button',
        { onClick: () => setLiked(!Liked)},
        test
    ); 
}

ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#react-root1')
);
ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#react-root2')
);
ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#react-root3')
);