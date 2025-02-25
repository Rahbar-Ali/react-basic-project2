import { first151Pokemon, getFullPokedexNumber } from "../util";

const SideNav = () => {
  return (
    <nav>
      <div className={"header"}>
        <h1 className="text-gradient">Pokedex</h1>
      </div>
      <input type="text" />
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
          <button className={"nav-card"}>
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
};

export default SideNav;
