import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Reivews from "../../components/reviews/Reivews";

function Gig() {
  const { id } = useParams();
  // console.log("id: ", id);
  const { isPending, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  const userId = data?.userId;

  const {
    isPending: isPendingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => res.data),
    enabled: !!userId,
  });
  // if (!isPending) {
  //   console.log(dataUser);
  // }
  return (
    <div className="gig">
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">Fiverr {">"}Graphics & Design </span>
            <h1>{data.title}</h1>
            {isPendingUser ? (
              "loading..."
            ) : errorUser ? (
              "something went wrong!"
            ) : (
              <div className="user">
                <img className="pp" src={dataUser?.img} alt="" />
                <span>{dataUser.username}</span>

                {!isNaN(Math.round(data.totalStars / data.starNumber)) &&
                  data.starNumber !== 0 && (
                    <div className="stars">
                      {Array(Math.round(data.totalStars / data.starNumber))
                        .fill()
                        .map((_, index) => (
                          // Use parentheses to return the JSX element
                          <img key={index} src="/img/star.png" alt="star" />
                        ))}
                      <span>
                        {Math.round(data.totalStars / data.starNumber)}
                      </span>
                    </div>
                  )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img src={img} alt={img} key={img} />
              ))}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>

            {isPendingUser ? (
              "loading..."
            ) : errorUser ? (
              "something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img className="pp" src={dataUser?.img} alt="" />
                  <div className="info">
                    <span>{dataUser?.username}</span>
                    {!isNaN(Math.round(data.totalStars / data.starNumber)) &&
                      data.starNumber !== 0 && (
                        <div className="stars">
                          {Array(Math.round(data.totalStars / data.starNumber))
                            .fill()
                            .map((_, index) => (
                              // Use parentheses to return the JSX element
                              <img key={index} src="/img/star.png" alt="star" />
                            ))}
                          <span>
                            {Math.round(data.totalStars / data.starNumber)}
                          </span>
                        </div>
                      )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser?.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser?.desc}</p>
                </div>
              </div>
            )}
            <Reivews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>1 AI generated image</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>
              I will create a unique high quality AI generated image based on a
              description that you give me
            </p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
