"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { data: session } = useSession();
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result.error) {
        setErrors({ general: "Invalid email or password" });
      } else {
        console.log("Logged in successfully!");
        router.push("/dashboard"); 
      }
    }
  };

  return (
    <div className={"dark"}>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4 text-white">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            {["email", "password"].map((field) => (
              <div key={field}>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => signIn("google")}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            Sign in with Google
          </button>
          <p className="text-center mt-4 text-gray-300 text-sm">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-purple-400 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
