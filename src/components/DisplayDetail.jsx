import React, { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";

const DisplayDetail = () => {
  const { userName, number, addres, count, setCount, setModalVisible } =
    useContext(Context);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (userName && number && addres) {
      setUserData((prev) => [
        ...prev,
        { name: userName, number: number, address: addres },
      ]);
    }
  }, [userName, number, addres]);

  const handleEdit = (index) => {
    handleDelete(index)
    setModalVisible(true);
  };

  const handleDelete = (index) => {
    console.log(index);
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setUserData(updatedUserData);
    setCount(count - 1);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="mb-6 text-3xl font-semibold">All Students</h1>
      <div className="grid gap-4">
        {userData.map((user, index) => (
          <div key={index} className="rounded border p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">Name: {user.name}</h3>
            <p className="mb-1 text-gray-700">Number: {user.number}</p>
            <p className="text-gray-700">Address: {user.address}</p>
            <div className="mt-4">
              <button
                className="mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayDetail;
