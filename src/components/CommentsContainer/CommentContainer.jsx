import React from 'react';
import CommentIcon from '../../assets/image/comment.png';
import LikeIcon from '../../assets/image/iLikeInstagram.png';
import Upload from '../../assets/image/upload.png';
import Save from '../../assets/image/save.png';
import LikePeople from '../LikePeople';
import './CommentContainer.css';

const CommentContainer = () => (
  <div className="card-content" id="commentContainer">
    <div id="iconContainer">
      <div className="media-left">
        <figure className="image iconComment">
          <img src={LikeIcon} alt="Placeholder image" />
        </figure>
        <figure className="image iconComment ">
          <img src={CommentIcon} alt="Placeholder image" />
        </figure>
        <figure className="image iconComment is-24x24">
          <img src={Upload} alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-right is-24x24">
        <figure className="image iconCommentRight">
          <img src={Save} alt="Placeholder image" />
        </figure>
      </div>
    </div>

    <div className="content" id="contentCommentsContainer">
      <LikePeople />
      <p id="commentUser">
        jguaido
        ¡Más de 20 horas, todo el territorio nacional sin luz!
        <br />
        El usurpador insiste en gobernar un país que hace años se le fue de las manos.
        Una Venezuela sin agua, sin luz, sin alimentos, sin medicinas. Ese es su verdadero Plan de La Patria.
        <br />
        Nuestra Venezuela merece una vida digna, contar con servicios públicos de calidad, contar con la seguridad de que encontrarán transporte para llegar a sus casas, poder trabajar y ser productivos.
        <br />
        ¡Hacia allá vamos y no nos detendremos hasta lograrlo! ¡Convirtamos la indignación en movilización!
        -
      </p>
    </div>
  </div>
);

export default CommentContainer;
