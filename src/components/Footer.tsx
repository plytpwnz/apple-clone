import React from 'react';
import { footerLinks } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs md:text-[15px]">
            More ways to shop:
            <span className="underline text-blue cursor-pointer"> Find an Apple Store </span>
            or
            <span className="underline text-blue cursor-pointer"> other retailer </span>
            near you.
          </p>

          <p className="font-semibold text-gray text-xs md:text-[15px]">Or call 7(XXX)-XXX-XX-XX</p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs md:text-[15px]">
            Copyright @ 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <div className="flex items-center" key={link}>
                <p className="font-semibold text-gray text-xs md:text-[15px] cursor-pointer hover:text-white">
                  {link}
                </p>
                {index !== footerLinks.length - 1 && <span className="mx-2 text-gray"> | </span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
