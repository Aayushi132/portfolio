import { Component } from "react";
import AppNavbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div>
          <ul>
            <ol>
              <img src="../PartyBakery.jpg" alt="partybakery"></img>
              <h2>
                <a
                  target="_blank"
                  href="https://dazzling-shortbread-bf5f48.netlify.app/home"
                >
                  PARTY BAKERY
                </a>
              </h2>
            </ol>
            <ol>
              <img src="../PetServices.jpg" alt="petservices"></img>
              <h2>
                <a
                  target="_blank"
                  href="https://majestic-pithivier-e2b18a.netlify.app/"
                >
                  PET SERVICES
                </a>
              </h2>
            </ol>
            <ol>
              <img src="../ShopReact.jpg" alt="shopreact"></img>
              <h2>
                <a
                  target="_blank"
                  href="https://sparkling-sherbet-4de1c2.netlify.app/"
                >
                  SHOP CART
                </a>
              </h2>
            </ol>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
