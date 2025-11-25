import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full bg-black h-screen flex items-center justify-center ">
      <Circles
        height={80}
        width={80}
        color="#ff6900" 
        ariaLabel="loading"
      />
    </div>
  );
}
