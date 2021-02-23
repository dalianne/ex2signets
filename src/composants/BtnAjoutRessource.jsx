import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./BtnAjoutRessource.scss"

export default function BtnAjoutRessource() {
    return (
        <button className="BtnAjoutRessource">
            <Fab color="secondary" aria-label="add">
                <AddIcon />
            </Fab>    
        </button>
    );
}