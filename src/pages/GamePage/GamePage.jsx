import {useState} from 'react';
import { useSelector } from 'react-redux';
import {GameBuy} from '../../components/GameBuy/GameBuy';
import {GameGenre} from '../../components/GameGenre/GameGenre';
import {GameCover2} from '../../components/GameCover/GameCover2';

import './GamePage.css';

export const GamePage = (props) => {

  const game = useSelector(state =>  (state.games.currentGame));

  if(!game) return null

  return (
    <div className="game-page">
      <h1 className="game-page__title">{ game.title }</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover2 image={game.image} />
          <p className='text-page'>{game.description}</p>
          <p className="secondary-text">Popular tags for this product:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game btn-2">
            <GameBuy game={game} />
            <div className="cl-prop"></div>
          </div>
        </div>
      </div>
    </div>
  );
};