import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semi-bold text-gray text-xs mb-2">
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>
          <div
            className={`grid grid-cols-2 lg:flex lg:flex-row items-center gap-2`}
          >
            {footerLinks.map((link, i) => (
              <>
                <p key={link} className="font-semibold text-gray text-xs">
                  {link}
                </p>
                {i < footerLinks.length - 1 && (
                  <span className="text-gray text-xs hidden lg:block">|</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
