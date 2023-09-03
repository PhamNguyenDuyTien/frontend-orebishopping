import Swal from "sweetalert2";

export const Notification = (title, text, icon) => {
    Swal.fire({
        title: `${title}`,
        text: `${text}`,
        icon: `${icon}`,
        showCancelButton: icon === "error" ? true : false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: icon === "error" ?  "Ok" : "<a href='/signin'>Signin</a>",
    })
};
