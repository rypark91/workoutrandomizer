
import classes from "./Card.module.css";

const Card = (props) => {

    return (
        <div>
            <div className={classes.card}>
                <img src={props.image} alt={props.image}/>
                {/* <img src="post.jpg" alt="test"/> */}
                {/* <div className={classes.image} style={{backgroundImage: `url(${"post.jpg"})`}}></div> */}
                <hr/>
                <p>{props.workoutname}</p>
                <p>{props.recrepset}</p>
        
            </div>
        </div>
        
    );
}

export default Card;