import TituloRotador from "../TituloRotador";

const Banner = () => {
  return (
    <div className="banner">
      <div className="title">
        <TituloRotador>
          <span className="first">Simplifiez,</span>
          <span className="second"> organisez</span>
          <span className="third"> et communiquez efficacement.</span>
        </TituloRotador>
      </div>
      <div className="resume">
        <TituloRotador>
          <span>
            Une solution intégrale pour gérer les résidences universitaires,
          </span>
          <span>
            en optimisant les processus administratifs et en améliorant la
          </span>
          <span>communication avec les clients.</span>
        </TituloRotador>
      </div>
    </div>
  );
};

export default Banner;
