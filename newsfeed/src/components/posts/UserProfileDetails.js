import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

// Details to right of user profile picture on a post
const UserProfileDetails = () => {
  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex justify-content-between ">
        <h4 className="mb-0" style={{ fontSize: "1rem" }}>
          Ian Kusner
        </h4>
        <FontAwesomeIcon className="mt-1" icon={faEllipsisH} />
      </div>
      <span className="text-primary" style={{ fontSize: ".8rem" }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
        OH, USA
      </span>
      <span style={{ fontSize: ".7rem" }}>1 minute ago</span>
    </div>
  )
}

export default UserProfileDetails
