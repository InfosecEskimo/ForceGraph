import React from "react";
import { ForceGraph2D } from "react-force-graph";

const ForceGraph = ({ data }) => {
  return (
    <div>
      <ForceGraph2D
        onNodeHover={(node) => {
          console.clear();
          if (node === null) {
            return;
          }
          console.log(`Node ID: ${node.id}`, `Node Group: ${node.group}`);
        }}
        enableNodeDrag={false}
        backgroundColor="dark"
        graphData={data}
      />
    </div>
  );
};

export default ForceGraph;
