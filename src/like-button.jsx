import React from 'react';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount:0};
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        var newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }

    render() {
        return(
            <div>
                <span>Likes: {this.state.likesCount}</span>
                <button onClick={this.onLike}>Like Me</button>
            </div>
        );
    }
}

export default LikeButton;
