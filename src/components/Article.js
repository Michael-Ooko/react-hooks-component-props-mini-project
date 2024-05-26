import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadingTime = (minutes) => {
    const isShortRead = minutes < 30;
    const emoji = isShortRead ? "☕️" : "🍱";
    const unit = isShortRead ? 5 : 10;
    const count = Math.ceil(minutes / unit);
    
    return emoji.repeat(count);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {renderReadingTime(minutes)} {minutes} min read
      </p>
    </article>
  );
}

export default Article;
