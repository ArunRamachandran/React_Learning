import React from 'react';

class LikeButton extends React.Component {

    shouldComponentUpdate(newProps, newState) {
      return false;
   }

    render () {
        return (
          <div>
            Likes : <span>{this.props.countValue}</span>
          </div>  
        );
    }

}

export default LikeButton;
