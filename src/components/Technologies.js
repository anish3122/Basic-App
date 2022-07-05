import {Link,Outlet} from 'react-router-dom';
function Technologies(){
return(
<div className="container">
<div className="m-5">
    <h1 className = 'mb-5'>TECHNOLOGIES</h1>
        <img src = 'http://media.noria.com/sites/Uploads/2019/11/19/3ad0b198-2717-4831-a344-f2e35e943bae_ArticleImages_RP31161_1234x694_08022019_extra_large.jpeg' className = 'w-50'/>
            <p className = 'display-6 pe-5 mt-3'>Technologies we are using for web development are:</p>
    <ul>
        <li>
        <Link to='html'>HTML</Link>
        </li>
        <li>
            <Link to='Javascript'>JAVASCRIPT</Link>
            </li>
        <li>
        <Link to='react'>REACT</Link>
        </li>
    </ul>
    </div>
    <Outlet />
    </div>
    )
}
export default Technologies