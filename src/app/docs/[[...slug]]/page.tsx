import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length == 2) {
    return (
      <h1>
        Return Slug {params.slug[0]} concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length == 1) {
    return (
      <h1>
        Return Slug {params.slug[1]} concept {params.slug[1]}
      </h1>
    );
  }

  return <div>This is default lol</div>;
};

export default Docs;
