import React from "react";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import "../estilos/Login.css";

interface SnackbarState {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration: number;
}

export default function Login() {
  const { values, errors, handleChange, validate } = useForm({
    email: "",
    password: "",
  });

  const [snackbar, setSnackbar] = React.useState<SnackbarState>({
    message: "",
    type: "success",
    duration: 0,
  });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
            className={`w-full p-2 border rounded ${
              errors.email
                ? "border-red-500"
                : values.email
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="password"
            placeholder="Senha"
            value={values.password}
            onChange={handleChange("password")}
            className={`w-full p-2 border rounded ${
              errors.password
                ? "border-red-500"
                : values.password
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={() => {}}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
