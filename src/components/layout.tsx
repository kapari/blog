import * as React from "react";

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>
        {children}
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
