import PropTypes from "prop-types";
const Card = ({ name, workPhone, landline, workEmail, email }) => {
  return (
    <div className="bg-white border-2 border-blue-002  p-6  shadow-lg rounded-lg m-6">
      <div className="flex flex-row">
        <div className="text-4xl  w-16 h-16 p-3 mr-4 mb-4 text-white bg-blue-002 rounded-full font-bold item- text-center">
          {name[0].toUpperCase()}
        </div>

        <div className="text-medium-02 text-center font-semibold">
          <h1 className="text-2xl font-extrabold text-center">{name}</h1>
          <h2 className="text-lg text-center">
            {landline ? landline : workPhone}
          </h2>
        </div>
      </div>
      <div className="text-center">
        {(landline || email) && (
          <p className="text-medium-02">
            <span className="font-bold">personal: </span>
            {email || landline}
          </p>
        )}

        {(workPhone || workEmail) && (
          <p className="text-medium-02">
            <span className="font-bold">work: </span>
            {workEmail && workEmail} {workEmail && <br />}
            {workPhone}
          </p>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  workPhone: PropTypes.string,
  landline: PropTypes.string,
  workEmail: PropTypes.string,
  email: PropTypes.string,
};

export default Card;
