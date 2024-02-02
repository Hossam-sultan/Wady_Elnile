"use client"
import Image from "next/image"
import React from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"

function Services() {
  return (
    <section
      id="services"
      className="container mx-auto min-h-screen pt-[70px] "
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="row flex flex-col pb-10 "
        >
          <h2 className="section-heading text-gray-300">Our Services</h2>
        </m.div>
      </LazyMotion>
      <div className="row">
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
            <h3>Customer Success</h3>
            <p>
              Customer Success at Wadi El Nile is a department or initiative
              aimed at ensuring customers achieve their desired outcomes with
              the company's products or services.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/icon-7.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>goal of Customer</h3>
            <p>
              The goal of Customer Success is to build strong relationships with
              customers and help them derive maximum value from Wadi El Nile's
              offerings.
            </p>
          </div>
        </div>
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
            <h3>Success team</h3>
            <p>
              The Customer Success team at Wadi El Nile works closely with
              customers to understand their needs and goals.
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
            <h3>provide guidance</h3>
            <p>
              They provide guidance, assistance, and training to customers,
              especially during the onboarding process.
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
            <h3>proactive engagement</h3>
            <p>
              Regular check-ins and proactive engagement with customers are
              conducted to address any concerns and collect feedback.
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
            <h3>customer satisfaction</h3>
            <p>
              Wadi El Nile's Customer Success efforts are focused on driving
              customer satisfaction, retention, and fostering positive customer
              experiences.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="row flex justify-center pl-20">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/icon-5.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>HOME APPLICATIONES</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
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
            <h3>FIRE FIGHTING SYSTEMS</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Services
