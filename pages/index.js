import Head from "next/head";
import { getRecipes } from "../shared/recipe.service";
import Link from "next/link";

function Home({ recipes }) {
  console.log("recipes ", recipes);

  return (
    <div className="flex flex-col items-center">
      {recipes.map((recipe) => (
        <Link href={`/recipe/${recipe.slug}`}>
          <div
            key={recipe.data.title}
            className="bg-gray-700 max-w-sm rounded overflow-hidden shadow-lg mb-10"
          >
            <img
              className="w-full"
              src={recipe.data.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{recipe.data.title}</div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{recipe.data.category}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const recipes = getRecipes();

  return {
    props: {
      recipes,
    },
  };
}

export default Home;
