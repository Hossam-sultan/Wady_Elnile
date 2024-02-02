"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"

function AllProducts() {
  return (
    <div className="bg-gray-100">
      <LazyMotion features={domAnimation}>
        <section
          id="allProduct"
          className="container mx-auto py-[120px] flex flex-col gap-20 px-4"
        >
          <m.div
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="section-heading text-gray-300">Products</h1>
            {/* <p className="text-gray-900 text-center translate-y-[-20px] lg:translate-y-[-60px] md:font-semibold text-xs md:text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aliquam
            </p> */}
          </m.div>
          <m.div
            initial={{ y: 250 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              delay: 0.1,
            }}
            className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden w-[70%]"
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
              <h2 className="text-2xl font-bold">Products</h2>
              <p>
                Explore our innovative, high-quality products—precision
                machinery, durable sheet metal, and advanced fire-fighting
                systems—customizable for efficient solutions in diverse
                industries.
              </p>
              <Link
                href={"/product"}
                className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
              >
                See More
              </Link>
            </div>
          </m.div>

          {/* <m.div
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
                  src={"/gettyimages-159758712-612x612.jpg"}
                  alt="image"
                  width={590}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Machines</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Recusandae doloremque corrupti blanditiis harum quas alias,
                  minima
                </p>
                <Link
                  href={"/machine"}
                  className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
                >
                  See More
                </Link>
              </div>
            </m.div> */}
          <div className="row">
            {/* <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-7.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>MEDICAL SUPPLIES</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div> */}
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-3.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>HOTEL SUPPLIES</h3>
                <p>
                  Provide a diverse catalog of supplies catering to the
                  hospitality industry. Include items such as room amenities,
                  linens, and other essentials. Highlight the quality and
                  durability of your products to meet the rigorous demands of
                  the hotel industry.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-8.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>KITCHEN EQUIPMENT</h3>
                <p>
                  Showcase a variety of commercial kitchen equipment for
                  restaurants, hotels, and other food establishments. Highlight
                  energy efficiency, ease of use, and compliance with hygiene
                  standards. Provide maintenance and training support to ensure
                  optimal performance.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={"/icon-4.png"}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>ELECTRIC PANAL</h3>
                <p>
                  Offer a range of electrical panels and solutions for
                  industrial and commercial applications. Emphasize safety
                  features, reliability, and adherence to electrical codes and
                  standards. Provide customization options to accommodate
                  different facility requirements. In your marketing materials,
                  focus on:
                </p>
              </div>
            </div>
          </div>
        </section>
      </LazyMotion>
    </div>
  )
}

export default AllProducts
