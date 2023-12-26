let input = document.getElementById("my_HexFile");
let textarea_HexFile = document.getElementById("textarea_HexFile");

input.addEventListener("change", function (e) {   

  if (this.files && this.files[0]) {
    let my_HexFile = this.files[0];
    let reader = new FileReader();

    reader.addEventListener('load', function (e) {
    textarea_HexFile.value = e.target.result;

    });
    
    reader.readAsBinaryString(my_HexFile);
  }

  const files = e.target.files;
  const file = files[0];
  document.getElementsByTagName("p")[3].innerHTML = `File name: ${file.name}`;
  document.getElementsByTagName("p")[4].innerHTML = `File size: ${file.size} bytes`;
  e.target.value = null; 

});

