import React from "react";

import DataUploader from "../DataUploader/DataUploader";
import ForceGraph from "../ForceGraph/ForceGraph";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      error: false,
      errorMessage: "",
      graphData: {},
    };

    this.setGraphData = this.setGraphData.bind(this);
    this.setError = this.setError.bind(this);
  }

  setGraphData(data) {
    this.setState({ graphData: data, dataLoaded: true });
  }

  setError(message) {
    this.setState({ error: true, errorMessage: message });
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.dataLoaded) {
      return <DataUploader error={this.setError} action={this.setGraphData} />;
    }

    return <ForceGraph data={this.state.graphData} />;
  }
}

export default App;
