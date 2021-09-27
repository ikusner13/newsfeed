import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeart,
  faTrash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons"

const options = [
  {
    text: "Like",
    icon: faHeart,
  },
  {
    text: "Edit",
    icon: faPencilAlt,
  },
  {
    text: "Delete",
    icon: faTrash,
  },
]

// list of actions at bottom of comment card
const CommentOptions = ({ likes }) => {
  const length = options.length - 1
  return (
    <ul className="no-bullets d-flex flex-row">
      <div className="d-flex flex-row comment-options-list">
        <li className={`pe-2 ${likes === 0 && "opacity-75"}`}>{likes} Likes</li>
        <div>|</div>
      </div>
      {options.map((option, index) => {
        return (
          <div key={index} className="d-flex flex-row comment-options-list">
            <li className="px-2">
              {option.icon && (
                <FontAwesomeIcon className="me-1" icon={option.icon} />
              )}
              {option.text}
            </li>
            {index < length && <div>|</div>}
          </div>
        )
      })}
    </ul>
  )
}

export default CommentOptions
