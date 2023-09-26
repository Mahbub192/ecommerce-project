import React from "react";
import facebook from "../../../public/Footer/facebook.png";
import instagram from "../../../public/Footer/instagram.png";
import rss from "../../../public/Footer/rss.png";
import twitter from "../../../public/Footer/twitter.png";
import whatsapp from "../../../public/Footer/whatsapp.png";
import payment from "../../../public/Footer/payment.png";
import logo from "../../../public/Footer/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-neutral mt-10">
      <div className=" pt-12 pb-5 text-center">
        {/* Search field */}
        <div className=" py-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>
            Trade Alert: Delivering the latest product trends and industry
            straight to your inbox
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-around">  
        <div className="footer grid-rows-2 text-neutral-content mt-10 w-3/5 ">
          <nav>
            <header className="footer-title">Get to Know Us</header>
            <a className="link link-hover">About Expert part</a>
            <a className="link link-hover">About Expert part Group</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Investor Relations</a>
          </nav>
          <nav>
            <header className="footer-title">Sell on Anaizan.com</header>
            <a className="link link-hover">Learning Center</a>
            <a className="link link-hover">Partner Program</a>
          </nav>
          <nav>
            <header className="footer-title">Customer Services</header>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Report Abuse</a>
            <a className="link link-hover">Submit a Dispute</a>
            <a className="link link-hover">Policies & Ruless</a>
          </nav>
          <nav>
            <header className="footer-title">Source on Expert part.com</header>
            <a className="link link-hover">All Categories</a>
            <a className="link link-hover">Request for Quotation</a>
            <a className="link link-hover">Regional Channels</a>
            <a className="link link-hover">Ready to Ship</a>
          </nav>
          <nav>
            <header className="footer-title">Apps</header>
            <a className="link link-hover">iPhone</a>
            <a className="link link-hover">Android</a>
          </nav>
        </div>
        <div className="1/5 mt-10 ">
          <div>
            <h1 className="font-bold text-gray-500">Follow Us</h1>
            <div className="flex gap-5 mt-5">
              <Image src={facebook} height={30} alt="" />
              <Image src={instagram} height={30} alt="" />
              <Image src={rss} height={30} alt="" />
              <Image src={twitter} height={30} alt="" />
              <Image src={whatsapp} height={30} alt="" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="mt-5">
            <h1 className="font-bold text-gray-500">Payment Methods</h1>
            <div className="flex gap-5 mt-5">
              <Image src={payment} height={150} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider -my-1"></div>
      <div>
        <h1 className="text-center">Copyright © 2023 Achieve IT Limited. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
