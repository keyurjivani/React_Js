import React, { useEffect, useState } from "react";
import { API } from "../config/api";

const Assign = () => {
  const [task, setTask] = useState({
    title: "",
    desc: "",
    endDate: "",
    assignTo: "",
  });

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let res = await API.get("/users?role=user");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const addTask = async (task) => {
    try {
      let res = await API.post("/task", task)
      console.log(res);
      alert("Task added")
    } catch (error) {
      console.log(error);
      alert("Task failed")

    }

  }
  const onSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Assign Task</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleInput}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="desc" className="block mb-1 font-medium">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={task.desc}
            onChange={handleInput}
            className="w-full px-3 py-2 border rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-1 font-medium">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={task.endDate}
            onChange={handleInput}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="assignTo" className="block mb-1 font-medium">
            Assign To
          </label>
          <select name="assignTo" id="" onChange={handleInput}>
            <option value="">select </option>
            {users.map((user) => (
              <option value={user._id} key={user._id}>{user.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Assign;
