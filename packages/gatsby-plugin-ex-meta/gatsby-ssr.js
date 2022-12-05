// See: https://www.gatsbyjs.org/docs/ssr-apis/
import React from "react";

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const metaTag = React.createElement("meta", {
    key: `example`,
    name: "example",
    content: "Example",
  });

  const headComponents = getHeadComponents();

  replaceHeadComponents([metaTag, ...headComponents]);
};
