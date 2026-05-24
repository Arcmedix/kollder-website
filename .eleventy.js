module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("logo-kollder.png");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Support du format XML pour la sitemap
  eleventyConfig.addTemplateFormats("njk,html,md,xml");

  eleventyConfig.addCollection("blog_fr", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/fr/*.md")
      .filter(item => item.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("blog_en", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/en/*.md")
      .filter(item => item.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  eleventyConfig.addFilter("dateFormatEN", function(date) {
    return new Date(date).toLocaleDateString('en-GB', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  return {
    dir: { input: ".", output: "_site", includes: "_includes" }
  };
};
