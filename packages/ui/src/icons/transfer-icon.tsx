import * as React from "react";

import { ISvgIcons } from "./type";

export const TransferIcon: React.FC<ISvgIcons> = ({
  className = "fill-current",
  ...rest
}) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} `}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M6.16683 14.6667C4.54183 14.6667 3.16336 14.1007 2.03141 12.9688C0.899468 11.8368 0.333496 10.4583 0.333496 8.83333C0.333496 7.125 0.941135 5.73264 2.15641 4.65625C3.37169 3.57986 4.72933 3.09028 6.22933 3.1875L4.87516 1.83333C4.75016 1.70833 4.68766 1.55903 4.68766 1.38542C4.68766 1.21181 4.75016 1.0625 4.87516 0.9375C5.00016 0.8125 5.14947 0.75 5.32308 0.75C5.49669 0.75 5.646 0.8125 5.771 0.9375L8.22933 3.39583C8.29877 3.46528 8.34739 3.53472 8.37516 3.60417C8.40294 3.67361 8.41683 3.75 8.41683 3.83333C8.41683 3.91667 8.40294 3.99306 8.37516 4.0625C8.34739 4.13194 8.29877 4.20139 8.22933 4.27083L5.771 6.72917C5.646 6.85417 5.50016 6.91319 5.3335 6.90625C5.16683 6.89931 5.021 6.83333 4.896 6.70833C4.771 6.58333 4.7085 6.43403 4.7085 6.26042C4.7085 6.08681 4.771 5.9375 4.896 5.8125L6.29183 4.41667C4.97239 4.38889 3.8578 4.79167 2.94808 5.625C2.03836 6.45833 1.5835 7.52778 1.5835 8.83333C1.5835 10.0972 2.03141 11.1771 2.92725 12.0729C3.82308 12.9688 4.90294 13.4167 6.16683 13.4167H8.04183C8.22239 13.4167 8.37169 13.4757 8.48975 13.5938C8.6078 13.7118 8.66683 13.8611 8.66683 14.0417C8.66683 14.2222 8.6078 14.3715 8.48975 14.4896C8.37169 14.6076 8.22239 14.6667 8.04183 14.6667H6.16683ZM11.5835 14.6667C11.2363 14.6667 10.9411 14.5451 10.6981 14.3021C10.455 14.059 10.3335 13.7639 10.3335 13.4167V10.0833C10.3335 9.73611 10.455 9.44097 10.6981 9.19792C10.9411 8.95486 11.2363 8.83333 11.5835 8.83333H16.5835C16.9307 8.83333 17.2259 8.95486 17.4689 9.19792C17.712 9.44097 17.8335 9.73611 17.8335 10.0833V13.4167C17.8335 13.7639 17.712 14.059 17.4689 14.3021C17.2259 14.5451 16.9307 14.6667 16.5835 14.6667H11.5835ZM11.5835 13.4167H16.5835V10.0833H11.5835V13.4167ZM11.5835 7.16667C11.2363 7.16667 10.9411 7.04514 10.6981 6.80208C10.455 6.55903 10.3335 6.26389 10.3335 5.91667V2.58333C10.3335 2.23611 10.455 1.94097 10.6981 1.69792C10.9411 1.45486 11.2363 1.33333 11.5835 1.33333H16.5835C16.9307 1.33333 17.2259 1.45486 17.4689 1.69792C17.712 1.94097 17.8335 2.23611 17.8335 2.58333V5.91667C17.8335 6.26389 17.712 6.55903 17.4689 6.80208C17.2259 7.04514 16.9307 7.16667 16.5835 7.16667H11.5835Z" />
  </svg>
);
