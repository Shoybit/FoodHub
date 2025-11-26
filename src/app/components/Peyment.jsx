/* eslint-disable @next/next/no-img-element */
"use client";

import { SiVisa, SiMastercard } from "react-icons/si";

export default function Payment() {
  const paymentMethods = [
    {
      name: "bKash",
      icon: "/unnamed.png",
      type: "mobile",
      color: "#E2136E"
    },
    {
      name: "Nagad",
      icon: "/download.jpg", 
      type: "mobile",
      color: "#F8A01C"
    },
    {
      name: "Rocket",
      icon: "/download (1).jpg",
      type: "mobile", 
      color: "#4A90E2"
    },
    {
      name: "Visa",
      icon: <SiVisa className="text-3xl" />,
      type: "card",
      color: "#1A1F71"
    },
    {
      name: "Mastercard",
      icon: <SiMastercard className="text-3xl" />,
      type: "card",
      color: "#EB001B"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="w-11/12 mx-auto px-4">

        <div className=" mb-16">
          <h2 className="text-3xl font-bold  border-l-5 border-[#ff6900] pl-2 ">
            Secure Payment Methods
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
          {paymentMethods.map((method, index) => (
            <div
              key={method.name}
              className="group relative"
            >
              <div className="
                relative p-8 rounded-2xl 
                border border-gray-200 
                shadow-sm hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-2
                group-hover:border-gray-300
                h-full flex flex-col items-center justify-center
                backdrop-blur-sm
              ">

                <div 
                  className="
                    w-16 h-16 rounded-2xl 
                    flex items-center justify-center
                    mb-4
                    transition-all duration-300
                    group-hover:scale-110
                  "
                  style={{ 
                    backgroundColor: method.type === 'mobile' ? method.color : 'transparent'
                  }}
                >
                  {typeof method.icon === 'string' ? (
                    <img 
                      src={method.icon} 
                      alt={method.name}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <div 
                      className={
                        method.name === 'Visa' ? 'text-[#242457] bg-amber-400 rounded-2xl w-full flex justify-center ' : 
                        method.name === 'Mastercard' ? 'text-[#EB001B] bg-white rounded-2xl w-full flex justify-center' : ''
                      }
                    >
                      {method.icon}
                    </div>
                  )}
                </div>

                <p className="font-semibold  text-center">
                  {method.name}
                </p>

                <span className={`
                  absolute top-3 right-3 
                  px-2 py-1 rounded-full text-xs font-medium
                  ${method.type === 'mobile' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                  }
                `}>
                  {method.type}
                </span>
              </div>

              <div 
                className="
                  absolute inset-0 rounded-2xl 
                  bg-linear-to-r opacity-0 
                  group-hover:opacity-10 
                  transition-opacity duration-300 
                  -z-10 blur-xl
                "
                style={{ 
                  background: method.type === 'mobile' 
                    ? `linear-gradient(135deg, ${method.color}30, #00000030)` 
                    : `linear-gradient(135deg, ${method.color}30, #00000030)`
                }}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}