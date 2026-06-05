import React from 'react'
import './Offers.css'

interface OfferItem {
  id: number;
  leftText: string;
  rightText: string;
}

const Offers: React.FC = () => {
  const offerItems: OfferItem[] = [
    {
      id: 1,
      leftText: "Office of multiple interest content",
      rightText: "Collaborative & partnership"
    },
    {
      id: 2,
      leftText: "The hangar US Air force digital superimental",
      rightText: "We talk about our weight"
    },
    {
      id: 3,
      leftText: "Delta faucet content, social digital",
      rightText: "Piloting digital confidence"
    }
  ]

  return (
    <section className="offers">
      <div className="container">
        <div className="offers-header">
          <div className="yellowgreen-outline-box"></div>
          <h2 className="offers-title">
            What we <span className="pill-highlight">can</span><br/>
            <span className="text-underline-orange">offer</span> you!
          </h2>
        </div>

        <div className="offers-list">
          {offerItems.map((item) => (
            <div className="offer-item" key={item.id}>
              <div className="offer-left">{item.leftText}</div>
              <div className="offer-right">{item.rightText}</div>
              <div className="offer-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
