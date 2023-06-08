//import styles from "./Img.module.scss";

function Img({ bgImage }) {
 // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

 return (
   <div 
     style={{ backgroundImage: `url(${bgImage})` }}
   >
   </div>
 );
}

export default Img;