import useFetch from "../../hooks/use-fetch";
import { useParams } from "react-router-dom";

export const CatsBreedPage = () => {
 const { id } = useParams();
 const searchBreedUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;

 const [selectedBreed, selectedBreedErr, selectedBreedLoading] = useFetch(
   searchBreedUrl
 );

 if (selectedBreedLoading || !selectedBreed.length)
   return <div> loading </div>;

 if (selectedBreedErr) return <div> error </div>;
console.log(selectedBreed,"selected")
 return (
   <main>
     <img src={selectedBreed[0].url} alt="hello" />
   </main>
 );
};