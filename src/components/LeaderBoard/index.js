import React from "react";

const leaderBoard = ({ scoreList }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Leader Board
      </button>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                LeaderBoard List
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {scoreList.length === 0 ? (
                <p className="text-center text-dark font-weight-bold">
                  No Leaderboard History
                </p>
              ) : (
                <table class="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">score</th>
                      <th scope="col">Level</th>
                    </tr>
                  </thead>
                  {scoreList.map((e, index) => (
                    <tbody>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{e.name}</td>
                        <td>{e.score}</td>
                        <td>{e.level}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default leaderBoard;
