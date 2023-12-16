import TimeSheet_miniLogo from "@/assets/images/signup-page/Time-sheet-Logo-Header.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed w-full grid grid-cols-3 bg-white shadow-md px-14 pt-4">
      <Link href="/">
        <Image
          src={TimeSheet_miniLogo}
          width={150}
          height={80}
          alt="timeSheet_logo"
        />
      </Link>
      <div>
        <div className="grid grid-cols-8 gap-2 text-xs text-[#555555] font-semibold items-center pt-3">
          <div className="col-span-3 px-2 group cursor-pointer">
            <div className="w-fit pb-[25px] border-3-b border-blue-600">
              Why Timesheets ?
            </div>
            <div className="border-b-2 w-[105px] border-[#555555] transition ease-in-out group-hover:opacity-[100%] opacity-0"></div>
          </div>
          <div className="col-span-2 group cursor-pointer">
            <div className="w-fit pb-[25px] border-3-b border-blue-600">
              Customers
            </div>
            <div className="border-b-2 w-[65px] border-[#555555] transition ease-in-out group-hover:opacity-[100%] opacity-0"></div>
          </div>
          <div className="col-span-1 group cursor-pointer">
            <div className="w-fit pb-[25px] border-3-b border-blue-600">
              Pricing
            </div>
            <div className="border-b-2 w-[43px] border-[#555555] transition ease-in-out group-hover:opacity-[100%] opacity-0"></div>
          </div>
          <div className="col-span-2 ml-4 group cursor-pointer">
            <div className="w-fit pb-[25px]">
              <div>Contact</div>
            </div>
            <div className="border-b-2 w-[48px] border-[#555555] transition ease-in-out group-hover:opacity-[100%] opacity-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center">
          <Link
            href="/login"
            className="mt-3 mr-8 text-xs font-semibold cursor-pointer text-[#555555] group"
          >
            <div className="w-fit pb-[25px]">Login</div>
            <div className="border-b-2 w-[35px] border-[#555555] transition ease-in-out group-hover:opacity-[100%] opacity-0"></div>
          </Link>
          <div className="flex items-center mb-4">
            <Link
              href="/signup"
              className="flex items-center px-8 py-2.5 bg-[#1E5282] hover:bg-[#246098] rounded text-white text-sm"
            >
              <div>Get Started free</div>

              <svg
                className="ml-2"
                width="18"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="#FFFFFF"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
