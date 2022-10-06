const information = document.getElementById("info");
information.innerText = `This app is using chrome (v${versions.chrome()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

func();
