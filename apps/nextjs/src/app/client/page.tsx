import PingComp from "./pingComp";
import { Suspense } from "react";

export default function SampleClient() {
  return (
    <Suspense fallback={<p className="mt-4">Loading...</p>}>
      <PingComp />
      </Suspense>
  );
}

