import * as React from "react";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>Header</header>
      <main>
        {{ children }}
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
