import { FaGithub } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";

function SocialBar() {
  return (
    <div className="absolute left-4 md:left-10 top-0 h-full z-20 hidden md:flex flex-col items-center ">
      
      <div className="h-25 md:h-48 w-[0.8px] bg-[#ABB2BF]/80 rounded-full"></div>

      <div className="mt-3 flex flex-col items-center gap-5 animate-social-float">
        <a
          className="text-[#ABB2BF] transition duration-300 hover:text-white hover:scale-110"
          href="https://github.com/codeby-umar" target="_blank" rel="noreferrer"
        >
          <FaGithub className="text-[22px] md:text-[28px]" />
        </a>

        <a
          className="text-[#ABB2BF] transition duration-300 hover:text-white hover:scale-110"
          href="https://t.me/Codewithbyumar" target="_blank" rel="noreferrer"
        >
          <BsTelegram className="text-[22px] md:text-[28px]" />
        </a>

        <a
          className="text-[#ABB2BF] transition duration-300 hover:text-white hover:scale-110"
          href="https://figma.com" target="_blank" rel="noreferrer"
        >
          <IoLogoFigma className="text-[22px] md:text-[28px]" />
        </a>
      </div>

      <style>{`
        @keyframes socialFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(4px) rotate(2deg); }
          50% { transform: translateY(8px) rotate(0deg); }
          75% { transform: translateY(4px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .animate-social-float {
          animation: socialFloat 3s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
}

export default SocialBar;