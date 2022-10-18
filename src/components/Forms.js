import "./formcss.css";

function Forms(props) {
  return (
    <>
      <div className="formInput">
        <label>Firstname</label>
        <input placeholder="first Name" />
      </div>
      <div className="formInput">
        <label>LastName</label>
        <input placeholder="LastName" />
      </div>
      <div className="formInput">
        <label>Email-id</label>
        <input placeholder="Email" />
      </div>
      <div className="formInput">
        <label>Password</label>
        <input placeholder="Password" />
      </div>
      <div className="formInput">
        <label>Comform Password</label>
        <input placeholder="Comfrom Password" />
      </div>
    </>
  );
}
export default Forms;
