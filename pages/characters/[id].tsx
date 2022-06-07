import {Character} from "../../types";
import Image from "next/image";
import imageLoader from "../../imageLoader";
import {GetServerSideProps} from "next";
import {useRouter} from "next/router";
import Layout from "../../components/Layout";

const CharacterPage = ({character}:{character: Character}) => {
    const router = useRouter()
    return <div>
        <h1>{router.query.id}. {character.name}</h1>
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

CharacterPage.layout = (page: typeof CharacterPage) => <Layout>{page}</Layout>

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
    const character = await res.json()
    return {
        props: {
            character
        }
    }
}

export default CharacterPage