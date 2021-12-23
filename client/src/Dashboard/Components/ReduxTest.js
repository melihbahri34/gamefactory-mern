import React from "react";
import { useDispatch } from "react-redux";
import { setEditor } from "../../features/blog";

function ReduxTest() {
  const dispatch = useDispatch();

  return (
    <div>

      <button
        onClick={() => {
          dispatch(setEditor({ textEditor: "Pedro" }));
        }}
      >
        Test
      </button>

    </div>
  );
}

export default ReduxTest;
