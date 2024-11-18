import { cards } from "../../data/data";
import "./Home.css";

const Cards = () => {
  return (
    <div className="content-grid-home">
        {
            cards.map((card) =>(
                <div className="grid-one-item grid-common grid-c1" key={card.id}>
                    <div className="grid-c-title">
                        <h3 className="grid-c-title-text">Cards</h3>
                        <button className="grid-c-title-icon">
                            <img src={ card.image } />
                        </button>
                    </div>
                    <div className="grid-c1-content">
                        <p>{card.title}</p>
                        <div className="lg-value">$ {card.price}</div>
                        <div className="card-wrapper">
                            <span className="card-pin-hidden">**** **** **** </span>
                            <span>{card.code}</span>
                        </div>
                        <div className="card-logo-wrapper">
                            <div>
                                <p className="text text-silver-v1 expiry-text">Expires</p>
                                <p className="text text-sm text-white">{card.date}</p>
                            </div>
                            <div className="card-logo">
                                <div className="logo-shape1"></div>
                                <div className="logo-shape2"></div>
                            </div>
                        </div>
                    </div>
                </div>
           ))
        }
    </div>
  )
}

export default Cards
