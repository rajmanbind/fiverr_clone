import React from "react";
import "./Reviews.scss";
import Review from "./Review";
import newRequest from "../../utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const Reivews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => res.data),
  });
  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ desc, star, gigId });
  };
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isPending
        ? "loading..."
        : error
        ? "something went wrong"
        : data.map((review) => <Review key={review._id} review={review} />)}

      <div className="add">
        <h3>Add a review</h3>
        <form action="" onSubmit={handleSubmit} className="addForm">
          <input type="text" placeholder="write your opinion" />
          <select name="" id="star">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reivews;
