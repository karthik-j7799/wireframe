import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Chat() {
  return (
    <div>
      {/* <div className="chatbox"> */}
        <div class="card border-success mb-4">
          <div class="card-header bg-transparent border-success">ChatBox</div>
          <div class="card-body text-success">
          <input class="form-control" placeholder="Outgoing Text" id="floatingTextarea" rows={2}></input><br/>
          <input class="form-control" placeholder="Incoming Text" id="floatingTextarea" rows={2}></input>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="footer">
          <div class="card-footer bg-transparent border-success">
            <div className="inner">
            <div className="attachment">
            <i class="fa-solid fa-plus"></i>
            </div>
            <div class="messagesend">
              <input
                type="text"
                class="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Message"
              />
              </div>
              <div className="sendbutton">
              <i class="fa-solid fa-arrow-right"></i>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    //   </div>

  );
}

export default Chat;
