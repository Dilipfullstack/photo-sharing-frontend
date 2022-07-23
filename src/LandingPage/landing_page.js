import {Link} from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
              <div className='landing-page'>
          <table>
              <tr>
                  <td className='image'>
                      <img className='test' src='images\background.jpg' alt='unsplash' />
                  </td>
                  <td>
                      <h2 className='landing-text'>Instagram Clone Project</h2>
                      <Link to="/home"><button>Enter</button></Link>
                  </td>
              </tr>
          </table>
      </div>
  {/* ); */}
        {/* <h2>Landing Page</h2>
        <Link to="/home"><button>Enter</button></Link> */}
        </>
    );
};

export default LandingPage;