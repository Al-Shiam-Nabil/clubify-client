import Swal from "sweetalert2";

export const sweetAlert=(icon,title)=>{
 return   Swal.fire({
  position: "center",
  icon: `${icon}`,
  title: `${title}`,
  showConfirmButton: false,
  timer: 2000
});
}
