import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const useAuth = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return { navigate, register, handleSubmit, errors };
};

export const loginHandler = (data) => {
  console.log("data: ",data);
};
