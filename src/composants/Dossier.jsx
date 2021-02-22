import './Dossier.scss';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import NotesIcon from '@material-ui/icons/Notes';



export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">


      
      <div className="couverture">
        <span className="deplacer"><NotesIcon className="NotesIcon"/></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
        <button><MoreVertIcon/> </button>
      </div>
      {/* <button>Modifier</button> */}
      {/* <div className="MoreVertIcon"> */}
      {/* <button><MoreVertIcon/> </button> */}
      {/* </div> */}
    </article>
  );
}