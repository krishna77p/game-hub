import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, isLoading, error } = useGameTrailer(id);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video poster={first.preview} controls src={first.data[480]} />
  ) : null;
};

export default GameTrailer;
