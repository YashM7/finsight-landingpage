"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
    <a href="#pricing" id="pricing" />
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Pricing That Fits Your Freelance Journey"
          paragraph="Choose the plan that works best for you. Whether you're just starting out or ready to take your freelance business to the next level."
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "0" : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Best for individual freelancers just getting started"
          >
            <OfferList text="Track income & expenses" status="active" />
            <OfferList text="View transaction history" status="active" />
            <OfferList text="Organize transactions by category" status="active" />
            <OfferList text="Download basic financial reports" status="active" />
            <OfferList text="Access on web & mobile" status="active" />
            <OfferList text="Email support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "12" : "108"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For serious freelancers who need more power and flexibility"
          >
            <OfferList text="Everything in Starter" status="active" />
            <OfferList text="Unlimited clients & projects" status="active" />
            <OfferList text="Advanced financial reports" status="active" />
            <OfferList text="Recurring income/expense tracking" status="active" />
            <OfferList text="Export CSV & PDF reports" status="active" />
            <OfferList text="Priority email support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Studio"
            price={isMonthly ? "24" : "216"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For freelancers managing multiple income streams or a small team"
          >
            <OfferList text="Everything in Pro" status="active" />
            <OfferList text="Multi-user access (up to 3 collaborators)" status="active" />
            <OfferList text="Team transaction management" status="active" />
            <OfferList text="Custom report templates" status="active" />
            <OfferList text="Client-ready dashboards" status="active" />
            <OfferList text="Dedicated support channel" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    </>
  );
};

export default Pricing;
