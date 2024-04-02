import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import Context from "../contexts/Context";

const mountedElement = document.getElementById("portal");

const Modal = () => {
  const {
    setModalVisible,
    setCount,
    count,
    setUserName,
    setNumber,
    setAddres,
  } = useContext(Context);

  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const numHandler = (event) => {
    setNum(event.target.value);
  };

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const modalCloseHandler = () => {
    setModalVisible(false);
  };

  const AddEnteredHandler = () => {
    setAddres(address);
    setNumber(num);
    setUserName(name);
    setCount(count + 1);
    modalCloseHandler();
    setNum("");
    setAddress("");
    setName("");
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white">
        <div className="p-8">
          <h2 className="mb-4 text-2xl font-semibold">Add New Information</h2>
          <div className="mb-4">
            <label className="mb-1 block text-sm">Name:</label>
            <input
              value={name}
              onChange={nameHandler}
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm "
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm">Mobile:</label>
            <input
              value={num}
              onChange={numHandler}
              type="number"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm "
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm">Address:</label>
            <input
              value={address}
              onChange={addressHandler}
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm "
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={AddEnteredHandler}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 "
            >
              Add
            </button>
            <button
              onClick={modalCloseHandler}
              className="ml-2 rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400  "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    mountedElement,
  );
};

export default Modal;
