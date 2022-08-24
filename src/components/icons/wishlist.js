const WishList = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_39_32)">
        <path
          d="M13.9922 3.33334C8.61166 3.33334 5 8.25895 5 14.3418C5 21.2452 13.5265 29.4929 20.8312 35C28.1385 29.4929 36.5657 21.1127 36.665 14.3418C36.7541 8.25895 33.2722 3.33334 27.8916 3.33334C25.5959 3.33334 23.267 4.70652 20.8312 7.45865C18.3955 4.70652 16.288 3.33334 13.9922 3.33334Z"
          stroke="black"
          stroke-width="2"
        />
        {/* <path d="M17.8 30.8C17.8 32.7096 18.5586 34.5409 19.9088 35.8912C21.2591 37.2414 23.0904 38 25 38C26.9095 38 28.7409 37.2414 30.0912 35.8912C31.4414 34.5409 32.2 32.7096 32.2 30.8C32.2 28.8904 31.4414 27.0591 30.0912 25.7088C28.7409 24.3586 26.9095 23.6 25 23.6C23.0904 23.6 21.2591 24.3586 19.9088 25.7088C18.5586 27.0591 17.8 28.8904 17.8 30.8Z" fill="#FF0000"/> */}
      </g>
      <defs>
        <clipPath id="clip0_39_32">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { WishList };