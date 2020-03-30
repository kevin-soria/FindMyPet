// import React, { useState } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.scss";
// export const Home = () => {
//     const [image, setImage] = useState("");
//     const [loading, setLoading] = useState(false);
//     const uploadImage = async e => {
//         const files = e.target.files;
//         const data = new FormData();
//         data.append("file", files[0]);
//         data.append("upload_preset", "xjpjx1b2");
//         setLoading(true);
//         const res = await fetch("https://api.cloudinary.com/v1_1/dozmokkz8/image/upload", {
//             method: "POST",
//             body: data
//         });
//         const file = await res.json();
//         setImage(file.secure_url);
//         setLoading(false);
//     };
//     return (
//         <div className="text-center mt-5">
//             <div className="App">
//                 <h1>Upload Image</h1>
//                 <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage} />
//                 {loading ? <h3>Loading...</h3> : <img src={image} style={{ width: "300px" }} />}
//             </div>
//             <CloudinaryContext cloudName="demo">
//             <div>
//             <Image publicId="sample" width="50" />
//             </div>
//             <Image publicId="sample" width="0.5" />
//             </CloudinaryContext>
//         </div>
//     );
// };
