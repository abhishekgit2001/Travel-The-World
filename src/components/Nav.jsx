import React from "react";
import {NavLink} from "react-router-dom";
import '../css/Nav.css';

class Nav extends React.Component{
    Show = () =>{
        if(document.getElementById('drop').style.display === 'block'){
            document.getElementById('drop').style.display = 'none';
        }else{
            document.getElementById('drop').style.display = 'block';
        }
    }
    render(){
        return(
            <>
              <div className="container- top_header">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="logo-area">
                            <img src="img/travel.jpg" alt="..." height="40px" width="40px"></img>
                            <span className="typewriter">Travel The World</span>
                        </div>
                    </div>
                    <div className="col-md-5 col-12" id="desk1">
                        <div className="search_area">
                            <form>
                              <table className="table table-responsive w-100">
                                  <tr>
                                    <td id="tt"><input type="search" name="search" placeholder="Search..." class="form-control"></input></td>
                                    <td><i className="fas fa-search" id="ii"></i></td>
                                  </tr>
                              </table>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-4" id="desk">
                        <div className="right_area">
                            <i className="fas fa-home"></i>
                            <i className="fas fa-plus" onClick={this.Show}></i>
                            <i class="far fa-user"></i>
                            <i className="fas fa-bell"></i>
                        </div>
                        <div id="drop">
                            <NavLink to="/add_new_post"><button className="btn-btn-warning">Add New Post</button></NavLink>
                        </div>
                    </div>
                </div>
              </div>
            </>
        )        
    }
}


export default Nav