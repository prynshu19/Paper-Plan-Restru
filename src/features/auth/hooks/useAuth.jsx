import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../state/authAction";
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
    dispatch(loginAction(data));
    reset();
  };

  const registerHandler = (data) => {
    dispatch(registerAction(data));
    reset();
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
