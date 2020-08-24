/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Gatsby will pass in graphql and actions into the function
// Here we're defining and implementing createPages as a function

// holy shit this is incredible...

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  // createPage is a method on the actions object passed in
  const { createPage } = actions
  // links the path to the component!
  createPage({
    path: "/somefakepage",
    component: path.resolve("./src/components/postLayout.js"),
  })
  createPage({
    path: "/secondfakepage",
    component: path.resolve("./src/components/postLayout.js"),
  })
}
