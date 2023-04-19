import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gray-900 transition duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
