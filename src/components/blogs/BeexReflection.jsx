import React, { useState, useEffect } from "react";

// Assets
import InterviewPic from "./interviewPic.png";
import SnapshotPanel from "./snapshot.png";
import Hashtag from "./hashtag.png";
import Ruler from "./ruler.png";
import Events from "./events.jpeg";

const BeexReflection = () => {
  return (
    <div className="w-full">
      <div
        id="home"
        className="relative w-full aspect-video mb-5 overflow-hidden"
      >
        {/* <img src={heroImg} alt="" className="object-cover w-full h-full" /> */}
        <iframe
          title={`Day in my life`}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/MKAV9VixSpk"
        ></iframe>
      </div>

      <h2 className="secondary-title">
        My{" "}
        <a
          className="text-theme hover:text-white"
          href="https://beex.sg/"
        >
          BeeX
        </a>{" "}
        Journey
      </h2>
      <p className="section-paragraph">{`As I near the end of my 3 months internship stint at BeeX, it is
        interesting to look back upon how this simple summer internship grew to
        become a huge growth and learning experience for me as a software
        engineer, aspiring startup founder, and an individual. As I reflected, I
        began asking myself some questions. How did I end up here? What did I
        actually achieve here? What were some of my biggest takeaways from this?`}</p>

      <div className="blog-paragraph-container">
        <div className="blog-image-right-sm aspect-video">
          <iframe
            title={`Plantie`}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VKkXtns5c2I"
          ></iframe>
        </div>
        <div className="blog-text">
          <div className="blog-paragraph-header">How did I end up here?</div>
          <div className="blog-paragraph-body">
            During my second semester as a year 2 student in NUS, I had a sudden
            thought. “If my end goal is to startup one day, why can’t that day
            be today?” With that, I threw myself into working on Plantie - an
            idea that leveraged hardware, software, and computer vision, to
            gamify the experience of growing plants at home. This idea flopped,
            but in the process, I got to firsthand experience how challenging it
            was to build a good product. And more than that, finding a way to
            build a business model around that product? Even tougher.{" "}
          </div>
        </div>
        <div className="blog-image-right aspect-video">
          <iframe
            title={`Plantie`}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VKkXtns5c2I"
          ></iframe>
        </div>
      </div>

      <div className="blog-paragraph-container">
        <img
          className="blog-image-left"
          src={InterviewPic}
          alt="BeeX Interview"
        />
        <div className="blog-text">
          <div className="blog-paragraph-body">
            It was around this time that I stumbled into an interview
            opportunity with BeeX. As I prepared for the interview with{" "}
            <a
              className="text-theme hover:text-white"
              href="https://www.linkedin.com/in/gracechia/"
            >
              Grace
            </a>
            , the CEO of BeeX, I began to realise how well interning at BeeX
            would fit into my goals. Learn how to build better software? Check.
            Learn how a hardware company runs? Check. Learn about Computer
            Vision? Check. Learn more about the startup scene? Check Check
            Check. With that, I was sold. And I’m eternally grateful that things
            played out the way it did.
          </div>
        </div>
      </div>

      <div className="blog-paragraph-container">
        <img
          className="blog-image-right-sm"
          src={SnapshotPanel}
          alt="Snapshot Feature"
        />
        <div className="blog-text">
          <div className="blog-paragraph-header">
            What was it like working in BeeX? And what did I achieve there?
          </div>
          <div className="blog-paragraph-body">
            If I had to pick one word to describe my whole working experience
            here, that would be “Intense”. From week 1, I remember being thrown
            my very first task - to use the “snapshot” feature, redesign it, and
            implement the new design. This was the quickest I had ever been
            thrown into a real task on a job. But strangely, it felt good. I
            wasn’t treated like “just another intern”, I was a part of the team.
          </div>
        </div>
        <img
          className="blog-image-right"
          src={SnapshotPanel}
          alt="Snapshot Feature"
        />
      </div>

      <div className="blog-paragraph-container">
        <img className="blog-image-left" src={Hashtag} alt="Hashtag Feature" />
        <div className="blog-text">
          <div className="blog-paragraph-body">
            After that, I began working on a new feature, the Hashtag feature.
            During this time, I began learning how to manage larger amounts of
            code, figuring out ways to decrease network contention by
            implementing lazy loading of thumbnails, and many other frontend
            practices. I struggled for sure, but the satisfaction of watching it
            go live a few weeks later was an irreplaceable feeling.
          </div>
        </div>
      </div>

      <div className="blog-paragraph-container">
        <div className="flex-col justify-start w-full">
          <div className="blog-paragraph-body">
            It was also around this moment that I noticed something… I was
            surrounded by geniuses. Everyone in BeeX was somewhat of a master at
            their craft, from the Mechanical team, to the software team, to the
            electrical team. Everyone was “a beast”. It was truly a humbling
            moment for me, and it was then that I realized how much I could
            learn from working in a place like this.
          </div>
        </div>
      </div>

      <div className="blog-paragraph-container">
        <img className="blog-image-right-sm" src={Ruler} alt="3D Ruler" />
        <div className="blog-text">
          <div className="blog-paragraph-body">
            <p>
              Lastly, I worked on implementing a 3D ruler (with the help of
              ThreeJS) for their maps. Not gonna lie, this was easily one of the
              most fun and exciting features I’ve ever worked on.
            </p>
            <p>
              As a whole, work was truly as I mentioned - intense. But the
              amount of learning I got out of this? Intensely immense as well.
            </p>
          </div>
        </div>
        <img className="blog-image-right" src={Ruler} alt="3D Ruler" />
      </div>

      <div className="blog-paragraph-container">
        <div className="flex-col justify-start w-full">
          <div className="blog-paragraph-header">
            What were some of my biggest takeaways from this?
          </div>
          <div className="blog-paragraph-body">
            #1 Appreciate a good product when you see one. I realized how often
            we tend to overlook the sheer amount of thought and work that goes
            into a good product. The amount of blood sweat and tears from the
            mechanical team, electrical team, software team, business team, etc.
            Never again will I underestimate how much human talent and work goes
            into every good product that we interact with in our lives.
          </div>
          <div className="blog-paragraph-body">
            #2 Discomfort breeds growth “If you're the smartest person in the
            room, you are in the wrong room” Over the course of this internship,
            I felt many things, from the excitement of working in a startup, to
            the feeling of frustration when my code broke. There was one feeling
            however, that stood out the most amongst them all, and that was the
            feeling of being an imposter. Many times, while working amongst such
            a talented team, I questioned if I belonged here. “Will I ever get
            this good?” I would ask myself. It was a tough feeling to deal with,
            but on hindsight, it was this feeling that pushed me to be better.
            This discomfort humbled me, and because of that, I allowed myself to
            learn and grow.
          </div>
          <div className="blog-paragraph-container">
            <img className="blog-image-right-sm" src={Events} alt="Events" />
            <div className="blog-paragraph-body w-2/3">
              #3 My journey as a founder has only just begun As an intern, I
              considered myself lucky to have been treated like an equal, given
              tasks to work on that would have real impact on real users. But
              BeeX, being the intense company they are, took that a step
              further. They gave me opportunities that I never would have gotten
              in many other companies. Having lunches with my founders, allowing
              me to represent BeeX in tech conferences, and even attending
              networking events, I was exposed to a whole new world that
              “techies” like me, almost never get exposed to. It truly showed me
              how vastly complex the world of tech startups are, and how my
              journey to achieve my dream had only just begun.
            </div>
            <img className="blog-image-right" src={Events} alt="Events" />
          </div>
        </div>
      </div>

      <div className="blog-paragraph-container">
        <div className="flex-col justify-start w-full">
          <div className="blog-paragraph-header">Conclusion</div>
          <div className="blog-paragraph-body">
            In all, I would say that I came into BeeX expecting to leave a
            better engineer. But I am now leaving BeeX as a better engineer,
            designer, problem solver, and a better potential founder. And I am
            very grateful for my CEO{" "}
            <a
              className="text-theme hover:text-white"
              href="https://www.linkedin.com/in/gracechia/"
            >
              Grace
            </a>
            , CTO{" "}
            <a
              className="text-theme hover:text-white"
              href="https://www.linkedin.com/in/gohew/"
            >
              Eng Wei
            </a>
            , SWE Mentor{" "}
            <a
              className="text-theme hover:text-white"
              href="https://www.linkedin.com/in/cheng-wei-hong-6a028a243/"
            >
              Wei Hong
            </a>{" "}
            , and the rest of BeeX for making this experience so fruitful. I’d
            say that with their impeccable vision, timing, and team, BeeX’s
            success isn’t a matter of “if”, but a matter of “when”, and I am
            excited to see how they are gonna change the world. It was my
            pleasure being a small part of this.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeexReflection;
