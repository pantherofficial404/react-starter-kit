import React from "react";

const DataLoader = (props) => {
  const {
    loading,
    empty,
    error,
    loaderComponent,
    emptyComponent,
    emptyMessage,
  } = props;
  if (loading) {
    if (loaderComponent) {
      return loaderComponent;
    }
    return (
      <div>
        <p marginLeft={10}>Loading..</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>{emptyMessage || "Error..."}</p>
      </div>
    );
  }
  if (empty) {
    if (emptyComponent) {
      return emptyComponent;
    }
    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p color="disabled" variant="subtitle1">
            Currently no data available for this period
          </p>
        </div>
      </div>
    );
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default DataLoader;
