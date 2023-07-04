/* eslint-disable react/prop-types */
import { IconButton } from "@material-tailwind/react";
import { deleteUser } from "../redux/bankSlice";
import { useDispatch } from "react-redux";

function DeleteBtn({ id }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div>
      <IconButton size="sm" color="red" onClick={handleDeleteClick}>
        <i className="fa-solid fa-trash"></i>
      </IconButton>
    </div>
  );
}

export default DeleteBtn;
