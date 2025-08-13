import Comparison from "@/components/Comparison";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import OurClients from "@/components/OurClients";
import Review from "@/components/Review";
import Services from "@/components/Services";
import ShortForm from "@/components/ShortForm";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIZA Video Editing",
  description: "AlphaVideoEdit.com – Boost your brand reach with expert video editing services. We specialize in transforming raw footage into impactful short-form content, long-form videos, and promotional edits like 2D explainers and app promos. Trusted by 30+ brands and creators, our tailored solutions ensure your videos captivate audiences and drive results. Elevate your content with professionally edited videos that make an impact. Book a call today!",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <OurClients />
      <Services />
      <ShortForm />
      <Comparison />
      <Review />
      <Faqs/>
    </>
  );
}
