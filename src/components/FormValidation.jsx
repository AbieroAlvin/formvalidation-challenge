import { useState } from "react";
import { toast } from "react-toastify";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // validate first name
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // validate last name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    //  validate email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    //   validate password
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    //   validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Logged in successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("Form Submitted successfully!", formData);
    } else {
      console.log("Form submission failed. Please check the errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center mt-24 px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-blue-400 p-8 w-[400px] rounded-md"
      >
        <div className="flex flex-col gap-1">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="outline-none py-1 px-2 rounded-md focus:outline-green-400"
          />
          {errors.firstName && (
            <span className="text-sm text-center text-red-500 font-semibold">
              {errors.firstName}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="outline-none py-1 px-2 rounded-md focus:outline-green-400"
          />
          {errors.lastName && (
            <span className="text-sm text-center text-red-500 font-semibold">
              {errors.lastName}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="outline-none py-1 px-2 rounded-md focus:outline-green-400"
          />
          {errors.email && (
            <span className="text-sm text-center text-red-500 font-semibold">
              {errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="outline-none py-1 px-2 rounded-md focus:outline-green-400"
          />
          {errors.password && (
            <span className="text-sm text-center text-red-500 font-semibold">
              {errors.password}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="outline-none py-1 px-2 rounded-md focus:outline-green-400"
          />
          {errors.confirmPassword && (
            <span className="text-sm text-center text-red-500 font-semibold">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
