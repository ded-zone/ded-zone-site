import type { LinksFunction } from "@remix-run/node";
import JobTitles from "~/components/JobTitles";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/aaron.svg",
    as: "image",
    type: "image/svg+xml",
  },
];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-gradient-to-t from-purple-900 to-purple-500 flex items-center">
      <div className="grid grid-flow-row auto-rows-max w-screen justify-center gap-12 text-center">
        <div key={1} className="mx-auto">
          <div className="h-64 w-64 bg-purple-400 rounded-full pointer-events-none select-none bg-origin-border bg-contain bg-aaron bg-center shadow-lg" />
        </div>
        <div key={2}>
          <h1 className="text-white text-6xl font-thin">
            Aaron <span className="font-bold text-opacity-80">Dosser</span>
          </h1>
        </div>
        <div key={3}>
          <h2 className="text-white text-5xl">Your next</h2>
        </div>
        <div key={4}>
          <JobTitles
            titles={["Full Stack Engineer", "Product Architect"]}
            cycleTime={5000}
          />
        </div>
      </div>
    </main>
  );
}
