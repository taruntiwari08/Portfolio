import React from "react";

function Resume() {
  return (
    <div className="flex-col bg-slate-50 max-w-full max-h-full my-0 animate-slideUp ">
      <div className="flex lg:font-light text-3xl font-bold  lg:text-5xl lg:ml-32 py-5 ml-5  lg:py-16 font-roboto text-gray-900">
        {" "}
        Resume
      </div>

      <label htmlFor="Education">
        <div className="flex lg:justify-evenly flex-wrap">
          <div className="flex font-semibold text-xl lg:text-3xl pr-52 py-3 ml-5 lg:ml-9  lg:py-1 font-roboto text-gray-900">
            Education
          </div>

          <div className="lg:flex-row flex-col lg:space-y-12 space-y-4  ml-5">
            <div className="lg:bg-slate-50 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg ">
              <div className="flex lg:flex-row flex-col  ">
                <span className="font-roboto font-light lg:text-base text-sm lg:px-14 my-1">
                  2022 - 2026
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    Madhav Institute of Technology & Science, Gwalior (M.P) |
                    <br />
                    <span className=" font-roboto font-light lg:text-base test-sm lg:py-14 lg:px-6  italic">
                      {" "}
                      Btech in Artificial Intelligence & Robotics
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs lg:py-14 lg:px-6  italic">
                      {" "}
                      CGPA : 8
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:bg-slate-50 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg">
              <div className="flex lg:flex-row flex-col  ">
                <span className="font-roboto font-light lg:text-base text-sm lg:px-14 my-1">
                  2021 - 2022
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    Kendriya Vidyalaya No.4, AFS Mahrajpura, Gwalior |
                    <br />
                    <span className=" font-roboto font-light lg:text-base test-sm lg:py-14 lg:px-6  italic">
                      {" "}
                      Higher Secondary Education ( 12th Grade )
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs lg:py-14 lg:px-6  italic">
                      {" "}
                      Percentage : 90% ( CBSE Board )
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:bg-slate-50 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg ">
              <div className="flex lg:flex-row flex-col  ">
                <span className="font-roboto font-light lg:text-base text-sm lg:px-14 my-1">
                  2019 - 2020
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    Kendriya Vidyalaya No.4, AFS Mahrajpura, Gwalior |
                    <br />
                    <span className=" font-roboto font-light lg:text-base test-sm lg:py-14 lg:px-6  italic">
                      {" "}
                      Secondary Education ( 10th Grade )
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs lg:py-14 lg:px-6  italic">
                      {" "}
                      Percentage : 88% ( CBSE Board )
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
      <hr className="border-gray-600 lg:m-16 lg:flex hidden " />

      <label htmlFor="Skills & Expertise">
        <div className="flex lg:justify-around lg:flex-row flex-col  lg:mr-32 ">
          <div className="flex font-semibold text-xl  lg:text-3xl lg:-ml-[150px] ml-5 py-3  font-roboto text-gray-900">
            <div className="flex lg:flex-col flex-row lg:mr-12 mt-3">
              <span> Skills </span> <span class="p-1"></span>{" "}
              <span> & Expertise</span>{" "}
            </div>
          </div>

          <div className="lg:flex-row flex-col lg:space-y-4  lg:-ml-24">
            <div className="lg:bg-slate-50 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Computer languages |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ C++</li>
                    <li>✦ Python</li>
                    <li>✦ HTML</li>
                    <li>✦ CSS</li>
                    <li>✦ Javascript</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            <div className="lg:bg-slate-50 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Software Packages |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ ReactJs</li>
                    <li>✦ Redux</li>
                    <li>✦ Tailwind CSS</li>
                    <li>✦ Git</li>
                    <li>✦ Github</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            <div className="lg:bg-slate-50 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Languages Known |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                  <li>✦ English</li>
                  <li>✦ Hindi</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </label>
      <hr className="border-gray-600 lg:m-16 lg:flex hidden " />

      <label htmlFor="Achievments"></label>
      <div className="flex lg:justify-around lg:flex-row flex-col  ">
        <div className="flex font-semibold text-xl  lg:text-3xl  lg:mt-6 py-1 ml-6  lg:-ml-10 font-roboto text-gray-900">
          Achievments
        </div>

        <div className="flex-col lg:bg-slate-50 bg-slate-100 rounded-lg px-5 py-2 lg:w-auto w-[320px] mx-5 lg:mr-5 my-3 mb-12 lg:shadow-none shadow-lg ">
          <div className=" font-roboto font-light lg:text-base text-sm py-2  italic ">
            {" "} <p className="lg:flex hidden ml-32">
            ✦ &nbsp; Achieved 90 Perecentage in CBSE Class 12 Board Exam <br />{" "}
            &nbsp; &nbsp; &nbsp; and secured 2nd rank at Kendriya Vidyalaya No.
            4. </p>
            <p className=" lg:hidden flex-wrap text-justify leading-relaxed"> ✦ Achieved 90 Perecentage in CBSE Class 12 Board Exam and secured 2nd rank at Kendriya Vidyalaya No.
            4. </p>
          </div>

          <div className=" font-roboto font-light lg:text-base text-sm py-2  italic ">
            {" "} <p className="lg:flex hidden ml-32">
            ✦ &nbsp; Achieved 88 Perecentage in CBSE Class 10 Board Exam <br />{" "}
            &nbsp; &nbsp; &nbsp; and secured 3nd rank at Kendriya Vidyalaya No.
            4. </p>
            <p className=" lg:hidden flex-wrap text-justify leading-relaxed"> ✦ Achieved 88 Perecentage in CBSE Class 10 Board Exam and secured 3nd rank at Kendriya Vidyalaya No.
            4. </p>
          </div>
          <div className=" font-roboto font-light lg:text-base text-sm py-2  italic ">
            {" "}
            <p className="lg:flex hidden ml-32">
            ✦ &nbsp; Got commendable 99.34 Percentile in CUET(UG) 2022 
            </p>
            <p className=" lg:hidden flex-wrap text-justify leading-relaxed"> ✦ Got commendable 99.34 Percentile in CUET(UG) 2022  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
