import React, { useEffect, useRef, useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
import "./Gigs.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  const reShort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["gigsData"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => res.data),
  });
  // if (!isPending) {
  //   data.forEach((item) => {
  //     console.log(item.userId);
  //   });
  // }
  const apply = () => {
    refetch();
  };
  useEffect(() => {
    refetch();
  }, [sort]);
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR &#10097; GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the bounderies of art and technology with Fiverrs AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" ref={minRef} />
            <input type="text" placeholder="max" ref={maxRef} />
            <button type="button" onClick={apply}>
              Apply
            </button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reShort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reShort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data.map((item, index) => {
                let data = {
                  ...item,
                  index: index + 1,
                };
                return <GigCard item={data} key={item._id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
