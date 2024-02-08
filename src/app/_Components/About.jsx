import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full pt-[4rem]">
      <div className="text-center py-3">
        <h1 className="text-3xl font-semibold text-slate-700">About Me</h1>
        <p className="py-1 text-sm opacity-80">Who Am I Exactly?</p>
      </div>
      <div className="flex gap-5 mt-10 md:justify-around md:flex-row flex-col items-center">
        <div>
          <Image
            src="/images/about.jpg"
            alt="my-picture"
            height={400}
            width={400}
            className="rounded-xl about-me"
          />
        </div>
        <div className="md:w-1/2 w-10/12 md:my-0 my-2">
          <h1 className="md:text-lg font-medium">Hobbies And Likes</h1>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 text-lg items-center justify-center bg-white w-36 h-28 rounded-lg border border-[#0001]">
              <i className="fa-solid fa-code"></i>
              <p>Coding</p>
            </div>
            <div className="flex flex-col gap-1 text-lg items-center justify-center bg-white w-36 h-28 rounded-lg border border-[#0001]">
              <i className="fa-solid fa-gamepad"></i>
              <p>Gaming</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-lg justify-center bg-white w-36 h-28 rounded-lg border border-[#0001]">
              <i className="fa-solid fa-cat"></i>
              <p>Cats</p>
            </div>
          </div>

          <h1 className="mt-5 text-lg font-medium">Short Description</h1>
          <p className="opacity-80 mb-5">
            Frontend Developer, I create web pages with UI/UX user interface, I
            have years of experience and many clients are happy with the
            projects carried out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
