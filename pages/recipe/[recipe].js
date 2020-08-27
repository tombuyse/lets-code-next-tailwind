import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getRecipe, getRecipes } from "../../shared/recipe.service";

function RecipeDetail({ recipe }) {
  console.log("recipe ", recipe);

  return (
    <div className="flex justify-center px-5 py-3">
      <article className="prose lg:prose-xl">
        <ReactMarkdown source={recipe.content}></ReactMarkdown>
      </article>
    </div>
  );
}

export async function getStaticProps(context) {
  const { data, content } = await getRecipe(context.params.recipe);

  return {
    props: {
      recipe: {
        data,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const recipes = getRecipes();
  const paths = recipes.map(
    (recipe) => console.log("recipe", recipe) || `/recipe/${recipe.slug}`
  );
  console.log(paths);
  return { paths, fallback: false };
}

export default RecipeDetail;
