
const rentType = document.querySelector('#rentType');

const SellingType = document.querySelector('#SellingType');


document.getElementById("SellingType").onchange = function () {
    document.getElementById("rentType").setAttribute("disabled", "disabled");
    if (this.value == 'rent')
      document.getElementById("rentType").removeAttribute("disabled");
  };