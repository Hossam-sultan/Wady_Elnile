"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"

function AllMachines() {
  return (
    <div className="">
      <LazyMotion features={domAnimation}>
        <section
          id="allMachines"
          className="container mx-auto py-[120px] flex flex-col gap-20 px-4"
        >
          <m.div
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="section-heading text-gray-300">Machines</h1>
            {/* <p className="text-gray-900 text-center translate-y-[-20px] lg:translate-y-[-60px] md:font-semibold text-xs md:text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aliquam
            </p> */}
          </m.div>
          <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
            {
              /* <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.1,
              }}
              className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={"/atelier-cover-1920x1080 - new.jpg"}
                  alt="image"
                  width={590}
                  height={150}
                  className=""
                />
              </div>
              {/* <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Products</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Recusandae doloremque corrupti blanditiis harum quas alias,
                  minima
                </p>
                <Link
                  href={"/product"}
                  className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
                >
                  See More
                </Link>
              </div> } }
            </m.div>*/
              <m.div
                initial={{ y: 250 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 0.15,
                }}
                className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="overflow-hidden md:h-[300px]">
                  <Image
                    src={"/mmm.jpeg"}
                    alt="image"
                    width={900}
                    height={150}
                    className=""
                  />
                </div>
                <div className="flex flex-col gap-6 px-6 pb-8">
                  <h2 className="text-2xl font-bold">Machines</h2>
                  <p>
                    Discover cutting-edge machinery solutions—innovative,
                    efficient, and customizable, <br /> designed for precision
                    and reliability, transforming industries with advanced
                    technology and durability.
                  </p>
                  <Link
                    href={"/machine"}
                    className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
                  >
                    See More
                  </Link>
                </div>
              </m.div>
            }
          </div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="row"
          >
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-1.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>GOVERNMENTAL PROJECTS</h3>
                <p>
                  Explore government tenders and projects related to
                  infrastructure development, defense, or public services.
                  Showcase your machinery and sheet metal solutions as reliable
                  and compliant with government standards. Highlight your
                  ability to meet specific project requirements and deadlines.
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-2.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>MACHINERY SOLIUTION</h3>
                <p>
                  Offer a comprehensive range of machinery for various
                  industries such as manufacturing, construction, and
                  automotive. Emphasize the efficiency, durability, and advanced
                  features of your machinery. Provide customization options to
                  meet specific client needs.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-6.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>FIRE FIGHTING SYSTYM</h3>
                <p>
                  Offer a range of fire-fighting equipment and systems for
                  industrial, commercial, and residential applications.
                  Emphasize compliance with safety standards and regulations.
                  Highlight any advanced technologies or innovative features in
                  your fire-fighting
                </p>
              </div>
            </div>
          </m.div>
        </section>
      </LazyMotion>
    </div>
  )
}

export default AllMachines
