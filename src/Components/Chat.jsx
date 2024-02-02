import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();
  const handleSuccess =()=>{
    navigate('/Success')
  }

  const [inputValue, setInputValue] = useState('this is a dummy content ');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>

      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand fs-2 pt-3" href="/Chat">
          ChatBox
        </a>
      </nav>
      <div class="card-body text-success mx-4">
        <input
          class="form-control form-left"
          placeholder="Incoming Text"
          id="floatingTextarea"
          rows={2}
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <br />
        <div className="d-flex justify-content-end pb-4">
          <div
            class="form-control form-right"
            placeholder="Outgoing Text"
            id="floatingTextarea"
            rows={2}
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat non placeat ipsum adipisci dolor, porro impedit quidem nulla voluptate deserunt recusandae totam sequi voluptatibus minima quia quas voluptates explicabo nihil?</div>
        </div>
        <input
          class="form-control form-left"
          placeholder="Incoming Text"
          id="floatingTextarea"
          rows={2}
        ></input>
        <br />
        <div className="d-flex justify-content-end pb-4">
          <input
            class="form-control form-right"
            placeholder="Outgoing Text"
            id="floatingTextarea"
            rows={2}
          ></input>
        </div>
        <input
          class="form-control form-left"
          placeholder="Incoming Text"
          id="floatingTextarea"
          rows={2}
        ></input>
        <br />
        <div className="d-flex justify-content-end pb-4">
          <input
            class="form-control form-right"
            placeholder="Outgoing Text"
            id="floatingTextarea"
            rows={2}
          ></input>
        </div>
        <input
          class="form-control form-left"
          placeholder="Incoming Text"
          id="floatingTextarea"
          rows={2}
        ></input>
        <br />
        <div className="d-flex justify-content-end pb-4">
          <input
            class="form-control form-right"
            placeholder="Outgoing Text"
            id="floatingTextarea"
            rows={2}
          ></input>
        </div>
        <input
          class="form-control form-left"
          placeholder="Incoming Text"
          id="floatingTextarea"
          rows={2}
        ></input>
        <br />
        <div className="d-flex justify-content-end pb-4">
          <input
            class="form-control form-right"
            placeholder="Outgoing Text"
            id="floatingTextarea"
            rows={2}
          ></input>
        </div>
        <input
          class="form-control form-left"
          placeholder="Incoming Text"
          id="floatingTextarea"
          rows={2}
          readOnly
        ></input>
        <br />
        <div className="d-flex justify-content-end pb-4">
          <input
            class="form-control form-right"
            placeholder="Outgoing Text"
            id="floatingTextarea"
            rows={2}
            readOnly
          ></input>
        </div>
      </div>
        <div className="fixed-bottom">
      <footer className="bg-body-tertiary text-center text-lg-start py-3 px-4">
        <div className="d-flex justify-content-between gap-5 ">
          <div className="py-3">
            <i className="fa-solid fa-plus fs-3"></i>
          </div>
            <input
              type="text"
              className="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="Message"
            />
          <div className="">
          <button type="button" class="btn btn-lg btn-success w-100 " onClick={()=>handleSuccess()}>Send</button>
          </div>
        </div>
      </footer>
    </div></div>
    //   </div>
  );
}

export default Chat;
