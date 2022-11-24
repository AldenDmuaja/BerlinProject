import logo from './logo.svg';
import './style.css';

return App()
{
  <div>
  <nav className="navbar">
    <div className="logo">
      <a href="index.html">
        <p>Manjo<span>Blajar</span></p>
      </a>
    </div>
    <ul className="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">☰</label>
      <div className="menu font-weight-bold">
        <li><a href="#about ">About</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#testimoni">Testimoni</a></li>
        <li><a href="#kontak">Kontak</a></li>
        <li><a className="login" href="#">
            <button className="button login-button font-weight-bold">Login</button>
          </a></li>
      </div>
    </ul>
  </nav>
  <section className="about" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1">
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5">
          <p className="about-head font-weight-bold">
            Platform
            <br /><span>Belajar Online</span>
          </p>
          <p className="about-subhead">
            Mulai dari E-Books, Online
            <br />Video, Berbagai macam
            <br />Exercise.
          </p>
          <a href="daftar.html">
            <button className="button about-button font-weight-bold">Daftar Sekarang!</button>
          </a>
        </div>
        <div className="about-img col-lg-5 col-md-5 col-sm-5">
          <img src="elements/about-img.png" alt="gambar" />
        </div>
        <div className="col-lg-1 col-md-1">
        </div>
      </div>
    </div>
  </section>
  <section className="program" id="program">
    <p className="prog-head font-weight-bold">Pro<span>gram</span></p>
    <p className="prog-subhead">Apa saja yang ditawarkan</p>
    <a className="prog-line">
      <img src="elements/underline-prog.png"  />
    </a>
    <div className="container">
      <div className="row">
        <div className="prog-ele-left col-lg-4 col-md-6 col-sm-6">
          <p className="on-vid">
            Online Video
          </p>
          <a className="prog-img">
            <img src="elements/online-vid.png" />
          </a>
          <p className="prog-text on-vid-text">
            Ribuan video pembelajaran
            <br />yang bisa kalian nikmati
            <br />kapanpun dimanapun
          </p>
          <a href="daftar.html">
            <button className="button prog-button font-weight-bold">Cek Sekarang!</button>
          </a>
        </div>
        <div className="prog-ele-mid col-lg-4 col-md-6 col-sm-6">
          <p>
            E-Books
          </p>
          <a className="prog-img">
            <img src="elements/e-books.png" />
          </a>
          <p className="prog-text on-vid-text">
            Belajar mandiri dengan
            <br />ribuan e-book yang bisa
            <br />didownload.
          </p>
          <a href="daftar.html">
            <button className="button prog-button font-weight-bold">Cek Sekarang!</button>
          </a>
        </div>
        <div className="prog-ele-right col-lg-4 col-md-12 col-sm-12">
          <p>
            Exercise
          </p>
          <a className="prog-img">
            <img src="elements/exercise.png" />
          </a>
          <p className="prog-text on-vid-text">
            Berbagai Latihan Soal
            <br />yang mengasah
            <br />kemampuan berpikir.
          </p>
          <a href="daftar.html">
            <button className="button prog-button font-weight-bold">Cek Sekarang!</button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="testimoni" id="testimoni">
    <p className="testi-head font-weight-bold"><span>Testi</span>moni</p>
    <p className="testi-subhead">Testimoni dari beberapa pengguna!</p>
    <a className="testi-line">
      <img src="elements/underline-testi.png"  />
    </a>
    <div className="container">
      <div className="row testi-upper">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <a className="testi-img">
            <img src="elements/testi1.png" />
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="testi-text">
            <b>ManjoBlajar</b>
            <br />membantuku lulus
            <br />ujian masuk kampus!
            <br /><span>- Dave Jones</span>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <a className="testi-img">
            <img src="elements/testi2.png" />
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="testi-text">
            Dengan <b>ManjoBlajar</b>
            <br />tugasku terasa
            <br />ringan!
            <br /><span>- Abigail Rochefort</span>
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <a className="testi-img">
            <img src="elements/testi3.png" />
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="testi-text testi-text-sp">
            Dengan <b>ManjoBlajar</b>
            <br />aku bisa mengajar
            <br />anak-anakku dengan
            <br />perkembangan dunia
            <br />sekarang!
            <br />- Margaret James
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <a className="testi-img">
            <img src="elements/testi4.png" />
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="testi-text">
            <b>ManjoBlajar</b>
            <br />membuatku bisa
            <br />belajar tanpa
            <br />memperdulikan
            <br />usiaku!
            <br />- Sam Wilson
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="kontak" id="kontak">
    <p className="kon-head font-weight-bold">Kontak</p>
    <p className="kon-subhead">Hubungi Kami</p>
    <a className="kon-line">
      <img src="elements/underline-kontak.png"  />
    </a>
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="kon-inf-left">
            <b><span>Address</span></b>
            <br />Aermadidi, Indonesia
          </p>
          <p className="kon-inf-left">
            <b><span>Email</span></b>
            <br />njoblajar@dummymail.com
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <p className="kon-inf-right"><b>Message Us!</b></p>
          <form>
            <div className="form-row">
              <div className="col-lg-6 col-sm-6 kon-form-upper">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-lg-6 col-sm-6 kon-form-upper-2">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
            </div>
          </form>
          <form>
            <div className="form-group kon-form-lower">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group kon-form-lower-2">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Message" defaultValue={""} />
            </div>
          </form>
          <a>
            <button className="button kon-button font-weight-bold">Submit</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
}
 
export default App;
