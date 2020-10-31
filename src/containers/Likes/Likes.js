import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LikeComponent from '../../components/Likes/Likes';
import * as actions from '../../store/actions/index';
import {
  setLikes,
} from "../../store/actions/likeActions";
import withToast from '../../hoc/Toast';

const mapStateToProps = (state) => ({
  like: state.like,
});

const mapDispatchToProps = (dispatch) => ({
  setLikes: (likes) => dispatch(setLikes(likes)),
  getLikes: () => dispatch(actions.getLikes()),
  saveLike: () => dispatch(actions.saveLike()),
});

export default withToast(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LikeComponent))
);
