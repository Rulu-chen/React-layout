import Section from '@/components/layout/section'
import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/common/search-bar'
// 用在分頁的icon
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'

export default function Nightmarket() {
  return (
    <>
      <Section>
        <h1>AAAAAAA</h1>
        {/* <Image src="/images/layout/icons.png" alt="" width={500} height={500} /> */}
        <SearchBar />

        {/* 按鈕 */}
        <>
          <h3>==主要用這三個按鈕==</h3>
          <button type="button" className="btn btn-primary">
            加入購物車
          </button>
          <button type="button" className="btn btn-outline-primary">
            加入購物車
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <h1>=======</h1>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>

          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </>

        <>
          <button type="button" className="btn btn-outline-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-outline-success">
            Success
          </button>
          <button type="button" className="btn btn-outline-danger">
            Danger
          </button>
          <button type="button" className="btn btn-outline-warning">
            Warning
          </button>
          <button type="button" className="btn btn-outline-info">
            Info
          </button>
          <button type="button" className="btn btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>
        </>

        {/* 分頁 */}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <div className="page-pre">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="First">
                  <span aria-hidden="true">
                    <FaAngleDoubleLeft />
                  </span>
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <FaAngleLeft />
                  </span>
                </a>
              </li>
            </div>
            <div className="page-number">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
            </div>
            <div className="page-next">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <FaAngleRight />
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="End">
                  <span aria-hidden="true">
                    <FaAngleDoubleRight />
                  </span>
                </a>
              </li>
            </div>
          </ul>
        </nav>

        {/* 表單 */}
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control is-invalid"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text invalid-feedback">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control is-valid"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* 輸入框 */}
        <>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={''}
            />
          </div>
        </>

        {/* 下拉選擇 */}
        <select className="form-select" aria-label="Default select example">
          <option selected="">Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>

        {/* 選取 */}
        <>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </>
      </Section>
    </>
  )
}
