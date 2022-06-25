import Navbar from "./Navbar.js";
import styles from "../styles/pages/Layout.module.scss";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Countries API</title>
      </Head>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </>
  );
};
export default Layout;
