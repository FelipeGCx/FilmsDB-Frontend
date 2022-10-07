const fileToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      resolve(reader.result.split(",")[1]);
      // "data:image/jpg;base64,    =sdCXDSAsadsadsa"
    };
  });
};

const base64ToFile = async (data, filename, typeFormat) => {
  let dataurl = `data:image/${typeFormat};base64,${data}`;
  filename = `${filename}.${typeFormat}`;
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export { fileToBase64, base64ToFile };
