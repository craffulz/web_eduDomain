import { useState } from "react";
import "./Form.scss"; // Asegúrate de tener este archivo CSS

import sendData from "../../helpers/send_form_data";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    tel: "",
    schedule: "",
    info: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor

    console.log(formData);
    sendData(formData);
  };

  // Generar las franjas horarias
  const generarFranjaHoraria = () => {
    const franjas = [];
    const horas = [
      { inicio: "08:00", fin: "10:00" },
      { inicio: "10:00", fin: "12:00" },
      { inicio: "12:00", fin: "14:00" },
      { inicio: "14:00", fin: "16:00" },
      { inicio: "16:00", fin: "18:00" },
      { inicio: "18:00", fin: "20:00" },
    ];
    for (let i = 0; i < horas.length; i++) {
      franjas.push(
        <option key={i} value={`${horas[i].inicio}-${horas[i].fin}`}>
          {horas[i].inicio} - {horas[i].fin}
        </option>
      );
    }
    return franjas;
  };

  return (
    <div className="form-container">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Prenom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Tel</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="schedule">
            Quel serait le créneau horaire idéal pour vous contacter ?
          </label>
          <select
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            {generarFranjaHoraria()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="info">Auriez-vous des indications ?</label>
          <textarea
            id="info"
            name="info"
            value={formData.info}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit">Contacter</button>
      </form>
    </div>
  );
};

export default Form;
