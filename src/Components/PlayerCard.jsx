import React from 'react';

const itemCard = ({ item }) => {
  return (
    <div className="fut-player-card">
    
        <div key={item.id}>
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating">
                <span>{item.rating}</span>
              </div>
              <div className="player-position">
                <span>{item.position}</span>
              </div>
              <div className="player-nation">
                <img
                  src={item.imgnation}
                  alt={item.nation}
                  draggable="false"
                />
              </div>
            </div>
            <div className="player-picture">
              <img
                src={item.image}
                alt={item.name}
                draggable="false"
              />
              <div className="player-extra">
                <span>{item.skillMoves}*SM</span>
                <span>{item.weakFoot}*WF</span>
              </div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name">
                <span>{item.name}</span>
              </div>
              <div className="player-features">
                <div className="player-features-col">
                  <span>
                    <span className="player-feature-value">{item.pace}</span>
                    <span className="player-feature-title">PAC</span>
                  </span>
                  <span>
                    <span className="player-feature-value">{item.shooting}</span>
                    <span className="player-feature-title">SHO</span>
                  </span>
                  <span>
                    <span className="player-feature-value">{item.passing}</span>
                    <span className="player-feature-title">PAS</span>
                  </span>
                </div>
                <div className="player-features-col">
                  <span>
                    <span className="player-feature-value">{item.dribbling}</span>
                    <span className="player-feature-title">DRI</span>
                  </span>
                  <span>
                    <span className="player-feature-value">{item.defending}</span>
                    <span className="player-feature-title">DEF</span>
                  </span>
                  <span>
                    <span className="player-feature-value">{item.physicality}</span>
                    <span className="player-feature-title">PHY</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default itemCard;
