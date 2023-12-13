import React from 'react';
import Title from './Title';
import {tours} from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map (tours => {
          return (
            <article className="tour-card">
              <div className="tour-img-container" key={tours.id}>
                <img src={tours.img} className="tour-img" alt="" />
                <p className="tour-date">{tours.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tours.title}</h4>
                </div>
                <p>
                  {tours.text}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map" />
                    </span>{' '}
                    {tours.location}
                  </p>
                  <p>{tours.duration}</p>
                  <p>{tours.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
