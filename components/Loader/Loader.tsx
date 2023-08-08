"use client";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color="#2c1ac9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#5c65e7"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
