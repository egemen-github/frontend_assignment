
// Toggle of notificaion bar.
const handleToggle = (id) => {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const Notifications = ({NotifData, PageTitle}) => {
  return ( 
      <div className="outter">
      <p className="is-size-4 py-5 my-2 is-bold-roman">{PageTitle}</p>
      {NotifData.map((notif, index)=>{
        // Where Notifications are shown as divs.
        return <div key={index}>
          <div className="card mt-2 py-0 border">
            <div className="card-content columns py-2 my-0 is-mobile">
              <div className="card-header-title column is-1 mx-3 has-text-centered">
                <p className='is-size-6 subtitle'>{notif.date}</p>
              </div>
              <div className="card-header-title column is-8 has-text-left">
                {notif.title}
              </div>
              <button onClick={() => handleToggle(index)} className="column is-1 is-offset-2 card-header-icon" aria-label="more options">
                  <span className="icon">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
              </button>
            </div>
          </div>
          {/* Description div - toggleable */}
            <div id={index} style={{"display": "none"}} className="card py-1 my-1 notif-border">
                <div className="card-content columns is-mobile">
                    <div className="column is-1 mx-3">
                      <button className='button is-normal'>Delete</button>
                    </div>
                    <div className="column is-10">
                    <div>{notif.desc}</div>
                    </div>
                </div>
            </div>
        </div>
      })}
    </div>
   );
}
 
export default Notifications;