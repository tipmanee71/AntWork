import * as React from "react";
import { useState } from "react";
import "./styles.css";

export default function Education() {
  const [state, setState] = useState({
    rows: [],
  });

  function handleChange(e, idx) {
    const { name, value } = e.target;
    const rows = [...state.rows];
    rows[idx][name] = value;
    setState({
      rows,
    });
  }

  function addRow() {
    const item = {
      col1: "",
      col2: "",
    };
    setState({
      rows: [...state.rows, item],
    });
  }

  function removeRow(idx) {
    const rows = [...state.rows];
    rows.splice(idx, 1);
    setState({ rows });
  }

  function removeLastRow() {
    setState({
      rows: state.rows.slice(0, -1),
    });
  }

  function removeAllRows() {
    setState({
      rows: (state.rows = []),
    });
  }

  return (
    <div className="App">
      <div className="education-table">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center"> University </th>
                  <th className="text-center"> Title </th>
                  <th className="text-center"> Major </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {state.rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>{idx}</td>
                    <td>
                      <input
                        type="text"
                        name="col1"
                        value={state.rows[idx].col1 || ""}
                        onChange={(e) => handleChange(e, idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="col2"
                        value={state.rows[idx].col2 || ""}
                        onChange={(e) => handleChange(e, idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeRow(idx)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={addRow} className="btn btn-primary">
              Add Row
            </button>
            <button
              onClick={removeLastRow}
              className="btn btn-danger float-right"
            >
              Delete Last Row
            </button>
            <button
              onClick={removeAllRows}
              className="btn btn-danger float-right"
            >
              Delete All Rows
            </button>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
}
