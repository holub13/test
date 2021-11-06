import React, { useState, useEffect } from "react";
import "./post-list-item.css";

// export default class PostListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       important: false,
//       like: false
//     };
//     this.onImportant = this.onImportant.bind(this);
//     this.onLike = this.onLike.bind(this);
//   }

//   onImportant() {
//     this.setState(({ important }) => ({
//       important: !important
//     }));
//   }
//   onLike() {
//     this.setState(({ like }) => ({
//       like: !like
//     }));
//   }

//   render() {
//     const { label } = this.props;
//     const { important, like } = this.state;
//     let classNames = "app-list-item d-flex justify-content-between";

//     if (important) {
//       classNames += " important";
//     }
//     if (like) {
//       classNames += " like";
//     }
//     return (
//       <div className={classNames}>
//         <span className="app-list-item-label" onClick={this.onLike}>
//           {label}
//         </span>
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-star btn-sm"
//             onClick={this.onImportant}
//           >
//             <i className="fa fa-star" />
//           </button>
//           <button type="button" className="btn-trash btn-sm">
//             <i className="fa fa-trash" />
//           </button>
//           <i className="fa fa-heart" />
//         </div>
//       </div>
//     );
//   }
// }

export default function PostListItem(elements) {
  let classNames = "app-list-item d-flex justify-content-between";
  const { label, deleteItem } = elements;
  const [state, setState] = useState({
    important: false,
    like: false
  });
  const { important, like } = state;
  function onImportant() {
    setState(({ important }) => ({
      important: !important
    }));
  }
  function onLike() {
    setState(({ like }) => ({
      like: !like
    }));
  }
  if (important) {
    classNames += " important";
  }
  if (like) {
    classNames += " like";
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm" onClick={onImportant}>
          <i className="fa fa-star" />
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={deleteItem}>
          <i className="fa fa-trash" />
        </button>
        <i className="fa fa-heart" />
      </div>
    </div>
  );
}
