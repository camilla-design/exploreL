import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactUs({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:exploreleka@gmail.com?subject=${formData.subject}&body=Hei, mitt navn er ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-bold text-center">Kontakt informasjon</h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#ffa500] h-7 w-7 animate-pulse" />
            <p className="text-2xl">exploreleka@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#ffa500] h-7 w-7 animate-pulse" />
            <p className="text-2xl">7994 Leka</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[300px] md:w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 ">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Emne"
            type="text"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Melding"
          />
          <button
            type="submit"
            className="bg-[#ffa500] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
