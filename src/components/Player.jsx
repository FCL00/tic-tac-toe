import React, {useState} from 'react'

const Player = ({name, symbol, isActive}) => {

    const [isEditing, setEditing] = useState(false);

    const [playerName, setPlayerName] = useState(name);

    const handleEditClick = () => {
        setEditing((prev) => !prev)

    }

    const handleChangeName = (event) => {
        const {name, value} = event.target;
        setPlayerName(value);
    }

    return (
        <>
            <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {isEditing ? ( 
                        <input className='player' type="text" value={playerName} defaultValue={name} onChange={handleChangeName}/> 
                    ) : (
                        <span className="player-name">{playerName}</span>
                    )}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </li>
        </>
    )
}

export default Player