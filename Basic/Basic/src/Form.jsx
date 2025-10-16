import React from "react";

function Form({ status }) {
  if (status === "success") {
    return <h1>Thats correct ✅</h1>;
  }
  return (
    <div>
      <h1>Quiz</h1>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "error" && <p>Good gues but wrong Answer.Try Again </p>}
      </form>
    </div>
  );
}

export default Form;
