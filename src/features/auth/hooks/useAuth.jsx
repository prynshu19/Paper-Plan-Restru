import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAction } from "../state/authAction";
import { addUser } from "../state/authSlice";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {
    console.log("Login data: ", data);
  };

  const registerHandler = (data) => {
    console.log("Register Data: ", data);
    dispatch(registerAction(data));
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginHandler,
    registerHandler,
  };
};
