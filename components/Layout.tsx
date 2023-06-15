import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover overflow-x-auto overflow-y-auto">
    <Head>
      <title>{title} $COMETGAG</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:url" content="https://thecomettoken.com/" />
      <meta property="og:type" content="Welcome to COMET TOKEN " />
      <link rel="icon" href="/images/fav.png" />
    </Head>
    {children}
  </div>
);

export default Layout;
