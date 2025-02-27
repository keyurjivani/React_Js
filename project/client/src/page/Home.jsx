import React, { useEffect, useState } from "react";
import { API } from "../config/api";
import { getUserDetails } from "../userDetails";
import TaskCard from "../components/TaskCard";

const Home = () => {
  let user = getUserDetails()
  const [task, setTask] = useState([])
  const getTasks = async () => {
    try {
      if (user) {
        if (user.role == "admin") {
          let res = await API.get(`/task?assignedBy=${user.id}`)
          console.log(res.data);
          setTask(res.data)
        }
        else {
          let res = await API.get(`/task?assignTo=${user.id}`)
          console.log(res.data);
          setTask(res.data)
        }
      }

    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    getTasks();
  }, [])
  return <div>
    {
      task.map(task => <TaskCard  {...task} key={task._id} role={user.role} />)
    }
  </div>;
};

export default Home;
