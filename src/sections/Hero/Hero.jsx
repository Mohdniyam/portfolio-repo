import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import img from "../../assets/images/moaaz_img.JPG";
import gitHubSvg from "../../assets/icons/gitHub.svg";
import leetCodeSvg from "../../assets/icons/leetCode.svg";
import linkedInSvg from "../../assets/icons/linkedIn.svg";
import downloadSvg from "../../assets/icons/download.png";
import resumePDF from "../../assets/resume/mohd_niya_mul_haque.pdf";
import { removeBackgroundAPI } from "../../api/removeBg";

const Hero = () => {
  const DEFAULT_PROFILE = "https://media.licdn.com/dms/image/v2/D4E03AQFtql2r7J3xhg/profile-displayphoto-crop_800_800/B4EZ.vYkTpJIAI-/0/1785353882922?e=1788393600&v=beta&t=SgrjaZBh_bnTzynvZsmiWnUAuxGcy5rb_to_ol8lWZg";
  const [processedImage, setProcessedImage] = useState(DEFAULT_PROFILE);
  const [copied, setCopied] = useState(false); // ✅ state for copy status

  const heroData = data.Hero?.[0];
  const profileName = heroData?.name || "Mohd Niya Mul Haque";
  const profileDescription =
    heroData?.description ||
    "Full Stack Software Engineer building scalable SaaS, e-commerce and cloud applications.";
  const emailAddress = heroData?.email || "";

  useEffect(() => {
    const processImage = async () => {
      try {
        const imageURL = await removeBackgroundAPI(heroData?.imageURL || DEFAULT_PROFILE);
        if (imageURL) setProcessedImage(imageURL);
      } catch (error) {
        console.error("Error removing background:", error);
      }
    };
    processImage();
  }, [heroData?.imageURL]);

  const defaultLinkedIn =
    "https://www.linkedin.com/in/mohd-niya-mul-haque-cse/?trk=public_profile_browsemap";

  const linkUrl = heroData?.linkedIn || defaultLinkedIn;

  const handleCopyEmail = () => {
    if (!emailAddress) return;
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="hero"
      className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-[22px] bg-gradient-to-b from-white via-[#fcfbfa] to-[#f4f2ee] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:rounded-[28px] sm:p-7 lg:max-w-[360px]"
    >
      {/* Profile image box */}
      <div className="rounded-[24px] border border-black/5 bg-gradient-to-br from-[#111111] via-[#242424] to-[#0f0f0f] p-2 shadow-inner">
        <img
          src={processedImage || img}
          alt={profileName}
          className="h-52 w-44 rounded-[18px] object-cover sm:h-60 sm:w-56 lg:h-64 lg:w-60"
        />
      </div>

      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500">
          Full Stack Software Engineer
        </p>
        <h2 className="md:text-[32px] xxs:text-[28px] font-bold text-black mt-2">
          {profileName}
        </h2>
        <p className="mt-2 text-[13px] uppercase tracking-[0.25em] text-gray-500">
          Node.js • React • AWS
        </p>
      </div>

      <button
        onClick={handleCopyEmail}
        className="flex items-center gap-2 bg-[#111111] hover:bg-[#222222] text-sm px-3 py-1.5 rounded-full text-white transition-all duration-200"
      >
        {copied ? "Copied!" : "Copy Email"}
      </button>

      <p className="text-gray-600 text-center text-[14px] leading-6 px-2">
        {profileDescription}
      </p>

      <div className="flex justify-center items-center gap-5 pt-1">
        <a
          href={heroData?.leetCode}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 transition hover:bg-black/5"
          aria-label="Visit LeetCode profile"
        >
          <img src={leetCodeSvg} alt="LeetCode" className="w-6 h-6" />
        </a>
        <a
          href={heroData?.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 transition hover:bg-black/5"
          title="View my GitHub profile (login may be required)"
          aria-label="Visit GitHub profile"
        >
          <img src={gitHubSvg} alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 transition hover:bg-black/5"
          title="View my LinkedIn profile (login may be required)"
          aria-label="Visit LinkedIn profile"
        >
          <img src={linkedInSvg} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a
          href={resumePDF}
          download="Mohd_Niya_Mul_Haque_Resume.pdf"
          className="rounded-full p-3 transition hover:bg-black/5"
          title="Download Resume"
          aria-label="Download resume"
        >
          <img src={downloadSvg} alt="Resume" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
