
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// Put your API key here
builder.init('2f4d17cef66e4a49820decb197b96197');

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState();
  const [builderContentJson, setBuilderContentJson] = useState()
  const [figmaBuilderContentJson, setFigmaBuilderContentJson] = useState()

  // get the page content from Builder
   useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
       document.title = content.data.title
      }
    }
    fetchContent();
  }, [window.location.pathname]);

  
    useEffect(() => { 
      builder.get('ui-components', { url: location.pathname })
        .promise().then(setBuilderContentJson)
    }, [])

    useEffect(() => { 
      builder.get('figma-import', { url: location.pathname })
        .promise().then(setFigmaBuilderContentJson)
    }, [])
  
  
  // If no page is found, return 
  // a 404 page from your code.
  // The following hypothetical 
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <h1>Not Found</h1>
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
      <BuilderComponent model="ui-components" content={builderContentJson} />
      <BuilderComponent model="figma-import" content={figmaBuilderContentJson} />
    </>
  );
}