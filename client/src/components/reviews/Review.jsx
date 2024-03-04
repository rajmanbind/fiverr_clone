import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const Review = ({ review }) => {
  const { isPending, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => res.data),
  });
  return (
    <div>
      <div className="review">
        {isPending ? (
          "loading..."
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="user">
            <img className="pp" src={data.img} alt="" />
            <div className="info">
              <span>{data.username} </span>
              <div className="country">
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className="stars">
          {Array(review.star)
            .fill()
            .map((_, index) => (
              // Use parentheses to return the JSX element
              <img key={index} src="/img/star.png" alt="star" />
            ))}
          <span>{review.star}</span>
        </div>
        <p>{review.desc}</p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src="/img/like.png" alt="" />
          <span>Yes</span>
          <img src="/img/dislike.png" alt="" />
          <span>No</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
