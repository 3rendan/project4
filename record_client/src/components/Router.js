const {HashRouter, NavLink, Route } = ReactRouterDOM;
/** the above code is called destructuring it is the same as
 * const HashRouter = ReactRouterDom.HashRouter;
 * const NavLink = ReactRouteDom.NavLink;
 * const Router = ReactRouterDom.Route;
 * */

 class RecordRouter extends React.Component {
     state = {};
     render(){
         return (
             <HashRouter>
             hello
              <nav className='navbar-light bg-light row'>
                <NavLink to="/" className='nav-item m-2'>
                    Home
                </NavLink>
                <NavLink to='/records' className='nav-item m-2'>
                    My To Do List
                </NavLink>
              </nav>
                <Route path="/records" component={App} />
             </HashRouter>
         );
     }
 }
 ReactDOM.render(<RecordRouter />, document.querySelector('.container'));
