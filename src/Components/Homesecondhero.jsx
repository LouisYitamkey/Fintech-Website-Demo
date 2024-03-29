import React from 'react'
import styles from '../style'
import Secondvideo from '../video/secondvideo.mp4'
import Button from '@mui/material/Button'
import { BiChevronRight } from 'react-icons/bi'

const Homesecondhero = () => {
  return (
    <div className="w-full h-full mt-12 md:mt-0    ">
      <section
        id="home"
        className={`flex md:px-28  md:flex-row  flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}
        >
          <div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
            <div>
              <span className="md:text-xl text-base ml-4  bg-sky-500 px-5    rounded-full text-white  md:font-bold ">
                {' '}
                Credit Infrastructure
              </span>
              <h1 className=" hidden md:block text-[#093554] md:text-5xl md:pt-5  md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[50px] font-extrabold ">
                Give your customers the ability to borrow on demand.
              </h1>
              <h1 className="md:text-7xl text-[#093554] md:hidden pb-10 pt-6  text-4xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] ">
                {' '}
                Build better payments <br /> experiences{' '}
              </h1>
              <div className="md:hidden mb-10 flex items-center justify-center">
                <video
                  className="w-80 border-8  rounded-3xl border-slate-200 "
                  autoPlay
                  muted
                  loop
                  src={Secondvideo}
                />
              </div>
              <p className="  md:hidden  px-4  text-lg">
                The easiest way to offer consumer loans in your branding. Our
                API-based solution enables you to integrate consumer loans
                directly into your product. <br /> <br /> Our swift application
                process is fully digital, paperless, and mobile, allowing your
                customers to receive a credit decision as fast as 10 minutes.
              </p>
              <span className=" hidden md:block    text-lg">
                The easiest way to offer consumer loans in your branding.Our
                API-based solution enables you to integrate consumer loans
                directly into your product. Our swift application process is
                fully digital, paperless, and mobile, allowing your customers to
                receive a credit decision as fast as 10 minutes.
              </span>

              <div className="md:mt-10 mt-10 mb-5 ">
                <div className="hover:cursor-pointer mb-5 ">
                  {/* First */}
                  <div className="flex ">
                    <div className="md:mr-4 ml-3 md:ml-0 mt-1 md:mt-1">
                      <span className="text-sky-500 ">
                        <i class="fa-solid fa-2xl fa-money-check"></i>
                      </span>
                    </div>
                    <div></div>
                    <p className=" md:pl-1 pl-3   hover:text-sky-500  ">
                      {' '}
                      Loan Origination{' '}
                    </p>

                    <BiChevronRight className="text-blue-400" size={20} />
                  </div>
                  <span className="font-normal  text-[#849aa9] pl-[55px] md:pl-14 ">
                    {' '}
                    Pay-ins, refunds, withdrawals
                  </span>
                </div>

                <div className="hover:cursor-pointer ">
                  {/* Second */}
                  <div className="flex md:mt-5  ">
                    <div className="md:mr-4 ml-3 md:ml-0 mt-1">
                      <span className="text-sky-500">
                        <i class="fa-solid fa-2xl fa-money-check"></i>
                      </span>
                    </div>

                    <p className=" hover:text-sky-500 pl-3  md:pl-1  ">
                      {' '}
                      Loan Disbursement{' '}
                    </p>

                    <BiChevronRight className="text-blue-400" size={20} />
                  </div>
                  <span className="font-normal text-[#849aa9]   pl-[55px] md:pl-14 ">
                    {' '}
                    Disburse Loans to any bank account or <br />{' '}
                    <span className="md:pl-14 pl-16">
                      mobile money wallet.{' '}
                    </span>{' '}
                  </span>
                </div>

                <div className="hover:cursor-pointer">
                  {/* third */}
                  <div className="flex  md:mt-5 mt-5   ">
                    <div className="md:mr-4 ml-3 md:ml-0 mt-1">
                      <span className="text-sky-500">
                        <i class="fa-solid fa-2xl fa-money-check"></i>
                      </span>
                    </div>

                    <p className=" hover:text-sky-500 pl-3 md:pl-1  ">
                      {' '}
                      Embedded Credit{' '}
                    </p>

                    <BiChevronRight className="text-blue-400" size={20} />
                  </div>
                  <span className="font-normal text-[#849aa9]  pl-[55px]  md:pl-14 ">
                    {' '}
                    Ad-hoc and subcription payments
                  </span>
                </div>
                <div className="hover:cursor-pointer">
                  {/* third */}
                  <div className="flex  md:mt-5 mt-5   ">
                    <div className="md:mr-4 ml-3 md:ml-0 mt-1">
                      <span className="text-sky-500">
                        <i class="fa-solid fa-2xl fa-money-check"></i>
                      </span>
                    </div>

                    <p className=" hover:text-sky-500 pl-3 md:pl-1  ">
                      {' '}
                      White-label Mobile Apps{' '}
                    </p>

                    <BiChevronRight className="text-blue-400" size={20} />
                  </div>
                  <span className="font-normal text-[#849aa9]  pl-[55px]  md:pl-14 ">
                    {' '}
                    Full-Featured mobile apps. Works <br />{' '}
                    <span className="md:pl-14 pl-16">
                      {' '}
                      out of the box with the Pavelon Platform.
                    </span>{' '}
                  </span>
                </div>

                <div className=" hidden md:block mt-10 md:mt-10 space-x-5 ">
                  <Button
                    className="  bg-sky-600 text-base   hover:bg-sky-500  text-white px-6 py-2 "
                    variant="outlined"
                  >
                    {' '}
                    Contact Us <BiChevronRight size={30} />{' '}
                  </Button>
                  <Button
                    className="  border-sky-600 text-base hover:text-white  hover:bg-sky-600   px-6 py-3 "
                    variant="outlined"
                  >
                    {' '}
                    Documentation{' '}
                  </Button>
                </div>

                {/* For Mobile */}
                {/* For Mobile */}
                <div className=" pt-10 mb-6 md:mb-0 px-3 md:hidden">
                  <div className="w-full h-full mb-5 ">
                    <button class="fluid ui button blue ">
                      {' '}
                      Start Building{' '}
                    </button>
                  </div>
                  <div className="w-full h-full ">
                    <button class="fluid ui button  "> Get in touch </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className="flex flex-row justify-between items-center w-full"></div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:pt-16 my-5 relative`}
        >
          <div className="hidden md:block pb-5 ">
            <video
              className="w-80 border-8   rounded-3xl border-slate-200 "
              autoPlay
              muted
              loop
              src={Secondvideo}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homesecondhero
