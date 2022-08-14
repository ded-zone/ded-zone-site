import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AaronAvatar from "~/components/AaronAvatar";
import JobTitles from "~/components/JobTitles";
import { getShuffledTitles } from "~/models/title.server";

type LoaderData = Awaited<ReturnType<typeof getShuffledTitles>>;

export const loader: LoaderFunction = async () =>
  json<LoaderData>(await getShuffledTitles());

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/aaron.svg",
    as: "image",
    type: "image/svg+xml",
  },
];

export default function Index() {
  const titles = useLoaderData<LoaderData>();
  return (
    <main className="relative flex min-h-screen items-center bg-gradient-to-t from-purple-900 to-purple-500">
      <div className="grid w-screen grid-flow-row auto-rows-max justify-center text-center">
        <div key={1} className="mx-auto">
          <AaronAvatar />
        </div>
        <div key={2}>
          <h1 className="text-6xl font-thin text-white">
            Aaron <span className="font-bold text-opacity-80">Dosser</span>
          </h1>
        </div>
        <div key={3}>
          <h2 className="text-4xl pt-8 pb-4 text-white">Your next</h2>
        </div>
        <div key={4} className="text-white">
          <JobTitles titles={titles} />
        </div>
      </div>
    </main>
  );
}
