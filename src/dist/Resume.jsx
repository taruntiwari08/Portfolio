import React from "react";

function Resume() {
  return (
    <div className="flex-col bg-slate-50 max-w-full max-h-full my-0 animate-slideUp ">
      <div className="flex md:font-light text-3xl font-bold  md:text-5xl md:ml-32 py-5 ml-5  md:py-16 font-roboto text-gray-900">
        {" "}
        Resume
      </div>

      <label htmlFor="Education">
        <div className="flex md:justify-evenly flex-wrap">
          <div className="flex font-semibold text-xl md:text-3xl pr-52 py-3 ml-5 md:ml-9  md:py-1 font-roboto text-gray-900">
            Education
          </div>

          <div className="md:flex-row flex-col md:space-y-12 space-y-4  ml-5">
            <div className="md:bg-slate-50 bg-slate-100 rounded-lg px-1 md:w-auto w-[320px] pb-2  md:shadow-none shadow-lg ">
              <div className="flex md:flex-row flex-col  ">
                <span className="font-roboto font-light md:text-base text-sm md:px-14 my-1">
                  2022 - 2026
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold md:text-xl text-base md:py-5 md:px-6 ">
                    {" "}
                    Madhav Institute of Technology & Science, Gwalior (M.P) |
                    <br />
                    <span className=" font-roboto font-light md:text-base test-sm md:py-14 md:px-6  italic">
                      {" "}
                      Btech in Artificial Intelligence & Robotics
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs md:py-14 md:px-6  italic">
                      {" "}
                      CGPA : 8
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:bg-slate-50 bg-slate-100 rounded-lg px-1 md:w-auto w-[320px] pb-2  md:shadow-none shadow-lg">
              <div className="flex md:flex-row flex-col  ">
                <span className="font-roboto font-light md:text-base text-sm md:px-14 my-1">
                  2021 - 2022
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold md:text-xl text-base md:py-5 md:px-6 ">
                    {" "}
                    Kendriya Vidyalaya No.4, AFS Mahrajpura, Gwalior |
                    <br />
                    <span className=" font-roboto font-light md:text-base test-sm md:py-14 md:px-6  italic">
                      {" "}
                      Higher Secondary Education ( 12th Grade )
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs md:py-14 md:px-6  italic">
                      {" "}
                      Percentage : 90% ( CBSE Board )
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:bg-slate-50 bg-slate-100 rounded-lg px-1 md:w-auto w-[320px] pb-2  md:shadow-none shadow-lg ">
              <div className="flex md:flex-row flex-col  ">
                <span className="font-roboto font-light md:text-base text-sm md:px-14 my-1">
                  2019 - 2020
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold md:text-xl text-base md:py-5 md:px-6 ">
                    {" "}
                    Kendriya Vidyalaya No.4, AFS Mahrajpura, Gwalior |
                    <br />
                    <span className=" font-roboto font-light md:text-base test-sm md:py-14 md:px-6  italic">
                      {" "}
                      Secondary Education ( 10th Grade )
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs md:py-14 md:px-6  italic">
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
      <hr className="border-gray-600 md:m-16 md:flex hidden " />

      <label htmlFor="Skills & Expertise">
        <div className="flex md:justify-around md:flex-row flex-col  md:mr-32 ">
          <div className="flex font-semibold text-xl  md:text-3xl md:-ml-[150px] ml-5 py-3  font-roboto text-gray-900">
            <div className="flex md:flex-col flex-row md:mr-12 mt-3">
              <span> Skills </span> <span class="p-1"></span>{" "}
              <span> & Expertise</span>{" "}
            </div>
          </div>

          <div className="md:flex-row flex-col md:space-y-4  md:-ml-24">
            <div className="md:bg-slate-50 bg-slate-100 rounded-lg px-1 md:w-auto w-[320px] mx-5 md:mr-5 md:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold md:text-xl text-base  py-2  ">
                {" "}
                Computer languages |
                <br />
                <div className=" font-roboto font-light md:text-base text-xs md:py-4 py-1  italic">
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
            <div className="md:bg-slate-50 bg-slate-100 rounded-lg px-1 md:w-auto w-[320px] mx-5 md:mr-5 my-3 md:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold md:text-xl text-base  py-2  ">
                {" "}
                Software Packages |
                <br />
                <div className=" font-roboto font-light md:text-base text-xs md:py-4 py-1  italic">
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
            <div className="md:bg-slate-50 bg-slate-100 rounded-lg px-1 md:w-auto w-[320px] mx-5 md:mr-5 my-3 md:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold md:text-xl text-base  py-2  ">
                {" "}
                Languages Known |
                <br />
                <div className=" font-roboto font-light md:text-base text-xs md:py-4 py-1  italic">
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
      <hr className="border-gray-600 md:m-16 md:flex hidden " />

      <label htmlFor="Achievments"></label>
      <div className="flex md:justify-around md:flex-row flex-col  ">
        <div className="flex font-semibold text-xl  md:text-3xl  md:mt-6 py-1 ml-6  md:-ml-10 font-roboto text-gray-900">
          Achievments
        </div>

        <div className="flex-col md:bg-slate-50 bg-slate-100 rounded-lg px-5 py-2 md:w-auto w-[320px] mx-5 md:mr-5 my-3 mb-12 md:shadow-none shadow-lg ">
          <div className=" font-roboto font-light md:text-base text-sm py-2  italic ">
            {" "} <p className="md:flex hidden ml-32">
            ✦ &nbsp; Achieved 90 Perecentage in CBSE Class 12 Board Exam <br />{" "}
            &nbsp; &nbsp; &nbsp; and secured 2nd rank at Kendriya Vidyalaya No.
            4. </p>
            <p className=" md:hidden flex-wrap text-justify leading-relaxed"> ✦ Achieved 90 Perecentage in CBSE Class 12 Board Exam and secured 2nd rank at Kendriya Vidyalaya No.
            4. </p>
          </div>

          <div className=" font-roboto font-light md:text-base text-sm py-2  italic ">
            {" "} <p className="md:flex hidden ml-32">
            ✦ &nbsp; Achieved 88 Perecentage in CBSE Class 10 Board Exam <br />{" "}
            &nbsp; &nbsp; &nbsp; and secured 3nd rank at Kendriya Vidyalaya No.
            4. </p>
            <p className=" md:hidden flex-wrap text-justify leading-relaxed"> ✦ Achieved 88 Perecentage in CBSE Class 10 Board Exam and secured 3nd rank at Kendriya Vidyalaya No.
            4. </p>
          </div>
          <div className=" font-roboto font-light md:text-base text-sm py-2  italic ">
            {" "}
            <p className="md:flex hidden ml-32">
            ✦ &nbsp; Got commendable 99.34 Percentile in CUET(UG) 2022 
            </p>
            <p className=" md:hidden flex-wrap text-justify leading-relaxed"> ✦ Got commendable 99.34 Percentile in CUET(UG) 2022  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
