import matter from "gray-matter";

export const getRecipes = () => {
  return ((context) => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    return keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);

      return {
        data: document.data,
        slug,
      };
    });
  })(require.context("../recipes", true, /\.md$/));
};

export const getRecipe = async (slug) => {
  // todo fetch right md file
  const content = await import(`../recipes/${slug}.md`);
  return matter(content.default);
};
