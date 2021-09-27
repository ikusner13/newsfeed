import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

// Details to right of user profile picture on a post
const UserCommentDetails = () => {
  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex justify-content-between ">
        <h4 className="mb-0" style={{ fontSize: "1rem" }}>
          Ian Kusner
        </h4>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
      <span style={{ color: "blue", fontSize: ".8rem" }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
        OH, USA
      </span>
      <span style={{ fontSize: ".7rem" }}>1 minute ago</span>
    </div>
  )
}

export default UserCommentDetails
