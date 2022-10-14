import Navbar from "./Navbar.js";
import styles from "../styles/pages/Layout.module.scss";
import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext.js";

const Layout = ({ children }) => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Countries API</title>
      </Head>
      <Navbar />
      <div className={`${theme}__background`}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
export default Layout;
