import React from "react";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Planes</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>$8.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonStyle="btn--outline">
                    Evalúate
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Black</h3>
                  <h4>$29.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>4% Cash Back</li>
                    <li>$100,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonStyle="btn--outline">
                    Evalúate
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>$59.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Unlimited Transactions</li>
                    <li>7% Cash Back</li>
                    <li>Unlimit Spending</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonStyle="btn--outline">
                    Evalúate
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
