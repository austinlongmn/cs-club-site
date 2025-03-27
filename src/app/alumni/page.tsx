import { div } from "motion/react-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function Alumni() {
  return (
    <div>
      <p>Alumni Route</p>
    </div>
  )
}
