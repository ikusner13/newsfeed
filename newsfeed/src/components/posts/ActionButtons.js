import React from "react"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons"

// Like and Comment buttons on a post
const ActionButtons = ({ handleLikes, handleCommentClick, toggleLiked }) => {
  return (
    <div className="d-flex  flex-row">
      <div className="d-flex align-items-center">
        <Button
          variant="link"
          onClick={handleLikes}
          className="pe-1 ps-0 icon-button"
          style={{ color: toggleLiked ? "red" : "inherit" }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </Button>
        <div className="">Like</div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          variant="link"
          onClick={handleCommentClick}
          className="pe-1 icon-button"
          style={{ color: "inherit" }}
        >
          <FontAwesomeIcon icon={faCommentDots} />
        </Button>
        <div>Comment</div>
      </div>
    </div>
  )
}

export default ActionButtons
