import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LASTFM_API = "https://ws.audioscrobbler.com/2.0/";
const LASTFM_USER = "samdoghor";
const REQUEST_TIMEOUT_MS = 8000;
const NETWORK_BLOCKED_MESSAGE =
  "Unable to load listening history - it looks like your network is blocking access to streaming platforms.";

const TrackList = ({ tracks, emptyLabel }) => {
  if (!tracks.length) {
    return <p className="text-sm text-slate-500 dark:text-slate-400">{emptyLabel}</p>;
  }

  return (
    <ol className="space-y-3">
      {tracks.map((track, index) => (
        <li key={`${track.url}-${index}`} className="flex items-center gap-3">
          <span className="w-5 text-sm text-slate-400">{index + 1}</span>
          <img
            className="h-11 w-11 rounded-lg object-cover"
            src={track.image?.[1]?.["#text"] || "/img/doghs.jpg"}
            alt=""
          />
          <a
            className="min-w-0 flex-1"
            href={track.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="block truncate font-semibold text-slate-900 dark:text-white">
              {track.name}
            </span>
            <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
              {track.artist?.["#text"] || track.artist?.name}
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyLabel: PropTypes.string.isRequired,
};

const SpotifySection = () => {
  const [data, setData] = useState({ nowPlaying: null, recent: [], top: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadListeningData = async () => {
      const apiKey = import.meta.env.VITE_LASTFM_API_KEY;

      if (!apiKey) {
        setError("Listening data is not configured yet.");
        setIsLoading(false);
        return;
      }

      const request = (method, params = {}) => {
        const query = new URLSearchParams({
          method,
          user: LASTFM_USER,
          api_key: apiKey,
          format: "json",
          limit: "20",
          ...params,
        });
        const timeoutController = new AbortController();
        const timeoutId = setTimeout(
          () => timeoutController.abort(),
          REQUEST_TIMEOUT_MS,
        );
        return fetch(`${LASTFM_API}?${query}`, { signal: timeoutController.signal })
          .then((response) => {
            if (!response.ok) throw new Error("Unable to load listening data.");
            return response.json();
          })
          .finally(() => clearTimeout(timeoutId));
      };

      try {
        const [recentResponse, topResponse] = await Promise.all([
          request("user.getrecenttracks"),
          request("user.gettoptracks", { period: "overall" }),
        ]);
        const recentTracks = recentResponse.recenttracks?.track || [];
        const nowPlaying = recentTracks.find(
          (track) => track["@attr"]?.nowplaying === "1"
        );

        setData({
          nowPlaying: nowPlaying || null,
          recent: recentTracks
            .filter((track) => track["@attr"]?.nowplaying !== "1")
            .slice(0, 10),
          top: topResponse.toptracks?.track?.slice(0, 10) || [],
        });
      } catch (fetchError) {
        // Blocked/unreachable requests surface as a generic TypeError or an abort from our timeout.
        const isNetworkBlocked =
          fetchError.name === "AbortError" || fetchError instanceof TypeError;
        setError(isNetworkBlocked ? NETWORK_BLOCKED_MESSAGE : fetchError.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadListeningData();
  }, []);

  return (
    <section className="pt-24" aria-labelledby="listening-heading">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900/60 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
          Spotify
        </p>
        <h2 id="listening-heading" className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
          What I&apos;m listening to
        </h2>

        {isLoading ? (
          <p className="mt-8 text-slate-500 dark:text-slate-400">Loading listening history...</p>
        ) : error ? (
          <p className="mt-8 text-slate-500 dark:text-slate-400">{error}</p>
        ) : (
          <>
            {data.nowPlaying ? (
              <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-white p-5 dark:border-cyan-300/30 dark:bg-slate-950/70">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                  Currently playing
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    className="h-20 w-20 rounded-xl object-cover"
                    src={data.nowPlaying.image?.[2]?.["#text"] || "/img/doghs.jpg"}
                    alt=""
                  />
                  <a href={data.nowPlaying.url} target="_blank" rel="noreferrer">
                    <p className="font-bold text-slate-900 dark:text-white">{data.nowPlaying.name}</p>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">
                      {data.nowPlaying.artist?.["#text"] || data.nowPlaying.artist?.name}
                    </p>
                  </a>
                </div>
              </div>
            ) : null}

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">10 recently played</h3>
                <TrackList tracks={data.recent} emptyLabel="No recent tracks available." />
              </div>
              <div>
                <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">10 most listened</h3>
                <TrackList tracks={data.top} emptyLabel="No top tracks available." />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SpotifySection;
