import Layout from "@/components/layout/Layout";
import { gql } from "@apollo/client";
import * as React from "react";
import { client } from "../lib/apollo";

const images = [
  "https://source.unsplash.com/ghziyUe5eI8",
  "https://source.unsplash.com/GtdpQRAMXZk",
  "https://source.unsplash.com/KquUJbB5wGA",
  "https://source.unsplash.com/F-FISb7mbTg",
  "https://source.unsplash.com/SE5mmOZWqHE",
  "https://source.unsplash.com/-JLFAtwRegI",
];

export default function Home({ films }: any) {
  return (
    <Layout>
      <h2 className="text-gray-900 dark:text-white text-base text-center mb-4">
        LATEST MOVIES
      </h2>
      <p className="mx-auto max-w-2xl font-semibold text-5xl text-gray-600 dark:text-white text-center">
        All of your Star Wars favorites now streaming online
      </p>
      <section className="flex flex-row flex-wrap mt-12">
        {films.map((item: any, idx: number) => {
          const film = item.node;
          return (
            <article
              className="lg:basis-1/3 md:basis-1/2 w-full h-96 overflow-hidden relative group cursor-pointer	"
              key={film.id}
            >
              <img
                src={images[idx]}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute h-1/2 w-full bg-gradient-to-t from-black bottom-0 left-0 group-hover:h-full transition-all duration-700" />
              <div className="absolute w-full bottom-0 p-4">
                <h4 className="text-white pb-2 ">{film.title}</h4>
                <p className="text-white">
                  <span className="text-gray-400 font-extralight">
                    Directed By -
                  </span>
                  <a
                    href="#"
                    className="font-light hover:text-indigo-400 transition duration-200"
                  >
                    {film.director}
                  </a>
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const GET_FILMS = gql`
    query ExampleQuery {
      allFilms {
        edges {
          node {
            id
            title
            director
            created
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_FILMS,
  });

  return {
    props: {
      films: data.allFilms.edges,
    },
    revalidate: 1,
  };
}
