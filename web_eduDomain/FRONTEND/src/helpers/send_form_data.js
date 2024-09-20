const sendData = async (data) => {
  const response = await fetch("http://localhost:3000/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Encabezado que indica que el cuerpo es JSON
    },
    body: JSON.stringify(data),
  });

  if (!response) throw new Error("No response received");

  console.log("Data sent");
};

export default sendData;
