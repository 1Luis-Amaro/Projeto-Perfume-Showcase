import { perfumes } from "../data/perfumes";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Catálogo de Perfumes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-4 ">
        {perfumes.map((perfume) => (
          <Link to={`/perfume/${perfume.id}`}>
            <div
              key={perfume.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition">
              <img
                src={perfume.imagem}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-xl ">{perfume.nome}</h2>
              <p className="text-xl font-bold text-purple-700 ">
                {" "}
                valor {perfume.preco}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
