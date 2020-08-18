module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('admin')

  return {
    pathPrefix: "/design-system/"
  }
};
