import React from "react";
import { ForceGraph2D } from "react-force-graph";

class ForceGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodeId: "",
      nodeGroup: "",
    };

    this.setActiveNode = this.setActiveNode.bind(this);
  }

  setActiveNode(nodeId, nodeGroup) {
    this.setState({ nodeId, nodeGroup });
  }
  render() {
    return (
      <div>
        <ForceGraph2D
          onNodeHover={(node) => {
            if (node === null) {
              this.setActiveNode("", "");
              return;
            }
            this.setActiveNode(node.id, node.group);
          }}
          enableNodeDrag={false}
          backgroundColor="dark"
          graphData={this.props.data}
        />
        <div className="hover-block">
          <p>NodeID: {this.state.nodeId}</p>
          <p>NodeGroup: {this.state.nodeGroup}</p>
        </div>
      </div>
    );
  }
}

export default ForceGraph;
