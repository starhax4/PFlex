const GradientBg = () => {
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 blur-[50px] sm:h-[30rem] sm:w-[30rem] md:h-[40rem] md:w-[40rem] lg:h-[50rem] lg:w-[50rem]"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#gradient-blur)"
          fillOpacity="0.5"
          className="mix-blend-normal"
        />
        <defs>
          <radialGradient
            id="gradient-blur"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset="0.6" stopColor="#7775D6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#1E1E2F" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientBg;
