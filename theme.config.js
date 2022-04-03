// const YEAR = new Date().getFullYear()

// export default {
//   nextLinks: true,
//   prevLinks: true,
//   darkMode: true,
//   footer: (
//     <footer>
//       <small>
//         <time>{YEAR}</time> © Phage
//         <a href="/feed.xml">RSS</a>
//       </small>
//       <style jsx>{`
//         footer {
//           margin-top: 8rem;
//         }
//         a {
//           float: right;
//         }
//       `}</style>
//     </footer>
//   )
// }


// theme.config.js
export default {
  projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
  titleSuffix: ' – Phage',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Phage`,
  logo: (
    <>
      <svg>...</svg>
      <span>Phage</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
}