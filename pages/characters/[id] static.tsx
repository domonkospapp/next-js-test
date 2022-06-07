import {Character, GetCharacterResults} from "../../types";
import Image from "next/image";
import imageLoader from "../../imageLoader";

const CharacterPage = ({character}:{character: Character}) => {
    return <div>
        {character.name}
        <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
        />
    </div>
}

export const getStaticPaths = async() => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const {results}: GetCharacterResults  = await res.json()
    return {
        paths: results.map(character => {
            return {
                params: {id: String(character.id)}
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async ({params}:{params: {id: string}}) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const character = await res.json()
    return {
        props: {
            character
        }
    }
}

export default CharacterPage