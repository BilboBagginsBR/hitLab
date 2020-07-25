import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postType } from '../../actions/types';
import { authSelector } from '../../actions/selectors';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}: {
  post: postType;
}) => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p>{text}</p>
        <p>
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>

        <Fragment>
          <button onClick={() => dispatch(addLike(_id))} type="button"> like
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button onClick={() => dispatch(removeLike(_id))} type="button">dislike</button>
          <Link to={`/posts/${_id}`}>
            Discussion {comments.length > 0 && <span>{comments.length}</span>}
          </Link>
          {!auth.loading && user === auth.user._id && (
              <button onClick={() => dispatch(deletePost(_id))} type="button">delte post</button>
            )}
        </Fragment>
      </div>
    </div>
  );
};

export default PostItem;
