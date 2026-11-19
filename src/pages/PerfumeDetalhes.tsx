import { Link, useParams } from "react-router-dom";
import { perfumes } from "../data/perfumes";

export function PerfumeDetalhes() {
  const { id } = useParams();
  const perfumeEncontrado = perfumes.find(
    (perfume) => perfume.id === Number(id),
  );
  if (!perfumeEncontrado) return <h1>Perfume não encontrado</h1>;
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-white shadow-xl rounded-2xl p-8 ">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={perfumeEncontrado.imagem} alt="" className="w-64 h-64 object-contain" />
      </div>

      <div className="w-1/2">
        <h1 className="text-2xl text-purple-700 font-semibold mb-6">{perfumeEncontrado.nome}</h1>
        <p className="text-gray-600 mb-8"> {perfumeEncontrado.descricao} </p>
      <h2 className="mb-4">Valor R${perfumeEncontrado.preco}</h2>
      <a href={`https://wa.me/5519992686115?text=${encodeURIComponent("Olá, tenho interesse no perfume " + perfumeEncontrado.nome)}`} className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition block mt-4 text-center">
        Comprar no Whatsapp
      </a>
      <Link to="/"  className="mb-6">
        <button className="text-gray-500 hover:text-purple-700 text-sm mt-4 inline-block transition " >Voltar</button>
      </Link>
      </div>
    </div>
  );
}
