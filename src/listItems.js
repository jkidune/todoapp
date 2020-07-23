import React from 'react';
import './listItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';



function ListItems(props) {

    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input value={item.text} type="text" id={item.key}
                    onChange = {
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />
                <span>
                    <FontAwesomeIcon className="faicons" icon='trash' onClick={ () => props.deleteItem(item.key)}/>
                </span>
                </p>
                
            </div>
        })
        
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
            {listItems}
            </FlipMove>
            </div>
    )
}

export default ListItems;