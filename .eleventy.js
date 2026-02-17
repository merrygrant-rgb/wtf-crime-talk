module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addCollection("casesSorted", function(api) {
    return api.getFilteredByGlob("content/cases/*.md");
  });
  eleventyConfig.addCollection("blogSorted", function(api) {
    return api.getFilteredByGlob("content/blog/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("podcastSorted", function(api) {
    return api.getFilteredByGlob("content/podcast/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("featuredYoutube", function(api) {
    return api.getFilteredByGlob("content/youtube/*.md").filter(i => i.data.featured);
  });
  eleventyConfig.addCollection("merchActive", function(api) {
    return api.getFilteredByGlob("content/merch/*.md").filter(i => i.data.active !== false);
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      layouts: "_layouts",
      includes: "_layouts"
    }
  };
};
