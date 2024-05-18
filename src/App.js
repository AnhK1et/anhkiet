import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./assets/images/logo.webp";
import Slider1 from "./components/Slider.jsx";
import product1 from "./assets/images/slider_lg_1.webp";
import ChinhSachItem from "./components/ChinhSachItem.jsx";
import Database from "./data_fake.json";
import Product from "./components/Product.jsx";
import {
  FaSearch,
  FaRegUser,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiBellRingingFill } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";

function App() {
  const listproduct = Database.products;
  return (
    <>
      {/* header */}
      <header className="bg-white">
        <div className="container">
          <div className="row">
            {/* logo */}
            <div className="col-md-3">
              <img src={Logo} alt="logo" />
            </div>
            {/* menu */}
            <div className="col-md-7">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Trang chủ
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Về chúng tôi
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          sale
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          sản phẩm
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              product 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              product 2
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              product 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            {/* icon header */}
            <div className="col-md-2">
              <FaSearch />
              <FaRegUser />
              <PiBellRingingFill />
              <CiHeart />
              <BsHandbag />
            </div>
          </div>
        </div>
      </header>
      {/* main */}
      <main>
        {/* //slide động */}
        <Slider1 />
        {/* sản phẩm */}
        <div className="ChinhSach">
          <div className="row">
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển 1"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển 2"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển 3"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển 4"
                des="Cho đơn hàng từ 500k"
              />
            </div>
          </div>
        </div>
        <div className="section_flash_sale">
          <div className="container">
            <div className="row">
              {listproduct.map((pt, index) => {
                return (
                  <div className="col-md" key={index}>
                    <Product product={pt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="list_product">
          <div class="container">
            <h1>Danh sách sản phẩm</h1>
            <div class="row">
              <div class="col">
                <div class="card">
                  <img src={product1} class="card-img-top" alt="Sản phẩm 1" />
                  <div class="card-body">
                    <h5 class="card-title">Sản phẩm 1</h5>
                    <p class="card-text">Mô tả sản phẩm 1</p>
                    <p class="card-text">Giá: 100.000 VNĐ</p>
                    <a href="#" class="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={product1} class="card-img-top" alt="Sản phẩm 2" />
                  <div class="card-body">
                    <h5 class="card-title">Sản phẩm 2</h5>
                    <p class="card-text">Mô tả sản phẩm 2</p>
                    <p class="card-text">Giá: 100.000 VNĐ</p>
                    <a href="#" class="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={product1} class="card-img-top" alt="Sản phẩm 3" />
                  <div class="card-body">
                    <h5 class="card-title">Sản phẩm 3</h5>
                    <p class="card-text">Mô tả sản phẩm 3</p>
                    <p class="card-text">Giá: 100.000 VNĐ</p>
                    <a href="#" class="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={product1} class="card-img-top" alt="Sản phẩm 4" />
                  <div class="card-body">
                    <h5 class="card-title">Sản phẩm 4</h5>
                    <p class="card-text">Mô tả sản phẩm 4</p>
                    <p class="card-text">Giá: 100.000 VNĐ</p>
                    <a href="#" class="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={product1} class="card-img-top" alt="Sản phẩm 5" />
                  <div class="card-body">
                    <h5 class="card-title">Sản phẩm 5</h5>
                    <p class="card-text">Mô tả sản phẩm 5</p>
                    <p class="card-text">Giá: 100.000 VNĐ</p>
                    <a href="#" class="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* footer */}
      <footer class="footer mt-5 bg-dark text-light">
        <div class="container">
          <div class="row">
            {/* giới thiệu */}
            <div class="col-md-4">
              <h5>Giới thiệu</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
            {/* chính sách */}
            <div class="col-md-4">
              <h5>Chính Sách</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Chính sách thành viên</a>
                </li>
                <li>
                  <a href="#">Chính sách vận chuyển</a>
                </li>
                <li>
                  <a href="#">Chăm sóc khách hàng</a>
                </li>
                <li>
                  <a href="#">Phương thức thanh toán</a>
                </li>
                <li>
                  <a href="#">Đổi trả/Bảo hành</a>
                </li>
              </ul>
            </div>
            {/* liên kết */}
            <div class="col-md-4">
              <h5>Liên kết</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            {/* liên hệ */}
            <div class="col-md-4">
              <h5>Liên hệ</h5>
              <p>Địa chỉ: 123 Main Street, Ho Chi Minh City, Vietnam</p>
              <p>Email: dcao59995@gmail.com</p>
              <p>Điện thoại: 0383958932</p>
            </div>
          </div>
          {/* icon mạng xã hội */}
          <div class="row mt-3">
            <div class="col text-center">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-Google">
                      <FaGoogle />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-Youtobe">
                      <FaYoutube />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* note footer */}
          <div class="row mt-3">
            <div class="col text-center">
              <p class="mb-0">
                Copyright © 2024 <a href="#">SID</a>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
