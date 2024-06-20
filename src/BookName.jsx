import React from "react";

const booksNameList = [
  "Norwegian wood",
  "Ikigai",
  "Death",
  "Karnali Blues",
  "Saya",
  "The psychology of Money",
  "The Monk who sold his farafi",
];
const BookName = () => {
  return (
    <div>
      {booksNameList.map((item, index, self) => {
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
};

export default BookName;
