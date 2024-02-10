"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/navigations/header";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <div className="font-light text-muted-foreground italic">
          <Typewriter
            options={{
              strings: [
                "welcome to my journey",
                "21 years old",
                "full-stack developer",
                "university of santo tomas",
                "manila, philippines",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="font-light">
          I'm a motivated full-stack developer, continuously exploring and
          learning cutting-edge technologies, with a focus on delivering
          performant applications.
        </p>
        <p className="font-light">
          My main tech stack for building apps are{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">JavaScript</span>.
        </p>
      </section>
    </main>
  );
}
