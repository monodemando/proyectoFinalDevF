import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import "../../CharacterInfo.css"


const CharacterInfo = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) {
          throw new Error("No se pudo obtener la información del personaje");
        }
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="character-info">
  <Header />

  <div className="character-container">
    <img src={character.image} alt={character.name} className="character-image" />

    <div className="character-details">
      <h2>{character.name}</h2>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
      <p><strong>Episodes:</strong> {character.episode.length}</p>
      <p><strong>Created:</strong> {new Date(character.created).toLocaleDateString()}</p>
    </div>
  </div>

  <Footer divID="footerC"/>
</div>
  
  );
};

export default CharacterInfo;
