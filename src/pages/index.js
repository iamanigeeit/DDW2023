import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import LinkCardGrid from "@site/src/components/LinkCardGrid";
import LinkCard from "@site/src/components/LinkCard";
import SubjectCard from "@site/src/components/SubjectCard";
import styles from "./index.module.css";
import ChatBaseBubble from "../components/ChatBaseBubble";
const homepageCardsStyle = {
  // display: "flex",
  // alignItems: "center",
  padding: "0 2rem 2rem 2rem",
  width: "100%",
};

const gs_1 = require("@site/static/assets/icons/sort-1.svg").default;
const gs_2 = require("@site/static/assets/icons/graph-2.svg").default;
const gs_3 = require("@site/static/assets/icons/ml-3.svg").default;
const gs_4 = require("@site/static/assets/icons/sm-4.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <ChatBaseBubble />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <Link
          className={`button--secondary button--lg button breakword`}
          to="/roadmap"
        >
          Get Started with Our Roadmap 📍
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`DDW`}
      description="10.020 Data Driven World"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container" style={homepageCardsStyle}>
          <SubjectCard />
          <h2>Get Started</h2>
          <div className={clsx("col")}>
            <LinkCardGrid>
              <LinkCard
                topIcon
                label="Algorithms and Data Structures"
                description="The best way to get better at computing is by exposing yourself to more algorithms and data structures and actually implementing them. One of the common computation is to sort some items in some way.  For example, sorting a number from smallest to biggest or names alphabetically. In this article, we will describe some sorting algorithms which you can implement in Python. Moreover, you will learn various data structures that can make such computation faster. We will talk about what it means to be fast. We will also introduce you on how to work with non linear data such as trees and graphs."
                Svg={gs_1}
              />
              <LinkCard
                topIcon
                label="Object Oriented Programming"
                description="Object Oriented Paradigm changes the way we code by thinking computation and data as objects. In fact, the whole software can be thought of as an object and an object can be composed of other objects. We will introduce on what object is and how we can create object that is made of other objects. We will use Object-Oriented paradigm to implement some data structures. Using the power of inheritance, we will offer the best practice in coding by reusing and extending code."
                Svg={gs_2}
              />
              <LinkCard
                topIcon
                label="State Machines"
                description="State machines are essential tools in computer science and control systems, and understanding their principles is crucial for building robust and efficient software and hardware systems. "
                Svg={gs_4}
              />
              <LinkCard
                topIcon
                label="Introduction to Machine Learning"
                description="The core idea behind machine learning is to enable computers to analyze and interpret large amounts of data, identify patterns, and make informed predictions or decisions based on that information. Instead of relying on explicit instructions, machine learning algorithms are designed to learn from examples and adapt their behavior accordingly."
                Svg={gs_3}
              />
            </LinkCardGrid>
          </div>
        </div>
      </main>
    </Layout>
  );
}
