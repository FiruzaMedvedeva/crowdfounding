import React from 'react';
import { Rewards } from './content/dataProjectBlock.js';
import './Rewards.css';


const RewBlock = (props) => {
  const reward = Rewards.filter(r => {
    if (r.id === props.project)
      return true;
    return false;
  })[0];
  console.log ("------>", reward);
  return (
    <section id="rewards-block">
      <h2>Награда</h2>
      {
        reward.rews.map(r => {
          return (
            <div className="rew">
             <h3 className="reward-title"> от {r.amount} сом и выше</h3>
               <div className="reward-description">
                  <strong> {r.name}</strong>
                  <ul>
                    <li>{r.text}</li>
                  </ul> 
                </div>
            </div>
          );
        })
      }
    </section>
  );
 
};
export default RewBlock;