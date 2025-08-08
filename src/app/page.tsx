'use client'
import LoginSection from "@/section/LoginSection";
import { Footer } from "@/section/Footer";
import { ProductShowcase } from "@/section/ProductShowcase";
import BackGroundBeams from '../section/BackGroundBeams';
import NavBar from '../section/NavBar';
import { CardHoverEffectDemo } from "@/section/CardHover";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Home() {
  // const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const loginRef = useRef<HTMLDivElement | null>(null);
  const scrollToLogin = () => {
    if (loginRef.current) {
      setTimeout(() => {
        loginRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      console.log('loginRef.current is null');
    }
  };
  return (
    <>
      <NavBar onLoginClick = {scrollToLogin}/>
      <BackGroundBeams />
      <CardHoverEffectDemo />
      {/* <ProductShowcase/> */}
      <LoginSection loginRef = {loginRef}/>
      <Footer />
    </>
  );
}
