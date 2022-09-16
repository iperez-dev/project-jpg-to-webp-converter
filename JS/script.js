const Uimage = document.querySelector("#Uimage");
const Wimage = document.querySelector("#Wimage");

function convertImage(event) {
  // Show User Image
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    Uimage.src = src;

    //convert Image to canvas
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    let userImage = new Image();
    userImage.src = src;

    userImage.onload = function () {
      canvas.width = userImage.width;
      canvas.height = userImage.height;
      ctx.drawImage(userImage, 0, 0);
      document.body.appendChild(canvas);

      // convert canvas to webp
      let webpImage = canvas.toDataURL("image/webp");
      Wimage.src = webpImage;
    };
  }
}
