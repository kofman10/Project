import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Swiperr from "../components/Swiperr";

export default function Home() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full">
        <Navbar />

        <Swiperr />
        <section>
          <div className="bg-black text-white py-10 mt-5 px-5">
            <Link
              href="aboutus"
              className="flex justify-center underline text-2xl mb-10 font-bold"
            >
              Who are we
            </Link>
            <h1 className="mb-3 text-center font-bold text-lg">Our Mission </h1>

            <p>
              {" "}
              Our mission is to make educational research projects readily
              accessible to students, educators, and researchers in the
              Educational Technology field. We believe that sharing knowledge
              through research is essential for academic growth and development.
            </p>
            <h1 className="mt-3 mb-3 text-center font-bold text-lg">
              Our Vision
            </h1>

            <p>
              {" "}
              We envision a world where educational research projects are easily
              accessible and available to anyone who needs them. We hope to
              contribute to this vision by providing a platform for
              undergraduate students to share their research with a wider
              audience
            </p>
          </div>
          <div className="mt-10 mx-5">
            <div className="h-[50vh] w-full relative">
              {" "}
              <div className=" w-full bottom-16 absolute z-20">
                {" "}
                <h1 className="text-2xl font-semibold text-white text-center">
                  Computer Science Education
                </h1>
              </div>{" "}
              <Image
                className="h-full w-full object-cover object-top"
                src={"/compsciedu.jpeg"}
                width={500}
                height={500}
                alt=""
              />{" "}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            </div>

            <div className="h-[50vh] w-full relative mt-5 mb-5">
              {" "}
              <div className=" w-full bottom-16 absolute z-20">
                {" "}
                <h1 className="text-2xl font-semibold text-white text-center">
                  Educational Technology
                </h1>
              </div>{" "}
              <Image
                className="h-full w-full   object-cover object-top"
                src={"/edutech.jpeg"}
                width={500}
                height={500}
                alt=""
              />{" "}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            </div>
            <div className="h-[50vh] w-full relative">
              {" "}
              <div className=" w-full bottom-16 absolute z-20">
                {" "}
                <h1 className="text-2xl font-semibold text-white text-center">
                  Technology Education
                </h1>
              </div>{" "}
              <Image
                className="h-full w-full   object-cover object-top"
                src={"/techedu.jpeg"}
                width={500}
                height={500}
                alt=""
              />{" "}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            </div>
          </div>
        </section>
        {/**  <section className="bg-black text-white py-3">
          <h2 className="text-center text-xl font-bold mt-5 mb-5">
            Our Services
          </h2>
          <div className="flex flex-col text-justify gap-3 mx-3">
            <p>Facilitating Access to High-Quality Undergraduate Projects</p>
            <p>
              <span className="font-semibold">Project Repository: </span> Our
              digital library serves as a repository for Educational Technology
              undergraduate projects. We make it easy for students to upload
              their research projects and for others to browse the available
              projects.
            </p>
            <p>
              <span className="font-semibold">Search and Browse:</span> Our
              platform offers a user-friendly interface that makes it easy to
              search and browse through the repository of undergraduate
              projects. Users can filter projects by topic or keyword, making it
              easy to find the research they need.
            </p>
            <p>
              <span className="font-semibold">Request Access:</span> While users
              cannot download the projects directly, they can request access to
              the full project by following necessary steps. We provide clear
              instructions on how to request access to the project from the
              department secretariat.
            </p>
            <p>
              <span className="font-semibold">Feedback and Review:</span> Our
              platform allows users to provide feedback and reviews on
              undergraduate projects. This feature encourages constructive
              criticism and improves the quality of research projects on our
              platform.
            </p>
            <p>
              <span className="font-semibold">Networking:</span> Our digital
              library provides an opportunity for students, educators, and
              researchers to network with each other. Users can connect with
              others in their field, collaborate on research projects, and share
              ideas and resources
            </p>
          </div>
            </section> **/}
      </main>
      <p className="text-center font-mono font-semibold">© 2022 COMSAVVY</p>
    </>
  );
}
