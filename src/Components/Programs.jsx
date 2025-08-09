import React from "react";
import { PiArrowCircleUpBold } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Cardio Training",
      img: "/Images/cardio.webp",
      description:
        "Boost your stamina and heart health with our high-intensity cardio workouts including treadmill, cycling, and HIIT sessions.",
    },
    {
      title: "Strength Training",
      img: "/Images/Strength.jpg",
      description:
        "Build lean muscle, improve core strength, and increase endurance with guided weightlifting and resistance programs.",
    },
    {
      title: "Yoga & Flexibility",
      img: "/Images/yoga.jpg",
      description:
        "Achieve mental peace and physical flexibility with yoga classes including Vinyasa, Hatha, and guided stretching routines.",
    },
    {
      title: "Functional Machines",
      img: "/Images/machines.jpg",
      description:
        "Utilize advanced gym machines designed for safe, effective workouts focusing on muscle targeting and posture correction.",
    },
    {
      title: "Boxing & MMA",
      img: "/Images/boxing.jpg",
      description:
        "Train like a fighter with cardio boxing, punching bags, footwork drills, and basic MMA workouts to sharpen your reflexes.",
    },
  ];

  return (
    <div className="w-full bg-black text-white px-4 py-12 font-[myParafont] relative">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white text-2xl hover:text-[#e4ff1a] transition-all duration-200 z-999"
        aria-label="Go back"
      >
        <FaArrowLeft />
      </button>

      {/* Section Header */}
      <div className="text-center mb-12 mt-[2%]">
        <h1 className="text-4xl sm:text-5xl font-bold font-[myHeadingfont] uppercase text-[#e4ff1a]">
          our training programs
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
          Whether you're a beginner or a seasoned athlete, Bolt offers a range of
          programs tailored to help you reach your unique fitness goals.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {programs.map((prog, index) => (
          <div
            key={index}
            className="program-card bg-zinc-900 rounded-2xl overflow-hidden shadow-md group hover:scale-[1.02] transition duration-300"
          >
            {/* Image with Tag */}
            <div
              className="relative h-[200px] sm:h-[230px] bg-cover bg-center"
              style={{ backgroundImage: `url(${prog.img})` }}
            >
              <div className="absolute top-0 left-0 bg-[#e4ff1a] w-12 h-12 sm:w-14 sm:h-14 rounded-br-2xl flex items-center justify-center">
                <PiArrowCircleUpBold className="text-black text-2xl sm:text-3xl rotate-45" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl sm:text-2xl font-semibold font-[myHeadingfont] text-[#e4ff1a] mb-2">
                {prog.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {prog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
