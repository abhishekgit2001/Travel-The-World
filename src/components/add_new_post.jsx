import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import '../css/add_new_post.css';
import Nav from './Nav';

const AddNewPost = () =>{
    return(
        <div>
        <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="add_area">
                        <h4 className="text-center pt-1" style={{fontFamily:'redo'}}>Upload Your Post</h4><hr></hr>
                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <table className="table table-responsive w-100">
                                            <tr>
                                                <td>Location</td>
                                                <td><input type="text" name="loc" class="form-control w-100" placeholder="Enter Trip Location"></input></td>
                                            </tr>
                                        </table>
                                    </div>
                                     <div className="col-12 col-md-4">
                                        <table className="table table-responsive w-100">
                                            <tr>
                                            <td>Upload Photo</td>
                                                <td><input type="file" name="photo" class="form-control w-100"></input></td>
                                            </tr>
                                            <tr>
                                            <td>Upload Photo</td>
                                                <td><input type="file" name="photo" class="form-control w-100"></input></td>
                                            </tr>
                                            <tr>
                                            <td>Upload Photo</td>
                                                <td><input type="file" name="photo" class="form-control w-100"></input></td>
                                            </tr>   
                                            <tr>
                                            <td>Upload Photo</td>
                                                <td><input type="file" name="photo" class="form-control w-100"></input></td>
                                            </tr>   
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPost