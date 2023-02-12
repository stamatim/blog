/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1 style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg,#0061FF,#60EFFF)',
      }}
      >
        {children}
      </h1>
    ),
    a: ({children}) => (
      <a style={{
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        backgroundImage: '#007bff',
        color: '#007BFF'
      }}
      >
        {children}
      </a>
    )
  },
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: 'help' }}
      >
        CC BY-NC 4.0
      </abbr>{' '}
      {new Date().getFullYear()} © Stamati Morellas.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
