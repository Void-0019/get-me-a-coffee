import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white">

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
          <h1 className="text-5xl font-bold">
            About GetMeACoffee
          </h1>

          <img
            src="/coffee.gif"
            width={80}
            alt="Coffee"
          />
        </div>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8">
          GetMeACoffee is a simple crowdfunding platform built to help
          creators connect with their audience and receive direct support.
          Whether you are a developer, designer, artist, content creator,
          or simply someone building something you believe in, your community
          can support your journey with a coffee.
        </p>
      </section>


      {/* What We Do */}
      <section className="border-y border-white/10 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What is GetMeACoffee?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Community */}
            <div className="bg-slate-900/70 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-slate-800 transition">
              <img
                src="/man.gif"
                width={90}
                alt="Creator"
                className="bg-slate-400 rounded-full p-2 mb-5"
              />

              <h3 className="text-xl font-bold mb-3">
                Built for Creators
              </h3>

              <p className="text-gray-400 leading-7">
                Create your own profile and give your supporters a simple
                way to contribute directly to your work and creative journey.
              </p>
            </div>


            {/* Payments */}
            <div className="bg-slate-900/70 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-slate-800 transition">
              <img
                src="/coin.gif"
                width={90}
                alt="Payments"
                className="bg-slate-400 rounded-full p-2 mb-5"
              />

              <h3 className="text-xl font-bold mb-3">
                Simple Payments
              </h3>

              <p className="text-gray-400 leading-7">
                Support your favorite creators through a straightforward
                payment experience designed to keep the process simple
                and convenient.
              </p>
            </div>


            {/* Community Growth */}
            <div className="bg-slate-900/70 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-slate-800 transition">
              <img
                src="/group.gif"
                width={90}
                alt="Community"
                className="bg-slate-400 rounded-full p-2 mb-5"
              />

              <h3 className="text-xl font-bold mb-3">
                Powered by Community
              </h3>

              <p className="text-gray-400 leading-7">
                Your audience plays an important role in your journey.
                Every contribution helps creators continue building,
                experimenting, and growing.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How GetMeACoffee Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <div className="text-4xl font-bold mb-4">01</div>
            <h3 className="text-xl font-bold mb-3">
              Create Your Profile
            </h3>
            <p className="text-gray-400">
              Set up your creator profile and tell your audience about
              yourself and the work you are passionate about.
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold mb-4">02</div>
            <h3 className="text-xl font-bold mb-3">
              Share With Your Fans
            </h3>
            <p className="text-gray-400">
              Share your GetMeACoffee profile with your followers,
              friends, and community.
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold mb-4">03</div>
            <h3 className="text-xl font-bold mb-3">
              Receive Support
            </h3>
            <p className="text-gray-400">
              Your supporters can contribute and help you continue
              working on the things you love.
            </p>
          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="border-y border-white/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/coffee.gif"
            width={75}
            alt="Coffee"
            className="mx-auto mb-5"
          />

          <h2 className="text-3xl font-bold mb-5">
            Our Mission
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            Our mission is to make supporting creators simple and meaningful.
            We believe great ideas can come from anywhere, and with the right
            community behind them, creators can turn those ideas into reality.
          </p>
        </div>
      </section>


      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-5">
          Ready to Support a Creator?
        </h2>

        <p className="text-gray-400 mb-8">
          Find a creator you love and buy them a coffee.
        </p>

        <a
          href="/"
          className="inline-block text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-lg text-sm px-6 py-3 transition"
        >
          Get Started
        </a>
      </section>

    </div>
  );
};

export default About;


export const metadata = {
  title: 'About - Get Me A Coffee',
}