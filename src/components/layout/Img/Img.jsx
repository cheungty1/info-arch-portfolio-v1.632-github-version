//import styles from "./Img.module.scss";

// Functon for Background Image
function Img({ bgImage }) {
 // STATIC ASSETS - NextJS documentation: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

 return (
   <div 
     style={{ backgroundImage: `url(${bgImage})` }}
   >
   </div>
 );
}

export default Img;