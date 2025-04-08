import React from "react";

const Steper = ({ step }: { step: number }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {step === 1 && (
          <div className="flex items-center">
            <Step number={1} filled />
            <Line />
            <Step number={2} />
            <Line />
            <Step number={3} />
          </div>
        )}
        {step === 2 && (
          <div className="flex items-center">
            <Step number={1} filled />
            <Line filled />
            <Step number={2} filled />
            <Line />
            <Step number={3} />
          </div>
        )}
        {step === 3 && (
          <div className="flex items-center">
            <Step number={1} filled />
            <Line filled />
            <Step number={2} filled />
            <Line filled />
            <Step number={3} filled />
          </div>
        )}
        <div className="mt-2 flex gap-20 font-medium">
          <p>Site Details</p>
          <p className="">Personal Details</p>
          <p className="">Meta Details</p>
        </div>
      </div>
    </div>
  );
};

const Step = ({ filled, number }: { filled?: boolean; number: number }) => {
  return (
    <div
      className={`flex size-10 items-center justify-center rounded-full border border-gray-300 font-bold ${filled ? "border-none bg-primary text-white transition-all" : ""}`}
    >
      {number}
    </div>
  );
};

const Line = ({ filled }: { filled?: boolean }) => {
  return (
    <div
      className={`h-1 w-40 bg-gray-300 ${filled ? "bg-primary transition-all" : ""} `}
    ></div>
  );
};

export default Steper;
