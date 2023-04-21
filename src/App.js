// import logo from './logo.svg';
import './App.css';
import { Login } from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './component/Footer'
import { NavBar } from './component/NavBar'
import { Home } from './component/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App( ) {
  return (
    <><div className="App">
      <NavBar/>
      {/* <Router> */}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
   
      </Routes>
      {/* </Router> */}
      <Footer/>
    
    </div></>
  );
}

export default App;
/*<h1 className='a'>Weddings</h1><div>
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src="https://image3.jdomni.in/banner/12082021/6A/EA/5B/1E613A67473798A4B7F55C4251_1628768361873.jpg?output-format=webp" alt="" />
      </figure>
      <div class="article-body">
        <h2>Naughty Couples</h2>
        <p>
          congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="https://image2.jdomni.in/banner/12082021/0D/64/7B/56BDD752E7B04D069F2901A60F_1628769026338.jpg?output-format=webp" alt="" />
      </figure>
      <div class="article-body">
        <h2>Baar Baar Dekho</h2>
        <p>
          congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="https://image3.jdomni.in/banner/12082021/2B/65/38/55959E589A5BCD0967CD713FAB_1628768531605.jpg?output-format=webp" alt="" />
      </figure>
      <div class="article-body">
        <h2>Hatth m lele</h2>
        <p>
          congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>

</section>
<div class='f'>

<Container>
      
      <Row>
     
        <Col xs={6}>
           
        <h1>About Us</h1>
            <p className='c'>We, Perfectmatch.com, situated at Malad West, Mumbai, Maharashtra realize that marriage, being one of the most important and sacred events in every culture, is not only the union of two individual souls but also of two families. We are the pioneer and prominent matrimonial services provider of efficient and reliable matrimonial services including match making, personal consultancy and other related allied services to individuals living in the country. Our company works diligently to create a rich and enormous database of high profile clients. Our teams are well versed in the dynamics of the marriage system of every community. We have dedicated teams that work meticulously in order to cater to the requirements of various categories of clients.</p>
        </Col>
        <Col xs={6}>
          <img src="https://image3.jdomni.in/banner/12082021/6F/9C/AC/BFA71237BD5515D4693C674052_1628765413469.jpg?output-format=webp" className='e' />
        </Col>
      </Row>
        
      
      
    </Container>
    </div>
    <h1 className='az'>WHY US</h1>
<section className='ads'>
      
<div>
  <Container>
<Row>
  
  <Col xs={6} md={3} >
      <img src="https://image3.jdomni.in/banner/12082021/E5/75/BF/5586237B79243FA3BD7A4ED252_1628766829674.png?output-format=webp" className='g'/>
     <h5 class="k">Database of Millions of Members</h5>
     <p className='aq'>We have a wide choice from all the communities and a large NRI database so you can find your life partner with the assistance of the world's largest matchmaking service.</p>
  </Col>
  <Col xs={6} md={3}  >
  <img src="https://image3.jdomni.in/banner/12082021/3F/8A/79/AC839B02B0E136437670B39F4C_1628767796054.png?output-format=webp" className='h'/>
  <h5 class="k">Strict Profile Screening System</h5>
   <p className='aq'>Our CRM team is committed to ensure that every profile put up in our database is screened to ensure you continue to have a smooth partner search experience.</p>
  </Col>
  <Col xs={6} md={3}  >
  <img src="https://image2.jdomni.in/banner/12082021/34/67/EC/4FFB40B3124C9E9C7726EA3AF3_1628767233403.png?output-format=webp" className='i'/>
    <h5 class="k">State of Art Search Technology</h5>
    <p className='aq'>Our customization, filtering, and blocking systems strive to build technology that will only bring you matches that are relevant to you.</p>
  </Col>
  <Col xs={6} md={3}>
  <img src="https://image3.jdomni.in/banner/12082021/E1/04/31/B08C83F39F41BDECEE1F18F89A_1628767328182.png?output-format=webp" className='n'/>
  <h5 class="k">Total Privacy Control</h5>
  <p className='aq'>Safety and privacy, of the member is top priority. Being a certified matchmaking portal we let you decide who to give your contact information to.</p>
  </Col>
  
</Row>
</Container>
</div>
</section>
<section className='azs'>
<Container>

<Row>
  <Col xs={6} md={4}>
    <img src="https://image2.jdomni.in/banner/12082021/E0/B3/F0/5786DC8ACCB769F95D7B94E399_1628770413058.png?output-format=webp" className='qy'></img>
  </Col>
  <Col xs={6} md={8}>
  <div class="slider">
<input type="radio" name="toggle" id="btn-1" checked />
<input type="radio" name="toggle" id="btn-2" />
<input type="radio" name="toggle" id="btn-3" />

<div class="slider-controls">
<label for="btn-1"></label>
<label for="btn-2"></label>
<label for="btn-3"></label>
</div>

<ul class="slides">
<li class="slide">
<div class="slide-content">
  <h2 class="slide-title">Slide #1</h2>
  <p class="slide-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos commodi eos totam perferendis possimus dolorem, deleniti vitae harum? Enim.</p>
  <a href="#" class="slide-link">Learn more</a>
</div>
<p class="slide-image">
  <img src="https://image3.jdomni.in/banner/12082021/6A/EA/5B/1E613A67473798A4B7F55C4251_1628768361873.jpg?output-format=webp" alt="stuff" width="320" height="240" />
</p>
</li>
<li class="slide">
<div class="slide-content">
  <h2 class="slide-title">Slide #2</h2>
  <p class="slide-text">Nisi ratione magni ea quis animi incidunt velit voluptate dolorem enim possimus, nam provident excepturi ipsam nihil molestiae minus delectus!</p>
  <a href="#" class="slide-link">Amazing deal</a>
</div>
<p class="slide-image">
  <img src="https://image2.jdomni.in/banner/12082021/0D/64/7B/56BDD752E7B04D069F2901A60F_1628769026338.jpg?output-format=webp" alt="stuff" width="320" height="240" />
</p>
</li>
<li class="slide">
<div class="slide-content">
  <h2 class="slide-title">Slide #3</h2>
  <p class="slide-text">Quisquam quod ut quasi, vero obcaecati laudantium asperiores corporis ad atque. Expedita fugit dicta maxime vel doloribus sequi, facilis dignissimos.</p>
  <a href="#" class="slide-link">Get started</a>
</div>
<p class="slide-image">
  <img src="https://image3.jdomni.in/banner/12082021/2B/65/38/55959E589A5BCD0967CD713FAB_1628768531605.jpg?output-format=webp" alt="stuff" width="320" height="240" />
</p>
</li>
</ul>
</div>

  </Col>
  
</Row>
</Container>
</section>
<h1 className='aj'>Contact Us</h1>
<section className='as'>
<Container>

<Row>
  <Col><input type="text" class="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
  <Col><input type="text" class="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
  <Col><input type="text" class="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
</Row>
<br></br>
<Row>
<Col className='ac'><input type="text" class="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
</Row>

<Row>
<Col></Col>

<Col className="dc"> <button type='button' className='wes'>Submit   Now</button></Col>
<Col></Col>
</Row>
</Container>
</section>
<section className='azs' > 
<Container>
<Row>
  <Col xs={6} md={6} className='kya'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.37817780316!2d81.2680340411497!3d21.195413475014337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1680533759389!5m2!1sen!2sin" width="730" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Col>
  <Col xs={6} md={4} className='maa'> 
  
    <img src="https://image3.jdomni.in/banner/12082021/E0/EE/48/F434FFCF08C37D2430AE411D63_1628769844054.png?output-format=webp" className='kg'/>
    <p class="yow">Our Office Address</p>
  <p class="yov">Malad West, Mumbai, Maharashtra 400064</p>
  <img src="https://image3.jdomni.in/banner/12082021/33/C9/A3/B63D8D159012818287F3F730A6_1628769868105.png?output-format=webp" className='kg1'/>
    <p class="yow1">General Enquiries</p>
  <p class="yov1">contact@mysites.com</p>
  <img src="https://image2.jdomni.in/banner/12082021/D3/E0/4E/B72756E4920FAB8B4C2D054AEF_1628769879094.png?output-format=webp" className='kg2'/>
    <p class="yow2">Call Us</p>
  <p class="yov2">+91-8888888888</p>
    <img src="https://image3.jdomni.in/banner/12082021/07/E1/76/11D3452A730382447A5B725399_1628769889180.png?output-format=webp" className='kg3'/>
    <p class="yow3">Our Timing</p>
  <p class="yov3">Mon - Sun : 09:00 AM - 09:00 PM</p>
   
    
  </Col>
  <Col xs={6} md={2} > 
  </Col>
  
</Row>
</Container>
</section>

</div>*/
