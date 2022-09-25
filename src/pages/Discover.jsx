import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const genreTitle = 'pop';
  const { data, error, isLoading, isFetching } = useGetTopChartsQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Loader title="Loading songs" />;
  if (error) return <Error />;

  return (

    <div className="flex flex-col">
      {/* T
                 #w-full : full width
                 #sm:flex-row : flex row on small screens
              */}
      <div className="w-full flex justify-between items-center flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          value=""
          onChange={() => {}}
          className="bg-black text-gray-300
                  p-3 text-sm rounded-lg
                  outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}

        </select>
      </div>

      {/* song cards */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}

      </div>
    </div>

  );
};

export default Discover;
