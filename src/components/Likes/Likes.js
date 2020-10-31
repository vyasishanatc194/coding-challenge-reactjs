import React, { Component } from 'react';
import LikeButton from '../../assets/like.jpg';
import './Likes.css';

class LikeComponent extends Component {

    componentDidMount() {
        this.getLikes();
    }

    getLikes = () => {
        this.props.getLikes().then(res => {
            this.props.setLikes(res.data.likes);
        }).catch(err => {
            this.props.addToast("Error while fetching Likes, Please try again!", { appearance: 'error', autoDismiss: true });
        });
    }

    saveLikes = () => {
        this.props.saveLike().then(res => {
            this.props.addToast(res.data.message, { appearance: 'success', autoDismiss: true });
            this.getLikes();
        }).catch(err => {
            this.props.addToast("Error while Saving Likes, Please try again!", { appearance: 'error', autoDismiss: true });
        });
    }

    render() {

        return (
            <div className="like-custom">
                <img src={LikeButton}
                    className="like-button"
                    onClick={this.saveLikes}
                    alt="like-button" /> {this.props.like.likes}
            </div>
        )
    }
}

export default LikeComponent