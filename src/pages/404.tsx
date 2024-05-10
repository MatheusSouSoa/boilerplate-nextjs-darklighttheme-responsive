import router from "next/router";
import { useEffect } from "react";

const Custom404 = () => {

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(redirect);
  }, []);

  return (
    <div className="w-full calc-c-header flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">Erro 404</h1>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <p>Você será redirecionado para página inicial em instantes...</p>
    </div>
  );
};

export default Custom404;