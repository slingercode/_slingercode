import Head from 'next/head';

const Container = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Esto es la descripción" />

      {/* Open Graph */}
      <meta property="og:title" content="slingercode" />
      <meta property="og:description" content="Esto es la descripción" />
      <meta
        property="og:image"
        content="https://cdn.discordapp.com/attachments/473563114986536972/839346414768619540/1612541918766.jpg"
      />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      {/* <meta property="og:title" content="slingercode" />
      <meta property="og:description" content="Esto es la descripción" />
      <meta property="og:image" content="/imgs/demo.jpg" />
      <meta property="og:type" content="website" /> */}
    </Head>

    {children}
  </>
);

Container.defaultProps = {
  title: 'Slingercode',
};

export default Container;
