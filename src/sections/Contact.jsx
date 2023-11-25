import { motion } from "framer-motion";
import { useReducer } from "react";
import { contactVariants } from "../animation/animation";

function reducer(state, action) {
  switch (action.type) {
    case "input_name": {
      return { ...state, name: action.payload, error: { ...state.error, nameError: false } };
    }
    case "input_email": {
      return { ...state, email: action.payload, error: { ...state.error, emailError: false } };
    }
    case "input_message": {
      return { ...state, message: action.payload, error: { ...state.error, messageError: false } };
    }
    case "nameError": {
      return { ...state, error: { ...state.error, nameError: true } };
    }
    case "emailError": {
      return { ...state, error: { ...state.error, emailError: true } };
    }
    case "messageError": {
      return { ...state, error: { ...state.error, messageError: true } };
    }
  }
}

const initialState = {
  name: "",
  email: "",
  message: "",
  error: { nameError: false, emailError: false, messageError: false },
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(e) {
    if (e.target.name === "name") {
      dispatch({ type: "input_name", payload: e.target.value });
    } else if (e.target.name === "email") {
      dispatch({ type: "input_email", payload: e.target.value });
    } else {
      dispatch({ type: "input_message", payload: e.target.value });
    }
    console.log(state);
  }

  function passValidation() {
    let result = true;
    if (state.name === "") {
      dispatch({ type: "nameError" });
      result = false;
    }
    if (state.email === "" || !state.email.includes("@")) {
      dispatch({ type: "emailError" });
      result = false;
    }
    if (state.message === "") {
      dispatch({ type: "messageError" });
      result = false;
    }
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = passValidation();
    if (!result) {
      console.log("has Error");
      console.log(state.error);
    } else {
      console.log("ok");
      console.log(state);
    }
  }

  return (
    <motion.div
      className="w-full h-screen bg-gray-800 flex flex-col"
      id="contact"
      variants={contactVariants}
      initial={contactVariants.initial}
      whileInView={contactVariants.animate}
      transition={contactVariants.transition}
      viewport={{ once: true }}
    >
      <div className="w-full flex h-[20%] flex-col gap-4 p-4 justify-center">
        <div className="titleText ">
          與我聯繫 <span className="text-[#18C3CC]">Contact</span>
        </div>
        <p className="md:text-xl text-lg text-white">
          這裡算是我其中的一個練習作品之一，主要是想要練習一些動畫與效果，未來也有可能會把作品統一放在同一個地方．
        </p>
      </div>

      <div className="w-full h-[80%] flex p-8 md:flex-row flex-col md:gap-0 gap-8">
        <form className="md:w-[60%] w-full md:h-full h-max flex flex-col justify-center md:gap-16 gap-8 2xl:text-2xl xl:text-xl text-md">
          <div className="md:w-[70%] w-full md:h-24 h-16 flex justify-start items-center mx-auto relative ">
            <input
              type="text"
              className={`${
                state.name === "" ? " bg-gray-400" : "bg-gray-800 text-white border-4 border-[#18C3CC]"
              } h-full w-full focus:bg-gray-800 transition-all rounded-2xl outline-none px-8 focus:border-[#18C3CC] focus:border-4 focus:text-white peer ${
                state.error.nameError && "border-red-600 border-4 "
              }`}
              value={state.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
            <span
              className={`absolute left-[5%]  px-4 -translate-y-[50%]  ${
                state.name === ""
                  ? "top-[50%]  text-white"
                  : "text-[#18C3CC] top-1 bg-gray-800 border-x-4 border-[#18C3CC]"
              } peer-focus:text-[#18C3CC] peer-focus:top-1 peer-focus:bg-gray-800 peer-focus:border-x-4 peer-focus:border-[#18C3CC] transition-all `}
            >
              您的稱呼
            </span>
          </div>
          <div className="md:w-[70%] w-full md:h-24  h-16 flex justify-start items-center mx-auto relative ">
            <input
              type="email"
              className={`${
                state.email === "" ? " bg-gray-400" : "bg-gray-800 text-white border-4 border-[#18C3CC]"
              } h-full w-full focus:bg-gray-800 transition-all rounded-2xl outline-none px-8 focus:border-[#18C3CC] focus:border-4 focus:text-white peer ${
                state.error.emailError && "border-red-600 border-4 "
              }`}
              value={state.email}
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
            <span
              className={`absolute left-[5%]  px-4 -translate-y-[50%]  ${
                state.email === ""
                  ? "top-[50%]  text-white"
                  : state.error.emailError
                  ? "border-red-600 border-x-4 text-red-400 top-1 bg-gray-800"
                  : "text-[#18C3CC] top-1 bg-gray-800 border-x-4 border-[#18C3CC]"
              }  peer-focus:text-[#18C3CC] peer-focus:top-1 peer-focus:bg-gray-800 peer-focus:border-x-4 peer-focus:border-[#18C3CC] transition-all `}
            >
              您的電子信箱
            </span>
          </div>
          <div className="md:w-[70%] w-full md:h-96 h-44 flex justify-start items-center mx-auto relative">
            <textarea
              // rows={8}
              className={`w-full h-full ${
                state.message === "" ? "bg-gray-400 " : "bg-gray-800 text-white border-[#18C3CC] border-4"
              }  flex justify-start items-center mx-auto outline-none rounded-2xl p-6 py-8  peer focus:bg-gray-800  focus:border-4 focus:border-[#18C3CC] transition-all ${
                state.error.messageError && "border-red-600 border-4 "
              }`}
              value={state.message}
              name="message"
              onChange={(e) => handleInputChange(e)}
            >
              6
            </textarea>
            <span
              className={`absolute left-[5%] -translate-y-[50%]  peer-focus:text-[#18C3CC] peer-focus:top-0 peer-focus:bg-gray-800 px-4 peer-focus:border-x-4 peer-focus:border-[#18C3CC] ${
                state.message === ""
                  ? "top-[50%]  text-white"
                  : "top-0 text-[#18C3CC] bg-gray-800 border-x-4 border-[#18C3CC]"
              }`}
            >
              想留的話
            </span>
          </div>
          <div className="md:w-[70%] w-full mx-auto flex justify-end">
            <button
              type="submit"
              className="md:w-40 w-32 h-max rounded-xl md:py-4 py-2 px-8 text-white border-2 border-white 2xl:text-2xl xl:text-xl text-md relative transition-all group z-10 hover:border-[#18C3CC] overflow-hidden"
              onClick={handleSubmit}
            >
              <span className="absolute top-0 left-0 w-0 h-full group-hover:w-full  bg-[#18C3CC] transition-all -z-[1]"></span>
              送出
            </button>
          </div>
        </form>
        <div className="md:w-[40%] w-full md:h-full h-max bg-yellow-200/10 rounded-xl text-2xl">
          還沒有想到要放什麼
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
