import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bottom-0 left-0 w-full pb-8 bg-blue-950 text-white">
      <div className="px-8 py-4 flex flex-wrap gap-10">
        <div className="pt-6 md:w-1/3">
          <p className="text-2xl font-bold text-white">Gadget Store</p>
          <p className="pt-2 text-sm text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ipsam! Eligendi
              quibusdam impedit labore consequatur harum.</p>
          <div className="ml-2 mt-4">
           <ul className="list-none flex gap-4">
            <li className="p-2 rounded-full bg-slate-100"> 
            <Link to="/"><FaFacebook className="text-zinc-950 text-lg"/></Link></li>
            <li className="p-2 rounded-full bg-slate-100">  
            <Link to="/"><FaWhatsapp className="text-zinc-950 text-lg"/></Link></li>
             <li className="p-2 rounded-full bg-slate-100"> 
             <Link to="/"><FaInstagram className="text-zinc-950 text-lg"/></Link></li>
              <li className="p-2 rounded-full bg-slate-100"> 
              <Link to="/"><FaXTwitter className="text-zinc-950 text-lg"/></Link></li>
           </ul>
          </div>
        </div>
        <div className="pt-6">
          <p className="text-lg font-bold text-white">Quick Links</p>
          <ul className="pt-2 list-none leading-8">
            <li> 
            <Link to="/" className="text-slate-300 hover:text-blue-300">Home </Link>
            </li>
            <li> 
            <Link to="/products" className="text-slate-300 hover:text-blue-300">Product </Link>
            </li>
            <li> 
            <Link to="/services" className="text-slate-300 hover:text-blue-300">Service</Link>
            </li>
            <li> 
            <Link to="/login" className="text-slate-300 hover:text-blue-300">Login</Link>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <p className="text-lg font-bold text-white">Merk Available</p>
          <ul className="pt-2 list-none leading-8">
            <li> 
            <Link to="/products" className="text-slate-300 hover:text-blue-300">Vivo </Link>
            </li>
            <li> 
            <Link to="/products" className="text-slate-300 hover:text-blue-300">Oppo </Link>
            </li>
            <li> 
            <Link to="/products" className="text-slate-300 hover:text-blue-300">Samsung </Link>
            </li>
            <li> 
            <Link to="/products" className="text-slate-300 hover:text-blue-300">Redmi </Link>
            </li>
            <li> 
            <Link to="/products" className="text-slate-300 hover:text-blue-300">Realme </Link>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <p className="text-lg font-bold text-white">Contact</p>
          <ul className="pt-2 list-none leading-8">
            <li className="text-slate-300"><span className="text-white">Phone : </span>  +62 123 456 789
            </li>
            <li className="text-slate-300"><span className="text-white">Email :</span> OrangGantenk@gmail.com
            </li>
            <li className="text-slate-300"><span className="text-white">Address :</span> Jakarta, Indonesia
            </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Footer;
