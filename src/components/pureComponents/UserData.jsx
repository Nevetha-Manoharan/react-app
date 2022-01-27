import React from "react";

class UserData extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p>{`- NAME:  ${item.name}`}</p>
              <p>{`- AGE:  ${item.age}`}</p>
              {index < data.length -1 && <hr style={{width:'50%'}}/>}
            </div>

          );
        })}
      </div>
    );
  }
}
export default UserData;
