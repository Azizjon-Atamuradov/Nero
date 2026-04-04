import { useState, useEffect } from "react"
import "./Shipping.css";


const messages = [
  "FREE SHIPPING ON ORDERS $70+",
  "FREE AND EASY RETURNS",
];

const Shipping = () => {

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, []);




  return (
    <div className="shipping-container">
      <p className={fade ? "fade-in" : "fade out"}>{messages[index]}</p>
    </div>
  )
}

export default Shipping