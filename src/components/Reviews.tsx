import React from 'react';
import Marquee from "react-fast-marquee";
import cn from "classnames";

// client images

import client2 from "../../public/ClientImage/client2.webp";

import client4 from "../../public/ClientImage/client4.webp";
import client5 from "../../public/ClientImage/client5.webp";
import client6 from "../../public/ClientImage/client6.webp";
import client7 from "../../public/ClientImage/client7.jpg";
import client8 from "../../public/ClientImage/client8.webp";
import client9 from "../../public/ClientImage/client9.jpg";
import client12 from "../../public/ClientImage/client12.webp"
import client14 from "../../public/ClientImage/client14.webp"
import Image from 'next/image';


const reviews = [
  {
    name: "Saraobrien",
    rating: 4.9,
    body: "The final product turned out great and they were responsive to my edits.",
    img: client14,
  },
  {
    name: "Debirumph",
    rating: 5,
    body: "Imam H exceeded my expectations with his professional work on social media videos.",
    img: client2,
  },
  {
    name: "Riverpathak",
    rating: 5,
    body: "Imam was quick and concise, will 100% be working with him again. Highly fruitful collaboration experience",
    img: client12,
  },
  {
    name: "Coachriconasol",
    rating: 4.8,
    body: "Imam always goes above and beyond. He nailed the style I was after and revisions were quick and easy.",
    img: client4,
  },
  {
    name: "Kofibamfo",
    rating: 5,
    body: "Imam's direction and creativity brought the vision together. Highly fruitful collaboration experience.",
    img: client5,
  },
  {
    name: "Quar Brown",
    rating: 5,
    body: "Easy to work with, quick responses. Always eager to make needed changes.",
    img: client6,
  },
  {
    name: "Maxwell Lewis",
    rating: 5,
    body: "Initial delivery was 90% perfect. Excellent editing and professional revision handling throughout the process.",
    img: client7,
  },
  {
    name: "Mrmuf Fins",
    rating: 4.5,
    body: "Even with miscommunications from me, he delivered beyond my expectations. Truly excellent!",
    img: client8,
  },
  {
    name: "Coopflourens",
    rating: 5,
    body: "Speedy, proactive, and creative! Delivered nearly everything I wanted without direct instruction. Impressive work.",
    img: client9,
  },
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 2));
const secondRow = reviews.slice(Math.floor(reviews.length / 2));


import { StaticImageData } from 'next/image';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface ReviewCardProps {
  img: string | StaticImageData;
  name: string;
  rating: number;
  body: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, rating, body }) => {
  return (
    <figure
      className={cn(
        "relative max-w-[350px] h-[150px] md:h-[180px] overflow-hidden rounded-xl border border-[#fcfcfa]/20 p-5 ml-6"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <Image className="rounded-full w-14 h-14" src={img} alt='profle picture' />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-TextColor">
            {name}
          </figcaption>
          {/* <p className=" text-xs md:text-sm font-medium text-SecondTextColor">{rating: 4}</p> */}
          <span className="flex items-center gap-0.5 text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => {
              const filled = i + 1 <= Math.floor(rating);
              const half = i + 0.5 <= rating && i + 1 > rating;
              return filled ? (
                <FaStar key={i} />
              ) : half ? (
                <FaStarHalfAlt key={i} />
              ) : (
                <FaRegStar key={i} />
              );
            })}
          </span>
        </div>
      </div>
      <blockquote className="mt-2 text-xs md:text-sm">{body}</blockquote>
    </figure>
  );
};

const Reviews = () => {
  return (
    <div
      style={{
        maskImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0)
        )`,
        WebkitMaskImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0)
        )`, // For WebKit browsers like Chrome/Safari
      }}
      className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden gap-6  "
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {[...secondRow].reverse().map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;