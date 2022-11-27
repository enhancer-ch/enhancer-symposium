module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('js');
  
  eleventyConfig.addFilter("toJson", arr => {
    return JSON.stringify(arr);
  });
}