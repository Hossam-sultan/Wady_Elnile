"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="hero">
        <div className="container mx-auto h-[80vh] flex flex-col-reverse xl:flex-row justify-around items-center px-4 pt-[100px]">
          <div className="flex flex-col gap-5 flex-1">
            <m.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="shadel  max-w-xl font-serif text-4xl md:text-6xl ]"
            >
              <Image
                src="/brand-1.png"
                width={500}
                height={500}
                alt="hero section image"
                loading="lazy"
                className="object-contain"
              />
            </m.h2>
            <m.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 1,
              }}
              style={{
                position: "absolute",
                bottom: 150,
                width: 2000,
                right: 350,
                transform: "translateX(-50%)",
                maxWidth: "50%",
              }}
              className=" text-gray-2400 font-bold    text-justify "
            >
              Welcome to WADI EL NILE – where metal meets precision, and
              innovation is a way of life. We're not just leaders; we're
              trendsetters in Egyptian sheet metal fabrication and machinery
              solutions. SHADEL is not just a name; it's a vibe. Our Brand Book
              is our playbook, ensuring that every interaction is not just
              consistent but cool, representing the essence of WADI EL NILE.
              Expect more than just services – expect an experience. Join the
              cool side of sheet metal and machinery solutions. Welcome to WADI
              EL NILE, where excellence meets swagger. Let's rock the industry
              together. 🚀
            </m.p>
          </div>
          <m.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              delay: 1,
            }}
            className="wady   flex-1 hidden md:block  "
          >
            <Image
              src="/wady_logos.png" // Adjust the path accordingly
              width={700}
              height={400}
              alt="hero section image"
              loading="lazy"
              className="object-contain"
            />
          </m.div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default Hero
