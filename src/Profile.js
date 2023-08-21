import React from 'react'

const Profile = () => {
  return (
        <div id="app">
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <nav className="navbar navbar-expand-lg main-navbar">
                    <div className="form-inline mr-auto">
                        <ul className="navbar-nav mr-3">
                            <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav navbar-right">
                        <li className=" hidecheck ">
                            <form action="https://demo.quickpass.xyz/admin/visitor/search" method="post">
                                <input type="hidden" name="_token" value="Zko3YvCCaJhG0tWqiVLGuNf0GoIuxMjPTo1nVekd" />
                                <div className="d-flex form-group" style={{ marginBottom: '-24px', marginLeft: 'auto' }}>
                                    <input className="form-control inputid" style={{marginRight: '5px'}} type="text" name="visitorID" placeholder="Enter Visitor ID" />
                                    <button className="btn  d-flex inputbtn align-items-center" type="submit"><i className="fas fa-4x fa-sign-out-alt"></i>CheckOut</button>
                                </div>
                            </form>
                        </li>
                        <li className="dropdown">
                            <a data-toggle="tooltip" data-placement="bottom" title="Go to Frontend" href="https://demo.quickpass.xyz" className="nav-link nav-link-lg beep" target="_blank"><i className="fa fa-globe"></i></a>
                        </li>
                        <li className="dropdown">
                            <a href="" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                <div className="d-sm-none d-lg-inline-block "><span className="flag-icon">🇬🇧</span>English</div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="https://demo.quickpass.xyz/admin/lang/en" className="dropdown-item has-icon">
                        <span className="flag-icon flag-icon-aw">🇬🇧 </span>English</a>
                                <a href="https://demo.quickpass.xyz/admin/lang/de" className="dropdown-item has-icon">
                        <span className="flag-icon flag-icon-aw">🇩🇪 </span>German</a>
                                <a href="https://demo.quickpass.xyz/admin/lang/sa" className="dropdown-item has-icon">
                        <span className="flag-icon flag-icon-aw">🇸🇦 </span>Arabic</a>
                            </div>
                        </li>



                        <li className="dropdown">
                            <a href="https://demo.quickpass.xyz/admin/profile" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="https://demo.quickpass.xyz/assets/img/default/user.png" className="rounded-circle mr-1" />
                    <div className="d-sm-none d-lg-inline-block">Hi, John Doe</div>
                </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="https://demo.quickpass.xyz/admin/profile" className="dropdown-item has-icon">
                        <i className="far fa-user"></i> Profile
                    </a>
                                <div className="dropdown-divider"></div>
                                <a href="https://demo.quickpass.xyz/logout" onclick="event.preventDefault();document.getElementById('logout-form').submit();" className="dropdown-item has-icon text-danger">
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
                                <form id="logout-form" action="https://demo.quickpass.xyz/logout" method="POST" className="display-none">
                                    <input type="hidden" name="_token" value="Zko3YvCCaJhG0tWqiVLGuNf0GoIuxMjPTo1nVekd" /> </form>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="main-sidebar">
                    <aside id="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <a href="https://demo.quickpass.xyz/admin/dashboard">Visitor Pass</a>
                        </div>
                        <div className="sidebar-brand sidebar-brand-sm">
                            <a href="https://demo.quickpass.xyz/admin/dashboard">
                    VP            </a>
                        </div>


                        <ul className="sidebar-menu">

                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/dashboard"><i className="fas fa-laptop"></i> <span>Dashboard</span></a></li>
                            <li className="active"><a className="nav-link " href="https://demo.quickpass.xyz/admin/profile"><i className="far fa-user"></i> <span>Profile</span></a></li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/departments"><i className="fas fa-building"></i> <span>Departments</span></a></li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/designations"><i className="fas fa-layer-group"></i> <span>Designations</span></a></li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/employees"><i className="fas fa-user-secret"></i> <span>Employees</span></a></li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/visitors"><i className="fas fa-walking"></i> <span>Visitors</span></a></li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/pre-registers"><i className="fas fa-user-friends"></i> <span>Pre-registers</span></a></li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/attendance"><i className="fas fa-clock"></i> <span>Attendance</span></a></li>
                            <li className="nav-item dropdown "><a className="nav-link has-dropdown" href="https://demo.quickpass.xyz/admin/#"><i className="fas fa-archive"></i> <span>Report</span></a>
                                <ul className="dropdown-menu">
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/admin-visitor-report"><i className="fas fa-list-alt"></i> <span>Visitor Report</span></a></li>
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/admin-pre-registers-report"><i className="fas fa-list-alt"></i> <span>Pre-Registers Report</span></a></li>
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/attendance-report"><i className="fas fa-clock"></i> <span>Attendance Report</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown "><a className="nav-link has-dropdown" href="https://demo.quickpass.xyz/admin/#"><i className="fas fa-id-card "></i> <span>Administrators</span></a>
                                <ul className="dropdown-menu">
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/adminusers"><i className="fas fa-users"></i> <span>Users</span></a></li>
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/role"><i className="fa fa-star"></i> <span>Role</span></a></li>
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/language"><i className="fas fa-globe"></i> <span>Language</span></a></li>
                                    <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/addons"><i className="fa fa-crosshairs"></i> <span>Addons</span></a></li>
                                </ul>
                            </li>
                            <li className=""><a className="nav-link " href="https://demo.quickpass.xyz/admin/setting"><i className="fas fa-cogs"></i> <span>Settings</span></a></li>

                        </ul>
                    </aside>
                </div>

                {/* <!-- Main Content --> */}
                <div className="main-content">
                    <div className="section">
                        <div className="section-header">
                            <h1>Profile</h1>
                            <ol className="breadcrumb">

                                <li className="breadcrumb-item"><a href="https://demo.quickpass.xyz/admin/dashboard">Dashboard</a></li>


                                <li className="breadcrumb-item active">Profile</li>

                            </ol>


                        </div>
                        <div className="section-body">
                            <div className="row mt-sm-4">
                                <div className="col-12 col-md-12 col-lg-5">
                                    <div className="card profile-widget">
                                        <div className="profile-widget-header">
                                            <img alt="image" src="https://demo.quickpass.xyz/assets/img/default/user.png" className="rounded-circle profile-picture" />
                                        </div>
                                        <div className="profile-widget-description">
                                            <div className="profile-widget-name">
                                                John Doe
                                                <div className="text-muted d-inline font-weight-normal">
                                                    <div className="slash"></div>
                                                    admin@example.com
                                                </div>
                                            </div>
                                            <dl className="row">
                                                <dt className="col-sm-4">Username</dt>
                                                <dd className="col-sm-8">admin</dd>
                                                <dt className="col-sm-3">Phone</dt>
                                                <dd className="col-sm-9">+15005550006</dd>
                                                <dt className="col-sm-3">Address</dt>
                                                <dd className="col-sm-9">
                                                    <p>Dhaka, Bangladesh</p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <form method="post" action="https://demo.quickpass.xyz/admin/profile/change">
                                            <input type="hidden" name="_token" value="Zko3YvCCaJhG0tWqiVLGuNf0GoIuxMjPTo1nVekd" /> <input type="hidden" name="_method" value="put" />
                                            <div className="card-header">
                                                <h4>Change Password</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="form-group col-md-12 col-12">
                                                        <label for="old_password">Old Password</label> <span className="text-danger">*</span>
                                                        <input id="old_password" name="old_password" type="password" className="form-control " />
                                                    </div>
                                                    <div className="form-group col-md-12 col-12">
                                                        <label for="password">Password</label> <span className="text-danger">*</span>
                                                        <input id="password" name="password" type="password" className="form-control " />
                                                    </div>
                                                    <div className="form-group col-md-12 col-12">
                                                        <label for="password_confirmation">Password Confirmation</label> <span className="text-danger">*</span>
                                                        <input id="password_confirmation" name="password_confirmation" type="password" className="form-control " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-7">
                                    <form action="https://demo.quickpass.xyz/admin/profile/update/1" method="POST" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="Zko3YvCCaJhG0tWqiVLGuNf0GoIuxMjPTo1nVekd" /> <input type="hidden" name="_method" value="PUT" />
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="form-row">
                                                    <div className="form-group col">
                                                        <label>First Name</label> <span className="text-danger">*</span>
                                                        <input type="text" name="first_name" className="form-control " value="John" />
                                                    </div>
                                                    <div className="form-group col">
                                                        <label>Last Name</label> <span className="text-danger">*</span>
                                                        <input type="text" name="last_name" className="form-control " value="Doe" />
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col">
                                                        <label>Email</label> <span className="text-danger">*</span>
                                                        <input type="text" name="email" className="form-control " value="admin@example.com" />
                                                    </div>
                                                    <div className="form-group col">
                                                        <label>Phone</label>
                                                        <input type="text" name="phone" className="form-control " value="+15005550006" />
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col">
                                                        <label>Username</label>
                                                        <input type="text" name="username" className="form-control " value="admin" />
                                                    </div>

                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col">
                                                        <label for="customFile">Image</label>
                                                        <div className="custom-file">
                                                            <input name="image" type="file" className="custom-file-input " id="customFile" onchange="readURL(this);" />
                                                            <label className="custom-file-label" for="customFile">Choose file</label>
                                                        </div>
                                                        <img className="img-thumbnail image-width mt-4 mb-3" id="previewImage" src="https://demo.quickpass.xyz/assets/img/default/user.png" alt="John Doe profile image" />
                                                    </div>
                                                    <div className="form-group col">
                                                        <label>Address</label>
                                                        <textarea name="address" className="form-control small-textarea-height" id="address" cols="30" rows="10">Dhaka, Bangladesh</textarea>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-primary mr-1" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="main-footer">
                    <div className="footer-left">
                        @ All Rights Reserved to Voith
                    </div>
                    <div className="footer-right">v5.0</div>
                </footer>
            </div>
        </div>
  )
}

export default Profile