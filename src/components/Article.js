import React from "react";

export default function Article({title, date="January 1, 1970", preview, minutes}){

  function getReadingTime(minutes){
    if (minutes < 30){
      const cups = Math.ceil(minutes/5);
      return "☕️".repeat(cups) + `${minutes} min read`;
    }
    else{
      const bentos = Math.ceil(minutes/10);
      return "🍱".repeat(bentos) + `${minutes} min read`;
    }
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {getReadingTime(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}