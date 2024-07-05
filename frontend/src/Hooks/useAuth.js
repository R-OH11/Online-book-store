import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

// Import the signup function we created
import { signup as signupApi } from "../services/apiAuth";
import { userLogin as userLoginApi } from "../services/apiAuth";
import { adminLogin as adminLoginApi } from "../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("User registered successfully");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during signup");
    },
  });

  return { signup, isLoading };
}

export function useLogin() {
  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: userLoginApi,
    onSuccess: (data) => {
      toast.success("Login successful!");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during login");
    },
  });

  return { userLogin, isLoading };
}

export function useAdminLogin() {
  const { mutate: adminLogin, isLoading } = useMutation({
    mutationFn: adminLoginApi,
    onSuccess: (data) => {
      toast.success("Admin login successful!");
      // You might want to store the admin data or token in state or local storage here
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during admin login");
    },
  });

  return { adminLogin, isLoading };
}
