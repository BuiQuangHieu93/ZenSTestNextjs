"use client";
import React, { useEffect, useState } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie("userCookie");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const generateCookieValue = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let cookieValue = "";

    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      cookieValue += characters[randomIndex];
    }

    return cookieValue;
  };

  const handleAccept = async () => {
    setShowBanner(false);
    const cookie = await generateCookieValue();
    setCookie("userCookie", cookie);
  };

  const handleReject = () => {
    setShowBanner(false);
    setCookie("userCookie", "rejected");
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="bg-[#3c3c3c] p-8 w-full">
      <div className="text-2xl flex justify-center">
        This website uses cookies to improve your browsing experience. Please
        click Accept to continue.
      </div>

      <div className="flex flex-row w-full justify-center mt-4">
        <div className="w-[40%] flex justify-between">
          <button
            onClick={handleAccept}
            className="w-[200px] h-[48px] bg-green-500"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="w-[200px] h-[48px] bg-red-500"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
