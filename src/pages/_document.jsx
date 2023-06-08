// Import Next Documents
import { Html, Head, Main, NextScript } from 'next/document'

// Document function - gives us our html structure
// NextScript - The default NextScript implementation captures the scripts generated by the Next build process and immediately renders them to <script> tags in its render() function.
// More Info - https://medium.com/engineerapart-custom-software-engineering/nextscript-flexible-script-loading-for-nextjs-f216a98a2801
// More Info - https://stackoverflow.com/questions/52083848/nextjs-main-and-nextscript#:~:text=Component%20NextScript%20from%20'next%2Fdocument,props.
// More Info - https://nextjs.org/docs/pages/building-your-application/routing/custom-document
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
