import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Integrations from "@/components/landing/Integrations";
import Features from "@/components/landing/Features";
import AntiBot from "@/components/landing/AntiBot";
import SpeedMetrics from "@/components/landing/SpeedMetrics";
import CodeSnippets from "@/components/landing/CodeSnippets";
import UseCases from "@/components/landing/UseCases";
import DataFlow from "@/components/landing/DataFlow";
import ApiCounters from "@/components/landing/ApiCounters";
import BlogPreview from "@/components/landing/BlogPreview";
import Scalability from "@/components/landing/Scalability";
import Testimonials from "@/components/landing/Testimonials";
import CtaFooter from "@/components/landing/CtaFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Integrations />
    <Features />
    <AntiBot />
    <SpeedMetrics />
    <CodeSnippets />
    <UseCases />
    <DataFlow />
    <ApiCounters />
    <BlogPreview />
    <Scalability />
    <Testimonials />
    <CtaFooter />
  </div>
);

export default Index;
