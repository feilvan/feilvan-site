import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, title }) => (
  <div className=" overflow-hidden relative h-[50vw] max-h-[576px] mt-2 bg-neutral-500">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      className=" absolute left-0 top-0 h-full w-full"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
