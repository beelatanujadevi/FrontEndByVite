let StartFunc = async () => {
  LocalFuncForSingleTable()
};

const LocalFuncForSingleTable = () => {
  Swal.fire({
    title: "Duplicate ?",
    icon: "error",
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      window.location.href = "";
    }
  });

};

export { StartFunc }