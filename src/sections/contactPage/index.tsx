import { API_URL } from "@/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test(
      "phone-number-length",
      "Phone number should be 10 digits",
      (value) => {
        return value?.replace(/\D/g, "").length === 10;
      }
    ),
  message: yup.string(),
});

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const { name, email, message, phoneNumber } = data;

      const formData = new FormData();
      formData.set("your-name", name);
      formData.set("your-subject", name);
      formData.set("your-email", email);
      formData.set("phoneNumber", phoneNumber);
      formData.append("your-message", message);
      const response = await axios.post(API_URL.contactForm, formData);

      if (response.status === 200) {
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        contact
        <form></form>
      </div>
    </section>
  );
};

export default ContactPage;
