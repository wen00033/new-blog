import * as Form from "@radix-ui/react-form";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_67zt74a",
        "template_ykf37ot",
        {
          from_name: form.name,
          to_name: "Benjamin",
          from_email: form.email,
          message: form.message,
          to_email: "wen00033@algonquinlive.com",
        },
        "CPpjiv2w1zFqS7rYF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleFunction = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="  h-fit bg-purple-300 dark:bg-purple-900 p-4 rounded-xl shadow-2xl "
    >
      <h2 className=" text-purple-900 dark:text-purple-300 py-2 font-black">
        Get in touch and ask me anything!
      </h2>
      <Form.Root
        action="mailto:benjamin850316@gmail.com"
        className=" self-center"
      >
        <Form.Field className="grid mb-[10px] " name="email">
          <div className="flex items-baseline justify-between ">
            <Form.Label className="uppercase font-bold  leading-[35px] text-black  dark:text-white">
              Name
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              name="name"
              onChange={handleFunction}
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
              autoComplete="new-name"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px] " name="email">
          <div className="flex items-baseline justify-between ">
            <Form.Label className="uppercase font-bold  leading-[35px] text-black  dark:text-white">
              Email
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black dark:text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black dark:text-white opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              name="email"
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none dark:text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="email"
              required
              autoComplete="new-email"
              onChange={handleFunction}
              value={form.email}
              // onChange={handleFunction}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="uppercase font-bold  leading-[35px] text-black  dark:text-white">
              message
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black dark:text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none dark:text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
              required
              autoComplete="new-message"
              value={form.message}
              onChange={handleFunction}
              name="message"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            onClick={sendEmail}
            className="my-6 w-fit box-border text-black  text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Send Message
          </button>
        </Form.Submit>
      </Form.Root>
    </motion.div>
  );
};

export default Contact;
