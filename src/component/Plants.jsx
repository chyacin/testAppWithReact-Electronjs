import React from 'react';
import PropTypes from 'prop-types';
import './Plants.css'
import  Sunflower from './photos/field_of_sunflower.png';
import  Hive from './photos/honeycomb.png';
import  Tree from './photos/tree.png';
import  Sprout from './photos/sprout.png';
import Corn from './photos/corn_field.png';
import Mill from './photos/mill.png';
import Well from './photos/well.png';
import Wheat from './photos/sunflower.png';


function Plants ({ setTree, setSunflower, setHive, setSprout, setCorn, setMill, setWell, setWheat }) {
     
     return(
     <>
        <div className="plantsHeader">
          <h1>Plants/Levels</h1> 
        </div>
        <form>
    <label>
      Code:
     <input type="text" name="name" />
    </label>
      <input type="submit" value="Submit" />
     </form>
       <div className="plants">
      <button className="button" onClick={ ()=> setSunflower(true)} activeClassName="active">
        <img  className="pics" src={Sunflower} alt="sunflower" />     
       <p>Sun flower</p>
      </button>
      </div> 
      <div className="plants">
      <button className="button" onClick={ ()=> setHive(true)} activeClassName="active">
      <img  className="pics" src={Hive} alt="Hive" />     
       <p>Hive</p>
      </button>
      </div>
      <div className="plants">
      <button className="button-gray" onClick={ ()=> setTree(true)} activeClassName="active">
      <img  className="pics" src={Tree} alt="Tree" />     
       <p>Tree</p>
      </button>
      </div>
      <div className="plants">
      <button className="button-gray" onClick={ ()=> setSprout(true)} activeClassName="active">
      <img  className="pics" src={Sprout} alt="Sprout" />    
       <p>Sprout</p>
      </button>
      </div>
      <div className="plants">
      <button className="button-gray" onClick={ ()=> setCorn(true)} activeClassName="active">
      <img  className="pics" src={Corn} alt="Corn" />     
       <p>Corn</p>
      </button>
      </div>
      <div className="plants">
      <button className="button-gray" onClick={ ()=> setMill(true)} activeClassName="active">
      <img  className="pics" src={Mill} alt="Mill" />     
       <p>Mill</p>
      </button>
      </div>
      <div className="plants">
      <button className="button-gray" onClick={ ()=> setWell(true)} activeClassName="active">
      <img  className="pics" src={Well} alt="Well" />     
       <p>Well</p>
      </button>
      </div>
      <div className="plants">
      <button className="button-gray" onClick={ ()=> setWheat(true)} activeClassName="active">
      <img  className="pics" src={Wheat} alt="Wheat" />     
       <p>Wheat</p>
      </button>
      </div>
      </>
    );

}

    Plants.propTypes = {
      setTree: PropTypes.func.isRequired,
      setSunflower: PropTypes.func.isRequired, 
      setHive: PropTypes.func.isRequired,
      setSprout: PropTypes.func.isRequired,
      setCorn: PropTypes.func.isRequired,
      setMill: PropTypes.func.isRequired,
      setWell: PropTypes.func.isRequired,
      setWheat: PropTypes.func.isRequired, 
    };

export default Plants;