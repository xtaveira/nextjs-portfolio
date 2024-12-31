import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center ">
      <Header />
      {/* <Separator /> */}
      <Hero />
    </div>
  );
}
