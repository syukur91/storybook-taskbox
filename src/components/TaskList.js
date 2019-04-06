import React from "react"
import PropTypes from "prop-types"

import Task from "./Task"

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onArchiveTask,
    onPinTask,
  }

  if (loading) {
    return <div className="list-items">loading</div>
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      /* Defined below */
    })
  ),
  onArchiveTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  loading: false,
  tasks: {},
}

export default TaskList
