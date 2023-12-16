import Image from "next/image";
import Header from "@/components/home_page/Header/Header";
import Hero_illustration from "@/assets/images/home_page/Hero Illustration.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full h-full bg-gradient-to-b from-[#CECECE0D] to-[#0F294100] items-center">
        <div className="h-[596px] grid grid-cols-2 pt-24 px-24">
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <div className="items-center mb-4">
                <h1 className="mb-4 w-[320px] text-2xl font-semibold text-[#555555]">
                  Easy, reliable & a dynamic workspace for your teams.
                </h1>
                <Link href="/signup">
                  <button className="items-center px-9 py-3 rounded-md bg-[#1E5282] hover:bg-[#246098] text-white text-sm">
                    <div>Get Started free</div>
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-center">
              <Image
                src={Hero_illustration}
                width={280}
                height={100}
                alt="Hero_illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
