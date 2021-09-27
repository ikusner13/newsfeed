import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// list of actions at bottom of comment card
const CommentOptions = ({ options }) => {
  const length = options.length - 1
  return (
    <ul className="no-bullets d-flex flex-row">
      {options.map((option, index) => {
        return (
          <div key={index} className="d-flex flex-row comment-options-list">
            <li className={index === 0 ? "pe-2" : "px-2"}>
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
