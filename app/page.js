import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4">
        <div className="flex gap-2 font-bold text-5xl justify-center items-center">Buy Me a Coffee <span><img src="/coffee.gif" width={120} alt="" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <div className="flex gap-2">
          <Link href={"/login"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Start Here</button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read More</button>
          </Link>
        </div>
      </div>

      <div className="divider bg-white h-0.5 opacity-5"></div>

      <div className="text-white container mx-auto pb-16 pt-14">
        <h2 className="text-3xl  font-bold text-center mb-15">Support the Creators You Love</h2>
        <div className="flex gap-5">
          <div className="item w-1/3 space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="man.gif" alt="" />
            <p className="font-bold">Support from Your Community</p>
            <p className="text-center">Your fans and followers can support your creative journey by contributing directly to your work.</p>
          </div>
          <div className="item w-1/3 space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="coin.gif" alt="" />
            <p className="font-bold">Simple & Secure Payments</p>
            <p className="text-center">Receive financial support from your audience through a simple, secure, and convenient payment experience.</p>
          </div>
          <div className="item w-1/3 space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="group.gif" alt="" />
            <p className="font-bold">Grow with Your Fans</p>
            <p className="text-center">Build a stronger connection with your community and turn your audience’s support into opportunities to grow.</p>
          </div>
        </div>
      </div>

      <div className="divider bg-white h-0.5 opacity-5"></div>


      <div className="text-white container mx-auto pb-20 pt-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Connect With Me
        </h2>

        <div className="flex gap-5 justify-center flex-wrap">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/void_0019/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex flex-col justify-center items-center gap-3"
          >
            <img
              src="/instagram.gif"
              width={70}
              alt="Instagram"
            />
            <p className="font-bold text-lg">Instagram</p>
            <p className="text-sm text-gray-400">@void_0019</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/https://tinyurl.com/bd62x73c"
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex flex-col justify-center items-center gap-3"
          >
            <img
              src="/linkedin.gif"
              width={70}
              alt="LinkedIn"
            />
            <p className="font-bold text-lg">LinkedIn</p>
            <p className="text-sm text-gray-400"></p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/void-0019"
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex flex-col justify-center items-center gap-3"
          >
            <img
              src="/github.gif"
              width={70}
              alt="GitHub"
            />
            <p className="font-bold text-lg">GitHub</p>
            <p className="text-sm text-gray-400">@void_0019</p>
          </a>


        </div>
      </div>
    </>
  );
}
