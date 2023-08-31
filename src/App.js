import Card from "./components/card/Card";
import "./styles/styles.css";
import styles from './App.module.css'

//Assert imports
import {ReactComponent as sedanIcon} from './images/icon-sedans.svg';
import {ReactComponent as suvIcon} from './images/icon-suvs.svg';
import {ReactComponent as luxIcon} from './images/icon-luxury.svg';


function App() {
  const cardDescSedan = `Choose a sedan for its affordability
and excellent fuel economy. Ideal for cruising in the city or on your next trip.`;
const cardDescSUV =  `Take an SUV for its spacious inteiror, power, and
versatility. Perfect for your next family vacation and off-road adventure`;
const cardDesLux = `Cruise in the best car brands without the bloated prices.
Enjoy the enhanced comfort of a luxury rental and arrive in style`;


  return (
    <div className={styles.container}>
<div className={styles.card_section}>
      <Card  
      description={cardDescSedan} 
      Icon={sedanIcon}
      style={styles.card_sedan}
      />
      
      <Card
      title="SUV"
      description={cardDescSUV}
      Icon={suvIcon}
      style={styles.card_suv}
      btnStyle={styles.btn_suv}
      />
      <Card
      title="LUXURY"
      description={cardDesLux}
      Icon={luxIcon}
      style={styles.card_lux}
      btnStyle={styles.btn_lux}
      label="Learn More"
      />
      
    </div>
    </div>
    
  );
}

export default App;
