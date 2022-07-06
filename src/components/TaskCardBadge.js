import React from "react";

import Badge from "react-bootstrap/Badge";

function TaskCardBadge({ bgColor, label }) {
  return (
    <Badge bg={bgColor} className="my-1">
      {label}
    </Badge>
  );
}

export default TaskCardBadge;
