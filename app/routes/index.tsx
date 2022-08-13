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
    <main className="relative flex min-h-screen items-center bg-gradient-to-t from-purple-900 to-purple-500">
      <div className="grid w-screen grid-flow-row auto-rows-max justify-center gap-12 text-center">
        <div key={1} className="mx-auto">
          <div className="pointer-events-none h-64 w-64 select-none rounded-full bg-purple-400 bg-aaron bg-contain bg-center bg-origin-border shadow-lg" />
        </div>
        <div key={2}>
          <h1 className="text-6xl font-thin text-white">
            Aaron <span className="font-bold text-opacity-80">Dosser</span>
          </h1>
        </div>
        <div key={3}>
          <h2 className="text-4xl text-white">Your next</h2>
        </div>
        <div key={4} className="text-white">
          <JobTitles />
        </div>
      </div>
    </main>
  );
}
