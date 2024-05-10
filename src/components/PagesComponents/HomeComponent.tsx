import Head from "next/head";


const HomeComponent = () => {

  return (
    <div className="w-full calc-c-header overflow-y-auto  shadow-md p-3 bg-white">
      <Head>
        <title>Inicio</title>
      </Head>
      <h1>Hello world</h1>
      <p>This is my first Next.js app</p>
    </div>
  )
}

export { HomeComponent };