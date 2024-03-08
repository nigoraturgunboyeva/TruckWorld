import ReactDOM from "https://esm.sh/react-dom@18";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const CARDS = 5;
const MAX_VISIBILITY = 3;
const content = ["Logistics service providers offer a broad range of services related to moving goods from one place to another by providing warehousing, transportation, inventory control, and distribution services"]
const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
 <div className="car-ousel">
       <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><FaChevronLeft /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><FaChevronRight /></button>}
    </div>
 </div>
  );
};

const Cards = () => (
  <div className='app'>
    <Carousel>
    {[...new Array(CARDS)].map((_, i) => (
        <Card title={'How can we help you '} content={content}/>
        ))}
    </Carousel>
        <div className="ex-cont">
            <div className="ex-blog">
            <h2>1730</h2>
            <h3>Drivers work <br /> with us</h3>
            </div>
            <div className="ex-blog">
            <h2>100%</h2>
            <h3>Satisfied <br /> customers</h3>
            </div>
            <div className="ex-blog">
            <h2>5+</h2>
            <h3>Years <br />experience</h3>
            </div>
            <div className="ex-blog">
            <h2>3</h2>
            <h3>Minutes<br />Updating shift time</h3>
            </div>
        </div>
  </div>
);
export default Cards