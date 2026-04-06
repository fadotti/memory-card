import React from "react"

function Card({
  src, text, hiddenStatus, onClick
}) {
  return (
    <div className={`card-container ${hiddenStatus}`} onClick={onClick}>
      <img src={src} alt="" />
      <span>{text}</span>
    </div>
  )
}

export default Card