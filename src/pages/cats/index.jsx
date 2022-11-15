import { Link } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

export const Cats = () => {
  const getBreedsUrl = "https://api.thecatapi.com/v1/breeds ";
const [breedsList, breedsListErr, breedsListLoading] = useFetch(getBreedsUrl);
if (breedsListLoading || !breedsList.length) return <div> loading </div>;
if (breedsListErr) return <div> error </div>;

console.log(breedsList)


// const filteredBreeds = Object.keys(breedsList.message);


    return (
      <main>
      {breedsList.map((e, i) => (
        <Link key={i} to={`/cats/${e.id}`}>
          {e.name} {""}
        </Link>
      ))}
    </main>
    )
  };