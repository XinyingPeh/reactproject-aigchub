import React from "react";
import ToolItem from "./ToolItem";

function ToolList({ data, selectedTag, sortByRating, onTagChange, searchQuery }) {
  const filteredTools = selectedTag
    ? data.filter((tool) => tool.fields.Tag.includes(selectedTag))
    : data;

  const sortedTools =
    sortByRating === "highest"
      ? [...filteredTools].sort((a, b) => b.fields.Rating - a.fields.Rating)
      : sortByRating === "lowest"
      ? [...filteredTools].sort((a, b) => a.fields.Rating - b.fields.Rating)
      : filteredTools;

  const searchedTools = searchQuery
    ? sortedTools.filter((tool) => {
        const serviceName = tool.fields.ServiceName.toLowerCase();
        const tags = tool.fields.Tag || []; 
        const description = tool.fields.Description.toLowerCase();

        const matchedTags = tags.filter((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return (
          serviceName.includes(searchQuery.toLowerCase()) ||
          description.includes(searchQuery.toLowerCase()) ||
          matchedTags.length > 0
        );
      })
    : sortedTools;

  if (searchQuery && searchedTools.length === 0) {
    return <p>No search results</p>;
  }

  return (
    <div className="tool-list">
      {/* Render the list of AIGC tools */}
      {searchedTools.map((tool) => (
        <ToolItem
          key={tool.id}
          name={tool.fields.ServiceName}
          rating={tool.fields.Rating}
          description={tool.fields.Description}
          tags={tool.fields.Tag}
          image={tool.fields.Image[0].url}
          url={tool.fields.URL}
          onTagChange={onTagChange}
        />
      ))}
    </div>
  );
}

export default ToolList;